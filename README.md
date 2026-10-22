# Narwhal API for TypeScript

A typed server-side client for economic indicators, foreign exchange, calendars,
physical palm oil prices, physical commodity reference prices, spot gold and silver, prediction markets, FX and commodity bar history, and webhook delivery. Decimal values retain their exact wire text.

```sh
npm install narwhalapi
```

Published as ES modules. Requires Node 22 or later; Node 22.12+ and 24 also
support `require("narwhalapi")`. The runtime has no dependencies and
uses standard `fetch` and Web Crypto APIs. Bun, Deno and Workers can use the same
modules; pass credentials explicitly when environment access is unavailable or denied.
Never put an API key in browser code.

Export `NARWHAL_API_KEY` in your server environment, then:

```ts
import { Narwhal } from "narwhalapi";

const nw = new Narwhal();
const cpi = await nw.economics.cpi("USA");
console.log(cpi.value); // Decimal: an exact string, including its scale
console.log(cpi.meta.request_id);
console.log(cpi.meta.quota?.remaining);

const rates = await nw.fx.rates("USD", { currencies: ["IDR", "SGD"] });
console.log(rates.rates[0]?.rate);

for await (const day of nw.fx.rateHistoryIter("USD", {
  currencies: ["EUR"],
  start_date: "2026-08-20",
  end_date: "2026-08-24",
})) {
  console.log(day.date, day.rates[0]?.rate);
}
```

Required path parameters are positional. Query and body fields go in the options
object and keep their wire names, such as `start_date`, `from`, and `enabled`.
Methods and namespaces use camel case. Dot-only path parameters (`"."` or `".."`)
raise `TypeError` before any HTTP request.

```ts
const converted = await nw.fx.convertCurrency({
  from: "USD",
  to: "IDR",
  amount: "100.00",
});
console.log(converted.converted);
```

`Decimal` is a branded string type. Decimal inputs accept strings or values already
typed as `Decimal`; numeric inputs are rejected. Dates and timestamps also remain
strings. Optional response fields map both absent and `null` to `undefined`.
Unknown enum values remain strings. Unknown fields are ignored.

Palm oil unions discriminate on `kind`. Known values use the exact model name,
for example `PalmoilMarketPrice`; `kind === "unknown"` retains the future variant
in `raw`, with JSON numbers retained as exact source strings. Non-enumerable
`raw_body` holds the original response bytes, including for nested unknown variants.
Only top-level responses carry `meta`. Observation variants inherit their enclosing page's tags.

```ts
const price = await nw.commodities.palmoilPhysicalPrice("your-series-id");
if (price.kind === "unknown") {
  console.log(price.raw);
} else if (price.kind === "PalmoilMarketPrice") {
  console.log(price.price);
}
```

`meta` is non-enumerable, so it stays out of JSON serialization. Its optional
`request_id`, `quota`, and `short` fields come from response headers. Rate limits
expose optional `limit`, `remaining`, and `reset`; reset timestamps retain their
original ISO-8601 text.

Configure a client with `new Narwhal({ apiKey, baseUrl, timeout, maxRetries,
maxRetryWait, extraHeaders, signal })`. `baseUrl` defaults to `NARWHAL_BASE_URL`, then
`https://api.narwhalapi.com`. Timeout and wait values are in seconds. Each attempt
has a 30-second total deadline, including response body reads. Native fetch on
Node 22 and 24 also has a 10-second connection deadline. Clients can be
shared across concurrent calls and require no close operation. `fetch`, `clock`,
`sleep`, and `randomFraction` can be supplied for transport customization and tests.
The clock returns monotonic seconds and sleep accepts seconds.

By default a request has at most two retries. Short-window 429 responses are
retried for any method. GET requests also retry 503 and transport failures before
a response starts. Monthly quota exhaustion is returned immediately. `Retry-After`
is honored up to `maxRetryWait` (30 seconds); longer waits raise the error.
Otherwise retries use exponential backoff with full jitter. Set `maxRetries: 0`
to disable retries. Redirects are returned as errors.

Pass `signal: controller.signal` in the client options or any method's options to
cancel. Either signal applies when both are supplied. Cancellation aborts the
in-flight request, interrupts retry waits and stops pagination. It raises an
`AbortError` (`error.name === "AbortError"`) and is never retried. A signal that
is already aborted makes no HTTP request.

```ts
const controller = new AbortController();
const pending = nw.fx.rates("USD", { signal: controller.signal });
controller.abort();
await pending; // Rejects with AbortError
```

```ts
import { RateLimited, ApiError, DecodeError, TransportError } from "narwhalapi";

try {
  await nw.fx.rates("USD");
} catch (error) {
  if (error instanceof RateLimited && error.is_quota_exhausted) {
    console.log("Monthly quota exhausted");
  } else if (error instanceof ApiError) {
    console.log(error.status, error.code, error.title, error.request_id);
  } else if (error instanceof DecodeError) {
    console.log(error.raw_body); // Original Uint8Array response bytes
  } else if (error instanceof TransportError) {
    console.log(error.message);
  } else {
    throw error;
  }
}
```

HTTP, transport, decode, cancellation and verification errors extend `NarwhalError`. Invalid
arguments raise `TypeError`. HTTP subclasses include `BadRequest`,
`Unauthorized`, `NotFound`, `ServiceUnavailable`, `RateLimited`, and `CursorExpired`.
`ApiError` also carries `detail`, `instance`, `retry_after`, and `raw_body`.
`TransportError.cause` preserves the underlying failure. Known public error code
constants are available from `import { codes } from "narwhalapi"`; error codes
remain open strings.

Each paginated method returns one page. Its `Iter` companion yields items lazily
and retains filters across pages. `limit` is the page size. An absent or null
cursor ends iteration. `CursorExpired` is raised without restarting the query.

Delivery operations cover webhooks, events and calendar subscriptions:

```ts
const destination = await nw.webhooks.createDestination({
  url: "https://example.test/webhooks",
  countries: ["IDN"],
  families: ["prices"],
});
const feedUrl = nw.calendarSubscriptions.feedUrl("your-feed-token");
```

`updateDestination(id, options)` replaces the full configuration. Supply `url`,
`countries`, `families`, and `enabled` every time. On creation, omitted fields
stay omitted. `feedUrl` only constructs a URL and makes no request.

Verify each webhook over the **exact raw bytes**, before JSON parsing. Pass one secret or a list during rotation.
Empty secret lists or empty-string secrets are rejected. The default timestamp
tolerance is 300 seconds; override it with `{ toleranceSeconds, now }` as the fourth
argument. `now` is Unix seconds. Use `event_id` as the idempotency key: persist it
and skip events already processed. Verification authenticates the body; it does
not deduplicate deliveries.

With Express, register the raw handler before any JSON middleware:

```ts
import express from "express";
import { verifyWebhook } from "narwhalapi/webhooks";

const app = express();
app.post("/webhooks", express.raw({ type: "application/json" }), async (req, res) => {
  try {
    const event = await verifyWebhook(req.body, req.headers, process.env.NARWHAL_WEBHOOK_SECRET!);
    // Persist event.event_id before applying each event once.
    res.sendStatus(204);
  } catch {
    res.sendStatus(400);
  }
});
```

In a Worker:

```ts
import { verifyWebhook } from "narwhalapi/webhooks";

export default {
  async fetch(request: Request, env: { NARWHAL_WEBHOOK_SECRET: string }) {
    try {
      const raw = await request.arrayBuffer();
      const event = await verifyWebhook(raw, request.headers, env.NARWHAL_WEBHOOK_SECRET);
      // Persist event.event_id before applying each event once.
      return new Response(null, { status: 204 });
    } catch {
      return new Response(null, { status: 400 });
    }
  },
};
```

Verification uses only Web Crypto. `WebhookVerificationError.reason` is one of
`missing_header`, `bad_timestamp`, `timestamp_out_of_range`,
`no_matching_signature`, or `invalid_body`. Future `schema_version` strings are
accepted. Pass a `Uint8Array` (including Node buffers) or `ArrayBuffer`; strings
are rejected. Headers may be a `Headers` object, Node/Express `req.headers`, or
an array of pairs. Array header values are comma-joined; undefined values are absent.

## Links

- https://narwhalapi.com/
- https://narwhalapi.com/docs
- https://narwhalapi.com/pricing
- https://narwhalapi.com/compare/economic-data-apis
- https://narwhalapi.com/commodities/gold
- https://narwhalapi.com/economics/united-states

MIT licensed. [Narwhal API](https://narwhalapi.com).

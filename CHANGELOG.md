# Changelog

## 0.3.0 — 2026-10-18

- Breaking: `verifyWebhook` now returns a `WebhookEvent`, read from the delivery bodies the API
  documents. 0.2.0 read deliveries as the REST `DeliveryEvent`, which needs an `event_type`
  field that webhook bodies never carry, so it rejected real deliveries with `invalid_body`.
  `WebhookEvent` reads economics, release calendar and holiday events, prediction events
  (`prediction`, with the event status and venue settlements) and test deliveries (`is_test`,
  no `cursor`). Unknown event types still decode, with the type kept as a string.
- `economics.readSeriesObservations(series_id, { ... })` reads the observations of one economic
  series by its id, with a page iterator (`readSeriesObservationsIter`).
- Prediction history (`binaryHistory`, `scalarHistory`, `extremeHistory`, `timingHistory`) now
  comes in pages of about 5,000 bars with a `next_cursor`. Pass `cursor`, or use the new
  `…Iter` iterators, to read a whole window; each page repeats the series keys with the next
  slice of bars. The API pages these responses for every version, so 0.2.0 sees only the first
  page of a wide window.
- Webhook destinations carry `disabled_reason`: `customer` (switched off by the account),
  `plan_limit` (paused because the plan no longer includes it) or none.
- New code constants for the documented errors: `SNAPSHOT_UNAVAILABLE`, `REQUEST_TOO_LARGE`,
  `RIGHTS_STATE_CHANGING`, `COMMAND_UNAVAILABLE`, `PHYSICAL_SERIES_NOT_FOUND`,
  `PHYSICAL_REFERENCE_UNAVAILABLE`, `EVENT_NOT_FOUND`, `PREDICTIONS_UNAVAILABLE` and
  `LIMIT_REACHED`.
- No change on the wire: the contract now names the palm oil price unions and the shared
  problem response, and documents `400` instead of `422` for webhook and calendar subscription
  validation errors, which is what the API always returned.

## 0.2.0 — 2026-10-12

- Breaking: economic calendar releases now carry Narwhal's English `name`, a permanent
  `series_id`, a `topic` and a `stage` beside the publisher's `title`, and each schedule
  carries its `local_date`. The API lists releases compactly by default; the SDK always asks
  for the full release (`view=full`), so every field stays typed. Research articles are no
  longer listed.
- `CALENDAR_NOT_PUBLISHED` for the 404 returned when a holiday calendar year is not published.
- FX bars publish their five fields again in the contract (no wire change).

## 0.1.1 — 2026-10-09

- Republishes 0.1.0 with no code changes so the package is published by the Narwhal API Team account.

## 0.1.0 — 2026-10-09

- Initial typed client, exact decimal strings, response metadata, retries and pagination.
- Stable economics, FX, calendars, physical palm oil, spot price
  (`commodities.spotPrice`), events, calendar subscriptions and webhook operations.
- `nw.unstable` holds operations not yet in the live API; it is empty in this release.
- Local webhook verification through Web Crypto.
- `codes.PLAN_UPGRADE_REQUIRED` for the 403 returned when a request reaches before the
  plan's history window.
- The release also covers prediction market reads, FX and commodity bar history, and physical commodity reference price series.
- Spot `bid` and `ask` are optional because the API may omit them.

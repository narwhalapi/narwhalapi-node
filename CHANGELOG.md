# Changelog

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

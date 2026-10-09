# Changelog

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

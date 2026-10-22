# Changelog

## 0.4.0 — 2026-10-22

Breaking: 0.3.x fails on calls changed by the API contracts of 21-22 October 2026.
Upgrade to 0.4.0 for these calls. 0.4.0 fails against gateways using the old response
formats. Fields the API omits when empty are now optional (`undefined`). Lists are always present.

- Trade: the four separate export and import methods are removed (`economics.tradeExports`,
  `tradeExportsHistory`, `tradeImports`, `tradeImportsHistory`). Their routes no longer exist.
  `economics.trade` and `economics.tradeHistory` return exports and imports in one row. The
  models `TradeExports`, `TradeImports` and `TradeProductFilter` are removed, and
  `TradeSummary` has no `coverage`.
  Migrate: call the combined methods and read `exports` and `imports` from the row.
- Economics series: `Cpi` has an `index_base` string instead of `base_period` and
  `base_value`. `Inflation`, `Unemployment` and `LabourForceParticipation` have no `unit`.
  `SeriesSource` has no `released_on_basis`.
  Migrate: read `index_base`; drop reads of `unit`.
- GDP: `Gdp` drops `seasonal_adjustment`, `annualization` and `price_basis`. `GdpGrowth` drops
  `seasonal_adjustment`, `quarter_over_quarter_seasonal_adjustment`,
  `year_over_year_seasonal_adjustment`, `annualization`, `price_basis` and `unit`. The
  optional flags `annualized` and `not_seasonally_adjusted` (and, on growth,
  `quarter_over_quarter_not_seasonally_adjusted` and `year_over_year_not_seasonally_adjusted`)
  are present only when true.
  Migrate: treat a missing flag as false.
- Economics history: `HistoricalEconomicsResponse` and `HistoricalObservation` are removed.
  Each indicator has its own response type (`CpiHistory`, `GdpHistory`, `GdpGrowthHistory`,
  `InflationHistory`, `RateHistory`, `TradeHistory`) with matching `...Observation` rows.
  Rows contain only `period` and `value` (trade rows hold `exports` and `imports`).
  Migrate: use the new response and observation types.
- Economic calendar: `EconomicRelease` is replaced by `EconomicReleaseSummary` (lists) and
  `EconomicReleaseDetail` (`economics.getRelease`). `indicators` is now `values`
  (`EconomicReleaseValue`). The `EconomicReleaseIndicator` and `EconomicReleaseSchedule`
  models are removed. The schedule now uses the flat fields `at`, `date`, `between` and `by`.
  `reference_period` is renamed to `period`. `title`, `variant` and `officially_published_at`
  are removed. `EconomicCalendar` has no `as_of`, `snapshot` or `status`. `between` is a list
  of two dates.
  Migrate: read the flat schedule fields and `values`.
- Holidays: `CalendarHolidays.year`, `CalendarHolidaysOnDate.date`,
  `CalendarNextHoliday.from_date`, `nationwide` (on coverage and holidays) and
  `TopicCalendar.variant` are removed.
  Migrate: use the values from your request.
- FX and commodities: `FxConversion` has no `amount`. `FxHistory` has no `has_more`; its
  `start_date` and `end_date` are optional. `FxBars` and `CommodityBars` have no `interval`,
  and `start` and `end` appear only when the range was clipped. `Quote.role` is removed.
  `PhysicalSeries` has `country` and no `market` or `publisher`; its list call has no `market`
  parameter. `attribution` is now required on `PhysicalSeries`, `PhysicalLatest` and
  `PhysicalObservations`.
  Migrate: use the amount you sent; filter series by country.
- Palm oil: `PalmoilScalarSeries.commodity`, `PalmoilScheduleSeries.commodity` and
  `PalmoilScheduleSeries.producer_type` are removed.
  Migrate: remove reads of these fields.
- Prediction event fields: events no longer have `body`, `quality` or `shape`. The models
  `BinaryBody`, `ScalarBody`, `ExtremeBody`, `TimingBody`, `PredictionQuality`,
  `PredictionResolution`, `ScalarSummary` and `ScalarSummaryBounds` are removed. Each event
  type carries its own fields: binary `probability`, `quotes`, `labels`; scalar `median`,
  `p10`, `p90`, `above`, `outcomes`; extreme `up`, `down`, `observation`, `window`; timing
  `steps`, `not_within_window`. All have `resolves_with` and `stale`. `resolution` is now a
  plain string instead of an object with `description` and `resolves_with`.
  Migrate: read event fields directly; use `resolves_with` for `resolution.resolves_with`.
- Prediction venues, lists and history: `PredictionVenue` has no `role`, `venue_event_id`,
  `depth_usd` or `fetched_at`. `settlement` is now an optional string instead of an object
  with `status`. The `VenueSettlement` model is removed. `match` is optional.
  `PredictionEventSummary` has no `as_of`. `PredictionTopicDetail.events` is a list of the new
  `PredictionTopicEvent` (no `topic_id` or `shape`). `next_event_id` is removed.
  `PredictionHistory` has no `event_id`, `shape`, `interval`, `start` or `captured_from`, and
  `end` is optional. `PredictionBar` has `timestamp` instead of `start` and `end`.
  `PolicyPath` and `PolicyPathHistory` have no `authority`, `method` or `unit`; the history
  has `meeting_dates` (`PolicyPathMeetingDate`), and `PolicyPathDay.meetings` is a list of the
  new `PolicyPathOdds` (no `resolves_at`). `PredictionWebhookEvent.event_id` is
  `prediction_event_id`.
  Migrate: use the new types and read the settlement string directly.
- Prediction results: events and event summaries now include `result` (`PredictionResult`)
  with `final`, `settled_at`, `amended_at` and the settled `markets` for each venue.
  `unavailable` is sent for each venue only when true.
  Migrate: read results from events or event summaries.
- Events and webhooks: `EventDetail` is now the event itself, with no `event` wrapper or
  `status`. `EventsPage` has no `status`. `DeliveryEvent` has no `event_type`,
  `schema_version`, `publication_id` or `holiday_country`. `WebhookEvent` has no `is_test`,
  `publication_id` or `holiday_country`. Test deliveries use the event type `webhook.test`.
  The webhook verifier accepts both new bodies with null fields omitted and old bodies. For
  old prediction bodies whose market is named `event_id`, it fills `prediction_event_id`.
  Migrate: read event fields directly; check `type` instead of `is_test`.
- Webhook records: `WebhookConfigurationHistory` renames `version` to `config_version` and
  removes `destination_id` and `activation_snapshot`. `WebhookDestinationList.limit` is renamed
  to `destination_limit`. `WebhookDeliveriesResponse` has no `limit`.
  `WebhookDelivery.next_attempt_at`, `retry_until` and `replays` are optional.
  `WebhookTestResponse` has no `destination_id`. `CalendarSubscriptionCreated` has no
  `refresh_note`.
  Migrate: rename the fields; handle missing values.
- No-content responses: `webhooks.deleteDestination`, `webhooks.replayDelivery` and
  `calendarSubscriptions.revoke` respond with `204` and return an empty `NoContent` object.
  The models `WebhookDeleteResponse`, `WebhookReplayResponse` and
  `CalendarSubscriptionRevoked` are removed.
  Migrate: stop reading `deleted`, `replayed` and `revoked`; success means no error.
- Errors: `Problem` has no `instance` or `ok`.
  Migrate: remove reads of these fields.
- Calendar `view`: the SDK no longer offers or sends this parameter. The API ignores it. Lists
  always contain the full release.
  Migrate: no changes needed.
- Enums removed with their fields: `Annualization`, `CentralBank`,
  `GrowthSeasonalAdjustment`, `IndicatorValueStatus`, `PredictionInterval`, `QuoteFreshness`,
  `QuoteRole`, `SchedulePrecision`, `ScheduleTimeBasis`, `SeasonalAdjustment`, `ValueScale`,
  `ValueTransformation`. New: `EconomicReleaseValueValueStatus`, `PredictionVenueSettlement`,
  `ScalarEventAbove`.
  Migrate: remove references to the removed enums.
- README lists the product's key pages as full URLs.

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

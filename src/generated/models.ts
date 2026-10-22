// Generated from spec/live/openapi.json sha256 ba06d620d3f1f03774f3f30363a59e00f14ab7cde053c552d2164ad83a9ea678. Do not edit.
// Generated from spec/next/openapi.json sha256 ba06d620d3f1f03774f3f30363a59e00f14ab7cde053c552d2164ad83a9ea678. Do not edit.
import type { Decimal } from "../decode.js";
import type { ResponseMeta } from "../meta.js";
export type BarInterval =
  | "15m"
  | "1d"
  | "1h"
  | "1m"
  | "4h"
  | "5m"
  | (string & {});
export type CommodityUnit = "barrel" | "pound" | "troy_ounce" | (string & {});
export type DeliveryFamily =
  | "activity"
  | "gdp"
  | "holidays"
  | "housing"
  | "labour"
  | "money"
  | "policy_rate"
  | "prices"
  | "public_finance"
  | "survey"
  | "trade"
  | "yield_curve"
  | (string & {});
export type EconomicFamily =
  | "activity"
  | "gdp"
  | "housing"
  | "labour"
  | "money"
  | "policy_rate"
  | "prices"
  | "public_finance"
  | "survey"
  | "trade"
  | "yield_curve"
  | (string & {});
export type EconomicReleaseValueValueStatus =
  | "pending_capture"
  | "unavailable"
  | (string & {});
export type ExtremeObservation =
  | "any_release"
  | "any_trade"
  | "close"
  | (string & {});
export type HolidayScope =
  | "bank"
  | "central_government"
  | "collective_leave"
  | "federal_government"
  | "national_public"
  | "private_sector"
  | "public_sector"
  | "regional_public"
  | (string & {});
export type IndicatorUnit =
  | "balance"
  | "currency"
  | "index"
  | "percent"
  | "ratio"
  | "thousands"
  | (string & {});
export type MarketSession =
  | "interbank_closed"
  | "open"
  | "weekend"
  | (string & {});
export type PalmoilFrequency =
  | "daily"
  | "fortnightly"
  | "irregular"
  | "monthly"
  | "weekly"
  | (string & {});
export type PalmoilPeriodType = "effective" | "observation" | (string & {});
export type PalmoilPriceType =
  | "government_reference"
  | "market_average"
  | "official_purchase_schedule"
  | (string & {});
export type PalmoilProduct = "cpo" | "ffb" | (string & {});
export type PalmoilScalarPriceType =
  | "government_reference"
  | "market_average"
  | (string & {});
export type PalmoilScalarUnit =
  | "metric_ton"
  | "one_percent_oer"
  | (string & {});
export type PhysicalCategory =
  | "emissions"
  | "energy"
  | "fertilizers"
  | "forestry"
  | "grains"
  | "livestock-dairy"
  | "metals"
  | "oils-oilseeds"
  | "softs"
  | (string & {});
export type PhysicalFrequency =
  | "annual"
  | "daily"
  | "intraday"
  | "irregular"
  | "monthly"
  | "quarterly"
  | "semiannual"
  | "three_times_monthly"
  | "twice_monthly"
  | "weekly"
  | (string & {});
export type PhysicalPriceType =
  | "auction_clearing"
  | "export_unit_value"
  | "farmgate_average"
  | "government_reference"
  | "import_unit_value"
  | "international_benchmark"
  | "market_average"
  | "official_buy"
  | "official_reference_rate"
  | "official_sell"
  | "regulated_average"
  | "retail_average"
  | "retail_buy"
  | "retail_sell"
  | "wholesale_average"
  | (string & {});
export type PredictionEventStatus =
  | "closed"
  | "settled"
  | "trading"
  | "upcoming"
  | "void"
  | (string & {});
export type PredictionShape =
  | "binary"
  | "categorical"
  | "extreme"
  | "scalar"
  | "set"
  | "timing"
  | (string & {});
export type PredictionVenueSettlement = "settled" | "void" | (string & {});
export type PredictionWebhookStatus =
  | "closed"
  | "settled"
  | "void"
  | (string & {});
export type ProducerArrangement =
  | "purchase_agreement"
  | "supported_scheme"
  | (string & {});
export type ReleaseStage =
  | "advance"
  | "final"
  | "first"
  | "flash"
  | "preliminary"
  | "second"
  | "third"
  | (string & {});
export type ReleaseStatus =
  | "cancelled"
  | "published"
  | "scheduled"
  | (string & {});
export type ReleaseTopic =
  | "balance_of_payments"
  | "business_confidence"
  | "construction"
  | "consumer_confidence"
  | "consumer_prices"
  | "employment"
  | "energy"
  | "gdp"
  | "home_sales"
  | "house_prices"
  | "household_spending"
  | "housing_construction"
  | "import_export_prices"
  | "industrial_production"
  | "investment"
  | "jobless_claims"
  | "labour_force"
  | "manufacturing"
  | "merchandise_trade"
  | "money_credit"
  | "other"
  | "policy_communication"
  | "policy_minutes"
  | "policy_rate"
  | "producer_prices"
  | "public_finance"
  | "retail_sales"
  | "services"
  | "tourism"
  | "wages"
  | "wholesale_trade"
  | (string & {});
export type ResolutionKind =
  | "occurrence"
  | "price_fix"
  | "price_window"
  | "release"
  | (string & {});
export type ResourceObservationStatus =
  | "break_in_series"
  | "break_in_series_and_definition_differs"
  | "definition_differs"
  | "estimated"
  | "provisional"
  | (string & {});
export type ResourceUnit =
  | "currency"
  | "currency_per_hour"
  | "currency_per_month"
  | "currency_per_week"
  | "currency_per_year"
  | "index"
  | "job"
  | "percent"
  | "person"
  | (string & {});
export type ScalarEventAbove = "median" | "p10" | "p90" | (string & {});
export type SettlementStatus =
  | "disputed"
  | "pending"
  | "settled"
  | "void"
  | (string & {});
export type TimingStepKind = "date" | "meeting" | (string & {});
export type TopicGroup =
  | "central_banks"
  | "energy"
  | "global_activity"
  | "global_prices"
  | "metals"
  | "us_activity"
  | "us_jobs"
  | "us_prices"
  | (string & {});
export type Venue = "kalshi" | "polymarket" | (string & {});
export type VenueDifference =
  | "outcome_set"
  | "rules"
  | "source"
  | "timing"
  | (string & {});
export type VenueExclusionReason =
  | "outcome_set"
  | "rules"
  | "source"
  | "stale"
  | "thin"
  | "timing"
  | (string & {});
export type WebhookDeliveryState =
  | "cancelled"
  | "failed"
  | "leased"
  | "pending"
  | "succeeded"
  | (string & {});
export type WebhookDisabledReason = "customer" | "plan_limit" | (string & {});
export type WebhookEventType =
  | "dataset.published"
  | "dataset.revised"
  | "holiday.calendar.revised"
  | "prediction.event.closed"
  | "prediction.event.settled"
  | "release.cancelled"
  | "release.rescheduled"
  | "release.scheduled"
  | "release.updated"
  | "webhook.test"
  | "yield_curve.published"
  | "yield_curve.revised"
  | (string & {});
export type WebhookFamily =
  | "activity"
  | "gdp"
  | "holidays"
  | "housing"
  | "labour"
  | "money"
  | "policy_rate"
  | "predictions"
  | "prices"
  | "public_finance"
  | "survey"
  | "trade"
  | "yield_curve"
  | (string & {});
export type WebhookTestStatus =
  | "disabled"
  | "queued"
  | "rate_limited"
  | (string & {});
export type YieldCurveType =
  | "constant_maturity_ytm"
  | "nominal_par"
  | "nominal_zero_coupon"
  | "spot_svensson"
  | "zero_coupon"
  | (string & {});
export interface BinaryEvent {
  /** When the venues were last checked. */
  as_of?: string;
  closes_at?: string;
  event_id: string;
  /** Sent only when not Yes and No. */
  labels?: BinaryLabels;
  probability?: string;
  question: string;
  quotes: Array<Quote>;
  /** Economic calendar release this market resolves on, only when Narwhal publishes that release. */
  release_id?: string;
  resolution: string;
  resolves_at?: string;
  /** Narwhal endpoint that publishes the official value; not part of this API. */
  resolves_with?: string;
  /** The venues' results with each market's outcome, on settled and void events once this plan may see them: Free from the next day, Basic and Pro at once. */
  result?: PredictionResult;
  /** Sent on upcoming, trading and closed events. On upcoming and trading events, true after more than 3 minutes without a venue check or when the stored snapshot was already stale. On those events, more than 30 minutes without a venue check or a missing check time means no_live_quotes. A stored no_live_quotes snapshot also applies to closed events. With no_live_quotes, no probabilities are sent, every `quotes` list is empty and every venue is excluded. The exclusion reason is stale unless the venue already has another reason. Closed events are stale only when their stored snapshot was already stale; elapsed time never makes them stale. Do not trade on stale events. Absent on settled and void events. */
  stale?: boolean;
  status: PredictionEventStatus;
  topic_id: string;
  /** Combined unit text such as usd_per_barrel. */
  unit?: string;
  venues: Array<PredictionVenue>;
  readonly meta: ResponseMeta;
}
export interface BinaryLabels {
  no: string;
  yes: string;
}
export interface CalendarCoverage {
  scope: HolidayScope;
  subdivision_codes?: Array<string>;
}
export interface CalendarHoliday {
  date: string;
  local_name?: string;
  name: string;
  observed?: boolean;
  scope: HolidayScope;
  subdivision_codes?: Array<string>;
}
export interface CalendarHolidays {
  country: string;
  coverage: Array<CalendarCoverage>;
  holidays: Array<CalendarHoliday>;
  readonly meta: ResponseMeta;
}
export interface CalendarHolidaysOnDate {
  country: string;
  coverage: Array<CalendarCoverage>;
  holidays: Array<CalendarHoliday>;
  readonly meta: ResponseMeta;
}
export interface CalendarNextHoliday {
  country: string;
  coverage: Array<CalendarCoverage>;
  holiday?: CalendarHoliday;
  readonly meta: ResponseMeta;
}
export interface CalendarSubscriptionCreated {
  expires_at: string;
  subscription_id: string;
  url: string;
  readonly meta: ResponseMeta;
}
export interface CalendarSubscriptionInput {
  countries: Array<string>;
  end_date: string;
  families?: Array<EconomicFamily>;
  include_holidays?: boolean;
  include_releases?: boolean;
  scope?: string;
  start_date: string;
}
export interface CommodityBar {
  close: Decimal;
  high?: Decimal;
  low?: Decimal;
  open?: Decimal;
  timestamp: string;
}
export interface CommodityBars {
  bars: Array<CommodityBar>;
  currency: string;
  /** Sent only when the plan cut the requested end: the exclusive end served. */
  end?: string;
  next_cursor?: string;
  /** Sent only when the plan raised the requested start: the first instant served. */
  start?: string;
  symbol: string;
  unit: CommodityUnit;
  readonly meta: ResponseMeta;
}
export interface CommodityOilPalmFfbAgePrice {
  price: Decimal;
  tree_age_max_years: number;
  tree_age_min_years: number;
}
export interface CommoditySpot {
  currency: string;
  price: Decimal;
  stale: boolean;
  symbol: string;
  timestamp: string;
  unit: CommodityUnit;
  readonly meta: ResponseMeta;
}
export interface Cpi {
  country: string;
  /** Base period and base value of the index, for example 1982-84=100. */
  index_base: string;
  period: string;
  released_on: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  value: Decimal;
  readonly meta: ResponseMeta;
}
export interface CpiHistory {
  /** When the source last updated the newest observation on this page. */
  as_of?: string;
  country: string;
  /** Base period and base value of the index, for example 1982-84=100. */
  index_base: string;
  next_cursor?: string;
  observations: Array<CpiHistoryObservation>;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  /** The start of the plan window, present only when the plan raised the requested start. Earlier periods are not served. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface CpiHistoryObservation {
  period: string;
  value: Decimal;
}
export interface DeliveryEvent {
  country: string;
  cursor: string;
  event_id: string;
  family: DeliveryFamily;
  /** Holiday events only. */
  holiday_generation?: number;
  /** Holiday events only. */
  holiday_year?: number;
  recorded_at: string;
  /** The release, on release events. */
  release_id?: string;
  /** The changed resource. Left out on release events, which carry `release_id`. */
  resource_id?: string;
  /** Version of the changed resource: the `version_id` used to read that version of the data. */
  resource_version?: string;
  type: string;
}
export interface EconomicCalendar {
  next_cursor?: string;
  releases: Array<EconomicReleaseSummary>;
  readonly meta: ResponseMeta;
}
export interface EconomicReleaseDetail {
  /** Exact release time, in UTC. */
  at?: string;
  /** Inclusive range of possible days. */
  between?: Array<string>;
  /** Latest possible release day. */
  by?: string;
  country: string;
  /** Release day when no time is set. */
  date?: string;
  family: EconomicFamily;
  name: string;
  /** Source terms the publisher requires with each access (for example the ECB). Show it with the release. */
  notice?: string;
  /** When Narwhal last observed the release in the publisher's calendar. */
  observed_at?: string;
  period?: string;
  release_id: string;
  /** Increases each time the release's details change; 0 when never revised. */
  revision: number;
  series_id?: string;
  stage?: ReleaseStage;
  status: ReleaseStatus;
  timezone?: string;
  topic?: ReleaseTopic;
  /** The published figures; always present, empty until publication. */
  values: Array<EconomicReleaseValue>;
  /** The immutable version of this release; pass it back as `version_id`. */
  version: string;
  readonly meta: ResponseMeta;
}
export interface EconomicReleaseSummary {
  /** Exact release time, in UTC. */
  at?: string;
  /** Inclusive range of possible days. */
  between?: Array<string>;
  /** Latest possible release day. */
  by?: string;
  country: string;
  /** Release day when no time is set. */
  date?: string;
  family: EconomicFamily;
  name: string;
  /** Source terms the publisher requires with each access (for example the ECB). Show it with the release. */
  notice?: string;
  period?: string;
  release_id: string;
  /** Increases each time the release's details change; 0 when never revised. */
  revision: number;
  series_id?: string;
  stage?: ReleaseStage;
  status: ReleaseStatus;
  timezone?: string;
  topic?: ReleaseTopic;
  /** The published figures; always present, empty until publication. */
  values: Array<EconomicReleaseValue>;
}
export interface EconomicReleaseValue {
  actual?: Decimal;
  /** True when the figure is at an annual rate; absent means not annualized. */
  annualized?: boolean;
  currency?: string;
  index_base?: string;
  measure: string;
  /** True when the figure is not seasonally adjusted; absent means adjusted. */
  not_seasonally_adjusted?: boolean;
  /** The period for this value, included only when it differs from the release's `period` (for example, continuing claims cover the week before). */
  period?: string;
  previous?: Decimal;
  /** The earlier figure for `previous`, when this release revised it. */
  previous_revised_from?: Decimal;
  scale?: string;
  /** How the figure is derived (for example `year_over_year`); absent for a level. */
  transformation?: string;
  unit: IndicatorUnit;
  /** Present only when `actual` is missing: `pending_capture` (published, not captured yet) or `unavailable` (published or cancelled without this figure). Absent otherwise. */
  value_status?: EconomicReleaseValueValueStatus;
}
export interface EventDetail {
  country: string;
  cursor: string;
  event_id: string;
  family: DeliveryFamily;
  /** Holiday events only. */
  holiday_generation?: number;
  /** Holiday events only. */
  holiday_year?: number;
  recorded_at: string;
  /** The release, on release events. */
  release_id?: string;
  /** The changed resource. Left out on release events, which carry `release_id`. */
  resource_id?: string;
  /** Version of the changed resource: the `version_id` used to read that version of the data. */
  resource_version?: string;
  type: string;
  readonly meta: ResponseMeta;
}
export interface EventsPage {
  cursor: string;
  events: Array<DeliveryEvent>;
  next_cursor?: string;
  readonly meta: ResponseMeta;
}
export interface ExtremeEvent {
  /** When the venues were last checked. */
  as_of?: string;
  closes_at?: string;
  down: Array<ExtremeLevel>;
  event_id: string;
  observation: ExtremeObservation;
  question: string;
  /** Economic calendar release this market resolves on, only when Narwhal publishes that release. */
  release_id?: string;
  resolution: string;
  resolves_at?: string;
  /** Narwhal endpoint that publishes the official value; not part of this API. */
  resolves_with?: string;
  /** The venues' results with each market's outcome, on settled and void events once this plan may see them: Free from the next day, Basic and Pro at once. */
  result?: PredictionResult;
  /** Sent on upcoming, trading and closed events. On upcoming and trading events, true after more than 3 minutes without a venue check or when the stored snapshot was already stale. On those events, more than 30 minutes without a venue check or a missing check time means no_live_quotes. A stored no_live_quotes snapshot also applies to closed events. With no_live_quotes, no probabilities are sent, every `quotes` list is empty and every venue is excluded. The exclusion reason is stale unless the venue already has another reason. Closed events are stale only when their stored snapshot was already stale; elapsed time never makes them stale. Do not trade on stale events. Absent on settled and void events. */
  stale?: boolean;
  status: PredictionEventStatus;
  topic_id: string;
  /** Combined unit text such as usd_per_barrel. */
  unit?: string;
  up: Array<ExtremeLevel>;
  venues: Array<PredictionVenue>;
  window: ExtremeWindow;
  readonly meta: ResponseMeta;
}
export interface ExtremeLevel {
  key: string;
  level: Decimal;
  probability?: string;
  quotes: Array<Quote>;
}
export interface ExtremeWindow {
  end: string;
  start: string;
}
export interface FxBar {
  close: string;
  high: string;
  low: string;
  open: string;
  timestamp: string;
}
export interface FxBars {
  bars: Array<FxBar>;
  base: string;
  currency: string;
  /** Sent only when the plan cut the requested end: the exclusive end served. */
  end?: string;
  next_cursor?: string;
  /** Sent only when the plan raised the requested start: the first instant served. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface FxConversion {
  converted: Decimal;
  from: string;
  market_session: MarketSession;
  rate: Decimal;
  stale: boolean;
  timestamp: string;
  to: string;
  readonly meta: ResponseMeta;
}
export interface FxHistoricalObservation {
  date: string;
  rates: Array<FxHistoricalRate>;
}
export interface FxHistoricalRate {
  currency: string;
  rate: Decimal;
}
export interface FxHistory {
  base: string;
  /** Sent only when the plan cut the requested end date to the last finished day. */
  end_date?: string;
  next_cursor?: string;
  observations: Array<FxHistoricalObservation>;
  /** Sent only when the plan raised the requested start date. */
  start_date?: string;
  readonly meta: ResponseMeta;
}
export interface FxRate {
  currency: string;
  rate: Decimal;
  stale: boolean;
  timestamp: string;
}
export interface FxRates {
  base: string;
  market_session: MarketSession;
  rates: Array<FxRate>;
  readonly meta: ResponseMeta;
}
export interface Gdp {
  /** Present, as true, only when the figures are annualized. */
  annualized?: boolean;
  country: string;
  currency: string;
  /** Present, as true, only when the figures are not seasonally adjusted. */
  not_seasonally_adjusted?: boolean;
  period: string;
  released_on: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  value: Decimal;
  readonly meta: ResponseMeta;
}
export interface GdpGrowth {
  /** Present, as true, only when the figures are annualized. */
  annualized?: boolean;
  country: string;
  /** Present, as true, only when the figures are not seasonally adjusted. */
  not_seasonally_adjusted?: boolean;
  period: string;
  /** Real change on the previous quarter, in percent. */
  quarter_over_quarter: Decimal;
  /** Present, as true, only when this country mixes bases and the quarter-over-quarter figure is not seasonally adjusted. */
  quarter_over_quarter_not_seasonally_adjusted?: boolean;
  released_on: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  /** Real change on the same quarter a year earlier, in percent. */
  year_over_year: Decimal;
  /** Present, as true, only when this country mixes bases and the year-over-year figure is not seasonally adjusted. */
  year_over_year_not_seasonally_adjusted?: boolean;
  /** Real change of the year so far, in percent. Left out where the publisher releases none. */
  year_to_date?: Decimal;
  readonly meta: ResponseMeta;
}
export interface GdpGrowthHistory {
  /** Present, as true, only when the figures are annualized. */
  annualized?: boolean;
  /** When the source last updated the newest observation on this page. */
  as_of?: string;
  country: string;
  next_cursor?: string;
  /** Present, as true, only when the figures are not seasonally adjusted. */
  not_seasonally_adjusted?: boolean;
  observations: Array<GdpGrowthHistoryObservation>;
  /** Present, as true, only when this country mixes bases and the quarter-over-quarter figure is not seasonally adjusted. */
  quarter_over_quarter_not_seasonally_adjusted?: boolean;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  /** The start of the plan window, present only when the plan raised the requested start. Earlier periods are not served. */
  start?: string;
  /** Present, as true, only when this country mixes bases and the year-over-year figure is not seasonally adjusted. */
  year_over_year_not_seasonally_adjusted?: boolean;
  readonly meta: ResponseMeta;
}
export interface GdpGrowthHistoryObservation {
  period: string;
  /** Real change on the previous quarter, in percent. */
  quarter_over_quarter?: Decimal;
  /** Real change on the same quarter a year earlier, in percent. */
  year_over_year?: Decimal;
  /** Real change of the year so far, in percent. Left out where the publisher releases none. */
  year_to_date?: Decimal;
}
export interface GdpHistory {
  /** Present, as true, only when the figures are annualized. */
  annualized?: boolean;
  /** When the source last updated the newest observation on this page. */
  as_of?: string;
  country: string;
  currency: string;
  next_cursor?: string;
  /** Present, as true, only when the figures are not seasonally adjusted. */
  not_seasonally_adjusted?: boolean;
  observations: Array<GdpHistoryObservation>;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  /** The start of the plan window, present only when the plan raised the requested start. Earlier periods are not served. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface GdpHistoryObservation {
  period: string;
  value: Decimal;
}
export interface Inflation {
  country: string;
  /** Change on the previous month, in percent. */
  month_over_month: Decimal;
  period: string;
  released_on: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  /** Change on the same month a year earlier, in percent. */
  year_over_year: Decimal;
  /** Change since December of the previous year, in percent. Left out where the publisher releases none. */
  year_to_date?: Decimal;
  readonly meta: ResponseMeta;
}
export interface InflationHistory {
  /** When the source last updated the newest observation on this page. */
  as_of?: string;
  country: string;
  next_cursor?: string;
  observations: Array<InflationHistoryObservation>;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  /** The start of the plan window, present only when the plan raised the requested start. Earlier periods are not served. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface InflationHistoryObservation {
  /** Change on the previous month, in percent. */
  month_over_month?: Decimal;
  period: string;
  /** Change on the same month a year earlier, in percent. */
  year_over_year?: Decimal;
  /** Change since December of the previous year, in percent. Left out where the publisher releases none. */
  year_to_date?: Decimal;
}
export interface LabourForceParticipation {
  country: string;
  period: string;
  /** The rate, in percent. */
  rate: Decimal;
  released_on: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  readonly meta: ResponseMeta;
}
export interface NoContent {
  readonly meta: ResponseMeta;
}
export interface PalmoilFfbMarketHistory {
  readonly kind: "PalmoilFfbMarketHistory";
  currency: string;
  next_cursor?: string;
  observations: Array<PalmoilFfbObservation>;
  series_id: string;
  unit: string;
  readonly meta: ResponseMeta;
}
export interface PalmoilFfbMarketPrice {
  readonly kind: "PalmoilFfbMarketPrice";
  currency: string;
  period_end: string;
  period_start: string;
  price: Decimal;
  revision: number;
  series_id: string;
  unit: string;
  readonly meta: ResponseMeta;
}
export interface PalmoilFfbObservation {
  readonly kind: "PalmoilFfbObservation";
  period_end: string;
  period_start: string;
  price: Decimal;
  revision: number;
}
export interface PalmoilMarketHistory {
  readonly kind: "PalmoilMarketHistory";
  currency: string;
  next_cursor?: string;
  observations: Array<PalmoilMarketObservation>;
  series_id: string;
  unit: string;
  readonly meta: ResponseMeta;
}
export interface PalmoilMarketObservation {
  readonly kind: "PalmoilMarketObservation";
  period_end: string;
  period_start: string;
  price: Decimal;
  price_month: string;
  revision: number;
}
export interface PalmoilMarketPrice {
  readonly kind: "PalmoilMarketPrice";
  currency: string;
  period_end: string;
  period_start: string;
  price: Decimal;
  price_month: string;
  revision: number;
  series_id: string;
  unit: string;
  readonly meta: ResponseMeta;
}
export interface PalmoilScalarHistory {
  readonly kind: "PalmoilScalarHistory";
  currency: string;
  next_cursor?: string;
  observations: Array<PalmoilScalarObservation>;
  series_id: string;
  unit: string;
  readonly meta: ResponseMeta;
}
export interface PalmoilScalarObservation {
  readonly kind: "PalmoilScalarObservation";
  period_end: string;
  period_start: string;
  price: Decimal;
  revision: number;
}
export interface PalmoilScalarPrice {
  readonly kind: "PalmoilScalarPrice";
  currency: string;
  period_end: string;
  period_start: string;
  price: Decimal;
  revision: number;
  series_id: string;
  unit: string;
  readonly meta: ResponseMeta;
}
export interface PalmoilScalarSeries {
  readonly kind: "PalmoilScalarSeries";
  /** Regional scope. Left out for a national series. */
  area?: string;
  country: string;
  coverage_end: string;
  coverage_start: string;
  currency: string;
  frequency: PalmoilFrequency;
  observation_type: string;
  period_type: PalmoilPeriodType;
  price_type: PalmoilScalarPriceType;
  product: PalmoilProduct;
  series_id: string;
  unit: PalmoilScalarUnit;
}
export interface PalmoilScheduleHistory {
  readonly kind: "PalmoilScheduleHistory";
  currency: string;
  next_cursor?: string;
  observations: Array<PalmoilScheduleObservation>;
  series_id: string;
  unit: string;
  readonly meta: ResponseMeta;
}
export interface PalmoilScheduleObservation {
  readonly kind: "PalmoilScheduleObservation";
  period_end: string;
  period_start: string;
  prices: Array<CommodityOilPalmFfbAgePrice>;
  revision: number;
}
export interface PalmoilSchedulePrice {
  readonly kind: "PalmoilSchedulePrice";
  currency: string;
  period_end: string;
  period_start: string;
  prices: Array<CommodityOilPalmFfbAgePrice>;
  revision: number;
  series_id: string;
  unit: string;
  readonly meta: ResponseMeta;
}
export interface PalmoilScheduleSeries {
  readonly kind: "PalmoilScheduleSeries";
  /** Regional scope. Left out for a national series. */
  area?: string;
  country: string;
  coverage_end: string;
  coverage_start: string;
  currency: string;
  frequency: PalmoilFrequency;
  observation_type: string;
  period_type: string;
  price_type: string;
  /** Left out when the source names no arrangement. */
  producer_arrangement?: ProducerArrangement;
  product: string;
  series_id: string;
  unit: string;
}
export interface PalmoilSeriesDiscovery {
  next_cursor?: string;
  series: Array<PalmoilSeries>;
  readonly meta: ResponseMeta;
}
export interface PhysicalLatest {
  attribution: string;
  currency: string;
  period_end: string;
  period_start: string;
  price: Decimal;
  /** Publication date. Left out when the source gives none. */
  published_on?: string;
  revision: number;
  series_id: string;
  unit: string;
  unit_quantity: Decimal;
  readonly meta: ResponseMeta;
}
export interface PhysicalObservation {
  period_end: string;
  period_start: string;
  price: Decimal;
  /** Publication date. Left out when the source gives none. */
  published_on?: string;
  revision: number;
}
export interface PhysicalObservations {
  attribution: string;
  currency: string;
  next_cursor?: string;
  observations: Array<PhysicalObservation>;
  series_id: string;
  unit: string;
  unit_quantity: Decimal;
  readonly meta: ResponseMeta;
}
export interface PhysicalSeries {
  /** Regional scope. Left out for a national or world series. */
  area?: string;
  attribution: string;
  /** Price definition. Left out when the source gives none. */
  basis?: string;
  category: PhysicalCategory;
  commodity: string;
  country: string;
  coverage_end: string;
  coverage_start: string;
  currency: string;
  description: string;
  frequency: PhysicalFrequency;
  price_type: PhysicalPriceType;
  product: string;
  series_id: string;
  unit: string;
  unit_quantity: Decimal;
  readonly meta: ResponseMeta;
}
export interface PhysicalSeriesPage {
  next_cursor?: string;
  series: Array<PhysicalSeries>;
  readonly meta: ResponseMeta;
}
export interface PolicyPath {
  as_of?: string;
  meetings: Array<PolicyPathMeeting>;
  readonly meta: ResponseMeta;
}
export interface PolicyPathDay {
  date: string;
  meetings: Array<PolicyPathOdds>;
}
export interface PolicyPathHistory {
  days: Array<PolicyPathDay>;
  meeting_dates: Array<PolicyPathMeetingDate>;
  readonly meta: ResponseMeta;
}
export interface PolicyPathMeeting {
  cumulative_change_bps: Decimal;
  event_id: string;
  expected_change_bps: Decimal;
  p_cut: string;
  p_hike: string;
  p_hold: string;
  resolves_at?: string;
}
export interface PolicyPathMeetingDate {
  event_id: string;
  resolves_at?: string;
}
export interface PolicyPathOdds {
  cumulative_change_bps: Decimal;
  event_id: string;
  expected_change_bps: Decimal;
  p_cut: string;
  p_hike: string;
  p_hold: string;
}
export interface PredictionBar {
  close: string;
  high?: string;
  low?: string;
  open?: string;
  /** Start of the bar. */
  timestamp: string;
}
export interface PredictionEventSummary {
  closes_at?: string;
  event_id: string;
  question: string;
  /** Economic calendar release this market resolves on, only when Narwhal publishes that release. */
  release_id?: string;
  resolves_at?: string;
  /** The venues' results, on settled and void events once this plan may see them: Free from the next day, Basic and Pro at once. */
  result?: PredictionResultSummary;
  shape: PredictionShape;
  status: PredictionEventStatus;
  topic_id: string;
}
export interface PredictionEventsPage {
  events: Array<PredictionEventSummary>;
  next_cursor?: string;
  readonly meta: ResponseMeta;
}
export interface PredictionHistory {
  /** The venue whose market a chart line comes from before capture started. */
  backfill_venue?: Venue;
  /** Sent only when the plan cut the requested window short: the last instant the answer can cover. */
  end?: string;
  /** Always sent; null on the last page. Otherwise pass it as cursor, with the same start, end and interval, for the next page. A page holds about 5,000 bars. */
  next_cursor?: string;
  series: Array<PredictionSeries>;
  readonly meta: ResponseMeta;
}
export interface PredictionResult {
  /** When Narwhal found that the outcome or value of a final result had changed. Sent only if it did. */
  amended_at?: string;
  /** True when every venue's result is final. */
  final: boolean;
  /** Latest available venue settlement time, sent once every venue has a result row or is marked unavailable, whether final or not. Omitted if no settlement time exists. */
  settled_at?: string;
  venues: Array<PredictionResultVenue>;
}
export interface PredictionResultMarket {
  /** Kalshi market ticker or Polymarket market id. */
  market_id: string;
  /** Kalshi: yes, no, void or scalar. Polymarket: the winning outcome's label, split for a 50-50 resolution, custom for a custom payout, or unresolved. */
  outcome: string;
  /** Kalshi: the YES settlement price in dollars (yes 1, no 0). Polymarket: the winning outcome's final price (1 for a clean win; the top payout for split and custom). Read it with the outcome. Null when the venue gives none. */
  value?: Decimal;
}
export interface PredictionResultSummary {
  /** When Narwhal found that the outcome or value of a final result had changed. Sent only if it did. */
  amended_at?: string;
  /** True when every venue's result is final. */
  final: boolean;
  /** Latest available venue settlement time, sent once every venue has a result row or is marked unavailable, whether final or not. Omitted if no settlement time exists. */
  settled_at?: string;
}
export interface PredictionResultVenue {
  /** When Narwhal found that the outcome or value of a final result had changed (a dispute or amendment). Sent only if it did. */
  amended_at?: string;
  /** True once the venue has finalized the result. A result the venue has determined but not finalized can still change. */
  final?: boolean;
  markets: Array<PredictionResultMarket>;
  /** When the venue settled the market. */
  settled_at?: string;
  /** Sent only when true: the venue has removed this event's markets and Narwhal holds no result for them. Such a venue does not hold the event's final open. */
  unavailable?: boolean;
  venue: Venue;
}
export interface PredictionSeries {
  active_from: string;
  /** Sent only once the series has ended. */
  active_to?: string;
  bars: Array<PredictionBar>;
  key: string;
}
export interface PredictionTopic {
  /** The calendar release family this topic follows, when it follows one. */
  calendar?: TopicCalendar;
  group: TopicGroup;
  /** The first open event of the topic, when there is one. */
  next_event_id?: string;
  resolution_kind: ResolutionKind;
  shape: PredictionShape;
  title: string;
  topic_id: string;
  /** Combined unit text such as usd_per_barrel. */
  unit?: string;
  venues: Array<Venue>;
}
export interface PredictionTopicDetail {
  /** The calendar release family this topic follows, when it follows one. */
  calendar?: TopicCalendar;
  /** Upcoming and trading events, then the five most recent non-open events (closed, settled or void), ordered by resolution time. */
  events: Array<PredictionTopicEvent>;
  group: TopicGroup;
  resolution_kind: ResolutionKind;
  shape: PredictionShape;
  title: string;
  topic_id: string;
  /** Combined unit text such as usd_per_barrel. */
  unit?: string;
  venues: Array<Venue>;
  readonly meta: ResponseMeta;
}
export interface PredictionTopicEvent {
  closes_at?: string;
  event_id: string;
  question: string;
  /** Economic calendar release this market resolves on, only when Narwhal publishes that release. */
  release_id?: string;
  resolves_at?: string;
  /** The venues' results, on settled and void events once this plan may see them: Free from the next day, Basic and Pro at once. */
  result?: PredictionResultSummary;
  status: PredictionEventStatus;
}
export interface PredictionTopics {
  topics: Array<PredictionTopic>;
  readonly meta: ResponseMeta;
}
export interface PredictionVenue {
  /** Sent only for a venue left out of the probabilities. */
  excluded_reason?: VenueExclusionReason;
  /** How this venue's market differs from the event; sent only when it does. */
  match?: VenueMatch;
  open_interest_usd?: Decimal;
  /** The venue's own resolution rules, capped at 2,000 characters. */
  rules_text?: string;
  rules_url?: string;
  /** Sent once the venue has settled or voided its market. */
  settlement?: PredictionVenueSettlement;
  settlement_source?: string;
  url: string;
  venue: Venue;
  volume_24h_usd?: Decimal;
  /** Sent only for a blended venue. */
  weight?: string;
}
export interface PredictionWebhookEvent {
  /** Left out when not set. */
  closes_at?: string;
  /** The prediction market ID, returned as `event_id` by the prediction routes. The outer `event_id` identifies the delivery. */
  prediction_event_id: string;
  /** Calendar release, sent only when the public calendar serves it. */
  release_id?: string;
  /** Left out when not set. */
  resolves_at?: string;
  settlements: Array<PredictionWebhookSettlement>;
  shape: PredictionShape;
  status: PredictionWebhookStatus;
  topic_id: string;
}
export interface PredictionWebhookSettlement {
  status: SettlementStatus;
  venue: Venue;
}
export interface Problem {
  /** Stable machine-readable error code. Documented values are listed in `x-narwhal-codes`; the list may grow, so treat an unknown code by its HTTP status. */
  code: string;
  detail: string;
  request_id: string;
  status: number;
  title: string;
  type: string;
}
export interface Quote {
  /** Venue market ids behind this row: Kalshi tickers or Polymarket YES token ids. */
  market_ids: Array<string>;
  probability: string;
  venue: Venue;
}
export interface RateHistory {
  /** When the source last updated the newest observation on this page. */
  as_of?: string;
  country: string;
  next_cursor?: string;
  observations: Array<RateHistoryObservation>;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  /** The start of the plan window, present only when the plan raised the requested start. Earlier periods are not served. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface RateHistoryObservation {
  period: string;
  /** The rate, in percent. */
  rate: Decimal;
}
export interface ResourceHistory {
  country: string;
  currency?: string;
  next_cursor?: string;
  observations: Array<ResourceObservation>;
  series_id: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  unit: ResourceUnit;
  readonly meta: ResponseMeta;
}
export interface ResourceObservation {
  period: string;
  released_on?: string;
  status?: ResourceObservationStatus;
  value: Decimal;
}
export interface ScalarEvent {
  /** Which of median, p10 and p90 sit in the open top row; the value is then that row's lower bound. Empty when none does. */
  above: Array<ScalarEventAbove>;
  /** When the venues were last checked. */
  as_of?: string;
  closes_at?: string;
  event_id: string;
  median?: Decimal;
  outcomes: Array<ScalarOutcome>;
  p10?: Decimal;
  p90?: Decimal;
  question: string;
  /** Economic calendar release this market resolves on, only when Narwhal publishes that release. */
  release_id?: string;
  resolution: string;
  resolves_at?: string;
  /** Narwhal endpoint that publishes the official value; not part of this API. */
  resolves_with?: string;
  /** The venues' results with each market's outcome, on settled and void events once this plan may see them: Free from the next day, Basic and Pro at once. */
  result?: PredictionResult;
  /** Sent on upcoming, trading and closed events. On upcoming and trading events, true after more than 3 minutes without a venue check or when the stored snapshot was already stale. On those events, more than 30 minutes without a venue check or a missing check time means no_live_quotes. A stored no_live_quotes snapshot also applies to closed events. With no_live_quotes, no probabilities are sent, every `quotes` list is empty and every venue is excluded. The exclusion reason is stale unless the venue already has another reason. Closed events are stale only when their stored snapshot was already stale; elapsed time never makes them stale. Do not trade on stale events. Absent on settled and void events. */
  stale?: boolean;
  status: PredictionEventStatus;
  topic_id: string;
  /** Combined unit text such as usd_per_barrel. */
  unit?: string;
  venues: Array<PredictionVenue>;
  readonly meta: ResponseMeta;
}
export interface ScalarOutcome {
  key: string;
  label: string;
  /** Null means an open lower tail. */
  lower?: Decimal;
  probability?: string;
  quotes: Array<Quote>;
  /** Null means an open upper tail. */
  upper?: Decimal;
}
export interface SeriesSource {
  /** Organisation that distributes the statistic. */
  distributor: string;
  /** Original publisher named by the distributor. */
  publisher: string;
}
export interface TimingEvent {
  /** When the venues were last checked. */
  as_of?: string;
  closes_at?: string;
  event_id: string;
  /** Derived: 1 minus the last step. */
  not_within_window?: string;
  question: string;
  /** Economic calendar release this market resolves on, only when Narwhal publishes that release. */
  release_id?: string;
  resolution: string;
  resolves_at?: string;
  /** Narwhal endpoint that publishes the official value; not part of this API. */
  resolves_with?: string;
  /** The venues' results with each market's outcome, on settled and void events once this plan may see them: Free from the next day, Basic and Pro at once. */
  result?: PredictionResult;
  /** Sent on upcoming, trading and closed events. On upcoming and trading events, true after more than 3 minutes without a venue check or when the stored snapshot was already stale. On those events, more than 30 minutes without a venue check or a missing check time means no_live_quotes. A stored no_live_quotes snapshot also applies to closed events. With no_live_quotes, no probabilities are sent, every `quotes` list is empty and every venue is excluded. The exclusion reason is stale unless the venue already has another reason. Closed events are stale only when their stored snapshot was already stale; elapsed time never makes them stale. Do not trade on stale events. Absent on settled and void events. */
  stale?: boolean;
  status: PredictionEventStatus;
  steps: Array<TimingStep>;
  topic_id: string;
  /** Combined unit text such as usd_per_barrel. */
  unit?: string;
  venues: Array<PredictionVenue>;
  readonly meta: ResponseMeta;
}
export interface TimingStep {
  by: string;
  key: string;
  /** A decision meeting, or a date by which it happens. */
  kind: TimingStepKind;
  /** "28 Oct 2026 meeting" or "31 Dec 2026". */
  label: string;
  probability?: string;
  quotes: Array<Quote>;
}
export interface TopicCalendar {
  country: string;
  family: string;
}
export interface TradeHistory {
  /** When the source last updated the newest observation on this page. */
  as_of?: string;
  country: string;
  currency: string;
  next_cursor?: string;
  observations: Array<TradeHistoryObservation>;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  /** The start of the plan window, present only when the plan raised the requested start. Earlier periods are not served. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface TradeHistoryObservation {
  /** Merchandise exports in the period. */
  exports?: Decimal;
  /** Merchandise imports in the period. */
  imports?: Decimal;
  period: string;
}
export interface TradeSummary {
  /** Exports minus imports. */
  balance: Decimal;
  country: string;
  currency: string;
  exports: Decimal;
  imports: Decimal;
  period: string;
  released_on: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  readonly meta: ResponseMeta;
}
export interface Unemployment {
  country: string;
  period: string;
  /** The rate, in percent. */
  rate: Decimal;
  released_on: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  readonly meta: ResponseMeta;
}
export interface VenueMatch {
  differences: Array<VenueDifference>;
  note?: string;
}
export interface WebhookConfigurationHistory {
  config_version: number;
  countries: Array<string>;
  enabled: boolean;
  families: Array<WebhookFamily>;
  recorded_at: string;
  url: string;
}
export interface WebhookDeliveriesResponse {
  deliveries: Array<WebhookDelivery>;
  next_cursor?: string;
  readonly meta: ResponseMeta;
}
export interface WebhookDelivery {
  attempts: number;
  config_version: number;
  created_at: string;
  delivery_id: string;
  /** Position of the event in `GET /v1/events`. Left out on test deliveries. */
  event_cursor?: number;
  /** Sent only for a test delivery. */
  is_test?: boolean;
  /** Why the last attempt failed. */
  last_error?: string;
  /** HTTP status of the last attempt. */
  last_status?: number;
  /** Sent only while the delivery is `pending` or `leased`. */
  next_attempt_at?: string;
  /** Sent only when greater than 0. */
  replays?: number;
  /** Sent only while the delivery is `pending` or `leased`. */
  retry_until?: string;
  state: WebhookDeliveryState;
  updated_at: string;
}
export interface WebhookDestinationCreated {
  config_version: number;
  countries: Array<string>;
  created_at: string;
  destination_id: string;
  /** Why a destination is not enabled: `customer` (switched off by the account) or `plan_limit` (paused because the plan no longer includes it). Left out when enabled. */
  disabled_reason?: WebhookDisabledReason;
  enabled: boolean;
  families: Array<WebhookFamily>;
  secret: string;
  secret_version: number;
  updated_at: string;
  url: string;
  readonly meta: ResponseMeta;
}
export interface WebhookDestinationInput {
  /** Countries from the active profile's catalogue. */
  countries: Array<string>;
  enabled?: boolean;
  families: Array<WebhookFamily>;
  url: string;
}
export interface WebhookDestinationList {
  destination_limit: number;
  destinations: Array<WebhookDestinationResponse>;
  readonly meta: ResponseMeta;
}
export interface WebhookDestinationResponse {
  config_version: number;
  countries: Array<string>;
  created_at: string;
  destination_id: string;
  /** Why a destination is not enabled: `customer` (switched off by the account) or `plan_limit` (paused because the plan no longer includes it). Left out when enabled. */
  disabled_reason?: WebhookDisabledReason;
  enabled: boolean;
  families: Array<WebhookFamily>;
  secret_version: number;
  updated_at: string;
  url: string;
  readonly meta: ResponseMeta;
}
export interface WebhookEvent {
  country?: string;
  cursor?: string;
  event_id: string;
  family?: DeliveryFamily;
  /** Holiday events only. */
  holiday_generation?: number;
  /** Holiday events only. */
  holiday_year?: number;
  prediction?: PredictionWebhookEvent;
  recorded_at: string;
  /** The release, on release events. */
  release_id?: string;
  /** Left out on release events, which carry `release_id`. */
  resource_id?: string;
  resource_version?: string;
  schema_version: string;
  type: WebhookEventType;
}
export interface WebhookHistoryResponse {
  history: Array<WebhookConfigurationHistory>;
  readonly meta: ResponseMeta;
}
export interface WebhookTestResponse {
  /** Left out when nothing was queued. */
  delivery_id?: string;
  /** Sent when rate limited. */
  retry_after_seconds?: number;
  status: WebhookTestStatus;
  readonly meta: ResponseMeta;
}
export interface YieldCurve {
  country: string;
  curve_type: YieldCurveType;
  date: string;
  yields: Array<YieldPoint>;
  readonly meta: ResponseMeta;
}
export interface YieldCurveHistoryObservation {
  date: string;
  yields: Array<YieldPoint>;
}
export interface YieldCurveHistoryResponse {
  country: string;
  curve_type: YieldCurveType;
  next_cursor?: string;
  observations: Array<YieldCurveHistoryObservation>;
  readonly meta: ResponseMeta;
}
export interface YieldPoint {
  maturity: string;
  yield_percent: Decimal;
}
export interface PalmoilHistoryUnknown {
  readonly kind: "unknown";
  raw: Record<string, unknown>;
  readonly raw_body: Uint8Array;
  readonly meta: ResponseMeta;
}
export type PalmoilHistory =
  | PalmoilScheduleHistory
  | PalmoilMarketHistory
  | PalmoilScalarHistory
  | PalmoilFfbMarketHistory
  | PalmoilHistoryUnknown;
export interface PalmoilObservationUnknown {
  readonly kind: "unknown";
  raw: Record<string, unknown>;
  readonly raw_body: Uint8Array;
}
export type PalmoilObservation =
  | PalmoilScheduleObservation
  | PalmoilMarketObservation
  | PalmoilScalarObservation
  | PalmoilFfbObservation
  | PalmoilObservationUnknown;
export interface PalmoilPriceUnknown {
  readonly kind: "unknown";
  raw: Record<string, unknown>;
  readonly raw_body: Uint8Array;
  readonly meta: ResponseMeta;
}
export type PalmoilPrice =
  | PalmoilSchedulePrice
  | PalmoilMarketPrice
  | PalmoilScalarPrice
  | PalmoilFfbMarketPrice
  | PalmoilPriceUnknown;
export interface PalmoilSeriesUnknown {
  readonly kind: "unknown";
  raw: Record<string, unknown>;
  readonly raw_body: Uint8Array;
}
export type PalmoilSeries =
  | PalmoilScheduleSeries
  | PalmoilScalarSeries
  | PalmoilSeriesUnknown;

// Generated from spec/live/openapi.json sha256 a8f87a3ac708cc35c7a08fa69c5bf4c3edeea4259ff31a8cc7a3f6ded6b553a8. Do not edit.
// Generated from spec/next/openapi.json sha256 a8f87a3ac708cc35c7a08fa69c5bf4c3edeea4259ff31a8cc7a3f6ded6b553a8. Do not edit.
import type { Decimal } from "../decode.js";
import type { ResponseMeta } from "../meta.js";
export type Annualization = "annualized" | "not_annualized" | (string & {});
export type BarInterval =
  | "15m"
  | "1d"
  | "1h"
  | "1m"
  | "4h"
  | "5m"
  | (string & {});
export type CentralBank =
  | "bank-indonesia"
  | "bank-of-canada"
  | "bank-of-england"
  | "bank-of-japan"
  | "european-central-bank"
  | "federal-reserve"
  | "reserve-bank-of-australia"
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
export type ExtremeObservation =
  | "any_release"
  | "any_trade"
  | "close"
  | (string & {});
export type GrowthSeasonalAdjustment =
  | "mixed"
  | "not_seasonally_adjusted"
  | "seasonally_adjusted"
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
export type IndicatorValueStatus =
  | "available"
  | "not_released"
  | "pending_capture"
  | "unavailable"
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
export type PredictionInterval = "1d" | "1h" | "1m" | "5m" | (string & {});
export type PredictionShape =
  | "binary"
  | "categorical"
  | "extreme"
  | "scalar"
  | "set"
  | "timing"
  | (string & {});
export type PredictionWebhookStatus =
  | "closed"
  | "settled"
  | "void"
  | (string & {});
export type ProducerArrangement =
  | "purchase_agreement"
  | "supported_scheme"
  | (string & {});
export type QuoteFreshness =
  | "live"
  | "no_live_quotes"
  | "stale"
  | (string & {});
export type QuoteRole = "blended" | "excluded" | (string & {});
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
export type SchedulePrecision =
  | "date"
  | "deadline"
  | "estimated_range"
  | "exact"
  | "unknown"
  | (string & {});
export type ScheduleTimeBasis = "calendar" | "standard_time" | (string & {});
export type SeasonalAdjustment =
  | "not_seasonally_adjusted"
  | "seasonally_adjusted"
  | (string & {});
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
export type ValueScale =
  | "billions"
  | "hundred_millions"
  | "millions"
  | "thousands"
  | "units"
  | (string & {});
export type ValueTransformation =
  | "change"
  | "level"
  | "month_over_month"
  | "quarter_over_quarter"
  | "three_month_on_three_month"
  | "year_over_year"
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
export interface BinaryBody {
  deadline?: string;
  labels: BinaryLabels;
  probability?: string;
  quotes: Array<Quote>;
}
export interface BinaryEvent {
  as_of?: string;
  body: BinaryBody;
  closes_at?: string;
  event_id: string;
  quality: PredictionQuality;
  question: string;
  /** Economic calendar release this market resolves on, only when Narwhal publishes that release; otherwise null. */
  release_id?: string;
  resolution: PredictionResolution;
  resolves_at?: string;
  shape: string;
  status: PredictionEventStatus;
  topic_id: string;
  unit?: string;
  venues: Array<PredictionVenue>;
  readonly meta: ResponseMeta;
}
export interface BinaryLabels {
  no: string;
  yes: string;
}
export interface CalendarCoverage {
  nationwide: boolean;
  scope: HolidayScope;
  subdivision_codes?: Array<string>;
}
export interface CalendarHoliday {
  date: string;
  local_name?: string;
  name: string;
  nationwide: boolean;
  observed?: boolean;
  scope: HolidayScope;
  subdivision_codes?: Array<string>;
}
export interface CalendarHolidays {
  country: string;
  coverage: Array<CalendarCoverage>;
  holidays: Array<CalendarHoliday>;
  year: number;
  readonly meta: ResponseMeta;
}
export interface CalendarHolidaysOnDate {
  country: string;
  coverage: Array<CalendarCoverage>;
  date: string;
  holidays: Array<CalendarHoliday>;
  readonly meta: ResponseMeta;
}
export interface CalendarNextHoliday {
  country: string;
  coverage: Array<CalendarCoverage>;
  from_date: string;
  holiday?: CalendarHoliday;
  readonly meta: ResponseMeta;
}
export interface CalendarSubscriptionCreated {
  expires_at: string;
  refresh_note?: string;
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
export interface CalendarSubscriptionRevoked {
  revoked?: boolean;
  subscription_id: string;
  readonly meta: ResponseMeta;
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
  end: string;
  interval: BarInterval;
  next_cursor?: string;
  start: string;
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
  base_period: string;
  base_value: Decimal;
  country: string;
  period: string;
  released_on: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  value: Decimal;
  readonly meta: ResponseMeta;
}
export interface DeliveryEvent {
  country: string;
  cursor: string;
  event_id: string;
  /** Deprecated: the same value as `type`, kept for earlier callers. */
  event_type: string;
  family: DeliveryFamily;
  holiday_country?: string;
  holiday_generation?: number;
  holiday_year?: number;
  publication_id?: string;
  recorded_at: string;
  release_id?: string;
  resource_id?: string;
  resource_version?: string;
  schema_version?: string;
  type: string;
}
export interface EconomicCalendar {
  as_of: string;
  next_cursor?: string;
  releases: Array<EconomicRelease>;
  snapshot: string;
  status?: string;
  readonly meta: ResponseMeta;
}
export interface EconomicRelease {
  country: string;
  family: EconomicFamily;
  indicators?: Array<EconomicReleaseIndicator>;
  /** Narwhal's standard English name for the release series, from one closed list. */
  name: string;
  notice?: string;
  observed_at?: string;
  officially_published_at?: string;
  reference_period?: string;
  release_id: string;
  revision?: number;
  schedule: EconomicReleaseSchedule;
  /** Narwhal's permanent ID for the release series, shared by every edition; null for a series not yet classified. */
  series_id?: string;
  /** Which edition of the period's figures this release is. */
  stage?: ReleaseStage;
  status: ReleaseStatus;
  /** The publisher's own title, in its own language. */
  title: string;
  /** What the series measures, the same across countries; null when not yet classified. New topics may be added. */
  topic?: ReleaseTopic;
  variant?: string;
  version: string;
  readonly meta: ResponseMeta;
}
export interface EconomicReleaseIndicator {
  actual?: Decimal;
  /** Known actual-value vintage: publisher timestamp when available, otherwise the first accepted capture of that value. */
  actual_as_of?: string;
  /** Always present; stored values without it are not annualized. */
  annualization?: Annualization;
  /** ISO 4217 code of a money amount; present exactly when unit is currency. */
  currency?: string;
  index_base?: string;
  measure: string;
  period: string;
  previous?: Decimal;
  /** Known prior-value vintage: publisher timestamp when available, otherwise the first accepted capture of that value. It is distinct from the observation period. */
  previous_as_of?: string;
  previous_before_revision?: Decimal;
  previous_period: string;
  /** Scale a money amount is printed at; present exactly when unit is currency. */
  scale?: ValueScale;
  seasonal_adjustment: SeasonalAdjustment;
  title: string;
  transformation: ValueTransformation;
  unit: IndicatorUnit;
  value_status: IndicatorValueStatus;
}
export interface EconomicReleaseSchedule {
  at?: string;
  date?: string;
  /** The release day in the publisher's own time zone; an exact time in UTC can fall on the day before or after. */
  local_date?: string;
  precision: SchedulePrecision;
  /** How an exact time is known: the publisher's dated calendar entry, or the publisher's documented standard release time applied to a date-only entry. */
  time_basis?: ScheduleTimeBasis;
  timezone?: string;
  until?: string;
  /** Inclusive range end, or latest possible release date for deadline precision; a deadline does not specify the actual release day. */
  until_date?: string;
}
export interface EventDetail {
  event: DeliveryEvent;
  status?: string;
  readonly meta: ResponseMeta;
}
export interface EventsPage {
  cursor: string;
  events: Array<DeliveryEvent>;
  next_cursor?: string;
  status?: string;
  readonly meta: ResponseMeta;
}
export interface ExtremeBody {
  down: Array<ExtremeLevel>;
  observation: ExtremeObservation;
  up: Array<ExtremeLevel>;
  window: ExtremeWindow;
}
export interface ExtremeEvent {
  as_of?: string;
  body: ExtremeBody;
  closes_at?: string;
  event_id: string;
  quality: PredictionQuality;
  question: string;
  /** Economic calendar release this market resolves on, only when Narwhal publishes that release; otherwise null. */
  release_id?: string;
  resolution: PredictionResolution;
  resolves_at?: string;
  shape: string;
  status: PredictionEventStatus;
  topic_id: string;
  unit?: string;
  venues: Array<PredictionVenue>;
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
  end: string;
  interval: BarInterval;
  next_cursor?: string;
  start: string;
  readonly meta: ResponseMeta;
}
export interface FxConversion {
  amount: Decimal;
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
  end_date: string;
  has_more: boolean;
  next_cursor?: string;
  observations: Array<FxHistoricalObservation>;
  start_date: string;
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
  annualization: Annualization;
  country: string;
  currency: string;
  period: string;
  price_basis: string;
  released_on: string;
  seasonal_adjustment: SeasonalAdjustment;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  value: Decimal;
  readonly meta: ResponseMeta;
}
export interface GdpGrowth {
  annualization: Annualization;
  country: string;
  period: string;
  price_basis: string;
  quarter_over_quarter: Decimal;
  quarter_over_quarter_seasonal_adjustment?: SeasonalAdjustment;
  released_on: string;
  seasonal_adjustment: GrowthSeasonalAdjustment;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  unit: string;
  year_over_year: Decimal;
  year_over_year_seasonal_adjustment?: SeasonalAdjustment;
  year_to_date?: Decimal;
  readonly meta: ResponseMeta;
}
export interface HistoricalEconomicsResponse {
  /** Official source snapshot timestamp retained by Narwhal. */
  as_of?: string;
  next_cursor?: string;
  observations: Array<HistoricalObservation>;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  readonly meta: ResponseMeta;
}
export interface HistoricalObservation {
  country: string;
  measure: string;
  period: string;
  transformation: string;
  unit: string;
  value: Decimal;
}
export interface Inflation {
  country: string;
  month_over_month: Decimal;
  period: string;
  released_on: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  unit: string;
  year_over_year: Decimal;
  year_to_date?: Decimal;
  readonly meta: ResponseMeta;
}
export interface LabourForceParticipation {
  country: string;
  period: string;
  rate: Decimal;
  released_on: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  unit: string;
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
  area?: string;
  commodity: string;
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
  area?: string;
  commodity: string;
  country: string;
  coverage_end: string;
  coverage_start: string;
  currency: string;
  frequency: PalmoilFrequency;
  observation_type: string;
  period_type: string;
  price_type: string;
  producer_arrangement?: ProducerArrangement;
  producer_type: string;
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
  attribution?: string;
  currency: string;
  period_end: string;
  period_start: string;
  price: Decimal;
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
  published_on?: string;
  revision: number;
}
export interface PhysicalObservations {
  attribution?: string;
  currency: string;
  next_cursor?: string;
  observations: Array<PhysicalObservation>;
  series_id: string;
  unit: string;
  unit_quantity: Decimal;
  readonly meta: ResponseMeta;
}
export interface PhysicalSeries {
  area?: string;
  attribution?: string;
  basis?: string;
  category: PhysicalCategory;
  commodity: string;
  coverage_end: string;
  coverage_start: string;
  currency: string;
  description: string;
  frequency: PhysicalFrequency;
  market: string;
  price_type: PhysicalPriceType;
  product: string;
  publisher: string;
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
  authority: CentralBank;
  meetings: Array<PolicyPathMeeting>;
  method: string;
  unit: string;
  readonly meta: ResponseMeta;
}
export interface PolicyPathDay {
  date: string;
  meetings: Array<PolicyPathMeeting>;
}
export interface PolicyPathHistory {
  authority: CentralBank;
  days: Array<PolicyPathDay>;
  method: string;
  unit: string;
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
export interface PredictionBar {
  close: string;
  end: string;
  high?: string;
  low?: string;
  open?: string;
  start: string;
}
export interface PredictionEventSummary {
  as_of?: string;
  closes_at?: string;
  event_id: string;
  question: string;
  /** Economic calendar release this market resolves on, only when Narwhal publishes that release; otherwise null. */
  release_id?: string;
  resolves_at?: string;
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
  backfill_venue?: Venue;
  /** First minute Narwhal captured; earlier bars are venue backfill (close only). */
  captured_from?: string;
  end: string;
  event_id: string;
  interval: PredictionInterval;
  /** Present when the window continues: pass it as cursor, with the same start, end and interval, for the next page. A page holds about 5,000 bars. */
  next_cursor?: string;
  series: Array<PredictionSeries>;
  shape: PredictionShape;
  start: string;
  readonly meta: ResponseMeta;
}
export interface PredictionQuality {
  freshness: QuoteFreshness;
  monotone_repairs: number;
  rows_merged: number;
}
export interface PredictionResolution {
  description: string;
  /** Narwhal endpoint that publishes the official value; not part of this API. */
  resolves_with?: string;
}
export interface PredictionSeries {
  active_from: string;
  active_to?: string;
  bars: Array<PredictionBar>;
  key: string;
}
export interface PredictionTopic {
  calendar?: TopicCalendar;
  group: TopicGroup;
  next_event_id?: string;
  resolution_kind: ResolutionKind;
  shape: PredictionShape;
  title: string;
  topic_id: string;
  unit?: string;
  venues: Array<Venue>;
}
export interface PredictionTopicDetail {
  calendar?: TopicCalendar;
  /** Upcoming and trading events, then the five most recent closed ones. */
  events: Array<PredictionEventSummary>;
  group: TopicGroup;
  next_event_id?: string;
  resolution_kind: ResolutionKind;
  shape: PredictionShape;
  title: string;
  topic_id: string;
  unit?: string;
  venues: Array<Venue>;
  readonly meta: ResponseMeta;
}
export interface PredictionTopics {
  topics: Array<PredictionTopic>;
  readonly meta: ResponseMeta;
}
export interface PredictionVenue {
  /** Money at risk resting within 5 cents of mid on both sides, from the full order book; each contract counts at the smaller of its price and one minus it. */
  depth_usd?: Decimal;
  excluded_reason?: VenueExclusionReason;
  fetched_at?: string;
  match: VenueMatch;
  open_interest_usd?: Decimal;
  role: QuoteRole;
  /** The venue's own resolution rules, capped at 2,000 characters. */
  rules_text?: string;
  rules_url?: string;
  settlement: VenueSettlement;
  settlement_source?: string;
  url: string;
  venue: Venue;
  venue_event_id: string;
  volume_24h_usd?: Decimal;
  weight?: string;
}
export interface PredictionWebhookEvent {
  closes_at?: string;
  event_id: string;
  /** Calendar release, only when the public calendar serves it. */
  release_id?: string;
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
  instance?: string;
  ok?: boolean;
  request_id: string;
  status: number;
  title: string;
  type: string;
}
export interface Quote {
  /** Venue market ids behind this row: Kalshi tickers or Polymarket YES token ids. */
  market_ids: Array<string>;
  probability: string;
  role: QuoteRole;
  venue: Venue;
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
export interface ScalarBody {
  outcomes: Array<ScalarOutcome>;
  scale: number;
  summary?: ScalarSummary;
}
export interface ScalarEvent {
  as_of?: string;
  body: ScalarBody;
  closes_at?: string;
  event_id: string;
  quality: PredictionQuality;
  question: string;
  /** Economic calendar release this market resolves on, only when Narwhal publishes that release; otherwise null. */
  release_id?: string;
  resolution: PredictionResolution;
  resolves_at?: string;
  shape: string;
  status: PredictionEventStatus;
  topic_id: string;
  unit?: string;
  venues: Array<PredictionVenue>;
  readonly meta: ResponseMeta;
}
export interface ScalarOutcome {
  key: string;
  label: string;
  lower?: Decimal;
  probability?: string;
  quotes: Array<Quote>;
  upper?: Decimal;
}
export interface ScalarSummary {
  /** A value marked 'above' falls in the open top row; the value is that row's lower bound. */
  bounds?: ScalarSummaryBounds;
  median?: Decimal;
  method: string;
  p10?: Decimal;
  p90?: Decimal;
}
export interface ScalarSummaryBounds {
  median?: string;
  p10?: string;
  p90?: string;
}
export interface SeriesSource {
  /** Organisation that distributes the statistic. */
  distributor: string;
  /** Original publisher named by the distributor. */
  publisher: string;
  /** released_on is the distributor's publication date for this data, not the original publisher's release date. */
  released_on_basis: string;
}
export interface TimingBody {
  /** Derived: 1 minus the last step. */
  not_within_window?: string;
  steps: Array<TimingStep>;
}
export interface TimingEvent {
  as_of?: string;
  body: TimingBody;
  closes_at?: string;
  event_id: string;
  quality: PredictionQuality;
  question: string;
  /** Economic calendar release this market resolves on, only when Narwhal publishes that release; otherwise null. */
  release_id?: string;
  resolution: PredictionResolution;
  resolves_at?: string;
  shape: string;
  status: PredictionEventStatus;
  topic_id: string;
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
  variant?: string;
}
export interface TradeExports {
  country: string;
  coverage: string;
  currency: string;
  flow: string;
  partner?: string;
  period: string;
  product?: TradeProductFilter;
  released_on: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  value: Decimal;
  readonly meta: ResponseMeta;
}
export interface TradeImports {
  country: string;
  coverage: string;
  currency: string;
  flow: string;
  partner?: string;
  period: string;
  product?: TradeProductFilter;
  released_on: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  value: Decimal;
  readonly meta: ResponseMeta;
}
export interface TradeProductFilter {
  classification: string;
  code: string;
}
export interface TradeSummary {
  balance: Decimal;
  country: string;
  coverage: string;
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
  rate: Decimal;
  released_on: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  unit: string;
  readonly meta: ResponseMeta;
}
export interface VenueMatch {
  differences: Array<VenueDifference>;
  note?: string;
}
export interface VenueSettlement {
  status: SettlementStatus;
}
export interface WebhookConfigurationHistory {
  activation_snapshot: string;
  countries: Array<string>;
  destination_id: string;
  enabled: boolean;
  families: Array<WebhookFamily>;
  recorded_at: string;
  url: string;
  version: number;
}
export interface WebhookDeleteResponse {
  deleted?: boolean;
  destination_id: string;
  readonly meta: ResponseMeta;
}
export interface WebhookDeliveriesResponse {
  deliveries: Array<WebhookDelivery>;
  limit: number;
  next_cursor?: string;
  readonly meta: ResponseMeta;
}
export interface WebhookDelivery {
  attempts: number;
  config_version: number;
  created_at: string;
  delivery_id: string;
  event_cursor?: number;
  is_test?: boolean;
  last_error?: string;
  last_status?: number;
  next_attempt_at: string;
  replays: number;
  retry_until: string;
  state: WebhookDeliveryState;
  updated_at: string;
}
export interface WebhookDestinationCreated {
  config_version: number;
  countries: Array<string>;
  created_at: string;
  destination_id: string;
  /** Why a destination is not enabled: `customer` (switched off by the account) or `plan_limit` (paused because the plan no longer includes it). Null when enabled. */
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
  destinations: Array<WebhookDestinationResponse>;
  limit: number;
  readonly meta: ResponseMeta;
}
export interface WebhookDestinationResponse {
  config_version: number;
  countries: Array<string>;
  created_at: string;
  destination_id: string;
  /** Why a destination is not enabled: `customer` (switched off by the account) or `plan_limit` (paused because the plan no longer includes it). Null when enabled. */
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
  family?: WebhookFamily;
  holiday_country?: string;
  holiday_generation?: number;
  holiday_year?: number;
  is_test?: boolean;
  prediction?: PredictionWebhookEvent;
  publication_id?: string;
  recorded_at: string;
  release_id?: string;
  resource_id?: string;
  resource_version?: string;
  schema_version: string;
  type: WebhookEventType;
}
export interface WebhookHistoryResponse {
  history: Array<WebhookConfigurationHistory>;
  readonly meta: ResponseMeta;
}
export interface WebhookReplayResponse {
  delivery_id: string;
  replayed: boolean;
  readonly meta: ResponseMeta;
}
export interface WebhookTestResponse {
  delivery_id?: string;
  destination_id: string;
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

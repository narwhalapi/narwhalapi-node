// Generated from spec/live/openapi.json sha256 5071bd97e9507eb56b344d00a24ba056ce1340fe1184faa4d755fe7e407e1cf6. Do not edit.
// Generated from spec/next/openapi.json sha256 5071bd97e9507eb56b344d00a24ba056ce1340fe1184faa4d755fe7e407e1cf6. Do not edit.
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
export type CatalogueLatestFrequency =
  | "annual"
  | "daily"
  | "monthly"
  | "quarterly"
  | (string & {});
export type CatalogueLatestSeasonalAdjustment =
  | "not_applicable"
  | "not_seasonally_adjusted"
  | "not_stated"
  | "seasonally_adjusted"
  | (string & {});
export type CentralBankBalanceSheetScale = "millions" | "units" | (string & {});
export type CommodityUnit = "barrel" | "pound" | "troy_ounce" | (string & {});
export type CompanyRelationKind =
  | "cross_listed"
  | "predecessor"
  | "successor"
  | (string & {});
export type CompanySearchMatch =
  | "code"
  | "former_code"
  | "former_name"
  | "id"
  | "name"
  | (string & {});
export type CompanyStandard =
  | "ifrs"
  | "j_gaap"
  | "jmis"
  | "k_gaap"
  | "us_gaap"
  | (string & {});
export type CostEquityRiskPremiumBasis =
  | "modelled"
  | "observed"
  | "table"
  | (string & {});
export type CostEquityRiskPremiumSource = "caller" | "narwhal" | (string & {});
export type CostOfCapitalBeta = "adjusted" | "raw" | (string & {});
export type CostOfCapitalFrequency = "monthly" | "weekly" | (string & {});
export type CostOfCapitalPeriod = "annual" | "ttm" | (string & {});
export type CostOfCapitalWindow = "2y" | "5y" | (string & {});
export type CostOfDebtBasis = "ours" | "table" | (string & {});
export type CostRiskFreeBasis = "caller" | "ours" | (string & {});
export type CostRiskFreeSource = "caller" | "yield_curve" | (string & {});
export type CostTaxRateBasis = "caller" | "table" | (string & {});
export type CostTaxRateSource = "caller" | "country_table" | (string & {});
export type CryptoBarInterval = "1d" | "1m" | (string & {});
export type CryptoPriceErrorCode =
  | "not_covered"
  | "not_found"
  | "upstream_busy"
  | (string & {});
export type CryptoQuote = "EUR" | "GBP" | "USD" | (string & {});
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
export type EquityEarningTime =
  | "after_close"
  | "before_open"
  | "during"
  | (string & {});
export type EquityMarketSession =
  | "closed"
  | "open"
  | "post"
  | "pre"
  | (string & {});
export type EquityType =
  | "closed_end_fund"
  | "common_stock"
  | "depositary_receipt"
  | "other"
  | "preferred_stock"
  | "reit"
  | "right"
  | "unit"
  | "warrant"
  | (string & {});
export type ExtremeObservation =
  | "any_release"
  | "any_trade"
  | "close"
  | (string & {});
export type FilingEventType =
  | "annual"
  | "event"
  | "ownership"
  | "quarterly"
  | "semiannual"
  | (string & {});
export type FilingType =
  | "annual"
  | "event"
  | "insider"
  | "other"
  | "ownership"
  | "quarterly"
  | "semiannual"
  | (string & {});
export type FinancialStatement =
  | "balance"
  | "cash_flow"
  | "income"
  | "other"
  | "per_share"
  | "shares"
  | (string & {});
export type FinancialsBasis = "consolidated" | "standalone" | (string & {});
export type FinancialsPeriod =
  | "annual"
  | "quarterly"
  | "semiannual"
  | (string & {});
export type FinancialsVersion = "first_reported" | "latest" | (string & {});
export type FiscalPeriod =
  | "FY"
  | "H1"
  | "H2"
  | "Q1"
  | "Q2"
  | "Q3"
  | "Q4"
  | (string & {});
export type FundDistributionKind = "capital_gain" | "income" | (string & {});
export type FundType = "etf" | "mutual_fund" | (string & {});
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
export type Language = "en" | "original" | (string & {});
export type MarketSession =
  | "interbank_closed"
  | "open"
  | "weekend"
  | (string & {});
export type MoversDirection = "active" | "gainers" | "losers" | (string & {});
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
export type PointPolicyRateQualifier = "around" | "exact" | (string & {});
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
export type Registry =
  | "aut"
  | "bel"
  | "cyp"
  | "cze"
  | "dnk"
  | "esp"
  | "est"
  | "fin"
  | "fra"
  | "gbr"
  | "grc"
  | "hrv"
  | "hun"
  | "isl"
  | "ita"
  | "jpn"
  | "kor"
  | "ltu"
  | "lux"
  | "lva"
  | "mlt"
  | "nld"
  | "nor"
  | "pol"
  | "prt"
  | "rou"
  | "svk"
  | "svn"
  | "swe"
  | "twn"
  | "usa"
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
export type SecurityType =
  | "adr"
  | "common"
  | "other"
  | "preferred"
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
  | "filing.published"
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
  | "filings"
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
export interface AsReportedConcept {
  concept: string;
  label?: string;
  taxonomy: string;
  unit: string;
  values: Array<AsReportedValue>;
}
export interface AsReportedPage {
  concepts: Array<AsReportedConcept>;
  readonly meta: ResponseMeta;
}
export interface AsReportedValue {
  end: string;
  start?: string;
  value: Decimal;
}
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
  /** Sent on upcoming, trading and closed events. On upcoming and trading events, true after more than 3 minutes without a venue check or when the stored snapshot was already stale. On those events, no probabilities are sent after more than 30 minutes without a venue check, if no check time is recorded, or if the stored snapshot had no live quotes. In that case, every `quotes` list is empty and every venue is excluded. The exclusion reason is stale unless the venue already has another reason. A closed event also sends no probabilities if it had no live quotes when it closed. Closed events are stale only when their stored snapshot was already stale; elapsed time never makes them stale. Do not trade on stale events. Absent on settled and void events. */
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
export interface CatalogueBulkLatest {
  /** Selected ids the source does not know or that have no observation; [] if none. */
  missing: Array<string>;
  observations: Array<CatalogueLatest>;
  readonly meta: ResponseMeta;
}
export interface CatalogueEntry {
  country?: string;
  first_period?: string;
  frequency?: CatalogueLatestFrequency;
  id?: string;
  id_template?: string;
  last_period?: string;
  source: string;
  title: string;
  unit_label?: string;
}
export interface CatalogueHistory {
  attribution: string;
  base_period?: string;
  country?: string;
  /** Present only when the source states the currency. */
  currency?: string;
  /** When Narwhal read the source; a live series has no revision history. */
  fetched_at: string;
  frequency: CatalogueLatestFrequency;
  id: string;
  licence_url: string;
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
  next_cursor?: string;
  observations: Array<ResourceObservation>;
  /** The source's multiplier text (such as thousands); never applied to values. */
  scale?: string;
  seasonal_adjustment: CatalogueLatestSeasonalAdjustment;
  /** True when the source could not be reached and the last copy is served. */
  stale?: boolean;
  title: string;
  unit: string;
  /** The unit in the source's own words; a series with none is not served. */
  unit_label: string;
  readonly meta: ResponseMeta;
}
export interface CatalogueLatest {
  attribution: string;
  base_period?: string;
  country?: string;
  /** Present only when the source states the currency. */
  currency?: string;
  /** When Narwhal read the source; a live series has no revision history. */
  fetched_at: string;
  /** When Narwhal first stored this value (version=first_reported only). Periods released before Narwhal began capturing show the first capture, not the agency's original release. */
  first_reported_at?: string;
  frequency: CatalogueLatestFrequency;
  id: string;
  licence_url: string;
  period: string;
  released_on?: string;
  /** The source's multiplier text (such as thousands); never applied to values. */
  scale?: string;
  seasonal_adjustment: CatalogueLatestSeasonalAdjustment;
  /** True when the source could not be reached and the last copy is served. */
  stale?: boolean;
  status?: ResourceObservationStatus;
  title: string;
  unit: string;
  /** The unit in the source's own words; a series with none is not served. */
  unit_label: string;
  value: Decimal;
}
export interface CatalogueSearchPage {
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
  next_cursor?: string;
  results: Array<CatalogueEntry>;
  readonly meta: ResponseMeta;
}
export interface CatalogueSeries {
  attribution: string;
  base_period?: string;
  country?: string;
  /** Present only when the source states the currency. */
  currency?: string;
  /** When Narwhal read the source; a live series has no revision history. */
  fetched_at: string;
  first_period: string;
  frequency: CatalogueLatestFrequency;
  id: string;
  last_period: string;
  licence_url: string;
  /** The source's multiplier text (such as thousands); never applied to values. */
  scale?: string;
  seasonal_adjustment: CatalogueLatestSeasonalAdjustment;
  /** True when the source could not be reached and the last copy is served. */
  stale?: boolean;
  title: string;
  unit: string;
  /** The unit in the source's own words; a series with none is not served. */
  unit_label: string;
  readonly meta: ResponseMeta;
}
export interface CentralBankBalanceSheet {
  country: string;
  currency: string;
  period: string;
  released_on: string;
  scale: CentralBankBalanceSheetScale;
  value: Decimal;
  readonly meta: ResponseMeta;
}
export interface CentralBankReserves {
  country: string;
  currency: string;
  period: string;
  released_on: string;
  scale: CentralBankBalanceSheetScale;
  value: Decimal;
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
  /** Sent only when the plan cut the requested end: the exclusive end served. */
  end?: string;
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
export interface CompanyFilingsPage {
  filed_from?: string;
  filings: Array<ListedFiling>;
  id: string;
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
  next_cursor?: string;
  readonly meta: ResponseMeta;
}
export interface CompanyIndustry {
  industry?: string;
  isic?: string;
  sector?: string;
  source_code?: string;
  source_scheme?: string;
}
export interface CompanyNameSpan {
  from?: string;
  name: string;
  to?: string;
}
export interface CompanyRelation {
  id: string;
  kind: CompanyRelationKind;
}
export interface CompanySearchHit {
  code?: string;
  country?: string;
  delisted?: boolean;
  former_code?: boolean;
  former_name?: string;
  id: string;
  matched?: CompanySearchMatch;
  mic?: string;
  name: string;
}
export interface CompanySearchPage {
  companies: Array<CompanySearchHit>;
  coverage?: Array<RegistryCoverage>;
  readonly meta: ResponseMeta;
}
export interface CompanySecurity {
  adr_ratio?: Decimal;
  class: string;
  figi?: string;
  isin?: string;
  listings: Array<SecurityListing>;
  primary?: boolean;
  title?: string;
  type: SecurityType;
}
export interface CompanyWithListings {
  country?: string;
  delisted?: boolean;
  fiscal_year_end?: string;
  id: string;
  industry?: CompanyIndustry;
  jp_corporate_number?: string;
  lei?: string;
  /** Stock listing ids (`XNAS:MSFT`) linked to this company, to use with `/v1/equities`: an exact match of exchange and ticker active today, never of names. An empty list means none. Left out only when the symbol list cannot be read right now. Shown on every plan, only while the stock routes are published. */
  listings?: Array<string>;
  name: string;
  names: Array<CompanyNameSpan>;
  related: Array<CompanyRelation>;
  securities: Array<CompanySecurity>;
  standard?: CompanyStandard;
  standard_variant?: string;
  status_date?: string;
  readonly meta: ResponseMeta;
}
export interface CostBenchmark {
  /** Present, as true, when the benchmark is our default for the stock's market. */
  default?: boolean;
  /** Listing id of the benchmark. */
  id: string;
}
export interface CostBeta {
  /** 0.67 times `raw` plus 0.33. */
  adjusted: Decimal;
  benchmark: CostBenchmark;
  /** Date of the last price behind the last return. */
  end: string;
  frequency: CostOfCapitalFrequency;
  /** Number of returns in the regression. */
  observations: number;
  /** Share of the stock's variance explained. */
  r_squared: Decimal;
  /** Slope of the stock's returns on the benchmark's, both from prices adjusted for splits and dividends. */
  raw: Decimal;
  /** Date of the first price behind the first return. */
  start: string;
  /** Standard error of `raw`. */
  std_error: Decimal;
  /** The beta in `cost_of_equity`. */
  used: CostOfCapitalBeta;
  window: CostOfCapitalWindow;
}
export interface CostEquityRiskPremium {
  /** Date our premium describes. `narwhal` only. */
  as_of?: string;
  /** How our total premium was built: `observed` from our own data, `modelled` by our spread model, `table` with the country part taken from a public table. `narwhal` only. */
  basis?: CostEquityRiskPremiumBasis;
  /** Country of our premium, ISO 3166-1 alpha-3. `narwhal` only. */
  country?: string;
  /** The equity risk premium, in percent (4.25 means 4.25%). */
  rate: Decimal;
  /** Who set it: `narwhal`, our own published total equity risk premium of the stock's country, or `caller`, the `erp` you sent. */
  source: CostEquityRiskPremiumSource;
}
export interface CostOfDebt {
  /** `pre_tax` times one minus the tax rate. Left out while no tax rate is known. */
  after_tax?: Decimal;
  /** Total debt at the start and at the end of the period, averaged; the end balance alone when the start is not on file. Whole units of `currency`; leases excluded. */
  average_debt: Decimal;
  /** `ours`: interest expense over average debt from the company's filings. `table`: risk-free rate plus the table's default spread. */
  basis: CostOfDebtBasis;
  /** Total debt at `period_end`. */
  closing_debt: Decimal;
  /** Default spread of that coverage ratio, in percent (4.25 means 4.25%). `table` only. */
  default_spread?: Decimal;
  /** EBIT over interest expense. `table` only; left out when there is no interest. */
  interest_coverage?: Decimal;
  /** Interest expense of the period, whole units of `currency`. */
  interest_expense: Decimal;
  /** Total debt a year before `period_end`. Left out when it is not on file. */
  opening_debt?: Decimal;
  period: CostOfCapitalPeriod;
  /** End of the newest quarter or year in the interest. */
  period_end: string;
  /** Interest expense over average total debt, in percent (4.25 means 4.25%). Where that cannot be used (interest not positive, or a result under 0.1% or over 30%) and EBIT is on file: the risk-free rate plus the default spread of the company's interest coverage ratio from a public table; `basis` says which. */
  pre_tax: Decimal;
  /** Name of the spread table. `table` only. */
  table?: string;
  /** The update of the table, for example `January 2026`. `table` only. */
  table_update?: string;
  /** Where the table is published. `table` only. */
  table_url?: string;
}
export interface CostRiskFree {
  /** Date of the curve. Not sent for `caller`. */
  as_of?: string;
  /** `ours`: the official government yield curve we publish. `caller`: yours. */
  basis: CostRiskFreeBasis;
  /** Country of the yield curve. Not sent for `caller`. */
  country?: string;
  /** How the curve is quoted (par, zero-coupon, Svensson, yield to maturity): they differ a little between countries. Not sent for `caller`. */
  curve_type?: string;
  /** Point of the curve. Not sent for `caller`. */
  maturity?: string;
  /** The risk-free rate, in percent (4.25 means 4.25%). */
  rate: Decimal;
  source: CostRiskFreeSource;
}
export interface CostTaxRate {
  /** `table`: the country's rate from a public table. `caller`: yours. */
  basis: CostTaxRateBasis;
  /** ISO 3166-1 alpha-3 code of the country the rate is for. Table rate only. */
  country?: string;
  /** The tax rate on debt, in percent (4.25 means 4.25%). */
  rate: Decimal;
  /** `country_table`: the corporate tax rate of the stock's country from a public table. `caller`: the `tax_rate` you sent. */
  source: CostTaxRateSource;
  /** Name of the table, with its publisher and source. Table rate only. */
  table?: string;
  /** The update of the table the rate is from, for example `January 2026`. */
  table_update?: string;
  /** Where the table is published. Table rate only. */
  table_url?: string;
}
export interface CostWarning {
  /** Stable machine-readable code. */
  code: string;
  /** What it means, in plain words. */
  message: string;
}
export interface CostWeights {
  /** Debt over market cap plus debt, in percent (4.25 means 4.25%). */
  debt: Decimal;
  /** Market cap over market cap plus debt, in percent (4.25 means 4.25%). */
  equity: Decimal;
  /** Latest price times shares outstanding, whole units of `currency`. */
  market_cap: Decimal;
  /** When the price behind `market_cap` was valid. */
  market_cap_as_of: string;
  /** Latest total debt on file, whole units of `currency`; leases excluded. */
  total_debt: Decimal;
  /** Balance sheet date of `total_debt`. */
  total_debt_as_of: string;
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
  next_cursor?: string;
  observations: Array<CpiHistoryObservation>;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  /** The start of the plan window, present only when the plan raised the requested start. Earlier periods are not served. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface CpiHistoryObservation {
  /** When Narwhal first stored this period (version=first_reported only). Where the measures of one period were first stored at different times, the latest of them. A period released before Narwhal began capturing shows our first capture, not the agency's original release. */
  first_reported_at?: string;
  period: string;
  value: Decimal;
}
export interface CryptoBar {
  close: Decimal;
  high: Decimal;
  low: Decimal;
  open: Decimal;
  /** Start of the bar's period (UTC): 00:00 for a daily bar, the minute for a one-minute bar. */
  timestamp: string;
}
export interface CryptoBars {
  /** At most 5,000 bars a page. */
  bars: Array<CryptoBar>;
  /** Sent only on Free daily bars, when the 15-minute delay cut the range: the last day served. A day's bar reaches Free 15 minutes after 00:00 UTC. */
  end?: string;
  /** Pass it back to read the next page. Null on the last page. */
  next_cursor?: string;
  /** Canonical pair. */
  pair: string;
  /** Sent only when the plan raised the start: the first day (daily) or time (1m) served. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface CryptoPair {
  /** The coin's ticker. */
  base: string;
  /** The coin's name. */
  name: string;
  /** Canonical pair, for example BTC-USD. */
  pair: string;
  /** The quote currency. */
  quote: string;
}
export interface CryptoPairs {
  /** Every pair we price, by pair. A pair is listed while it trades at least once every 30 seconds and dropped when it falls below once every 2 minutes. */
  pairs: Array<CryptoPair>;
  readonly meta: ResponseMeta;
}
export interface CryptoPrice {
  /** The coin's ticker. */
  base: string;
  /** `price` minus the price 24 hours earlier, worked out from the 24-hour change in percent. Left out on Free (its price is 15 minutes late) and when it is not known. */
  change_24h?: Decimal;
  /** The 24-hour change in percent (1.5 means 1.5%). Left out with `change_24h`. */
  change_24h_percent?: Decimal;
  /** Present, as true, only when the price is 15 minutes late (Free plan). */
  delayed?: boolean;
  /** Canonical pair. */
  pair: string;
  /** Last price, up to 8 significant digits. */
  price: Decimal;
  /** The quote currency; every price is in it. */
  quote: string;
  /** True when the price is more than 5 minutes old or could not be refreshed. */
  stale: boolean;
  /** When the price was valid (UTC, whole seconds). */
  timestamp: string;
  readonly meta: ResponseMeta;
}
export interface CryptoPriceError {
  /** not_found: no such listing. not_covered: the exchange has no prices yet. upstream_busy: the price could not be fetched now; try again shortly. */
  code: CryptoPriceErrorCode;
  /** The id as it was asked for. */
  id: string;
}
export interface CryptoPrices {
  /** Pairs that returned no price. They are not counted against the quota. */
  errors: Array<CryptoPriceError>;
  /** One price per pair that resolved, by pair. */
  prices: Array<CryptoPrice>;
  readonly meta: ResponseMeta;
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
export interface DividendsCalendar {
  /** By ex-date, then id. */
  entries: Array<DividendsCalendarEntry>;
  /** Always null: a request of at most 7 days is one page. */
  next_cursor?: string;
  readonly meta: ResponseMeta;
}
export interface DividendsCalendarEntry {
  /** Dividend per share, in `currency`. */
  amount: Decimal;
  /** Currency of `amount`. */
  currency: string;
  /** First day the share trades without the dividend. */
  ex_date: string;
  /** Our listing id, for example XNAS:MSFT. */
  id: string;
  /** The company's name. */
  name: string;
  /** The listing's ticker. */
  symbol: string;
}
export interface EconomicCalendar {
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
export interface EquityBar {
  close: Decimal;
  /** Session date (YYYY-MM-DD). Daily bars only; left out on one-minute bars. */
  date?: string;
  high: Decimal;
  low: Decimal;
  open: Decimal;
  /** Start of the bar's period (UTC): the exchange's open for a daily bar, the minute for a one-minute bar. */
  timestamp: string;
  /** Shares traded in the period. Left out when it is not known. */
  volume?: Decimal;
}
export interface EquityBars {
  /** Always true: prices are adjusted for splits and dividends. A page and the next one always agree; if a split or dividend changes the history between two pages, the cursor stops working (409 cursor_expired) instead of mixing the two. */
  adjusted: boolean;
  /** At most 5,000 bars a page. */
  bars: Array<EquityBar>;
  /** Currency of every price. Pence become pounds. */
  currency: string;
  /** Sent only on Free daily bars, when the 15-minute delay cut the range: the last day served. Today's bar reaches Free 15 minutes after the exchange closes. */
  end?: string;
  /** Canonical listing id. */
  id: string;
  /** Pass it back to read the next page. Null on the last page. */
  next_cursor?: string;
  /** Sent only when the plan raised the start: the first day (daily) or time (1m) served. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface EquityCostOfCapital {
  beta: CostBeta;
  /** The company in our filings that the listing matches. */
  company_id: string;
  /** Left out for a company with no debt on file. */
  cost_of_debt?: CostOfDebt;
  /** Risk-free rate plus beta times equity risk premium, in percent (4.25 means 4.25%). */
  cost_of_equity: Decimal;
  /** Currency of the money fields. */
  currency: string;
  equity_risk_premium: CostEquityRiskPremium;
  /** Canonical listing id. */
  id: string;
  /** How every figure is worked out. */
  methodology_url: string;
  risk_free: CostRiskFree;
  /** Left out when the country has no rate in the table. Send `tax_rate` to set one. */
  tax_rate?: CostTaxRate;
  /** Weighted average cost of capital, in percent (4.25 means 4.25%). Equals `cost_of_equity` for a company with no debt. Left out while debt exists and no tax rate is known. */
  wacc?: Decimal;
  /** Things to check before using the numbers. Empty when there are none. */
  warnings: Array<CostWarning>;
  weights: CostWeights;
  readonly meta: ResponseMeta;
}
export interface EquityDividend {
  /** Dividend per share, in `currency`. */
  amount: Decimal;
  /** Currency of `amount`. Pence are converted to pounds. */
  currency: string;
  /** First day the share trades without the dividend. */
  ex_date: string;
  /** Day it is paid. Left out when not known. */
  pay_date?: string;
  /** Day the holder must be on record. Left out when not known. */
  record_date?: string;
}
export interface EquityDividends {
  /** Newest ex-date first. May include announced future rows. */
  dividends: Array<EquityDividend>;
  /** Canonical listing id. */
  id: string;
  /** Pass as `cursor` for the next page; null on the last page. */
  next_cursor?: string;
  /** First day the plan's history window reaches (Free 12 months, Basic 5 years, Pro full). Present only when older rows exist that the plan cannot see; upcoming rows are never cut. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface EquityEarning {
  /** Report day (today or earlier at the exchange). */
  date: string;
  /** Reported earnings per share on the market data basis, which can differ from the filings EPS in `eps_ttm` of the valuation. Left out until it is reported. */
  eps_actual?: Decimal;
  /** Analysts' earnings per share estimate. Left out when there is none. */
  eps_estimate?: Decimal;
  /** The annual, semiannual or quarterly report in our filings that covers this report: pass it to the filings `GET /v1/filings/{filing_id}`. Left out when the company has no filings match and when no report fits the date. */
  filing_id?: string;
  /** `eps_actual` minus `eps_estimate`, rounded to 2 places. */
  surprise?: Decimal;
  /** `surprise` as a percent of the estimate (8.31 means 8.31%), 2 places. */
  surprise_percent?: Decimal;
  /** When in the day it reports. Left out when not known. */
  time?: EquityEarningTime;
}
export interface EquityEarnings {
  /** Past reports only, newest first. Upcoming report dates are not included yet. */
  earnings: Array<EquityEarning>;
  /** Canonical listing id. */
  id: string;
  /** Pass as `cursor` for the next page; null on the last page. */
  next_cursor?: string;
  /** First day the plan's history window reaches (Free 12 months, Basic 5 years, Pro full). Present only when older rows exist that the plan cannot see. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface EquityMover {
  /** Change since the previous close, in percent (31.4 means 31.4%), 2 places. */
  change_percent: Decimal;
  /** Canonical listing id. */
  id: string;
  /** Company or fund name. */
  name: string;
  /** Latest price, in US dollars. */
  price: Decimal;
  /** Ticker on that exchange. */
  symbol: string;
  /** Shares traded today. */
  volume: Decimal;
}
export interface EquityMovers {
  /** The ranking asked for. */
  direction: MoversDirection;
  /** The market ranked. */
  market: string;
  /** Up to 25, best first. Only ordinary shares and ETFs priced at $1 or more, with at least 100,000 shares and $1 million traded today. */
  movers: Array<EquityMover>;
  /** When the newest price in the list was valid (UTC). */
  timestamp: string;
  readonly meta: ResponseMeta;
}
export interface EquityPrice {
  /** `price` minus `previous_close`. Left out with `previous_close`. */
  change?: Decimal;
  /** Change since `previous_close`, in percent (1.5 means 1.5%). */
  change_percent?: Decimal;
  /** Currency of every price field. Pence are converted to pounds. */
  currency: string;
  /** Present, as true, only when the price is 15 minutes late (Free plan). */
  delayed?: boolean;
  /** Canonical listing id. */
  id: string;
  /** State of the listing's exchange at `timestamp`: pre, open, post or closed. Only US exchanges have pre and post. */
  market_session: EquityMarketSession;
  /** Previous session's close. Left out when it is not known. */
  previous_close?: Decimal;
  /** Last price, in `currency`. */
  price: Decimal;
  /** True when the price is older than 15 minutes while the exchange is open, or could not be refreshed. A closed market is never stale. */
  stale: boolean;
  /** Ticker on that exchange. */
  symbol: string;
  /** When the price was valid (UTC, whole seconds). */
  timestamp: string;
  /** Shares traded today. Left out when it is not known, and always left out on a delayed answer. */
  volume?: Decimal;
  readonly meta: ResponseMeta;
}
export interface EquityPriceError {
  /** not_found: no such listing. not_covered: the exchange has no prices yet. upstream_busy: the price could not be fetched now; try again shortly. */
  code: CryptoPriceErrorCode;
  /** The id as it was asked for. */
  id: string;
}
export interface EquityPrices {
  /** Ids that returned no price. They are not counted against the quota. */
  errors: Array<EquityPriceError>;
  /** One price per id that resolved, by id. */
  prices: Array<EquityPrice>;
  readonly meta: ResponseMeta;
}
export interface EquityProfile {
  /** The company's filings id, when the listing matches one cleanly. */
  company_id?: string;
  /** Country of the listing, three letters. */
  country?: string;
  currency: string;
  /** Canonical listing id. */
  id: string;
  /** Industry. Left out for Japan listings. */
  industry?: string;
  /** Our own copy of the company's logo. Left out when we have none. */
  logo_url?: string;
  /** The exchange's four-letter code. */
  mic: string;
  name: string;
  /** Sector. Left out for Japan listings, which carry no profile text. */
  sector?: string;
  /** Ticker on that exchange. */
  symbol: string;
  type: EquityType;
  /** The company's website. Left out for Japan listings. */
  website?: string;
  readonly meta: ResponseMeta;
}
export interface EquityRiskPremium {
  as_of: string;
  basis: EquityRiskPremiumBasis;
  country: string;
  country_default_spread: Decimal;
  country_risk_premium: Decimal;
  mature_erp: Decimal;
  methodology_url?: string;
  total_erp: Decimal;
  unit: string;
  volatility_ratio?: Decimal;
  readonly meta: ResponseMeta;
}
export interface EquityRiskPremiumBasis {
  country_default_spread: CostEquityRiskPremiumBasis;
  country_risk_premium: CostEquityRiskPremiumBasis;
  mature_erp: CostEquityRiskPremiumBasis;
  total_erp: CostEquityRiskPremiumBasis;
  volatility_ratio: CostEquityRiskPremiumBasis;
}
export interface EquityRiskPremiumHistoryResponse {
  country: string;
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
  next_cursor?: string;
  observations: Array<EquityRiskPremium>;
  readonly meta: ResponseMeta;
}
export interface EquityRiskPremiumList {
  countries: Array<EquityRiskPremium>;
  readonly meta: ResponseMeta;
}
export interface EquitySearchResult {
  /** The company's filings id, when the listing matches one cleanly. */
  company_id?: string;
  /** Country of the listing, three letters. */
  country?: string;
  currency: string;
  /** Canonical listing id. */
  id: string;
  mic: string;
  name: string;
  symbol: string;
  type: EquityType;
}
export interface EquitySearchResults {
  /** Pass it back to read the next page. Null on the last page. */
  next_cursor?: string;
  /** At most 50 a page. */
  results: Array<EquitySearchResult>;
  readonly meta: ResponseMeta;
}
export interface EquitySplit {
  /** First day the shares trade split-adjusted. */
  date: string;
  /** New shares for old: 10:1 gives ten shares for each one held; 1:10 is a reverse split. */
  ratio: string;
}
export interface EquitySplits {
  /** Canonical listing id. */
  id: string;
  /** Newest first. */
  splits: Array<EquitySplit>;
  /** First day the plan's history window reaches (Free 12 months, Basic 5 years, Pro full). Present only when older rows exist that the plan cannot see; upcoming rows are never cut. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface EquityValuation {
  /** The company in our filings that the listing matches. */
  company_id: string;
  /** Currency of `market_cap` and of the price behind `pe_ratio`. */
  currency: string;
  /** Dividends declared per share of the main common class over the last 12 months, in the reporting currency. Shown whenever it can be worked out. */
  dividend_per_share_ttm?: Decimal;
  /** Dividends per share of the last 12 months over the latest price, in percent (0.71 means 0.71%), 2 places. Left out when no dividend is on file for those 12 months (a company that pays none included), when a split happened after `dividends_period_end`, when the dividends are in another currency than `currency`, and for a depositary receipt. */
  dividend_yield?: Decimal;
  /** End of the newest quarter in `dividend_per_share_ttm`. Shown whenever it is. */
  dividends_period_end?: string;
  /** End of the newest quarter in `eps_ttm`. Shown whenever `eps_ttm` is. */
  eps_period_end?: string;
  /** Trailing 12-month diluted EPS from company filings (GAAP or IFRS as reported); the fourth quarter is the annual figure minus the first three. Shown whenever it can be worked out; left out for a listing that is another class of the company. It can differ from the `eps_actual` of stock earnings, which is on the market data basis. */
  eps_ttm?: Decimal;
  /** Balance sheet date of `total_equity`. Shown whenever it is. */
  equity_as_of?: string;
  /** Canonical listing id. */
  id: string;
  /** Latest price times `shares_outstanding`, in `currency`, whole units. Left out when a split happened after `shares_as_of`, when the company has several share classes without a count for each, and for a depositary receipt or foreign filer. Korea has no market cap yet: its listings show P/E only for now. */
  market_cap?: Decimal;
  /** Price to book: `market_cap` divided by `total_equity`, 2 places. Left out whenever `market_cap` is, when total equity is 0 or negative, and when it is reported in another currency than `currency`. */
  pb_ratio?: Decimal;
  /** Latest price divided by `eps_ttm`, 2 places. Left out when `eps_ttm` is negative or under 0.01, when the reporting currency is not `currency`, when a split happened after `eps_period_end`, and for a depositary receipt. */
  pe_ratio?: Decimal;
  /** Price to sales: `market_cap` divided by `revenue_ttm`, 2 places. Left out whenever `market_cap` is, when revenue is not above 0, and when it is reported in another currency than `currency`. */
  ps_ratio?: Decimal;
  /** End of the newest quarter in `revenue_ttm`. Shown whenever it is. */
  revenue_period_end?: string;
  /** Revenue of the last 12 months from company filings, whole units of the reporting currency (the fourth quarter is the annual figure minus the first three). Left out when no four quarters or full year are on file and for a listing that is another class of the company. */
  revenue_ttm?: Decimal;
  /** Date `shares_outstanding` is counted at. Shown whenever the count is. */
  shares_as_of?: string;
  /** Shares outstanding of the company's main common share class. Left out for a listing that is another class, such as a preferred line, which has no count here. */
  shares_outstanding?: Decimal;
  /** When the price behind the answer was valid (UTC). */
  timestamp: string;
  /** Total equity of the latest balance sheet, including non-controlling interests, whole units of the reporting currency. Can be negative. */
  total_equity?: Decimal;
  readonly meta: ResponseMeta;
}
export interface EquityValuationHistory {
  /** The company in our filings that the listing matches. */
  company_id: string;
  /** Currency of every price and market cap. */
  currency: string;
  /** Canonical listing id. */
  id: string;
  /** One point per fiscal period end of the company, oldest first. Each is worked out from the figures filed for that period and the price on that day, not from what was known then: a later restatement is in it. A period without a price, or without any figure, has no point. */
  points: Array<EquityValuationPoint>;
  /** First day the plan's history window reaches (Basic 5 years, Pro full). Present only when older periods exist that the plan cannot see. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface EquityValuationPoint {
  /** A fiscal period end of the company (quarter or year end): every figure in the point is as of this day. */
  date: string;
  /** Dividends per share of the four quarters ending on `date` over `price`, in percent (0.71 means 0.71%), 2 places. Left out when no dividend is on file for those quarters, they are not in `currency`, and for a depositary receipt. */
  dividend_yield?: Decimal;
  /** `price` times the share count nearest to `date` (counted from 130 days before to 45 days after it), on today's share basis, whole units of `currency`. Left out when there is no such count, for several share classes without a count for each, and for a depositary receipt or foreign filer. */
  market_cap?: Decimal;
  /** `market_cap` over total equity of the balance sheet dated `date`, 2 places. Left out whenever `market_cap` is, or the equity is not on file, not above 0 or not in `currency`. */
  pb_ratio?: Decimal;
  /** `price` over diluted EPS of the four quarters ending on `date`, 2 places. Left out when EPS is negative or under 0.01, not reported in `currency`, or the four quarters (or the year) ending on `date` are not on file, and for a depositary receipt. */
  pe_ratio?: Decimal;
  /** Closing price on `price_date`, in `currency`, adjusted for splits only (never for dividends), so it is on today's share basis. Left out, with every figure below, when the prices of that period could not be read right now: try again later. */
  price?: Decimal;
  /** Last trading day on or before `date` (at most 7 days earlier) the price is from. */
  price_date?: string;
  /** `market_cap` over revenue of the four quarters ending on `date`, 2 places. Left out whenever `market_cap` is, or the revenue is not on file, not above 0 or not in `currency`. */
  ps_ratio?: Decimal;
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
  /** Sent on upcoming, trading and closed events. On upcoming and trading events, true after more than 3 minutes without a venue check or when the stored snapshot was already stale. On those events, no probabilities are sent after more than 30 minutes without a venue check, if no check time is recorded, or if the stored snapshot had no live quotes. In that case, every `quotes` list is empty and every venue is excluded. The exclusion reason is stale unless the venue already has another reason. A closed event also sends no probabilities if it had no live quotes when it closed. Closed events are stale only when their stored snapshot was already stale; elapsed time never makes them stale. Do not trade on stale events. Absent on settled and void events. */
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
export interface Filing {
  amends?: string;
  company_id: string;
  filed_at: string;
  filer_id?: string;
  form: string;
  fp?: FiscalPeriod;
  fy?: number;
  id: string;
  period_end?: string;
  title?: string;
  type: FilingType;
  url?: string;
  withdrawn?: boolean;
  readonly meta: ResponseMeta;
}
export interface FilingWebhookEvent {
  company_id: string;
  filed_at: string;
  /** The filing's accession, as `filing_id` in the Filings API. */
  filing_id: string;
  form: string;
  /** Fiscal period, when the filing has one. */
  fp?: FiscalPeriod;
  /** Fiscal year, when the filing has one. */
  fy?: number;
  /** Period end, when the filing has one. */
  period_end?: string;
  /** 13D/G only: the company the stake is in. */
  subject_id?: string;
  type: FilingEventType;
}
export interface FinancialRow {
  currency?: string;
  derived?: Array<string>;
  end: string;
  fh?: number;
  fq?: number;
  fy: number;
  items: Record<string, Decimal>;
}
export interface Financials {
  annual?: Array<FinancialRow>;
  as_of?: string;
  basis?: FinancialsBasis;
  currency?: string;
  from_fy?: number;
  id: string;
  quarterly?: Array<FinancialRow>;
  semiannual?: Array<FinancialRow>;
  readonly meta: ResponseMeta;
}
export interface FundDistribution {
  /** Distribution per share, in `currency`. */
  amount: Decimal;
  /** Currency of `amount`. */
  currency: string;
  /** First day the fund trades without the distribution. */
  ex_date: string;
  /** What the distribution is. Left out where the source does not say. */
  kind?: FundDistributionKind;
  /** Day it is paid. Left out when not known. */
  pay_date?: string;
  /** Day the holder must be on record. Left out when not known. */
  record_date?: string;
}
export interface FundDistributions {
  /** Newest ex-date first. */
  distributions: Array<FundDistribution>;
  /** Canonical fund id. */
  id: string;
  /** Pass as `cursor` for the next page; null on the last page. */
  next_cursor?: string;
  /** First day the plan's history window reaches (Free 12 months, Basic 5 years, Pro full). Present only when older rows exist that the plan cannot see. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface FundEtfPrice {
  readonly kind: "FundEtfPrice";
  /** `price` minus `previous_close`. Left out with `previous_close`. */
  change?: Decimal;
  /** Change since `previous_close`, in percent (1.5 means 1.5%). */
  change_percent?: Decimal;
  /** Currency of every price field. Pence are converted to pounds. */
  currency: string;
  /** Present, as true, only when the price is 15 minutes late (Free plan). */
  delayed?: boolean;
  /** Canonical listing id. */
  id: string;
  /** State of the listing's exchange at `timestamp`: pre, open, post or closed. Only US exchanges have pre and post. */
  market_session: EquityMarketSession;
  /** Previous session's close. Left out when it is not known. */
  previous_close?: Decimal;
  /** Last price, in `currency`. */
  price: Decimal;
  /** True when the price is older than 15 minutes while the exchange is open, or could not be refreshed. A closed market is never stale. */
  stale: boolean;
  /** Ticker on that exchange. */
  symbol: string;
  /** When the price was valid (UTC, whole seconds). */
  timestamp: string;
  /** Always `etf` for a price with a `price` field. */
  type: string;
  /** Shares traded today. Left out when it is not known, and always left out on a delayed answer. */
  volume?: Decimal;
  readonly meta: ResponseMeta;
}
export interface FundNavPrice {
  readonly kind: "FundNavPrice";
  /** `nav` minus `previous_nav`. Left out with `previous_nav`. */
  change?: Decimal;
  /** Change since `previous_nav`, in percent (1.5 means 1.5%). */
  change_percent?: Decimal;
  /** Currency of every amount. */
  currency: string;
  /** The day the NAV is for (YYYY-MM-DD). */
  date: string;
  /** Canonical fund id. */
  id: string;
  /** Net asset value per share, in `currency`. */
  nav: Decimal;
  /** The NAV of the day before. Left out when it is not known. */
  previous_nav?: Decimal;
  /** True when the NAV is older than the next business day after its date, or could not be refreshed. */
  stale: boolean;
  /** The fund's ticker. */
  symbol: string;
  /** Always `mutual_fund` for a NAV. */
  type: string;
  readonly meta: ResponseMeta;
}
export interface FundPriceError {
  /** not_found: no such listing. not_covered: the exchange has no prices yet. upstream_busy: the price could not be fetched now; try again shortly. */
  code: CryptoPriceErrorCode;
  /** The id as it was asked for. */
  id: string;
}
export interface FundPrices {
  /** Ids that returned no price. They are not counted against the quota. */
  errors: Array<FundPriceError>;
  /** One price per id that resolved, by id. */
  prices: Array<FundPriceItem>;
  readonly meta: ResponseMeta;
}
export interface FundProfile {
  /** Country of the fund, three letters. */
  country?: string;
  currency: string;
  /** Canonical fund id. */
  id: string;
  /** The exchange's four-letter code. Left out for a mutual fund (no exchange). */
  mic?: string;
  name: string;
  /** The fund's ticker. */
  symbol: string;
  type: FundType;
  readonly meta: ResponseMeta;
}
export interface FundSearchResult {
  /** Country of the fund, three letters. */
  country?: string;
  currency: string;
  /** Canonical fund id. */
  id: string;
  /** The exchange's four-letter code. Left out for a mutual fund (no exchange). */
  mic?: string;
  name: string;
  /** The fund's ticker. */
  symbol: string;
  type: FundType;
}
export interface FundSearchResults {
  /** Pass it back to read the next page. Null on the last page. */
  next_cursor?: string;
  /** At most 50 a page. */
  results: Array<FundSearchResult>;
  readonly meta: ResponseMeta;
}
export interface FxBar {
  close: Decimal;
  high: Decimal;
  low: Decimal;
  open: Decimal;
  timestamp: string;
}
export interface FxBars {
  bars: Array<FxBar>;
  base: string;
  currency: string;
  /** Sent only when the plan cut the requested end: the exclusive end served. */
  end?: string;
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
  /** Real change on the previous quarter, in percent, not annualized. */
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
  /** When Narwhal first stored this period (version=first_reported only). Where the measures of one period were first stored at different times, the latest of them. A period released before Narwhal began capturing shows our first capture, not the agency's original release. */
  first_reported_at?: string;
  period: string;
  /** Real change on the previous quarter, in percent, not annualized. */
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
  /** When Narwhal first stored this period (version=first_reported only). Where the measures of one period were first stored at different times, the latest of them. A period released before Narwhal began capturing shows our first capture, not the agency's original release. */
  first_reported_at?: string;
  period: string;
  value: Decimal;
}
export interface Holder {
  event_date?: string;
  filed: string;
  filing_id: string;
  holder: string;
  percent?: Decimal;
  security?: HolderSecurity;
  shares?: Decimal;
}
export interface HolderSecurity {
  class?: string;
  isin?: string;
}
export interface HoldersPage {
  filed_from?: string;
  holders: Array<Holder>;
  id: string;
  readonly meta: ResponseMeta;
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
  next_cursor?: string;
  observations: Array<InflationHistoryObservation>;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  /** The start of the plan window, present only when the plan raised the requested start. Earlier periods are not served. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface InflationHistoryObservation {
  /** When Narwhal first stored this period (version=first_reported only). Where the measures of one period were first stored at different times, the latest of them. A period released before Narwhal began capturing shows our first capture, not the agency's original release. */
  first_reported_at?: string;
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
export interface LatestFiling {
  company_id: string;
  filed: string;
  form: string;
  id: string;
  title?: string;
  type: FilingType;
}
export interface LatestFilingsPage {
  filings: Array<LatestFiling>;
  readonly meta: ResponseMeta;
}
export interface ListedFiling {
  filed: string;
  form: string;
  id: string;
  period_end?: string;
  title?: string;
  type: FilingType;
}
export interface NoContent {
  readonly meta: ResponseMeta;
}
export interface PalmoilFfbMarketHistory {
  readonly kind: "PalmoilFfbMarketHistory";
  currency: string;
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
  next_cursor?: string;
  series: Array<PhysicalSeries>;
  readonly meta: ResponseMeta;
}
export interface PointPolicyRate {
  readonly kind: "PointPolicyRate";
  announced_on?: string;
  authority: string;
  country: string;
  currency: string;
  effective_on?: string;
  instrument: string;
  observed_on?: string;
  qualifier: PointPolicyRateQualifier;
  rate: Decimal;
  rate_type: string;
  unit: string;
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
export interface PolicyRateHistoryResponse {
  country: string;
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
  next_cursor?: string;
  observations: Array<PolicyRateObservation>;
  readonly meta: ResponseMeta;
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
export interface RangePolicyRate {
  readonly kind: "RangePolicyRate";
  announced_on?: string;
  authority: string;
  country: string;
  currency: string;
  effective_on?: string;
  instrument: string;
  lower_bound: Decimal;
  observed_on?: string;
  rate_type: string;
  unit: string;
  upper_bound: Decimal;
  readonly meta: ResponseMeta;
}
export interface RateHistory {
  /** When the source last updated the newest observation on this page. */
  as_of?: string;
  country: string;
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
  next_cursor?: string;
  observations: Array<RateHistoryObservation>;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  /** The start of the plan window, present only when the plan raised the requested start. Earlier periods are not served. */
  start?: string;
  readonly meta: ResponseMeta;
}
export interface RateHistoryObservation {
  /** When Narwhal first stored this period (version=first_reported only). Where the measures of one period were first stored at different times, the latest of them. A period released before Narwhal began capturing shows our first capture, not the agency's original release. */
  first_reported_at?: string;
  period: string;
  /** The rate, in percent. */
  rate: Decimal;
}
export interface RegistryCoverage {
  companies: number;
  registry: Registry;
}
export interface ResourceHistory {
  /** The requested as_of day, when one was sent. */
  as_of?: string;
  country: string;
  currency?: string;
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
  next_cursor?: string;
  observations: Array<ResourceObservation>;
  series_id: string;
  /** Present only when a distributor, not the original publisher, supplies the data. */
  source?: SeriesSource;
  unit: ResourceUnit;
  readonly meta: ResponseMeta;
}
export interface ResourceObservation {
  /** When Narwhal first stored this value (version=first_reported only). Periods released before Narwhal began capturing show the first capture, not the agency's original release. */
  first_reported_at?: string;
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
  /** Sent on upcoming, trading and closed events. On upcoming and trading events, true after more than 3 minutes without a venue check or when the stored snapshot was already stale. On those events, no probabilities are sent after more than 30 minutes without a venue check, if no check time is recorded, or if the stored snapshot had no live quotes. In that case, every `quotes` list is empty and every venue is excluded. The exclusion reason is stale unless the venue already has another reason. A closed event also sends no probabilities if it had no live quotes when it closed. Closed events are stale only when their stored snapshot was already stale; elapsed time never makes them stale. Do not trade on stale events. Absent on settled and void events. */
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
export interface SecurityListing {
  code: string;
  from?: string;
  mic: string;
  to?: string;
}
export interface SeriesSource {
  /** Organisation that distributes the statistic. */
  distributor: string;
  /** Original publisher named by the distributor. */
  publisher: string;
}
export interface SplitsCalendar {
  /** By date, then id. */
  entries: Array<SplitsCalendarEntry>;
  /** Always null: a request of at most 7 days is one page. */
  next_cursor?: string;
  readonly meta: ResponseMeta;
}
export interface SplitsCalendarEntry {
  /** First day the shares trade split-adjusted. */
  date: string;
  /** Our listing id, for example XNAS:MSFT. */
  id: string;
  /** The company's name. */
  name: string;
  /** New shares for old: 4:1 gives four shares for each one held; 1:10 is a reverse split. */
  ratio: string;
  /** The listing's ticker. */
  symbol: string;
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
  /** Sent on upcoming, trading and closed events. On upcoming and trading events, true after more than 3 minutes without a venue check or when the stored snapshot was already stale. On those events, no probabilities are sent after more than 30 minutes without a venue check, if no check time is recorded, or if the stored snapshot had no live quotes. In that case, every `quotes` list is empty and every venue is excluded. The exclusion reason is stale unless the venue already has another reason. A closed event also sends no probabilities if it had no live quotes when it closed. Closed events are stale only when their stored snapshot was already stale; elapsed time never makes them stale. Do not trade on stale events. Absent on settled and void events. */
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
  /** When Narwhal first stored this period (version=first_reported only). Where the measures of one period were first stored at different times, the latest of them. A period released before Narwhal began capturing shows our first capture, not the agency's original release. */
  first_reported_at?: string;
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
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
  /** Watched companies; left out unless the destination has the `filings` family. */
  companies?: Array<string>;
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
  /** Companies to watch, as `usa:0000320193`. Required with the `filings` family and refused without it: only filings of a listed company (or, for 13D/G, its subject) are sent. Basic 50, Pro 1,000. */
  companies?: Array<string>;
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
  /** Watched companies; left out unless the destination has the `filings` family. */
  companies?: Array<string>;
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
  filing?: FilingWebhookEvent;
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
  /** Pass as cursor to read the next page. Always sent; null on the last page. */
  next_cursor?: string;
  observations: Array<YieldCurveHistoryObservation>;
  readonly meta: ResponseMeta;
}
export interface YieldPoint {
  maturity: string;
  yield_percent: Decimal;
}
export interface FundPriceUnknown {
  readonly kind: "unknown";
  raw: Record<string, unknown>;
  readonly raw_body: Uint8Array;
  readonly meta: ResponseMeta;
}
export type FundPrice = FundEtfPrice | FundNavPrice | FundPriceUnknown;
export interface FundPriceItemUnknown {
  readonly kind: "unknown";
  raw: Record<string, unknown>;
  readonly raw_body: Uint8Array;
}
export type FundPriceItem = FundEtfPrice | FundNavPrice | FundPriceItemUnknown;
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
export interface PolicyRateUnknown {
  readonly kind: "unknown";
  raw: Record<string, unknown>;
  readonly raw_body: Uint8Array;
  readonly meta: ResponseMeta;
}
export type PolicyRate = PointPolicyRate | RangePolicyRate | PolicyRateUnknown;
export interface PolicyRateObservationUnknown {
  readonly kind: "unknown";
  raw: Record<string, unknown>;
  readonly raw_body: Uint8Array;
}
export type PolicyRateObservation =
  | PointPolicyRate
  | RangePolicyRate
  | PolicyRateObservationUnknown;

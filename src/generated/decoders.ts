// Generated from spec/live/openapi.json sha256 5071bd97e9507eb56b344d00a24ba056ce1340fe1184faa4d755fe7e407e1cf6. Do not edit.
// Generated from spec/next/openapi.json sha256 5071bd97e9507eb56b344d00a24ba056ce1340fe1184faa4d755fe7e407e1cf6. Do not edit.
import {
  optional,
  readArray,
  readBool,
  readCursor,
  readDecimal,
  readDecimalItems,
  readInt,
  readObject,
  readString,
  unknownValue,
  withMeta,
} from "../decode.js";
import type { ResponseMeta } from "../meta.js";
import type * as models from "./models.js";
export function decodeAsReportedConcept(
  value: unknown,
): models.AsReportedConcept {
  const data = readObject(value);
  return {
    concept: readString(data.concept),
    label: optional(data.label, readString),
    taxonomy: readString(data.taxonomy),
    unit: readString(data.unit),
    values: ((value: unknown) =>
      readArray(value).map((item) => decodeAsReportedValue(item)))(data.values),
  };
}
export function decodeAsReportedPage(
  value: unknown,
  meta: ResponseMeta = {},
): models.AsReportedPage {
  const data = readObject(value);
  return withMeta(
    {
      concepts: ((value: unknown) =>
        readArray(value).map((item) => decodeAsReportedConcept(item)))(
        data.concepts,
      ),
    },
    meta,
  );
}
export function decodeAsReportedValue(value: unknown): models.AsReportedValue {
  const data = readObject(value);
  return {
    end: readString(data.end),
    start: optional(data.start, readString),
    value: readDecimal(data.value),
  };
}
export function decodeBinaryEvent(
  value: unknown,
  meta: ResponseMeta = {},
): models.BinaryEvent {
  const data = readObject(value);
  return withMeta(
    {
      as_of: optional(data.as_of, readString),
      closes_at: optional(data.closes_at, readString),
      event_id: readString(data.event_id),
      labels: optional(data.labels, decodeBinaryLabels),
      probability: optional(data.probability, readString),
      question: readString(data.question),
      quotes: ((value: unknown) =>
        readArray(value).map((item) => decodeQuote(item)))(data.quotes),
      release_id: optional(data.release_id, readString),
      resolution: readString(data.resolution),
      resolves_at: optional(data.resolves_at, readString),
      resolves_with: optional(data.resolves_with, readString),
      result: optional(data.result, decodePredictionResult),
      stale: optional(data.stale, readBool),
      status: readString(data.status),
      topic_id: readString(data.topic_id),
      unit: optional(data.unit, readString),
      venues: ((value: unknown) =>
        readArray(value).map((item) => decodePredictionVenue(item)))(
        data.venues,
      ),
    },
    meta,
  );
}
export function decodeBinaryLabels(value: unknown): models.BinaryLabels {
  const data = readObject(value);
  return {
    no: readString(data.no),
    yes: readString(data.yes),
  };
}
export function decodeCalendarCoverage(
  value: unknown,
): models.CalendarCoverage {
  const data = readObject(value);
  return {
    scope: readString(data.scope),
    subdivision_codes: optional(data.subdivision_codes, (value: unknown) =>
      readArray(value).map((item) => readString(item)),
    ),
  };
}
export function decodeCalendarHoliday(value: unknown): models.CalendarHoliday {
  const data = readObject(value);
  return {
    date: readString(data.date),
    local_name: optional(data.local_name, readString),
    name: readString(data.name),
    observed: optional(data.observed, readBool),
    scope: readString(data.scope),
    subdivision_codes: optional(data.subdivision_codes, (value: unknown) =>
      readArray(value).map((item) => readString(item)),
    ),
  };
}
export function decodeCalendarHolidays(
  value: unknown,
  meta: ResponseMeta = {},
): models.CalendarHolidays {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      coverage: ((value: unknown) =>
        readArray(value).map((item) => decodeCalendarCoverage(item)))(
        data.coverage,
      ),
      holidays: ((value: unknown) =>
        readArray(value).map((item) => decodeCalendarHoliday(item)))(
        data.holidays,
      ),
    },
    meta,
  );
}
export function decodeCalendarHolidaysOnDate(
  value: unknown,
  meta: ResponseMeta = {},
): models.CalendarHolidaysOnDate {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      coverage: ((value: unknown) =>
        readArray(value).map((item) => decodeCalendarCoverage(item)))(
        data.coverage,
      ),
      holidays: ((value: unknown) =>
        readArray(value).map((item) => decodeCalendarHoliday(item)))(
        data.holidays,
      ),
    },
    meta,
  );
}
export function decodeCalendarNextHoliday(
  value: unknown,
  meta: ResponseMeta = {},
): models.CalendarNextHoliday {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      coverage: ((value: unknown) =>
        readArray(value).map((item) => decodeCalendarCoverage(item)))(
        data.coverage,
      ),
      holiday: optional(data.holiday, decodeCalendarHoliday),
    },
    meta,
  );
}
export function decodeCalendarSubscriptionCreated(
  value: unknown,
  meta: ResponseMeta = {},
): models.CalendarSubscriptionCreated {
  const data = readObject(value);
  return withMeta(
    {
      expires_at: readString(data.expires_at),
      subscription_id: readString(data.subscription_id),
      url: readString(data.url),
    },
    meta,
  );
}
export function decodeCalendarSubscriptionInput(
  value: unknown,
): models.CalendarSubscriptionInput {
  const data = readObject(value);
  return {
    countries: ((value: unknown) =>
      readArray(value).map((item) => readString(item)))(data.countries),
    end_date: readString(data.end_date),
    families: optional(data.families, (value: unknown) =>
      readArray(value).map((item) => readString(item)),
    ),
    include_holidays: optional(data.include_holidays, readBool),
    include_releases: optional(data.include_releases, readBool),
    scope: optional(data.scope, readString),
    start_date: readString(data.start_date),
  };
}
export function decodeCatalogueBulkLatest(
  value: unknown,
  meta: ResponseMeta = {},
): models.CatalogueBulkLatest {
  const data = readObject(value);
  return withMeta(
    {
      missing: ((value: unknown) =>
        readArray(value).map((item) => readString(item)))(data.missing),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodeCatalogueLatest(item)))(
        data.observations,
      ),
    },
    meta,
  );
}
export function decodeCatalogueEntry(value: unknown): models.CatalogueEntry {
  const data = readObject(value);
  return {
    country: optional(data.country, readString),
    first_period: optional(data.first_period, readString),
    frequency: optional(data.frequency, readString),
    id: optional(data.id, readString),
    id_template: optional(data.id_template, readString),
    last_period: optional(data.last_period, readString),
    source: readString(data.source),
    title: readString(data.title),
    unit_label: optional(data.unit_label, readString),
  };
}
export function decodeCatalogueHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.CatalogueHistory {
  const data = readObject(value);
  return withMeta(
    {
      attribution: readString(data.attribution),
      base_period: optional(data.base_period, readString),
      country: optional(data.country, readString),
      currency: optional(data.currency, readString),
      fetched_at: readString(data.fetched_at),
      frequency: readString(data.frequency),
      id: readString(data.id),
      licence_url: readString(data.licence_url),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodeResourceObservation(item)))(
        data.observations,
      ),
      scale: optional(data.scale, readString),
      seasonal_adjustment: readString(data.seasonal_adjustment),
      stale: optional(data.stale, readBool),
      title: readString(data.title),
      unit: readString(data.unit),
      unit_label: readString(data.unit_label),
    },
    meta,
  );
}
export function decodeCatalogueLatest(value: unknown): models.CatalogueLatest {
  const data = readObject(value);
  return {
    attribution: readString(data.attribution),
    base_period: optional(data.base_period, readString),
    country: optional(data.country, readString),
    currency: optional(data.currency, readString),
    fetched_at: readString(data.fetched_at),
    first_reported_at: optional(data.first_reported_at, readString),
    frequency: readString(data.frequency),
    id: readString(data.id),
    licence_url: readString(data.licence_url),
    period: readString(data.period),
    released_on: optional(data.released_on, readString),
    scale: optional(data.scale, readString),
    seasonal_adjustment: readString(data.seasonal_adjustment),
    stale: optional(data.stale, readBool),
    status: optional(data.status, readString),
    title: readString(data.title),
    unit: readString(data.unit),
    unit_label: readString(data.unit_label),
    value: readDecimal(data.value),
  };
}
export function decodeCatalogueSearchPage(
  value: unknown,
  meta: ResponseMeta = {},
): models.CatalogueSearchPage {
  const data = readObject(value);
  return withMeta(
    {
      next_cursor: optional(data.next_cursor, readCursor),
      results: ((value: unknown) =>
        readArray(value).map((item) => decodeCatalogueEntry(item)))(
        data.results,
      ),
    },
    meta,
  );
}
export function decodeCatalogueSeries(
  value: unknown,
  meta: ResponseMeta = {},
): models.CatalogueSeries {
  const data = readObject(value);
  return withMeta(
    {
      attribution: readString(data.attribution),
      base_period: optional(data.base_period, readString),
      country: optional(data.country, readString),
      currency: optional(data.currency, readString),
      fetched_at: readString(data.fetched_at),
      first_period: readString(data.first_period),
      frequency: readString(data.frequency),
      id: readString(data.id),
      last_period: readString(data.last_period),
      licence_url: readString(data.licence_url),
      scale: optional(data.scale, readString),
      seasonal_adjustment: readString(data.seasonal_adjustment),
      stale: optional(data.stale, readBool),
      title: readString(data.title),
      unit: readString(data.unit),
      unit_label: readString(data.unit_label),
    },
    meta,
  );
}
export function decodeCentralBankBalanceSheet(
  value: unknown,
  meta: ResponseMeta = {},
): models.CentralBankBalanceSheet {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      currency: readString(data.currency),
      period: readString(data.period),
      released_on: readString(data.released_on),
      scale: readString(data.scale),
      value: readDecimal(data.value),
    },
    meta,
  );
}
export function decodeCentralBankReserves(
  value: unknown,
  meta: ResponseMeta = {},
): models.CentralBankReserves {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      currency: readString(data.currency),
      period: readString(data.period),
      released_on: readString(data.released_on),
      scale: readString(data.scale),
      value: readDecimal(data.value),
    },
    meta,
  );
}
export function decodeCommodityBar(value: unknown): models.CommodityBar {
  const data = readObject(value);
  return {
    close: readDecimal(data.close),
    high: optional(data.high, readDecimal),
    low: optional(data.low, readDecimal),
    open: optional(data.open, readDecimal),
    timestamp: readString(data.timestamp),
  };
}
export function decodeCommodityBars(
  value: unknown,
  meta: ResponseMeta = {},
): models.CommodityBars {
  const data = readObject(value);
  return withMeta(
    {
      bars: ((value: unknown) =>
        readArray(value).map((item) => decodeCommodityBar(item)))(data.bars),
      currency: readString(data.currency),
      end: optional(data.end, readString),
      next_cursor: optional(data.next_cursor, readCursor),
      start: optional(data.start, readString),
      symbol: readString(data.symbol),
      unit: readString(data.unit),
    },
    meta,
  );
}
export function decodeCommodityOilPalmFfbAgePrice(
  value: unknown,
): models.CommodityOilPalmFfbAgePrice {
  const data = readObject(value);
  return {
    price: readDecimal(data.price),
    tree_age_max_years: readInt(data.tree_age_max_years),
    tree_age_min_years: readInt(data.tree_age_min_years),
  };
}
export function decodeCommoditySpot(
  value: unknown,
  meta: ResponseMeta = {},
): models.CommoditySpot {
  const data = readObject(value);
  return withMeta(
    {
      currency: readString(data.currency),
      price: readDecimal(data.price),
      stale: readBool(data.stale),
      symbol: readString(data.symbol),
      timestamp: readString(data.timestamp),
      unit: readString(data.unit),
    },
    meta,
  );
}
export function decodeCompanyFilingsPage(
  value: unknown,
  meta: ResponseMeta = {},
): models.CompanyFilingsPage {
  const data = readObject(value);
  return withMeta(
    {
      filed_from: optional(data.filed_from, readString),
      filings: ((value: unknown) =>
        readArray(value).map((item) => decodeListedFiling(item)))(data.filings),
      id: readString(data.id),
      next_cursor: optional(data.next_cursor, readCursor),
    },
    meta,
  );
}
export function decodeCompanyIndustry(value: unknown): models.CompanyIndustry {
  const data = readObject(value);
  return {
    industry: optional(data.industry, readString),
    isic: optional(data.isic, readString),
    sector: optional(data.sector, readString),
    source_code: optional(data.source_code, readString),
    source_scheme: optional(data.source_scheme, readString),
  };
}
export function decodeCompanyNameSpan(value: unknown): models.CompanyNameSpan {
  const data = readObject(value);
  return {
    from: optional(data.from, readString),
    name: readString(data.name),
    to: optional(data.to, readString),
  };
}
export function decodeCompanyRelation(value: unknown): models.CompanyRelation {
  const data = readObject(value);
  return {
    id: readString(data.id),
    kind: readString(data.kind),
  };
}
export function decodeCompanySearchHit(
  value: unknown,
): models.CompanySearchHit {
  const data = readObject(value);
  return {
    code: optional(data.code, readString),
    country: optional(data.country, readString),
    delisted: optional(data.delisted, readBool),
    former_code: optional(data.former_code, readBool),
    former_name: optional(data.former_name, readString),
    id: readString(data.id),
    matched: optional(data.matched, readString),
    mic: optional(data.mic, readString),
    name: readString(data.name),
  };
}
export function decodeCompanySearchPage(
  value: unknown,
  meta: ResponseMeta = {},
): models.CompanySearchPage {
  const data = readObject(value);
  return withMeta(
    {
      companies: ((value: unknown) =>
        readArray(value).map((item) => decodeCompanySearchHit(item)))(
        data.companies,
      ),
      coverage: optional(data.coverage, (value: unknown) =>
        readArray(value).map((item) => decodeRegistryCoverage(item)),
      ),
    },
    meta,
  );
}
export function decodeCompanySecurity(value: unknown): models.CompanySecurity {
  const data = readObject(value);
  return {
    adr_ratio: optional(data.adr_ratio, readDecimal),
    class: readString(data.class),
    figi: optional(data.figi, readString),
    isin: optional(data.isin, readString),
    listings: ((value: unknown) =>
      readArray(value).map((item) => decodeSecurityListing(item)))(
      data.listings,
    ),
    primary: optional(data.primary, readBool),
    title: optional(data.title, readString),
    type: readString(data.type),
  };
}
export function decodeCompanyWithListings(
  value: unknown,
  meta: ResponseMeta = {},
): models.CompanyWithListings {
  const data = readObject(value);
  return withMeta(
    {
      country: optional(data.country, readString),
      delisted: optional(data.delisted, readBool),
      fiscal_year_end: optional(data.fiscal_year_end, readString),
      id: readString(data.id),
      industry: optional(data.industry, decodeCompanyIndustry),
      jp_corporate_number: optional(data.jp_corporate_number, readString),
      lei: optional(data.lei, readString),
      listings: optional(data.listings, (value: unknown) =>
        readArray(value).map((item) => readString(item)),
      ),
      name: readString(data.name),
      names: ((value: unknown) =>
        readArray(value).map((item) => decodeCompanyNameSpan(item)))(
        data.names,
      ),
      related: ((value: unknown) =>
        readArray(value).map((item) => decodeCompanyRelation(item)))(
        data.related,
      ),
      securities: ((value: unknown) =>
        readArray(value).map((item) => decodeCompanySecurity(item)))(
        data.securities,
      ),
      standard: optional(data.standard, readString),
      standard_variant: optional(data.standard_variant, readString),
      status_date: optional(data.status_date, readString),
    },
    meta,
  );
}
export function decodeCostBenchmark(value: unknown): models.CostBenchmark {
  const data = readObject(value);
  return {
    default: optional(data.default, readBool),
    id: readString(data.id),
  };
}
export function decodeCostBeta(value: unknown): models.CostBeta {
  const data = readObject(value);
  return {
    adjusted: readDecimal(data.adjusted),
    benchmark: decodeCostBenchmark(data.benchmark),
    end: readString(data.end),
    frequency: readString(data.frequency),
    observations: readInt(data.observations),
    r_squared: readDecimal(data.r_squared),
    raw: readDecimal(data.raw),
    start: readString(data.start),
    std_error: readDecimal(data.std_error),
    used: readString(data.used),
    window: readString(data.window),
  };
}
export function decodeCostEquityRiskPremium(
  value: unknown,
): models.CostEquityRiskPremium {
  const data = readObject(value);
  return {
    as_of: optional(data.as_of, readString),
    basis: optional(data.basis, readString),
    country: optional(data.country, readString),
    rate: readDecimal(data.rate),
    source: readString(data.source),
  };
}
export function decodeCostOfDebt(value: unknown): models.CostOfDebt {
  const data = readObject(value);
  return {
    after_tax: optional(data.after_tax, readDecimal),
    average_debt: readDecimal(data.average_debt),
    basis: readString(data.basis),
    closing_debt: readDecimal(data.closing_debt),
    default_spread: optional(data.default_spread, readDecimal),
    interest_coverage: optional(data.interest_coverage, readDecimal),
    interest_expense: readDecimal(data.interest_expense),
    opening_debt: optional(data.opening_debt, readDecimal),
    period: readString(data.period),
    period_end: readString(data.period_end),
    pre_tax: readDecimal(data.pre_tax),
    table: optional(data.table, readString),
    table_update: optional(data.table_update, readString),
    table_url: optional(data.table_url, readString),
  };
}
export function decodeCostRiskFree(value: unknown): models.CostRiskFree {
  const data = readObject(value);
  return {
    as_of: optional(data.as_of, readString),
    basis: readString(data.basis),
    country: optional(data.country, readString),
    curve_type: optional(data.curve_type, readString),
    maturity: optional(data.maturity, readString),
    rate: readDecimal(data.rate),
    source: readString(data.source),
  };
}
export function decodeCostTaxRate(value: unknown): models.CostTaxRate {
  const data = readObject(value);
  return {
    basis: readString(data.basis),
    country: optional(data.country, readString),
    rate: readDecimal(data.rate),
    source: readString(data.source),
    table: optional(data.table, readString),
    table_update: optional(data.table_update, readString),
    table_url: optional(data.table_url, readString),
  };
}
export function decodeCostWarning(value: unknown): models.CostWarning {
  const data = readObject(value);
  return {
    code: readString(data.code),
    message: readString(data.message),
  };
}
export function decodeCostWeights(value: unknown): models.CostWeights {
  const data = readObject(value);
  return {
    debt: readDecimal(data.debt),
    equity: readDecimal(data.equity),
    market_cap: readDecimal(data.market_cap),
    market_cap_as_of: readString(data.market_cap_as_of),
    total_debt: readDecimal(data.total_debt),
    total_debt_as_of: readString(data.total_debt_as_of),
  };
}
export function decodeCpi(value: unknown, meta: ResponseMeta = {}): models.Cpi {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      index_base: readString(data.index_base),
      period: readString(data.period),
      released_on: readString(data.released_on),
      source: optional(data.source, decodeSeriesSource),
      value: readDecimal(data.value),
    },
    meta,
  );
}
export function decodeCpiHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.CpiHistory {
  const data = readObject(value);
  return withMeta(
    {
      as_of: optional(data.as_of, readString),
      country: readString(data.country),
      index_base: readString(data.index_base),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodeCpiHistoryObservation(item)))(
        data.observations,
      ),
      source: optional(data.source, decodeSeriesSource),
      start: optional(data.start, readString),
    },
    meta,
  );
}
export function decodeCpiHistoryObservation(
  value: unknown,
): models.CpiHistoryObservation {
  const data = readObject(value);
  return {
    first_reported_at: optional(data.first_reported_at, readString),
    period: readString(data.period),
    value: readDecimal(data.value),
  };
}
export function decodeCryptoBar(value: unknown): models.CryptoBar {
  const data = readObject(value);
  return {
    close: readDecimal(data.close),
    high: readDecimal(data.high),
    low: readDecimal(data.low),
    open: readDecimal(data.open),
    timestamp: readString(data.timestamp),
  };
}
export function decodeCryptoBars(
  value: unknown,
  meta: ResponseMeta = {},
): models.CryptoBars {
  const data = readObject(value);
  return withMeta(
    {
      bars: ((value: unknown) =>
        readArray(value).map((item) => decodeCryptoBar(item)))(data.bars),
      end: optional(data.end, readString),
      next_cursor: optional(data.next_cursor, readCursor),
      pair: readString(data.pair),
      start: optional(data.start, readString),
    },
    meta,
  );
}
export function decodeCryptoPair(value: unknown): models.CryptoPair {
  const data = readObject(value);
  return {
    base: readString(data.base),
    name: readString(data.name),
    pair: readString(data.pair),
    quote: readString(data.quote),
  };
}
export function decodeCryptoPairs(
  value: unknown,
  meta: ResponseMeta = {},
): models.CryptoPairs {
  const data = readObject(value);
  return withMeta(
    {
      pairs: ((value: unknown) =>
        readArray(value).map((item) => decodeCryptoPair(item)))(data.pairs),
    },
    meta,
  );
}
export function decodeCryptoPrice(
  value: unknown,
  meta: ResponseMeta = {},
): models.CryptoPrice {
  const data = readObject(value);
  return withMeta(
    {
      base: readString(data.base),
      change_24h: optional(data.change_24h, readDecimal),
      change_24h_percent: optional(data.change_24h_percent, readDecimal),
      delayed: optional(data.delayed, readBool),
      pair: readString(data.pair),
      price: readDecimal(data.price),
      quote: readString(data.quote),
      stale: readBool(data.stale),
      timestamp: readString(data.timestamp),
    },
    meta,
  );
}
export function decodeCryptoPriceError(
  value: unknown,
): models.CryptoPriceError {
  const data = readObject(value);
  return {
    code: readString(data.code),
    id: readString(data.id),
  };
}
export function decodeCryptoPrices(
  value: unknown,
  meta: ResponseMeta = {},
): models.CryptoPrices {
  const data = readObject(value);
  return withMeta(
    {
      errors: ((value: unknown) =>
        readArray(value).map((item) => decodeCryptoPriceError(item)))(
        data.errors,
      ),
      prices: ((value: unknown) =>
        readArray(value).map((item) => decodeCryptoPrice(item)))(data.prices),
    },
    meta,
  );
}
export function decodeDeliveryEvent(value: unknown): models.DeliveryEvent {
  const data = readObject(value);
  return {
    country: readString(data.country),
    cursor: readString(data.cursor),
    event_id: readString(data.event_id),
    family: readString(data.family),
    holiday_generation: optional(data.holiday_generation, readInt),
    holiday_year: optional(data.holiday_year, readInt),
    recorded_at: readString(data.recorded_at),
    release_id: optional(data.release_id, readString),
    resource_id: optional(data.resource_id, readString),
    resource_version: optional(data.resource_version, readString),
    type: readString(data.type),
  };
}
export function decodeDividendsCalendar(
  value: unknown,
  meta: ResponseMeta = {},
): models.DividendsCalendar {
  const data = readObject(value);
  return withMeta(
    {
      entries: ((value: unknown) =>
        readArray(value).map((item) => decodeDividendsCalendarEntry(item)))(
        data.entries,
      ),
      next_cursor: optional(data.next_cursor, readCursor),
    },
    meta,
  );
}
export function decodeDividendsCalendarEntry(
  value: unknown,
): models.DividendsCalendarEntry {
  const data = readObject(value);
  return {
    amount: readDecimal(data.amount),
    currency: readString(data.currency),
    ex_date: readString(data.ex_date),
    id: readString(data.id),
    name: readString(data.name),
    symbol: readString(data.symbol),
  };
}
export function decodeEconomicCalendar(
  value: unknown,
  meta: ResponseMeta = {},
): models.EconomicCalendar {
  const data = readObject(value);
  return withMeta(
    {
      next_cursor: optional(data.next_cursor, readCursor),
      releases: ((value: unknown) =>
        readArray(value).map((item) => decodeEconomicReleaseSummary(item)))(
        data.releases,
      ),
    },
    meta,
  );
}
export function decodeEconomicReleaseDetail(
  value: unknown,
  meta: ResponseMeta = {},
): models.EconomicReleaseDetail {
  const data = readObject(value);
  return withMeta(
    {
      at: optional(data.at, readString),
      between: optional(data.between, (value: unknown) =>
        readArray(value).map((item) => readString(item)),
      ),
      by: optional(data.by, readString),
      country: readString(data.country),
      date: optional(data.date, readString),
      family: readString(data.family),
      name: readString(data.name),
      notice: optional(data.notice, readString),
      observed_at: optional(data.observed_at, readString),
      period: optional(data.period, readString),
      release_id: readString(data.release_id),
      revision: readInt(data.revision),
      series_id: optional(data.series_id, readString),
      stage: optional(data.stage, readString),
      status: readString(data.status),
      timezone: optional(data.timezone, readString),
      topic: optional(data.topic, readString),
      values: ((value: unknown) =>
        readArray(value).map((item) => decodeEconomicReleaseValue(item)))(
        data.values,
      ),
      version: readString(data.version),
    },
    meta,
  );
}
export function decodeEconomicReleaseSummary(
  value: unknown,
): models.EconomicReleaseSummary {
  const data = readObject(value);
  return {
    at: optional(data.at, readString),
    between: optional(data.between, (value: unknown) =>
      readArray(value).map((item) => readString(item)),
    ),
    by: optional(data.by, readString),
    country: readString(data.country),
    date: optional(data.date, readString),
    family: readString(data.family),
    name: readString(data.name),
    notice: optional(data.notice, readString),
    period: optional(data.period, readString),
    release_id: readString(data.release_id),
    revision: readInt(data.revision),
    series_id: optional(data.series_id, readString),
    stage: optional(data.stage, readString),
    status: readString(data.status),
    timezone: optional(data.timezone, readString),
    topic: optional(data.topic, readString),
    values: ((value: unknown) =>
      readArray(value).map((item) => decodeEconomicReleaseValue(item)))(
      data.values,
    ),
  };
}
export function decodeEconomicReleaseValue(
  value: unknown,
): models.EconomicReleaseValue {
  const data = readObject(value);
  return {
    actual: optional(data.actual, readDecimal),
    annualized: optional(data.annualized, readBool),
    currency: optional(data.currency, readString),
    index_base: optional(data.index_base, readString),
    measure: readString(data.measure),
    not_seasonally_adjusted: optional(data.not_seasonally_adjusted, readBool),
    period: optional(data.period, readString),
    previous: optional(data.previous, readDecimal),
    previous_revised_from: optional(data.previous_revised_from, readDecimal),
    scale: optional(data.scale, readString),
    transformation: optional(data.transformation, readString),
    unit: readString(data.unit),
    value_status: optional(data.value_status, readString),
  };
}
export function decodeEquityBar(value: unknown): models.EquityBar {
  const data = readObject(value);
  return {
    close: readDecimal(data.close),
    date: optional(data.date, readString),
    high: readDecimal(data.high),
    low: readDecimal(data.low),
    open: readDecimal(data.open),
    timestamp: readString(data.timestamp),
    volume: optional(data.volume, readDecimal),
  };
}
export function decodeEquityBars(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquityBars {
  const data = readObject(value);
  return withMeta(
    {
      adjusted: readBool(data.adjusted),
      bars: ((value: unknown) =>
        readArray(value).map((item) => decodeEquityBar(item)))(data.bars),
      currency: readString(data.currency),
      end: optional(data.end, readString),
      id: readString(data.id),
      next_cursor: optional(data.next_cursor, readCursor),
      start: optional(data.start, readString),
    },
    meta,
  );
}
export function decodeEquityCostOfCapital(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquityCostOfCapital {
  const data = readObject(value);
  return withMeta(
    {
      beta: decodeCostBeta(data.beta),
      company_id: readString(data.company_id),
      cost_of_debt: optional(data.cost_of_debt, decodeCostOfDebt),
      cost_of_equity: readDecimal(data.cost_of_equity),
      currency: readString(data.currency),
      equity_risk_premium: decodeCostEquityRiskPremium(
        data.equity_risk_premium,
      ),
      id: readString(data.id),
      methodology_url: readString(data.methodology_url),
      risk_free: decodeCostRiskFree(data.risk_free),
      tax_rate: optional(data.tax_rate, decodeCostTaxRate),
      wacc: optional(data.wacc, readDecimal),
      warnings: ((value: unknown) =>
        readArray(value).map((item) => decodeCostWarning(item)))(data.warnings),
      weights: decodeCostWeights(data.weights),
    },
    meta,
  );
}
export function decodeEquityDividend(value: unknown): models.EquityDividend {
  const data = readObject(value);
  return {
    amount: readDecimal(data.amount),
    currency: readString(data.currency),
    ex_date: readString(data.ex_date),
    pay_date: optional(data.pay_date, readString),
    record_date: optional(data.record_date, readString),
  };
}
export function decodeEquityDividends(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquityDividends {
  const data = readObject(value);
  return withMeta(
    {
      dividends: ((value: unknown) =>
        readArray(value).map((item) => decodeEquityDividend(item)))(
        data.dividends,
      ),
      id: readString(data.id),
      next_cursor: optional(data.next_cursor, readCursor),
      start: optional(data.start, readString),
    },
    meta,
  );
}
export function decodeEquityEarning(value: unknown): models.EquityEarning {
  const data = readObject(value);
  return {
    date: readString(data.date),
    eps_actual: optional(data.eps_actual, readDecimal),
    eps_estimate: optional(data.eps_estimate, readDecimal),
    filing_id: optional(data.filing_id, readString),
    surprise: optional(data.surprise, readDecimal),
    surprise_percent: optional(data.surprise_percent, readDecimal),
    time: optional(data.time, readString),
  };
}
export function decodeEquityEarnings(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquityEarnings {
  const data = readObject(value);
  return withMeta(
    {
      earnings: ((value: unknown) =>
        readArray(value).map((item) => decodeEquityEarning(item)))(
        data.earnings,
      ),
      id: readString(data.id),
      next_cursor: optional(data.next_cursor, readCursor),
      start: optional(data.start, readString),
    },
    meta,
  );
}
export function decodeEquityMover(value: unknown): models.EquityMover {
  const data = readObject(value);
  return {
    change_percent: readDecimal(data.change_percent),
    id: readString(data.id),
    name: readString(data.name),
    price: readDecimal(data.price),
    symbol: readString(data.symbol),
    volume: readDecimal(data.volume),
  };
}
export function decodeEquityMovers(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquityMovers {
  const data = readObject(value);
  return withMeta(
    {
      direction: readString(data.direction),
      market: readString(data.market),
      movers: ((value: unknown) =>
        readArray(value).map((item) => decodeEquityMover(item)))(data.movers),
      timestamp: readString(data.timestamp),
    },
    meta,
  );
}
export function decodeEquityPrice(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquityPrice {
  const data = readObject(value);
  return withMeta(
    {
      change: optional(data.change, readDecimal),
      change_percent: optional(data.change_percent, readDecimal),
      currency: readString(data.currency),
      delayed: optional(data.delayed, readBool),
      id: readString(data.id),
      market_session: readString(data.market_session),
      previous_close: optional(data.previous_close, readDecimal),
      price: readDecimal(data.price),
      stale: readBool(data.stale),
      symbol: readString(data.symbol),
      timestamp: readString(data.timestamp),
      volume: optional(data.volume, readDecimal),
    },
    meta,
  );
}
export function decodeEquityPriceError(
  value: unknown,
): models.EquityPriceError {
  const data = readObject(value);
  return {
    code: readString(data.code),
    id: readString(data.id),
  };
}
export function decodeEquityPrices(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquityPrices {
  const data = readObject(value);
  return withMeta(
    {
      errors: ((value: unknown) =>
        readArray(value).map((item) => decodeEquityPriceError(item)))(
        data.errors,
      ),
      prices: ((value: unknown) =>
        readArray(value).map((item) => decodeEquityPrice(item)))(data.prices),
    },
    meta,
  );
}
export function decodeEquityProfile(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquityProfile {
  const data = readObject(value);
  return withMeta(
    {
      company_id: optional(data.company_id, readString),
      country: optional(data.country, readString),
      currency: readString(data.currency),
      id: readString(data.id),
      industry: optional(data.industry, readString),
      logo_url: optional(data.logo_url, readString),
      mic: readString(data.mic),
      name: readString(data.name),
      sector: optional(data.sector, readString),
      symbol: readString(data.symbol),
      type: readString(data.type),
      website: optional(data.website, readString),
    },
    meta,
  );
}
export function decodeEquityRiskPremium(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquityRiskPremium {
  const data = readObject(value);
  return withMeta(
    {
      as_of: readString(data.as_of),
      basis: decodeEquityRiskPremiumBasis(data.basis),
      country: readString(data.country),
      country_default_spread: readDecimal(data.country_default_spread),
      country_risk_premium: readDecimal(data.country_risk_premium),
      mature_erp: readDecimal(data.mature_erp),
      methodology_url: optional(data.methodology_url, readString),
      total_erp: readDecimal(data.total_erp),
      unit: readString(data.unit),
      volatility_ratio: optional(data.volatility_ratio, readDecimal),
    },
    meta,
  );
}
export function decodeEquityRiskPremiumBasis(
  value: unknown,
): models.EquityRiskPremiumBasis {
  const data = readObject(value);
  return {
    country_default_spread: readString(data.country_default_spread),
    country_risk_premium: readString(data.country_risk_premium),
    mature_erp: readString(data.mature_erp),
    total_erp: readString(data.total_erp),
    volatility_ratio: readString(data.volatility_ratio),
  };
}
export function decodeEquityRiskPremiumHistoryResponse(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquityRiskPremiumHistoryResponse {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodeEquityRiskPremium(item)))(
        data.observations,
      ),
    },
    meta,
  );
}
export function decodeEquityRiskPremiumList(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquityRiskPremiumList {
  const data = readObject(value);
  return withMeta(
    {
      countries: ((value: unknown) =>
        readArray(value).map((item) => decodeEquityRiskPremium(item)))(
        data.countries,
      ),
    },
    meta,
  );
}
export function decodeEquitySearchResult(
  value: unknown,
): models.EquitySearchResult {
  const data = readObject(value);
  return {
    company_id: optional(data.company_id, readString),
    country: optional(data.country, readString),
    currency: readString(data.currency),
    id: readString(data.id),
    mic: readString(data.mic),
    name: readString(data.name),
    symbol: readString(data.symbol),
    type: readString(data.type),
  };
}
export function decodeEquitySearchResults(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquitySearchResults {
  const data = readObject(value);
  return withMeta(
    {
      next_cursor: optional(data.next_cursor, readCursor),
      results: ((value: unknown) =>
        readArray(value).map((item) => decodeEquitySearchResult(item)))(
        data.results,
      ),
    },
    meta,
  );
}
export function decodeEquitySplit(value: unknown): models.EquitySplit {
  const data = readObject(value);
  return {
    date: readString(data.date),
    ratio: readString(data.ratio),
  };
}
export function decodeEquitySplits(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquitySplits {
  const data = readObject(value);
  return withMeta(
    {
      id: readString(data.id),
      splits: ((value: unknown) =>
        readArray(value).map((item) => decodeEquitySplit(item)))(data.splits),
      start: optional(data.start, readString),
    },
    meta,
  );
}
export function decodeEquityValuation(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquityValuation {
  const data = readObject(value);
  return withMeta(
    {
      company_id: readString(data.company_id),
      currency: readString(data.currency),
      dividend_per_share_ttm: optional(
        data.dividend_per_share_ttm,
        readDecimal,
      ),
      dividend_yield: optional(data.dividend_yield, readDecimal),
      dividends_period_end: optional(data.dividends_period_end, readString),
      eps_period_end: optional(data.eps_period_end, readString),
      eps_ttm: optional(data.eps_ttm, readDecimal),
      equity_as_of: optional(data.equity_as_of, readString),
      id: readString(data.id),
      market_cap: optional(data.market_cap, readDecimal),
      pb_ratio: optional(data.pb_ratio, readDecimal),
      pe_ratio: optional(data.pe_ratio, readDecimal),
      ps_ratio: optional(data.ps_ratio, readDecimal),
      revenue_period_end: optional(data.revenue_period_end, readString),
      revenue_ttm: optional(data.revenue_ttm, readDecimal),
      shares_as_of: optional(data.shares_as_of, readString),
      shares_outstanding: optional(data.shares_outstanding, readDecimal),
      timestamp: readString(data.timestamp),
      total_equity: optional(data.total_equity, readDecimal),
    },
    meta,
  );
}
export function decodeEquityValuationHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.EquityValuationHistory {
  const data = readObject(value);
  return withMeta(
    {
      company_id: readString(data.company_id),
      currency: readString(data.currency),
      id: readString(data.id),
      points: ((value: unknown) =>
        readArray(value).map((item) => decodeEquityValuationPoint(item)))(
        data.points,
      ),
      start: optional(data.start, readString),
    },
    meta,
  );
}
export function decodeEquityValuationPoint(
  value: unknown,
): models.EquityValuationPoint {
  const data = readObject(value);
  return {
    date: readString(data.date),
    dividend_yield: optional(data.dividend_yield, readDecimal),
    market_cap: optional(data.market_cap, readDecimal),
    pb_ratio: optional(data.pb_ratio, readDecimal),
    pe_ratio: optional(data.pe_ratio, readDecimal),
    price: optional(data.price, readDecimal),
    price_date: optional(data.price_date, readString),
    ps_ratio: optional(data.ps_ratio, readDecimal),
  };
}
export function decodeEventDetail(
  value: unknown,
  meta: ResponseMeta = {},
): models.EventDetail {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      cursor: readString(data.cursor),
      event_id: readString(data.event_id),
      family: readString(data.family),
      holiday_generation: optional(data.holiday_generation, readInt),
      holiday_year: optional(data.holiday_year, readInt),
      recorded_at: readString(data.recorded_at),
      release_id: optional(data.release_id, readString),
      resource_id: optional(data.resource_id, readString),
      resource_version: optional(data.resource_version, readString),
      type: readString(data.type),
    },
    meta,
  );
}
export function decodeEventsPage(
  value: unknown,
  meta: ResponseMeta = {},
): models.EventsPage {
  const data = readObject(value);
  return withMeta(
    {
      cursor: readString(data.cursor),
      events: ((value: unknown) =>
        readArray(value).map((item) => decodeDeliveryEvent(item)))(data.events),
      next_cursor: optional(data.next_cursor, readCursor),
    },
    meta,
  );
}
export function decodeExtremeEvent(
  value: unknown,
  meta: ResponseMeta = {},
): models.ExtremeEvent {
  const data = readObject(value);
  return withMeta(
    {
      as_of: optional(data.as_of, readString),
      closes_at: optional(data.closes_at, readString),
      down: ((value: unknown) =>
        readArray(value).map((item) => decodeExtremeLevel(item)))(data.down),
      event_id: readString(data.event_id),
      observation: readString(data.observation),
      question: readString(data.question),
      release_id: optional(data.release_id, readString),
      resolution: readString(data.resolution),
      resolves_at: optional(data.resolves_at, readString),
      resolves_with: optional(data.resolves_with, readString),
      result: optional(data.result, decodePredictionResult),
      stale: optional(data.stale, readBool),
      status: readString(data.status),
      topic_id: readString(data.topic_id),
      unit: optional(data.unit, readString),
      up: ((value: unknown) =>
        readArray(value).map((item) => decodeExtremeLevel(item)))(data.up),
      venues: ((value: unknown) =>
        readArray(value).map((item) => decodePredictionVenue(item)))(
        data.venues,
      ),
      window: decodeExtremeWindow(data.window),
    },
    meta,
  );
}
export function decodeExtremeLevel(value: unknown): models.ExtremeLevel {
  const data = readObject(value);
  return {
    key: readString(data.key),
    level: readDecimal(data.level),
    probability: optional(data.probability, readString),
    quotes: ((value: unknown) =>
      readArray(value).map((item) => decodeQuote(item)))(data.quotes),
  };
}
export function decodeExtremeWindow(value: unknown): models.ExtremeWindow {
  const data = readObject(value);
  return {
    end: readString(data.end),
    start: readString(data.start),
  };
}
export function decodeFiling(
  value: unknown,
  meta: ResponseMeta = {},
): models.Filing {
  const data = readObject(value);
  return withMeta(
    {
      amends: optional(data.amends, readString),
      company_id: readString(data.company_id),
      filed_at: readString(data.filed_at),
      filer_id: optional(data.filer_id, readString),
      form: readString(data.form),
      fp: optional(data.fp, readString),
      fy: optional(data.fy, readInt),
      id: readString(data.id),
      period_end: optional(data.period_end, readString),
      title: optional(data.title, readString),
      type: readString(data.type),
      url: optional(data.url, readString),
      withdrawn: optional(data.withdrawn, readBool),
    },
    meta,
  );
}
export function decodeFilingWebhookEvent(
  value: unknown,
): models.FilingWebhookEvent {
  const data = readObject(value);
  return {
    company_id: readString(data.company_id),
    filed_at: readString(data.filed_at),
    filing_id: readString(data.filing_id),
    form: readString(data.form),
    fp: optional(data.fp, readString),
    fy: optional(data.fy, readInt),
    period_end: optional(data.period_end, readString),
    subject_id: optional(data.subject_id, readString),
    type: readString(data.type),
  };
}
export function decodeFinancialRow(value: unknown): models.FinancialRow {
  const data = readObject(value);
  return {
    currency: optional(data.currency, readString),
    derived: optional(data.derived, (value: unknown) =>
      readArray(value).map((item) => readString(item)),
    ),
    end: readString(data.end),
    fh: optional(data.fh, readInt),
    fq: optional(data.fq, readInt),
    fy: readInt(data.fy),
    items: readDecimalItems(data, [
      "currency",
      "derived",
      "end",
      "fh",
      "fq",
      "fy",
    ]),
  };
}
export function decodeFinancials(
  value: unknown,
  meta: ResponseMeta = {},
): models.Financials {
  const data = readObject(value);
  return withMeta(
    {
      annual: optional(data.annual, (value: unknown) =>
        readArray(value).map((item) => decodeFinancialRow(item)),
      ),
      as_of: optional(data.as_of, readString),
      basis: optional(data.basis, readString),
      currency: optional(data.currency, readString),
      from_fy: optional(data.from_fy, readInt),
      id: readString(data.id),
      quarterly: optional(data.quarterly, (value: unknown) =>
        readArray(value).map((item) => decodeFinancialRow(item)),
      ),
      semiannual: optional(data.semiannual, (value: unknown) =>
        readArray(value).map((item) => decodeFinancialRow(item)),
      ),
    },
    meta,
  );
}
export function decodeFundDistribution(
  value: unknown,
): models.FundDistribution {
  const data = readObject(value);
  return {
    amount: readDecimal(data.amount),
    currency: readString(data.currency),
    ex_date: readString(data.ex_date),
    kind: optional(data.kind, readString),
    pay_date: optional(data.pay_date, readString),
    record_date: optional(data.record_date, readString),
  };
}
export function decodeFundDistributions(
  value: unknown,
  meta: ResponseMeta = {},
): models.FundDistributions {
  const data = readObject(value);
  return withMeta(
    {
      distributions: ((value: unknown) =>
        readArray(value).map((item) => decodeFundDistribution(item)))(
        data.distributions,
      ),
      id: readString(data.id),
      next_cursor: optional(data.next_cursor, readCursor),
      start: optional(data.start, readString),
    },
    meta,
  );
}
export function decodeFundEtfPrice(
  value: unknown,
  meta: ResponseMeta = {},
): models.FundEtfPrice {
  const data = readObject(value);
  return withMeta(
    {
      kind: "FundEtfPrice" as const,
      change: optional(data.change, readDecimal),
      change_percent: optional(data.change_percent, readDecimal),
      currency: readString(data.currency),
      delayed: optional(data.delayed, readBool),
      id: readString(data.id),
      market_session: readString(data.market_session),
      previous_close: optional(data.previous_close, readDecimal),
      price: readDecimal(data.price),
      stale: readBool(data.stale),
      symbol: readString(data.symbol),
      timestamp: readString(data.timestamp),
      type: readString(data.type),
      volume: optional(data.volume, readDecimal),
    },
    meta,
  );
}
export function decodeFundNavPrice(
  value: unknown,
  meta: ResponseMeta = {},
): models.FundNavPrice {
  const data = readObject(value);
  return withMeta(
    {
      kind: "FundNavPrice" as const,
      change: optional(data.change, readDecimal),
      change_percent: optional(data.change_percent, readDecimal),
      currency: readString(data.currency),
      date: readString(data.date),
      id: readString(data.id),
      nav: readDecimal(data.nav),
      previous_nav: optional(data.previous_nav, readDecimal),
      stale: readBool(data.stale),
      symbol: readString(data.symbol),
      type: readString(data.type),
    },
    meta,
  );
}
export function decodeFundPriceError(value: unknown): models.FundPriceError {
  const data = readObject(value);
  return {
    code: readString(data.code),
    id: readString(data.id),
  };
}
export function decodeFundPrices(
  value: unknown,
  meta: ResponseMeta = {},
): models.FundPrices {
  const data = readObject(value);
  return withMeta(
    {
      errors: ((value: unknown) =>
        readArray(value).map((item) => decodeFundPriceError(item)))(
        data.errors,
      ),
      prices: ((value: unknown) =>
        readArray(value).map((item) => decodeFundPriceItem(item)))(data.prices),
    },
    meta,
  );
}
export function decodeFundProfile(
  value: unknown,
  meta: ResponseMeta = {},
): models.FundProfile {
  const data = readObject(value);
  return withMeta(
    {
      country: optional(data.country, readString),
      currency: readString(data.currency),
      id: readString(data.id),
      mic: optional(data.mic, readString),
      name: readString(data.name),
      symbol: readString(data.symbol),
      type: readString(data.type),
    },
    meta,
  );
}
export function decodeFundSearchResult(
  value: unknown,
): models.FundSearchResult {
  const data = readObject(value);
  return {
    country: optional(data.country, readString),
    currency: readString(data.currency),
    id: readString(data.id),
    mic: optional(data.mic, readString),
    name: readString(data.name),
    symbol: readString(data.symbol),
    type: readString(data.type),
  };
}
export function decodeFundSearchResults(
  value: unknown,
  meta: ResponseMeta = {},
): models.FundSearchResults {
  const data = readObject(value);
  return withMeta(
    {
      next_cursor: optional(data.next_cursor, readCursor),
      results: ((value: unknown) =>
        readArray(value).map((item) => decodeFundSearchResult(item)))(
        data.results,
      ),
    },
    meta,
  );
}
export function decodeFxBar(value: unknown): models.FxBar {
  const data = readObject(value);
  return {
    close: readDecimal(data.close),
    high: readDecimal(data.high),
    low: readDecimal(data.low),
    open: readDecimal(data.open),
    timestamp: readString(data.timestamp),
  };
}
export function decodeFxBars(
  value: unknown,
  meta: ResponseMeta = {},
): models.FxBars {
  const data = readObject(value);
  return withMeta(
    {
      bars: ((value: unknown) =>
        readArray(value).map((item) => decodeFxBar(item)))(data.bars),
      base: readString(data.base),
      currency: readString(data.currency),
      end: optional(data.end, readString),
      next_cursor: optional(data.next_cursor, readCursor),
      start: optional(data.start, readString),
    },
    meta,
  );
}
export function decodeFxConversion(
  value: unknown,
  meta: ResponseMeta = {},
): models.FxConversion {
  const data = readObject(value);
  return withMeta(
    {
      converted: readDecimal(data.converted),
      from: readString(data.from),
      market_session: readString(data.market_session),
      rate: readDecimal(data.rate),
      stale: readBool(data.stale),
      timestamp: readString(data.timestamp),
      to: readString(data.to),
    },
    meta,
  );
}
export function decodeFxHistoricalObservation(
  value: unknown,
): models.FxHistoricalObservation {
  const data = readObject(value);
  return {
    date: readString(data.date),
    rates: ((value: unknown) =>
      readArray(value).map((item) => decodeFxHistoricalRate(item)))(data.rates),
  };
}
export function decodeFxHistoricalRate(
  value: unknown,
): models.FxHistoricalRate {
  const data = readObject(value);
  return {
    currency: readString(data.currency),
    rate: readDecimal(data.rate),
  };
}
export function decodeFxHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.FxHistory {
  const data = readObject(value);
  return withMeta(
    {
      base: readString(data.base),
      end_date: optional(data.end_date, readString),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodeFxHistoricalObservation(item)))(
        data.observations,
      ),
      start_date: optional(data.start_date, readString),
    },
    meta,
  );
}
export function decodeFxRate(value: unknown): models.FxRate {
  const data = readObject(value);
  return {
    currency: readString(data.currency),
    rate: readDecimal(data.rate),
    stale: readBool(data.stale),
    timestamp: readString(data.timestamp),
  };
}
export function decodeFxRates(
  value: unknown,
  meta: ResponseMeta = {},
): models.FxRates {
  const data = readObject(value);
  return withMeta(
    {
      base: readString(data.base),
      market_session: readString(data.market_session),
      rates: ((value: unknown) =>
        readArray(value).map((item) => decodeFxRate(item)))(data.rates),
    },
    meta,
  );
}
export function decodeGdp(value: unknown, meta: ResponseMeta = {}): models.Gdp {
  const data = readObject(value);
  return withMeta(
    {
      annualized: optional(data.annualized, readBool),
      country: readString(data.country),
      currency: readString(data.currency),
      not_seasonally_adjusted: optional(data.not_seasonally_adjusted, readBool),
      period: readString(data.period),
      released_on: readString(data.released_on),
      source: optional(data.source, decodeSeriesSource),
      value: readDecimal(data.value),
    },
    meta,
  );
}
export function decodeGdpGrowth(
  value: unknown,
  meta: ResponseMeta = {},
): models.GdpGrowth {
  const data = readObject(value);
  return withMeta(
    {
      annualized: optional(data.annualized, readBool),
      country: readString(data.country),
      not_seasonally_adjusted: optional(data.not_seasonally_adjusted, readBool),
      period: readString(data.period),
      quarter_over_quarter: readDecimal(data.quarter_over_quarter),
      quarter_over_quarter_not_seasonally_adjusted: optional(
        data.quarter_over_quarter_not_seasonally_adjusted,
        readBool,
      ),
      released_on: readString(data.released_on),
      source: optional(data.source, decodeSeriesSource),
      year_over_year: readDecimal(data.year_over_year),
      year_over_year_not_seasonally_adjusted: optional(
        data.year_over_year_not_seasonally_adjusted,
        readBool,
      ),
      year_to_date: optional(data.year_to_date, readDecimal),
    },
    meta,
  );
}
export function decodeGdpGrowthHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.GdpGrowthHistory {
  const data = readObject(value);
  return withMeta(
    {
      annualized: optional(data.annualized, readBool),
      as_of: optional(data.as_of, readString),
      country: readString(data.country),
      next_cursor: optional(data.next_cursor, readCursor),
      not_seasonally_adjusted: optional(data.not_seasonally_adjusted, readBool),
      observations: ((value: unknown) =>
        readArray(value).map((item) =>
          decodeGdpGrowthHistoryObservation(item),
        ))(data.observations),
      quarter_over_quarter_not_seasonally_adjusted: optional(
        data.quarter_over_quarter_not_seasonally_adjusted,
        readBool,
      ),
      source: optional(data.source, decodeSeriesSource),
      start: optional(data.start, readString),
      year_over_year_not_seasonally_adjusted: optional(
        data.year_over_year_not_seasonally_adjusted,
        readBool,
      ),
    },
    meta,
  );
}
export function decodeGdpGrowthHistoryObservation(
  value: unknown,
): models.GdpGrowthHistoryObservation {
  const data = readObject(value);
  return {
    first_reported_at: optional(data.first_reported_at, readString),
    period: readString(data.period),
    quarter_over_quarter: optional(data.quarter_over_quarter, readDecimal),
    year_over_year: optional(data.year_over_year, readDecimal),
    year_to_date: optional(data.year_to_date, readDecimal),
  };
}
export function decodeGdpHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.GdpHistory {
  const data = readObject(value);
  return withMeta(
    {
      annualized: optional(data.annualized, readBool),
      as_of: optional(data.as_of, readString),
      country: readString(data.country),
      currency: readString(data.currency),
      next_cursor: optional(data.next_cursor, readCursor),
      not_seasonally_adjusted: optional(data.not_seasonally_adjusted, readBool),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodeGdpHistoryObservation(item)))(
        data.observations,
      ),
      source: optional(data.source, decodeSeriesSource),
      start: optional(data.start, readString),
    },
    meta,
  );
}
export function decodeGdpHistoryObservation(
  value: unknown,
): models.GdpHistoryObservation {
  const data = readObject(value);
  return {
    first_reported_at: optional(data.first_reported_at, readString),
    period: readString(data.period),
    value: readDecimal(data.value),
  };
}
export function decodeHolder(value: unknown): models.Holder {
  const data = readObject(value);
  return {
    event_date: optional(data.event_date, readString),
    filed: readString(data.filed),
    filing_id: readString(data.filing_id),
    holder: readString(data.holder),
    percent: optional(data.percent, readDecimal),
    security: optional(data.security, decodeHolderSecurity),
    shares: optional(data.shares, readDecimal),
  };
}
export function decodeHolderSecurity(value: unknown): models.HolderSecurity {
  const data = readObject(value);
  return {
    class: optional(data.class, readString),
    isin: optional(data.isin, readString),
  };
}
export function decodeHoldersPage(
  value: unknown,
  meta: ResponseMeta = {},
): models.HoldersPage {
  const data = readObject(value);
  return withMeta(
    {
      filed_from: optional(data.filed_from, readString),
      holders: ((value: unknown) =>
        readArray(value).map((item) => decodeHolder(item)))(data.holders),
      id: readString(data.id),
    },
    meta,
  );
}
export function decodeInflation(
  value: unknown,
  meta: ResponseMeta = {},
): models.Inflation {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      month_over_month: readDecimal(data.month_over_month),
      period: readString(data.period),
      released_on: readString(data.released_on),
      source: optional(data.source, decodeSeriesSource),
      year_over_year: readDecimal(data.year_over_year),
      year_to_date: optional(data.year_to_date, readDecimal),
    },
    meta,
  );
}
export function decodeInflationHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.InflationHistory {
  const data = readObject(value);
  return withMeta(
    {
      as_of: optional(data.as_of, readString),
      country: readString(data.country),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) =>
          decodeInflationHistoryObservation(item),
        ))(data.observations),
      source: optional(data.source, decodeSeriesSource),
      start: optional(data.start, readString),
    },
    meta,
  );
}
export function decodeInflationHistoryObservation(
  value: unknown,
): models.InflationHistoryObservation {
  const data = readObject(value);
  return {
    first_reported_at: optional(data.first_reported_at, readString),
    month_over_month: optional(data.month_over_month, readDecimal),
    period: readString(data.period),
    year_over_year: optional(data.year_over_year, readDecimal),
    year_to_date: optional(data.year_to_date, readDecimal),
  };
}
export function decodeLabourForceParticipation(
  value: unknown,
  meta: ResponseMeta = {},
): models.LabourForceParticipation {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      period: readString(data.period),
      rate: readDecimal(data.rate),
      released_on: readString(data.released_on),
      source: optional(data.source, decodeSeriesSource),
    },
    meta,
  );
}
export function decodeLatestFiling(value: unknown): models.LatestFiling {
  const data = readObject(value);
  return {
    company_id: readString(data.company_id),
    filed: readString(data.filed),
    form: readString(data.form),
    id: readString(data.id),
    title: optional(data.title, readString),
    type: readString(data.type),
  };
}
export function decodeLatestFilingsPage(
  value: unknown,
  meta: ResponseMeta = {},
): models.LatestFilingsPage {
  const data = readObject(value);
  return withMeta(
    {
      filings: ((value: unknown) =>
        readArray(value).map((item) => decodeLatestFiling(item)))(data.filings),
    },
    meta,
  );
}
export function decodeListedFiling(value: unknown): models.ListedFiling {
  const data = readObject(value);
  return {
    filed: readString(data.filed),
    form: readString(data.form),
    id: readString(data.id),
    period_end: optional(data.period_end, readString),
    title: optional(data.title, readString),
    type: readString(data.type),
  };
}
export function decodeNoContent(
  value: unknown,
  meta: ResponseMeta = {},
): models.NoContent {
  readObject(value);
  return withMeta({}, meta);
}
export function decodePalmoilFfbMarketHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.PalmoilFfbMarketHistory {
  const data = readObject(value);
  return withMeta(
    {
      kind: "PalmoilFfbMarketHistory" as const,
      currency: readString(data.currency),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodePalmoilFfbObservation(item)))(
        data.observations,
      ),
      series_id: readString(data.series_id),
      unit: readString(data.unit),
    },
    meta,
  );
}
export function decodePalmoilFfbMarketPrice(
  value: unknown,
  meta: ResponseMeta = {},
): models.PalmoilFfbMarketPrice {
  const data = readObject(value);
  return withMeta(
    {
      kind: "PalmoilFfbMarketPrice" as const,
      currency: readString(data.currency),
      period_end: readString(data.period_end),
      period_start: readString(data.period_start),
      price: readDecimal(data.price),
      revision: readInt(data.revision),
      series_id: readString(data.series_id),
      unit: readString(data.unit),
    },
    meta,
  );
}
export function decodePalmoilFfbObservation(
  value: unknown,
): models.PalmoilFfbObservation {
  const data = readObject(value);
  return {
    kind: "PalmoilFfbObservation" as const,
    period_end: readString(data.period_end),
    period_start: readString(data.period_start),
    price: readDecimal(data.price),
    revision: readInt(data.revision),
  };
}
export function decodePalmoilMarketHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.PalmoilMarketHistory {
  const data = readObject(value);
  return withMeta(
    {
      kind: "PalmoilMarketHistory" as const,
      currency: readString(data.currency),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodePalmoilMarketObservation(item)))(
        data.observations,
      ),
      series_id: readString(data.series_id),
      unit: readString(data.unit),
    },
    meta,
  );
}
export function decodePalmoilMarketObservation(
  value: unknown,
): models.PalmoilMarketObservation {
  const data = readObject(value);
  return {
    kind: "PalmoilMarketObservation" as const,
    period_end: readString(data.period_end),
    period_start: readString(data.period_start),
    price: readDecimal(data.price),
    price_month: readString(data.price_month),
    revision: readInt(data.revision),
  };
}
export function decodePalmoilMarketPrice(
  value: unknown,
  meta: ResponseMeta = {},
): models.PalmoilMarketPrice {
  const data = readObject(value);
  return withMeta(
    {
      kind: "PalmoilMarketPrice" as const,
      currency: readString(data.currency),
      period_end: readString(data.period_end),
      period_start: readString(data.period_start),
      price: readDecimal(data.price),
      price_month: readString(data.price_month),
      revision: readInt(data.revision),
      series_id: readString(data.series_id),
      unit: readString(data.unit),
    },
    meta,
  );
}
export function decodePalmoilScalarHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.PalmoilScalarHistory {
  const data = readObject(value);
  return withMeta(
    {
      kind: "PalmoilScalarHistory" as const,
      currency: readString(data.currency),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodePalmoilScalarObservation(item)))(
        data.observations,
      ),
      series_id: readString(data.series_id),
      unit: readString(data.unit),
    },
    meta,
  );
}
export function decodePalmoilScalarObservation(
  value: unknown,
): models.PalmoilScalarObservation {
  const data = readObject(value);
  return {
    kind: "PalmoilScalarObservation" as const,
    period_end: readString(data.period_end),
    period_start: readString(data.period_start),
    price: readDecimal(data.price),
    revision: readInt(data.revision),
  };
}
export function decodePalmoilScalarPrice(
  value: unknown,
  meta: ResponseMeta = {},
): models.PalmoilScalarPrice {
  const data = readObject(value);
  return withMeta(
    {
      kind: "PalmoilScalarPrice" as const,
      currency: readString(data.currency),
      period_end: readString(data.period_end),
      period_start: readString(data.period_start),
      price: readDecimal(data.price),
      revision: readInt(data.revision),
      series_id: readString(data.series_id),
      unit: readString(data.unit),
    },
    meta,
  );
}
export function decodePalmoilScalarSeries(
  value: unknown,
): models.PalmoilScalarSeries {
  const data = readObject(value);
  return {
    kind: "PalmoilScalarSeries" as const,
    area: optional(data.area, readString),
    country: readString(data.country),
    coverage_end: readString(data.coverage_end),
    coverage_start: readString(data.coverage_start),
    currency: readString(data.currency),
    frequency: readString(data.frequency),
    observation_type: readString(data.observation_type),
    period_type: readString(data.period_type),
    price_type: readString(data.price_type),
    product: readString(data.product),
    series_id: readString(data.series_id),
    unit: readString(data.unit),
  };
}
export function decodePalmoilScheduleHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.PalmoilScheduleHistory {
  const data = readObject(value);
  return withMeta(
    {
      kind: "PalmoilScheduleHistory" as const,
      currency: readString(data.currency),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodePalmoilScheduleObservation(item)))(
        data.observations,
      ),
      series_id: readString(data.series_id),
      unit: readString(data.unit),
    },
    meta,
  );
}
export function decodePalmoilScheduleObservation(
  value: unknown,
): models.PalmoilScheduleObservation {
  const data = readObject(value);
  return {
    kind: "PalmoilScheduleObservation" as const,
    period_end: readString(data.period_end),
    period_start: readString(data.period_start),
    prices: ((value: unknown) =>
      readArray(value).map((item) => decodeCommodityOilPalmFfbAgePrice(item)))(
      data.prices,
    ),
    revision: readInt(data.revision),
  };
}
export function decodePalmoilSchedulePrice(
  value: unknown,
  meta: ResponseMeta = {},
): models.PalmoilSchedulePrice {
  const data = readObject(value);
  return withMeta(
    {
      kind: "PalmoilSchedulePrice" as const,
      currency: readString(data.currency),
      period_end: readString(data.period_end),
      period_start: readString(data.period_start),
      prices: ((value: unknown) =>
        readArray(value).map((item) =>
          decodeCommodityOilPalmFfbAgePrice(item),
        ))(data.prices),
      revision: readInt(data.revision),
      series_id: readString(data.series_id),
      unit: readString(data.unit),
    },
    meta,
  );
}
export function decodePalmoilScheduleSeries(
  value: unknown,
): models.PalmoilScheduleSeries {
  const data = readObject(value);
  return {
    kind: "PalmoilScheduleSeries" as const,
    area: optional(data.area, readString),
    country: readString(data.country),
    coverage_end: readString(data.coverage_end),
    coverage_start: readString(data.coverage_start),
    currency: readString(data.currency),
    frequency: readString(data.frequency),
    observation_type: readString(data.observation_type),
    period_type: readString(data.period_type),
    price_type: readString(data.price_type),
    producer_arrangement: optional(data.producer_arrangement, readString),
    product: readString(data.product),
    series_id: readString(data.series_id),
    unit: readString(data.unit),
  };
}
export function decodePalmoilSeriesDiscovery(
  value: unknown,
  meta: ResponseMeta = {},
): models.PalmoilSeriesDiscovery {
  const data = readObject(value);
  return withMeta(
    {
      next_cursor: optional(data.next_cursor, readCursor),
      series: ((value: unknown) =>
        readArray(value).map((item) => decodePalmoilSeries(item)))(data.series),
    },
    meta,
  );
}
export function decodePhysicalLatest(
  value: unknown,
  meta: ResponseMeta = {},
): models.PhysicalLatest {
  const data = readObject(value);
  return withMeta(
    {
      attribution: readString(data.attribution),
      currency: readString(data.currency),
      period_end: readString(data.period_end),
      period_start: readString(data.period_start),
      price: readDecimal(data.price),
      published_on: optional(data.published_on, readString),
      revision: readInt(data.revision),
      series_id: readString(data.series_id),
      unit: readString(data.unit),
      unit_quantity: readDecimal(data.unit_quantity),
    },
    meta,
  );
}
export function decodePhysicalObservation(
  value: unknown,
): models.PhysicalObservation {
  const data = readObject(value);
  return {
    period_end: readString(data.period_end),
    period_start: readString(data.period_start),
    price: readDecimal(data.price),
    published_on: optional(data.published_on, readString),
    revision: readInt(data.revision),
  };
}
export function decodePhysicalObservations(
  value: unknown,
  meta: ResponseMeta = {},
): models.PhysicalObservations {
  const data = readObject(value);
  return withMeta(
    {
      attribution: readString(data.attribution),
      currency: readString(data.currency),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodePhysicalObservation(item)))(
        data.observations,
      ),
      series_id: readString(data.series_id),
      unit: readString(data.unit),
      unit_quantity: readDecimal(data.unit_quantity),
    },
    meta,
  );
}
export function decodePhysicalSeries(
  value: unknown,
  meta: ResponseMeta = {},
): models.PhysicalSeries {
  const data = readObject(value);
  return withMeta(
    {
      area: optional(data.area, readString),
      attribution: readString(data.attribution),
      basis: optional(data.basis, readString),
      category: readString(data.category),
      commodity: readString(data.commodity),
      country: readString(data.country),
      coverage_end: readString(data.coverage_end),
      coverage_start: readString(data.coverage_start),
      currency: readString(data.currency),
      description: readString(data.description),
      frequency: readString(data.frequency),
      price_type: readString(data.price_type),
      product: readString(data.product),
      series_id: readString(data.series_id),
      unit: readString(data.unit),
      unit_quantity: readDecimal(data.unit_quantity),
    },
    meta,
  );
}
export function decodePhysicalSeriesPage(
  value: unknown,
  meta: ResponseMeta = {},
): models.PhysicalSeriesPage {
  const data = readObject(value);
  return withMeta(
    {
      next_cursor: optional(data.next_cursor, readCursor),
      series: ((value: unknown) =>
        readArray(value).map((item) => decodePhysicalSeries(item)))(
        data.series,
      ),
    },
    meta,
  );
}
export function decodePointPolicyRate(
  value: unknown,
  meta: ResponseMeta = {},
): models.PointPolicyRate {
  const data = readObject(value);
  return withMeta(
    {
      kind: "PointPolicyRate" as const,
      announced_on: optional(data.announced_on, readString),
      authority: readString(data.authority),
      country: readString(data.country),
      currency: readString(data.currency),
      effective_on: optional(data.effective_on, readString),
      instrument: readString(data.instrument),
      observed_on: optional(data.observed_on, readString),
      qualifier: readString(data.qualifier),
      rate: readDecimal(data.rate),
      rate_type: readString(data.rate_type),
      unit: readString(data.unit),
    },
    meta,
  );
}
export function decodePolicyPath(
  value: unknown,
  meta: ResponseMeta = {},
): models.PolicyPath {
  const data = readObject(value);
  return withMeta(
    {
      as_of: optional(data.as_of, readString),
      meetings: ((value: unknown) =>
        readArray(value).map((item) => decodePolicyPathMeeting(item)))(
        data.meetings,
      ),
    },
    meta,
  );
}
export function decodePolicyPathDay(value: unknown): models.PolicyPathDay {
  const data = readObject(value);
  return {
    date: readString(data.date),
    meetings: ((value: unknown) =>
      readArray(value).map((item) => decodePolicyPathOdds(item)))(
      data.meetings,
    ),
  };
}
export function decodePolicyPathHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.PolicyPathHistory {
  const data = readObject(value);
  return withMeta(
    {
      days: ((value: unknown) =>
        readArray(value).map((item) => decodePolicyPathDay(item)))(data.days),
      meeting_dates: ((value: unknown) =>
        readArray(value).map((item) => decodePolicyPathMeetingDate(item)))(
        data.meeting_dates,
      ),
    },
    meta,
  );
}
export function decodePolicyPathMeeting(
  value: unknown,
): models.PolicyPathMeeting {
  const data = readObject(value);
  return {
    cumulative_change_bps: readDecimal(data.cumulative_change_bps),
    event_id: readString(data.event_id),
    expected_change_bps: readDecimal(data.expected_change_bps),
    p_cut: readString(data.p_cut),
    p_hike: readString(data.p_hike),
    p_hold: readString(data.p_hold),
    resolves_at: optional(data.resolves_at, readString),
  };
}
export function decodePolicyPathMeetingDate(
  value: unknown,
): models.PolicyPathMeetingDate {
  const data = readObject(value);
  return {
    event_id: readString(data.event_id),
    resolves_at: optional(data.resolves_at, readString),
  };
}
export function decodePolicyPathOdds(value: unknown): models.PolicyPathOdds {
  const data = readObject(value);
  return {
    cumulative_change_bps: readDecimal(data.cumulative_change_bps),
    event_id: readString(data.event_id),
    expected_change_bps: readDecimal(data.expected_change_bps),
    p_cut: readString(data.p_cut),
    p_hike: readString(data.p_hike),
    p_hold: readString(data.p_hold),
  };
}
export function decodePolicyRateHistoryResponse(
  value: unknown,
  meta: ResponseMeta = {},
): models.PolicyRateHistoryResponse {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodePolicyRateObservation(item)))(
        data.observations,
      ),
    },
    meta,
  );
}
export function decodePredictionBar(value: unknown): models.PredictionBar {
  const data = readObject(value);
  return {
    close: readString(data.close),
    high: optional(data.high, readString),
    low: optional(data.low, readString),
    open: optional(data.open, readString),
    timestamp: readString(data.timestamp),
  };
}
export function decodePredictionEventSummary(
  value: unknown,
): models.PredictionEventSummary {
  const data = readObject(value);
  return {
    closes_at: optional(data.closes_at, readString),
    event_id: readString(data.event_id),
    question: readString(data.question),
    release_id: optional(data.release_id, readString),
    resolves_at: optional(data.resolves_at, readString),
    result: optional(data.result, decodePredictionResultSummary),
    shape: readString(data.shape),
    status: readString(data.status),
    topic_id: readString(data.topic_id),
  };
}
export function decodePredictionEventsPage(
  value: unknown,
  meta: ResponseMeta = {},
): models.PredictionEventsPage {
  const data = readObject(value);
  return withMeta(
    {
      events: ((value: unknown) =>
        readArray(value).map((item) => decodePredictionEventSummary(item)))(
        data.events,
      ),
      next_cursor: optional(data.next_cursor, readCursor),
    },
    meta,
  );
}
export function decodePredictionHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.PredictionHistory {
  const data = readObject(value);
  return withMeta(
    {
      backfill_venue: optional(data.backfill_venue, readString),
      end: optional(data.end, readString),
      next_cursor: optional(data.next_cursor, readCursor),
      series: ((value: unknown) =>
        readArray(value).map((item) => decodePredictionSeries(item)))(
        data.series,
      ),
    },
    meta,
  );
}
export function decodePredictionResult(
  value: unknown,
): models.PredictionResult {
  const data = readObject(value);
  return {
    amended_at: optional(data.amended_at, readString),
    final: readBool(data.final),
    settled_at: optional(data.settled_at, readString),
    venues: ((value: unknown) =>
      readArray(value).map((item) => decodePredictionResultVenue(item)))(
      data.venues,
    ),
  };
}
export function decodePredictionResultMarket(
  value: unknown,
): models.PredictionResultMarket {
  const data = readObject(value);
  return {
    market_id: readString(data.market_id),
    outcome: readString(data.outcome),
    value: optional(data.value, readDecimal),
  };
}
export function decodePredictionResultSummary(
  value: unknown,
): models.PredictionResultSummary {
  const data = readObject(value);
  return {
    amended_at: optional(data.amended_at, readString),
    final: readBool(data.final),
    settled_at: optional(data.settled_at, readString),
  };
}
export function decodePredictionResultVenue(
  value: unknown,
): models.PredictionResultVenue {
  const data = readObject(value);
  return {
    amended_at: optional(data.amended_at, readString),
    final: optional(data.final, readBool),
    markets: ((value: unknown) =>
      readArray(value).map((item) => decodePredictionResultMarket(item)))(
      data.markets,
    ),
    settled_at: optional(data.settled_at, readString),
    unavailable: optional(data.unavailable, readBool),
    venue: readString(data.venue),
  };
}
export function decodePredictionSeries(
  value: unknown,
): models.PredictionSeries {
  const data = readObject(value);
  return {
    active_from: readString(data.active_from),
    active_to: optional(data.active_to, readString),
    bars: ((value: unknown) =>
      readArray(value).map((item) => decodePredictionBar(item)))(data.bars),
    key: readString(data.key),
  };
}
export function decodePredictionTopic(value: unknown): models.PredictionTopic {
  const data = readObject(value);
  return {
    calendar: optional(data.calendar, decodeTopicCalendar),
    group: readString(data.group),
    next_event_id: optional(data.next_event_id, readString),
    resolution_kind: readString(data.resolution_kind),
    shape: readString(data.shape),
    title: readString(data.title),
    topic_id: readString(data.topic_id),
    unit: optional(data.unit, readString),
    venues: ((value: unknown) =>
      readArray(value).map((item) => readString(item)))(data.venues),
  };
}
export function decodePredictionTopicDetail(
  value: unknown,
  meta: ResponseMeta = {},
): models.PredictionTopicDetail {
  const data = readObject(value);
  return withMeta(
    {
      calendar: optional(data.calendar, decodeTopicCalendar),
      events: ((value: unknown) =>
        readArray(value).map((item) => decodePredictionTopicEvent(item)))(
        data.events,
      ),
      group: readString(data.group),
      resolution_kind: readString(data.resolution_kind),
      shape: readString(data.shape),
      title: readString(data.title),
      topic_id: readString(data.topic_id),
      unit: optional(data.unit, readString),
      venues: ((value: unknown) =>
        readArray(value).map((item) => readString(item)))(data.venues),
    },
    meta,
  );
}
export function decodePredictionTopicEvent(
  value: unknown,
): models.PredictionTopicEvent {
  const data = readObject(value);
  return {
    closes_at: optional(data.closes_at, readString),
    event_id: readString(data.event_id),
    question: readString(data.question),
    release_id: optional(data.release_id, readString),
    resolves_at: optional(data.resolves_at, readString),
    result: optional(data.result, decodePredictionResultSummary),
    status: readString(data.status),
  };
}
export function decodePredictionTopics(
  value: unknown,
  meta: ResponseMeta = {},
): models.PredictionTopics {
  const data = readObject(value);
  return withMeta(
    {
      topics: ((value: unknown) =>
        readArray(value).map((item) => decodePredictionTopic(item)))(
        data.topics,
      ),
    },
    meta,
  );
}
export function decodePredictionVenue(value: unknown): models.PredictionVenue {
  const data = readObject(value);
  return {
    excluded_reason: optional(data.excluded_reason, readString),
    match: optional(data.match, decodeVenueMatch),
    open_interest_usd: optional(data.open_interest_usd, readDecimal),
    rules_text: optional(data.rules_text, readString),
    rules_url: optional(data.rules_url, readString),
    settlement: optional(data.settlement, readString),
    settlement_source: optional(data.settlement_source, readString),
    url: readString(data.url),
    venue: readString(data.venue),
    volume_24h_usd: optional(data.volume_24h_usd, readDecimal),
    weight: optional(data.weight, readString),
  };
}
export function decodePredictionWebhookEvent(
  value: unknown,
): models.PredictionWebhookEvent {
  const data = readObject(value);
  return {
    closes_at: optional(data.closes_at, readString),
    prediction_event_id: readString(data.prediction_event_id),
    release_id: optional(data.release_id, readString),
    resolves_at: optional(data.resolves_at, readString),
    settlements: ((value: unknown) =>
      readArray(value).map((item) => decodePredictionWebhookSettlement(item)))(
      data.settlements,
    ),
    shape: readString(data.shape),
    status: readString(data.status),
    topic_id: readString(data.topic_id),
  };
}
export function decodePredictionWebhookSettlement(
  value: unknown,
): models.PredictionWebhookSettlement {
  const data = readObject(value);
  return {
    status: readString(data.status),
    venue: readString(data.venue),
  };
}
export function decodeProblem(value: unknown): models.Problem {
  const data = readObject(value);
  return {
    code: readString(data.code),
    detail: readString(data.detail),
    request_id: readString(data.request_id),
    status: readInt(data.status),
    title: readString(data.title),
    type: readString(data.type),
  };
}
export function decodeQuote(value: unknown): models.Quote {
  const data = readObject(value);
  return {
    market_ids: ((value: unknown) =>
      readArray(value).map((item) => readString(item)))(data.market_ids),
    probability: readString(data.probability),
    venue: readString(data.venue),
  };
}
export function decodeRangePolicyRate(
  value: unknown,
  meta: ResponseMeta = {},
): models.RangePolicyRate {
  const data = readObject(value);
  return withMeta(
    {
      kind: "RangePolicyRate" as const,
      announced_on: optional(data.announced_on, readString),
      authority: readString(data.authority),
      country: readString(data.country),
      currency: readString(data.currency),
      effective_on: optional(data.effective_on, readString),
      instrument: readString(data.instrument),
      lower_bound: readDecimal(data.lower_bound),
      observed_on: optional(data.observed_on, readString),
      rate_type: readString(data.rate_type),
      unit: readString(data.unit),
      upper_bound: readDecimal(data.upper_bound),
    },
    meta,
  );
}
export function decodeRateHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.RateHistory {
  const data = readObject(value);
  return withMeta(
    {
      as_of: optional(data.as_of, readString),
      country: readString(data.country),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodeRateHistoryObservation(item)))(
        data.observations,
      ),
      source: optional(data.source, decodeSeriesSource),
      start: optional(data.start, readString),
    },
    meta,
  );
}
export function decodeRateHistoryObservation(
  value: unknown,
): models.RateHistoryObservation {
  const data = readObject(value);
  return {
    first_reported_at: optional(data.first_reported_at, readString),
    period: readString(data.period),
    rate: readDecimal(data.rate),
  };
}
export function decodeRegistryCoverage(
  value: unknown,
): models.RegistryCoverage {
  const data = readObject(value);
  return {
    companies: readInt(data.companies),
    registry: readString(data.registry),
  };
}
export function decodeResourceHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.ResourceHistory {
  const data = readObject(value);
  return withMeta(
    {
      as_of: optional(data.as_of, readString),
      country: readString(data.country),
      currency: optional(data.currency, readString),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodeResourceObservation(item)))(
        data.observations,
      ),
      series_id: readString(data.series_id),
      source: optional(data.source, decodeSeriesSource),
      unit: readString(data.unit),
    },
    meta,
  );
}
export function decodeResourceObservation(
  value: unknown,
): models.ResourceObservation {
  const data = readObject(value);
  return {
    first_reported_at: optional(data.first_reported_at, readString),
    period: readString(data.period),
    released_on: optional(data.released_on, readString),
    status: optional(data.status, readString),
    value: readDecimal(data.value),
  };
}
export function decodeScalarEvent(
  value: unknown,
  meta: ResponseMeta = {},
): models.ScalarEvent {
  const data = readObject(value);
  return withMeta(
    {
      above: ((value: unknown) =>
        readArray(value).map((item) => readString(item)))(data.above),
      as_of: optional(data.as_of, readString),
      closes_at: optional(data.closes_at, readString),
      event_id: readString(data.event_id),
      median: optional(data.median, readDecimal),
      outcomes: ((value: unknown) =>
        readArray(value).map((item) => decodeScalarOutcome(item)))(
        data.outcomes,
      ),
      p10: optional(data.p10, readDecimal),
      p90: optional(data.p90, readDecimal),
      question: readString(data.question),
      release_id: optional(data.release_id, readString),
      resolution: readString(data.resolution),
      resolves_at: optional(data.resolves_at, readString),
      resolves_with: optional(data.resolves_with, readString),
      result: optional(data.result, decodePredictionResult),
      stale: optional(data.stale, readBool),
      status: readString(data.status),
      topic_id: readString(data.topic_id),
      unit: optional(data.unit, readString),
      venues: ((value: unknown) =>
        readArray(value).map((item) => decodePredictionVenue(item)))(
        data.venues,
      ),
    },
    meta,
  );
}
export function decodeScalarOutcome(value: unknown): models.ScalarOutcome {
  const data = readObject(value);
  return {
    key: readString(data.key),
    label: readString(data.label),
    lower: optional(data.lower, readDecimal),
    probability: optional(data.probability, readString),
    quotes: ((value: unknown) =>
      readArray(value).map((item) => decodeQuote(item)))(data.quotes),
    upper: optional(data.upper, readDecimal),
  };
}
export function decodeSecurityListing(value: unknown): models.SecurityListing {
  const data = readObject(value);
  return {
    code: readString(data.code),
    from: optional(data.from, readString),
    mic: readString(data.mic),
    to: optional(data.to, readString),
  };
}
export function decodeSeriesSource(value: unknown): models.SeriesSource {
  const data = readObject(value);
  return {
    distributor: readString(data.distributor),
    publisher: readString(data.publisher),
  };
}
export function decodeSplitsCalendar(
  value: unknown,
  meta: ResponseMeta = {},
): models.SplitsCalendar {
  const data = readObject(value);
  return withMeta(
    {
      entries: ((value: unknown) =>
        readArray(value).map((item) => decodeSplitsCalendarEntry(item)))(
        data.entries,
      ),
      next_cursor: optional(data.next_cursor, readCursor),
    },
    meta,
  );
}
export function decodeSplitsCalendarEntry(
  value: unknown,
): models.SplitsCalendarEntry {
  const data = readObject(value);
  return {
    date: readString(data.date),
    id: readString(data.id),
    name: readString(data.name),
    ratio: readString(data.ratio),
    symbol: readString(data.symbol),
  };
}
export function decodeTimingEvent(
  value: unknown,
  meta: ResponseMeta = {},
): models.TimingEvent {
  const data = readObject(value);
  return withMeta(
    {
      as_of: optional(data.as_of, readString),
      closes_at: optional(data.closes_at, readString),
      event_id: readString(data.event_id),
      not_within_window: optional(data.not_within_window, readString),
      question: readString(data.question),
      release_id: optional(data.release_id, readString),
      resolution: readString(data.resolution),
      resolves_at: optional(data.resolves_at, readString),
      resolves_with: optional(data.resolves_with, readString),
      result: optional(data.result, decodePredictionResult),
      stale: optional(data.stale, readBool),
      status: readString(data.status),
      steps: ((value: unknown) =>
        readArray(value).map((item) => decodeTimingStep(item)))(data.steps),
      topic_id: readString(data.topic_id),
      unit: optional(data.unit, readString),
      venues: ((value: unknown) =>
        readArray(value).map((item) => decodePredictionVenue(item)))(
        data.venues,
      ),
    },
    meta,
  );
}
export function decodeTimingStep(value: unknown): models.TimingStep {
  const data = readObject(value);
  return {
    by: readString(data.by),
    key: readString(data.key),
    kind: readString(data.kind),
    label: readString(data.label),
    probability: optional(data.probability, readString),
    quotes: ((value: unknown) =>
      readArray(value).map((item) => decodeQuote(item)))(data.quotes),
  };
}
export function decodeTopicCalendar(value: unknown): models.TopicCalendar {
  const data = readObject(value);
  return {
    country: readString(data.country),
    family: readString(data.family),
  };
}
export function decodeTradeHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.TradeHistory {
  const data = readObject(value);
  return withMeta(
    {
      as_of: optional(data.as_of, readString),
      country: readString(data.country),
      currency: readString(data.currency),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodeTradeHistoryObservation(item)))(
        data.observations,
      ),
      source: optional(data.source, decodeSeriesSource),
      start: optional(data.start, readString),
    },
    meta,
  );
}
export function decodeTradeHistoryObservation(
  value: unknown,
): models.TradeHistoryObservation {
  const data = readObject(value);
  return {
    exports: optional(data.exports, readDecimal),
    first_reported_at: optional(data.first_reported_at, readString),
    imports: optional(data.imports, readDecimal),
    period: readString(data.period),
  };
}
export function decodeTradeSummary(
  value: unknown,
  meta: ResponseMeta = {},
): models.TradeSummary {
  const data = readObject(value);
  return withMeta(
    {
      balance: readDecimal(data.balance),
      country: readString(data.country),
      currency: readString(data.currency),
      exports: readDecimal(data.exports),
      imports: readDecimal(data.imports),
      period: readString(data.period),
      released_on: readString(data.released_on),
      source: optional(data.source, decodeSeriesSource),
    },
    meta,
  );
}
export function decodeUnemployment(
  value: unknown,
  meta: ResponseMeta = {},
): models.Unemployment {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      period: readString(data.period),
      rate: readDecimal(data.rate),
      released_on: readString(data.released_on),
      source: optional(data.source, decodeSeriesSource),
    },
    meta,
  );
}
export function decodeVenueMatch(value: unknown): models.VenueMatch {
  const data = readObject(value);
  return {
    differences: ((value: unknown) =>
      readArray(value).map((item) => readString(item)))(data.differences),
    note: optional(data.note, readString),
  };
}
export function decodeWebhookConfigurationHistory(
  value: unknown,
): models.WebhookConfigurationHistory {
  const data = readObject(value);
  return {
    config_version: readInt(data.config_version),
    countries: ((value: unknown) =>
      readArray(value).map((item) => readString(item)))(data.countries),
    enabled: readBool(data.enabled),
    families: ((value: unknown) =>
      readArray(value).map((item) => readString(item)))(data.families),
    recorded_at: readString(data.recorded_at),
    url: readString(data.url),
  };
}
export function decodeWebhookDeliveriesResponse(
  value: unknown,
  meta: ResponseMeta = {},
): models.WebhookDeliveriesResponse {
  const data = readObject(value);
  return withMeta(
    {
      deliveries: ((value: unknown) =>
        readArray(value).map((item) => decodeWebhookDelivery(item)))(
        data.deliveries,
      ),
      next_cursor: optional(data.next_cursor, readCursor),
    },
    meta,
  );
}
export function decodeWebhookDelivery(value: unknown): models.WebhookDelivery {
  const data = readObject(value);
  return {
    attempts: readInt(data.attempts),
    config_version: readInt(data.config_version),
    created_at: readString(data.created_at),
    delivery_id: readString(data.delivery_id),
    event_cursor: optional(data.event_cursor, readInt),
    is_test: optional(data.is_test, readBool),
    last_error: optional(data.last_error, readString),
    last_status: optional(data.last_status, readInt),
    next_attempt_at: optional(data.next_attempt_at, readString),
    replays: optional(data.replays, readInt),
    retry_until: optional(data.retry_until, readString),
    state: readString(data.state),
    updated_at: readString(data.updated_at),
  };
}
export function decodeWebhookDestinationCreated(
  value: unknown,
  meta: ResponseMeta = {},
): models.WebhookDestinationCreated {
  const data = readObject(value);
  return withMeta(
    {
      companies: optional(data.companies, (value: unknown) =>
        readArray(value).map((item) => readString(item)),
      ),
      config_version: readInt(data.config_version),
      countries: ((value: unknown) =>
        readArray(value).map((item) => readString(item)))(data.countries),
      created_at: readString(data.created_at),
      destination_id: readString(data.destination_id),
      disabled_reason: optional(data.disabled_reason, readString),
      enabled: readBool(data.enabled),
      families: ((value: unknown) =>
        readArray(value).map((item) => readString(item)))(data.families),
      secret: readString(data.secret),
      secret_version: readInt(data.secret_version),
      updated_at: readString(data.updated_at),
      url: readString(data.url),
    },
    meta,
  );
}
export function decodeWebhookDestinationInput(
  value: unknown,
): models.WebhookDestinationInput {
  const data = readObject(value);
  return {
    companies: optional(data.companies, (value: unknown) =>
      readArray(value).map((item) => readString(item)),
    ),
    countries: ((value: unknown) =>
      readArray(value).map((item) => readString(item)))(data.countries),
    enabled: optional(data.enabled, readBool),
    families: ((value: unknown) =>
      readArray(value).map((item) => readString(item)))(data.families),
    url: readString(data.url),
  };
}
export function decodeWebhookDestinationList(
  value: unknown,
  meta: ResponseMeta = {},
): models.WebhookDestinationList {
  const data = readObject(value);
  return withMeta(
    {
      destination_limit: readInt(data.destination_limit),
      destinations: ((value: unknown) =>
        readArray(value).map((item) => decodeWebhookDestinationResponse(item)))(
        data.destinations,
      ),
    },
    meta,
  );
}
export function decodeWebhookDestinationResponse(
  value: unknown,
  meta: ResponseMeta = {},
): models.WebhookDestinationResponse {
  const data = readObject(value);
  return withMeta(
    {
      companies: optional(data.companies, (value: unknown) =>
        readArray(value).map((item) => readString(item)),
      ),
      config_version: readInt(data.config_version),
      countries: ((value: unknown) =>
        readArray(value).map((item) => readString(item)))(data.countries),
      created_at: readString(data.created_at),
      destination_id: readString(data.destination_id),
      disabled_reason: optional(data.disabled_reason, readString),
      enabled: readBool(data.enabled),
      families: ((value: unknown) =>
        readArray(value).map((item) => readString(item)))(data.families),
      secret_version: readInt(data.secret_version),
      updated_at: readString(data.updated_at),
      url: readString(data.url),
    },
    meta,
  );
}
export function decodeWebhookEvent(value: unknown): models.WebhookEvent {
  const data = readObject(value);
  return {
    country: optional(data.country, readString),
    cursor: optional(data.cursor, readString),
    event_id: readString(data.event_id),
    family: optional(data.family, readString),
    filing: optional(data.filing, decodeFilingWebhookEvent),
    holiday_generation: optional(data.holiday_generation, readInt),
    holiday_year: optional(data.holiday_year, readInt),
    prediction: optional(data.prediction, decodePredictionWebhookEvent),
    recorded_at: readString(data.recorded_at),
    release_id: optional(data.release_id, readString),
    resource_id: optional(data.resource_id, readString),
    resource_version: optional(data.resource_version, readString),
    schema_version: readString(data.schema_version),
    type: readString(data.type),
  };
}
export function decodeWebhookHistoryResponse(
  value: unknown,
  meta: ResponseMeta = {},
): models.WebhookHistoryResponse {
  const data = readObject(value);
  return withMeta(
    {
      history: ((value: unknown) =>
        readArray(value).map((item) =>
          decodeWebhookConfigurationHistory(item),
        ))(data.history),
    },
    meta,
  );
}
export function decodeWebhookTestResponse(
  value: unknown,
  meta: ResponseMeta = {},
): models.WebhookTestResponse {
  const data = readObject(value);
  return withMeta(
    {
      delivery_id: optional(data.delivery_id, readString),
      retry_after_seconds: optional(data.retry_after_seconds, readInt),
      status: readString(data.status),
    },
    meta,
  );
}
export function decodeYieldCurve(
  value: unknown,
  meta: ResponseMeta = {},
): models.YieldCurve {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      curve_type: readString(data.curve_type),
      date: readString(data.date),
      yields: ((value: unknown) =>
        readArray(value).map((item) => decodeYieldPoint(item)))(data.yields),
    },
    meta,
  );
}
export function decodeYieldCurveHistoryObservation(
  value: unknown,
): models.YieldCurveHistoryObservation {
  const data = readObject(value);
  return {
    date: readString(data.date),
    yields: ((value: unknown) =>
      readArray(value).map((item) => decodeYieldPoint(item)))(data.yields),
  };
}
export function decodeYieldCurveHistoryResponse(
  value: unknown,
  meta: ResponseMeta = {},
): models.YieldCurveHistoryResponse {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      curve_type: readString(data.curve_type),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) =>
          decodeYieldCurveHistoryObservation(item),
        ))(data.observations),
    },
    meta,
  );
}
export function decodeYieldPoint(value: unknown): models.YieldPoint {
  const data = readObject(value);
  return {
    maturity: readString(data.maturity),
    yield_percent: readDecimal(data.yield_percent),
  };
}
export function decodeFundPrice(
  value: unknown,
  meta: ResponseMeta = {},
  rawBody: Uint8Array = new Uint8Array(),
): models.FundPrice {
  const data = readObject(value);
  if (data.type === "etf") return decodeFundEtfPrice(data, meta);
  if (data.type === "mutual_fund") return decodeFundNavPrice(data, meta);
  return withMeta(unknownValue(data, rawBody), meta);
}
export function decodeFundPriceItem(
  value: unknown,
  meta: ResponseMeta = {},
  rawBody: Uint8Array = new Uint8Array(),
): models.FundPriceItem {
  const data = readObject(value);
  if (data.type === "etf") return decodeFundEtfPrice(data, meta);
  if (data.type === "mutual_fund") return decodeFundNavPrice(data, meta);
  return unknownValue(data, rawBody);
}
export function decodePalmoilHistory(
  value: unknown,
  meta: ResponseMeta = {},
  rawBody: Uint8Array = new Uint8Array(),
): models.PalmoilHistory {
  const data = readObject(value);
  optional(data.next_cursor, readCursor);
  if (data.unit === "kilogram") return decodePalmoilScheduleHistory(data, meta);
  if (data.unit === "metric_ton" && data.currency === "MYR")
    return decodePalmoilMarketHistory(data, meta);
  if (data.unit === "metric_ton" && data.currency === "USD")
    return decodePalmoilScalarHistory(data, meta);
  if (data.unit === "one_percent_oer")
    return decodePalmoilFfbMarketHistory(data, meta);
  return withMeta(unknownValue(data, rawBody), meta);
}
export function decodePalmoilObservation(
  value: unknown,
  _meta: ResponseMeta = {},
  rawBody: Uint8Array = new Uint8Array(),
  page: unknown = {},
): models.PalmoilObservation {
  const data = readObject(value);
  const tags = readObject(page);
  if (tags.unit === "kilogram") return decodePalmoilScheduleObservation(data);
  if (tags.unit === "metric_ton" && tags.currency === "MYR")
    return decodePalmoilMarketObservation(data);
  if (tags.unit === "metric_ton" && tags.currency === "USD")
    return decodePalmoilScalarObservation(data);
  if (tags.unit === "one_percent_oer") return decodePalmoilFfbObservation(data);
  return unknownValue(data, rawBody);
}
export function decodePalmoilPrice(
  value: unknown,
  meta: ResponseMeta = {},
  rawBody: Uint8Array = new Uint8Array(),
): models.PalmoilPrice {
  const data = readObject(value);
  if (data.unit === "kilogram") return decodePalmoilSchedulePrice(data, meta);
  if (data.unit === "metric_ton" && data.currency === "MYR")
    return decodePalmoilMarketPrice(data, meta);
  if (data.unit === "metric_ton" && data.currency === "USD")
    return decodePalmoilScalarPrice(data, meta);
  if (data.unit === "one_percent_oer")
    return decodePalmoilFfbMarketPrice(data, meta);
  return withMeta(unknownValue(data, rawBody), meta);
}
export function decodePalmoilSeries(
  value: unknown,
  _meta: ResponseMeta = {},
  rawBody: Uint8Array = new Uint8Array(),
): models.PalmoilSeries {
  const data = readObject(value);
  if (data.observation_type === "age_schedule")
    return decodePalmoilScheduleSeries(data);
  if (data.observation_type === "scalar")
    return decodePalmoilScalarSeries(data);
  return unknownValue(data, rawBody);
}
export function decodePolicyRate(
  value: unknown,
  meta: ResponseMeta = {},
  rawBody: Uint8Array = new Uint8Array(),
): models.PolicyRate {
  const data = readObject(value);
  if (data.rate_type === "point") return decodePointPolicyRate(data, meta);
  if (data.rate_type === "range") return decodeRangePolicyRate(data, meta);
  return withMeta(unknownValue(data, rawBody), meta);
}
export function decodePolicyRateObservation(
  value: unknown,
  meta: ResponseMeta = {},
  rawBody: Uint8Array = new Uint8Array(),
): models.PolicyRateObservation {
  const data = readObject(value);
  if (data.rate_type === "point") return decodePointPolicyRate(data, meta);
  if (data.rate_type === "range") return decodeRangePolicyRate(data, meta);
  return unknownValue(data, rawBody);
}

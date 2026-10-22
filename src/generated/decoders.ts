// Generated from spec/live/openapi.json sha256 ba06d620d3f1f03774f3f30363a59e00f14ab7cde053c552d2164ad83a9ea678. Do not edit.
// Generated from spec/next/openapi.json sha256 ba06d620d3f1f03774f3f30363a59e00f14ab7cde053c552d2164ad83a9ea678. Do not edit.
import {
  optional,
  readArray,
  readBool,
  readCursor,
  readDecimal,
  readInt,
  readObject,
  readString,
  unknownValue,
  withMeta,
} from "../decode.js";
import type { ResponseMeta } from "../meta.js";
import type * as models from "./models.js";
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
    period: readString(data.period),
    value: readDecimal(data.value),
  };
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
export function decodeFxBar(value: unknown): models.FxBar {
  const data = readObject(value);
  return {
    close: readString(data.close),
    high: readString(data.high),
    low: readString(data.low),
    open: readString(data.open),
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
    period: readString(data.period),
    value: readDecimal(data.value),
  };
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
    period: readString(data.period),
    rate: readDecimal(data.rate),
  };
}
export function decodeResourceHistory(
  value: unknown,
  meta: ResponseMeta = {},
): models.ResourceHistory {
  const data = readObject(value);
  return withMeta(
    {
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
export function decodeSeriesSource(value: unknown): models.SeriesSource {
  const data = readObject(value);
  return {
    distributor: readString(data.distributor),
    publisher: readString(data.publisher),
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

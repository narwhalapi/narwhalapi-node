// Generated from spec/live/openapi.json sha256 a8f87a3ac708cc35c7a08fa69c5bf4c3edeea4259ff31a8cc7a3f6ded6b553a8. Do not edit.
// Generated from spec/next/openapi.json sha256 a8f87a3ac708cc35c7a08fa69c5bf4c3edeea4259ff31a8cc7a3f6ded6b553a8. Do not edit.
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
export function decodeBinaryBody(value: unknown): models.BinaryBody {
  const data = readObject(value);
  return {
    deadline: optional(data.deadline, readString),
    labels: decodeBinaryLabels(data.labels),
    probability: optional(data.probability, readString),
    quotes: ((value: unknown) =>
      readArray(value).map((item) => decodeQuote(item)))(data.quotes),
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
      body: decodeBinaryBody(data.body),
      closes_at: optional(data.closes_at, readString),
      event_id: readString(data.event_id),
      quality: decodePredictionQuality(data.quality),
      question: readString(data.question),
      release_id: optional(data.release_id, readString),
      resolution: decodePredictionResolution(data.resolution),
      resolves_at: optional(data.resolves_at, readString),
      shape: readString(data.shape),
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
    nationwide: readBool(data.nationwide),
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
    nationwide: readBool(data.nationwide),
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
      year: readInt(data.year),
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
      date: readString(data.date),
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
      from_date: readString(data.from_date),
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
      refresh_note: optional(data.refresh_note, readString),
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
export function decodeCalendarSubscriptionRevoked(
  value: unknown,
  meta: ResponseMeta = {},
): models.CalendarSubscriptionRevoked {
  const data = readObject(value);
  return withMeta(
    {
      revoked: optional(data.revoked, readBool),
      subscription_id: readString(data.subscription_id),
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
      end: readString(data.end),
      interval: readString(data.interval),
      next_cursor: optional(data.next_cursor, readCursor),
      start: readString(data.start),
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
      base_period: readString(data.base_period),
      base_value: readDecimal(data.base_value),
      country: readString(data.country),
      period: readString(data.period),
      released_on: readString(data.released_on),
      source: optional(data.source, decodeSeriesSource),
      value: readDecimal(data.value),
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
    event_type: readString(data.event_type),
    family: readString(data.family),
    holiday_country: optional(data.holiday_country, readString),
    holiday_generation: optional(data.holiday_generation, readInt),
    holiday_year: optional(data.holiday_year, readInt),
    publication_id: optional(data.publication_id, readString),
    recorded_at: readString(data.recorded_at),
    release_id: optional(data.release_id, readString),
    resource_id: optional(data.resource_id, readString),
    resource_version: optional(data.resource_version, readString),
    schema_version: optional(data.schema_version, readString),
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
      as_of: readString(data.as_of),
      next_cursor: optional(data.next_cursor, readCursor),
      releases: ((value: unknown) =>
        readArray(value).map((item) => decodeEconomicRelease(item)))(
        data.releases,
      ),
      snapshot: readString(data.snapshot),
      status: optional(data.status, readString),
    },
    meta,
  );
}
export function decodeEconomicRelease(
  value: unknown,
  meta: ResponseMeta = {},
): models.EconomicRelease {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      family: readString(data.family),
      indicators: optional(data.indicators, (value: unknown) =>
        readArray(value).map((item) => decodeEconomicReleaseIndicator(item)),
      ),
      name: readString(data.name),
      notice: optional(data.notice, readString),
      observed_at: optional(data.observed_at, readString),
      officially_published_at: optional(
        data.officially_published_at,
        readString,
      ),
      reference_period: optional(data.reference_period, readString),
      release_id: readString(data.release_id),
      revision: optional(data.revision, readInt),
      schedule: decodeEconomicReleaseSchedule(data.schedule),
      series_id: optional(data.series_id, readString),
      stage: optional(data.stage, readString),
      status: readString(data.status),
      title: readString(data.title),
      topic: optional(data.topic, readString),
      variant: optional(data.variant, readString),
      version: readString(data.version),
    },
    meta,
  );
}
export function decodeEconomicReleaseIndicator(
  value: unknown,
): models.EconomicReleaseIndicator {
  const data = readObject(value);
  return {
    actual: optional(data.actual, readDecimal),
    actual_as_of: optional(data.actual_as_of, readString),
    annualization: optional(data.annualization, readString),
    currency: optional(data.currency, readString),
    index_base: optional(data.index_base, readString),
    measure: readString(data.measure),
    period: readString(data.period),
    previous: optional(data.previous, readDecimal),
    previous_as_of: optional(data.previous_as_of, readString),
    previous_before_revision: optional(
      data.previous_before_revision,
      readDecimal,
    ),
    previous_period: readString(data.previous_period),
    scale: optional(data.scale, readString),
    seasonal_adjustment: readString(data.seasonal_adjustment),
    title: readString(data.title),
    transformation: readString(data.transformation),
    unit: readString(data.unit),
    value_status: readString(data.value_status),
  };
}
export function decodeEconomicReleaseSchedule(
  value: unknown,
): models.EconomicReleaseSchedule {
  const data = readObject(value);
  return {
    at: optional(data.at, readString),
    date: optional(data.date, readString),
    local_date: optional(data.local_date, readString),
    precision: readString(data.precision),
    time_basis: optional(data.time_basis, readString),
    timezone: optional(data.timezone, readString),
    until: optional(data.until, readString),
    until_date: optional(data.until_date, readString),
  };
}
export function decodeEventDetail(
  value: unknown,
  meta: ResponseMeta = {},
): models.EventDetail {
  const data = readObject(value);
  return withMeta(
    {
      event: decodeDeliveryEvent(data.event),
      status: optional(data.status, readString),
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
      status: optional(data.status, readString),
    },
    meta,
  );
}
export function decodeExtremeBody(value: unknown): models.ExtremeBody {
  const data = readObject(value);
  return {
    down: ((value: unknown) =>
      readArray(value).map((item) => decodeExtremeLevel(item)))(data.down),
    observation: readString(data.observation),
    up: ((value: unknown) =>
      readArray(value).map((item) => decodeExtremeLevel(item)))(data.up),
    window: decodeExtremeWindow(data.window),
  };
}
export function decodeExtremeEvent(
  value: unknown,
  meta: ResponseMeta = {},
): models.ExtremeEvent {
  const data = readObject(value);
  return withMeta(
    {
      as_of: optional(data.as_of, readString),
      body: decodeExtremeBody(data.body),
      closes_at: optional(data.closes_at, readString),
      event_id: readString(data.event_id),
      quality: decodePredictionQuality(data.quality),
      question: readString(data.question),
      release_id: optional(data.release_id, readString),
      resolution: decodePredictionResolution(data.resolution),
      resolves_at: optional(data.resolves_at, readString),
      shape: readString(data.shape),
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
      end: readString(data.end),
      interval: readString(data.interval),
      next_cursor: optional(data.next_cursor, readCursor),
      start: readString(data.start),
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
      amount: readDecimal(data.amount),
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
      end_date: readString(data.end_date),
      has_more: readBool(data.has_more),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodeFxHistoricalObservation(item)))(
        data.observations,
      ),
      start_date: readString(data.start_date),
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
      annualization: readString(data.annualization),
      country: readString(data.country),
      currency: readString(data.currency),
      period: readString(data.period),
      price_basis: readString(data.price_basis),
      released_on: readString(data.released_on),
      seasonal_adjustment: readString(data.seasonal_adjustment),
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
      annualization: readString(data.annualization),
      country: readString(data.country),
      period: readString(data.period),
      price_basis: readString(data.price_basis),
      quarter_over_quarter: readDecimal(data.quarter_over_quarter),
      quarter_over_quarter_seasonal_adjustment: optional(
        data.quarter_over_quarter_seasonal_adjustment,
        readString,
      ),
      released_on: readString(data.released_on),
      seasonal_adjustment: readString(data.seasonal_adjustment),
      source: optional(data.source, decodeSeriesSource),
      unit: readString(data.unit),
      year_over_year: readDecimal(data.year_over_year),
      year_over_year_seasonal_adjustment: optional(
        data.year_over_year_seasonal_adjustment,
        readString,
      ),
      year_to_date: optional(data.year_to_date, readDecimal),
    },
    meta,
  );
}
export function decodeHistoricalEconomicsResponse(
  value: unknown,
  meta: ResponseMeta = {},
): models.HistoricalEconomicsResponse {
  const data = readObject(value);
  return withMeta(
    {
      as_of: optional(data.as_of, readString),
      next_cursor: optional(data.next_cursor, readCursor),
      observations: ((value: unknown) =>
        readArray(value).map((item) => decodeHistoricalObservation(item)))(
        data.observations,
      ),
      source: optional(data.source, decodeSeriesSource),
    },
    meta,
  );
}
export function decodeHistoricalObservation(
  value: unknown,
): models.HistoricalObservation {
  const data = readObject(value);
  return {
    country: readString(data.country),
    measure: readString(data.measure),
    period: readString(data.period),
    transformation: readString(data.transformation),
    unit: readString(data.unit),
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
      unit: readString(data.unit),
      year_over_year: readDecimal(data.year_over_year),
      year_to_date: optional(data.year_to_date, readDecimal),
    },
    meta,
  );
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
      unit: readString(data.unit),
    },
    meta,
  );
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
    commodity: readString(data.commodity),
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
    commodity: readString(data.commodity),
    country: readString(data.country),
    coverage_end: readString(data.coverage_end),
    coverage_start: readString(data.coverage_start),
    currency: readString(data.currency),
    frequency: readString(data.frequency),
    observation_type: readString(data.observation_type),
    period_type: readString(data.period_type),
    price_type: readString(data.price_type),
    producer_arrangement: optional(data.producer_arrangement, readString),
    producer_type: readString(data.producer_type),
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
      attribution: optional(data.attribution, readString),
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
      attribution: optional(data.attribution, readString),
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
      attribution: optional(data.attribution, readString),
      basis: optional(data.basis, readString),
      category: readString(data.category),
      commodity: readString(data.commodity),
      coverage_end: readString(data.coverage_end),
      coverage_start: readString(data.coverage_start),
      currency: readString(data.currency),
      description: readString(data.description),
      frequency: readString(data.frequency),
      market: readString(data.market),
      price_type: readString(data.price_type),
      product: readString(data.product),
      publisher: readString(data.publisher),
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
      authority: readString(data.authority),
      meetings: ((value: unknown) =>
        readArray(value).map((item) => decodePolicyPathMeeting(item)))(
        data.meetings,
      ),
      method: readString(data.method),
      unit: readString(data.unit),
    },
    meta,
  );
}
export function decodePolicyPathDay(value: unknown): models.PolicyPathDay {
  const data = readObject(value);
  return {
    date: readString(data.date),
    meetings: ((value: unknown) =>
      readArray(value).map((item) => decodePolicyPathMeeting(item)))(
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
      authority: readString(data.authority),
      days: ((value: unknown) =>
        readArray(value).map((item) => decodePolicyPathDay(item)))(data.days),
      method: readString(data.method),
      unit: readString(data.unit),
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
export function decodePredictionBar(value: unknown): models.PredictionBar {
  const data = readObject(value);
  return {
    close: readString(data.close),
    end: readString(data.end),
    high: optional(data.high, readString),
    low: optional(data.low, readString),
    open: optional(data.open, readString),
    start: readString(data.start),
  };
}
export function decodePredictionEventSummary(
  value: unknown,
): models.PredictionEventSummary {
  const data = readObject(value);
  return {
    as_of: optional(data.as_of, readString),
    closes_at: optional(data.closes_at, readString),
    event_id: readString(data.event_id),
    question: readString(data.question),
    release_id: optional(data.release_id, readString),
    resolves_at: optional(data.resolves_at, readString),
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
      captured_from: optional(data.captured_from, readString),
      end: readString(data.end),
      event_id: readString(data.event_id),
      interval: readString(data.interval),
      next_cursor: optional(data.next_cursor, readCursor),
      series: ((value: unknown) =>
        readArray(value).map((item) => decodePredictionSeries(item)))(
        data.series,
      ),
      shape: readString(data.shape),
      start: readString(data.start),
    },
    meta,
  );
}
export function decodePredictionQuality(
  value: unknown,
): models.PredictionQuality {
  const data = readObject(value);
  return {
    freshness: readString(data.freshness),
    monotone_repairs: readInt(data.monotone_repairs),
    rows_merged: readInt(data.rows_merged),
  };
}
export function decodePredictionResolution(
  value: unknown,
): models.PredictionResolution {
  const data = readObject(value);
  return {
    description: readString(data.description),
    resolves_with: optional(data.resolves_with, readString),
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
        readArray(value).map((item) => decodePredictionEventSummary(item)))(
        data.events,
      ),
      group: readString(data.group),
      next_event_id: optional(data.next_event_id, readString),
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
    depth_usd: optional(data.depth_usd, readDecimal),
    excluded_reason: optional(data.excluded_reason, readString),
    fetched_at: optional(data.fetched_at, readString),
    match: decodeVenueMatch(data.match),
    open_interest_usd: optional(data.open_interest_usd, readDecimal),
    role: readString(data.role),
    rules_text: optional(data.rules_text, readString),
    rules_url: optional(data.rules_url, readString),
    settlement: decodeVenueSettlement(data.settlement),
    settlement_source: optional(data.settlement_source, readString),
    url: readString(data.url),
    venue: readString(data.venue),
    venue_event_id: readString(data.venue_event_id),
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
    event_id: readString(data.event_id),
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
    instance: optional(data.instance, readString),
    ok: optional(data.ok, readBool),
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
    role: readString(data.role),
    venue: readString(data.venue),
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
export function decodeScalarBody(value: unknown): models.ScalarBody {
  const data = readObject(value);
  return {
    outcomes: ((value: unknown) =>
      readArray(value).map((item) => decodeScalarOutcome(item)))(data.outcomes),
    scale: readInt(data.scale),
    summary: optional(data.summary, decodeScalarSummary),
  };
}
export function decodeScalarEvent(
  value: unknown,
  meta: ResponseMeta = {},
): models.ScalarEvent {
  const data = readObject(value);
  return withMeta(
    {
      as_of: optional(data.as_of, readString),
      body: decodeScalarBody(data.body),
      closes_at: optional(data.closes_at, readString),
      event_id: readString(data.event_id),
      quality: decodePredictionQuality(data.quality),
      question: readString(data.question),
      release_id: optional(data.release_id, readString),
      resolution: decodePredictionResolution(data.resolution),
      resolves_at: optional(data.resolves_at, readString),
      shape: readString(data.shape),
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
export function decodeScalarSummary(value: unknown): models.ScalarSummary {
  const data = readObject(value);
  return {
    bounds: optional(data.bounds, decodeScalarSummaryBounds),
    median: optional(data.median, readDecimal),
    method: readString(data.method),
    p10: optional(data.p10, readDecimal),
    p90: optional(data.p90, readDecimal),
  };
}
export function decodeScalarSummaryBounds(
  value: unknown,
): models.ScalarSummaryBounds {
  const data = readObject(value);
  return {
    median: optional(data.median, readString),
    p10: optional(data.p10, readString),
    p90: optional(data.p90, readString),
  };
}
export function decodeSeriesSource(value: unknown): models.SeriesSource {
  const data = readObject(value);
  return {
    distributor: readString(data.distributor),
    publisher: readString(data.publisher),
    released_on_basis: readString(data.released_on_basis),
  };
}
export function decodeTimingBody(value: unknown): models.TimingBody {
  const data = readObject(value);
  return {
    not_within_window: optional(data.not_within_window, readString),
    steps: ((value: unknown) =>
      readArray(value).map((item) => decodeTimingStep(item)))(data.steps),
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
      body: decodeTimingBody(data.body),
      closes_at: optional(data.closes_at, readString),
      event_id: readString(data.event_id),
      quality: decodePredictionQuality(data.quality),
      question: readString(data.question),
      release_id: optional(data.release_id, readString),
      resolution: decodePredictionResolution(data.resolution),
      resolves_at: optional(data.resolves_at, readString),
      shape: readString(data.shape),
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
    variant: optional(data.variant, readString),
  };
}
export function decodeTradeExports(
  value: unknown,
  meta: ResponseMeta = {},
): models.TradeExports {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      coverage: readString(data.coverage),
      currency: readString(data.currency),
      flow: readString(data.flow),
      partner: optional(data.partner, readString),
      period: readString(data.period),
      product: optional(data.product, decodeTradeProductFilter),
      released_on: readString(data.released_on),
      source: optional(data.source, decodeSeriesSource),
      value: readDecimal(data.value),
    },
    meta,
  );
}
export function decodeTradeImports(
  value: unknown,
  meta: ResponseMeta = {},
): models.TradeImports {
  const data = readObject(value);
  return withMeta(
    {
      country: readString(data.country),
      coverage: readString(data.coverage),
      currency: readString(data.currency),
      flow: readString(data.flow),
      partner: optional(data.partner, readString),
      period: readString(data.period),
      product: optional(data.product, decodeTradeProductFilter),
      released_on: readString(data.released_on),
      source: optional(data.source, decodeSeriesSource),
      value: readDecimal(data.value),
    },
    meta,
  );
}
export function decodeTradeProductFilter(
  value: unknown,
): models.TradeProductFilter {
  const data = readObject(value);
  return {
    classification: readString(data.classification),
    code: readString(data.code),
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
      coverage: readString(data.coverage),
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
      unit: readString(data.unit),
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
export function decodeVenueSettlement(value: unknown): models.VenueSettlement {
  const data = readObject(value);
  return {
    status: readString(data.status),
  };
}
export function decodeWebhookConfigurationHistory(
  value: unknown,
): models.WebhookConfigurationHistory {
  const data = readObject(value);
  return {
    activation_snapshot: readString(data.activation_snapshot),
    countries: ((value: unknown) =>
      readArray(value).map((item) => readString(item)))(data.countries),
    destination_id: readString(data.destination_id),
    enabled: readBool(data.enabled),
    families: ((value: unknown) =>
      readArray(value).map((item) => readString(item)))(data.families),
    recorded_at: readString(data.recorded_at),
    url: readString(data.url),
    version: readInt(data.version),
  };
}
export function decodeWebhookDeleteResponse(
  value: unknown,
  meta: ResponseMeta = {},
): models.WebhookDeleteResponse {
  const data = readObject(value);
  return withMeta(
    {
      deleted: optional(data.deleted, readBool),
      destination_id: readString(data.destination_id),
    },
    meta,
  );
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
      limit: readInt(data.limit),
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
    next_attempt_at: readString(data.next_attempt_at),
    replays: readInt(data.replays),
    retry_until: readString(data.retry_until),
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
      destinations: ((value: unknown) =>
        readArray(value).map((item) => decodeWebhookDestinationResponse(item)))(
        data.destinations,
      ),
      limit: readInt(data.limit),
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
    holiday_country: optional(data.holiday_country, readString),
    holiday_generation: optional(data.holiday_generation, readInt),
    holiday_year: optional(data.holiday_year, readInt),
    is_test: optional(data.is_test, readBool),
    prediction: optional(data.prediction, decodePredictionWebhookEvent),
    publication_id: optional(data.publication_id, readString),
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
export function decodeWebhookReplayResponse(
  value: unknown,
  meta: ResponseMeta = {},
): models.WebhookReplayResponse {
  const data = readObject(value);
  return withMeta(
    {
      delivery_id: readString(data.delivery_id),
      replayed: readBool(data.replayed),
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
      destination_id: readString(data.destination_id),
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

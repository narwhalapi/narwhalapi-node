// Generated from spec/live/openapi.json sha256 549d8458a8dcfbbccea3ea4b23f7d9163c6525ce932e4c5f6657fdd9b728985c. Do not edit.
// Generated from spec/next/openapi.json sha256 549d8458a8dcfbbccea3ea4b23f7d9163c6525ce932e4c5f6657fdd9b728985c. Do not edit.
import type { Decimal } from "../decode.js";
import { iterate, unknownPage } from "../pagination.js";
import {
  addQuery,
  encodeBody,
  encodePath,
  type RequestOptions,
  type Transport,
} from "../transport.js";
import * as decoders from "./decoders.js";
import type * as models from "./models.js";
import type {
  BarInterval,
  EconomicFamily,
  HolidayScope,
  PalmoilPriceType,
  PalmoilProduct,
  PhysicalCategory,
  PhysicalPriceType,
  PredictionEventStatus,
  PredictionShape,
  ProducerArrangement,
  TopicGroup,
  WebhookFamily,
} from "./models.js";
export const LIVE_SPEC_SHA =
  "549d8458a8dcfbbccea3ea4b23f7d9163c6525ce932e4c5f6657fdd9b728985c";
export interface CalendarSubscriptionsCreateOptions extends RequestOptions {
  countries: Array<string>;
  end_date: string;
  families?: Array<EconomicFamily> | null;
  include_holidays?: boolean | null;
  include_releases?: boolean | null;
  scope?: string | null;
  start_date: string;
}
export class CalendarSubscriptions {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Create Calendar Subscription
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.countries Wire parameter.
   * @param options.end_date Wire parameter.
   * @param options.families Wire parameter.
   * @param options.include_holidays Wire parameter.
   * @param options.include_releases Wire parameter.
   * @param options.scope Wire parameter.
   * @param options.start_date Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async create(
    options: CalendarSubscriptionsCreateOptions,
  ): Promise<models.CalendarSubscriptionCreated> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "POST",
      encodePath("/v1/calendars/subscriptions", {}),
      query,
      encodeBody(
        {
          countries: options.countries,
          end_date: options.end_date,
          families: options.families,
          include_holidays: options.include_holidays,
          include_releases: options.include_releases,
          scope: options.scope,
          start_date: options.start_date,
        },
        ["countries", "end_date", "start_date"],
        [],
      ),
      decoders.decodeCalendarSubscriptionCreated,
      options.signal,
    );
  }
  /**
   * Revoke Calendar Subscription
   * Stability: stable.
   * @param subscription_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async revoke(
    subscription_id: string,
    options: RequestOptions = {},
  ): Promise<models.CalendarSubscriptionRevoked> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "DELETE",
      encodePath("/v1/calendars/subscriptions/{subscription_id}", {
        subscription_id: subscription_id,
      }),
      query,
      undefined,
      decoders.decodeCalendarSubscriptionRevoked,
      options.signal,
    );
  }
  /**
   * Read Calendar Subscription
   * Revocable calendar-only token URL returned once on subscription creation.
   * Stability: stable.
   * @param token Path parameter.
   * @returns Calendar feed URL; no request is made.
   */
  feedUrl(token: string): string {
    return (
      this.#transport.baseUrl +
      encodePath("/v1/calendars/subscriptions/{token}.ics", { token: token })
    );
  }
}
export interface CalendarsHolidaysOnDateOptions extends RequestOptions {
  scope?: HolidayScope;
}
export interface CalendarsNextHolidayOptions extends RequestOptions {
  from_date: string;
  scope?: HolidayScope;
}
export interface CalendarsListHolidaysOptions extends RequestOptions {
  scope?: HolidayScope;
  version_id?: string;
}
export class Calendars {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Get Calendar Holidays On Date
   * Stability: stable.
   * @param country Path parameter.
   * @param date Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.scope Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async holidaysOnDate(
    country: string,
    date: string,
    options: CalendarsHolidaysOnDateOptions = {},
  ): Promise<models.CalendarHolidaysOnDate> {
    const query = new URLSearchParams();
    addQuery(query, "scope", options.scope, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/calendars/holidays/{country}/on/{date}", {
        country: country,
        date: date,
      }),
      query,
      undefined,
      decoders.decodeCalendarHolidaysOnDate,
      options.signal,
    );
  }
  /**
   * Get Calendar Next Holiday
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.from_date Wire parameter.
   * @param options.scope Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async nextHoliday(
    country: string,
    options: CalendarsNextHolidayOptions,
  ): Promise<models.CalendarNextHoliday> {
    const query = new URLSearchParams();
    addQuery(query, "from_date", options.from_date, "single", true, false);
    addQuery(query, "scope", options.scope, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/calendars/holidays/{country}/next", { country: country }),
      query,
      undefined,
      decoders.decodeCalendarNextHoliday,
      options.signal,
    );
  }
  /**
   * List Calendar Holidays
   * Stability: stable.
   * @param country Path parameter.
   * @param year Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.scope Wire parameter.
   * @param options.version_id Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async listHolidays(
    country: string,
    year: number,
    options: CalendarsListHolidaysOptions = {},
  ): Promise<models.CalendarHolidays> {
    const query = new URLSearchParams();
    addQuery(query, "scope", options.scope, "single", false, false);
    addQuery(query, "version_id", options.version_id, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/calendars/holidays/{country}/{year}", {
        country: country,
        year: year,
      }),
      query,
      undefined,
      decoders.decodeCalendarHolidays,
      options.signal,
    );
  }
}
export interface CommoditiesPalmoilPhysicalObservationsOptions
  extends RequestOptions {
  cursor?: string;
  end?: string;
  limit?: number;
  price_month?: string;
  start?: string;
}
export interface CommoditiesPalmoilPhysicalPriceOptions extends RequestOptions {
  price_month?: string;
}
export interface CommoditiesPhysicalObservationsOptions extends RequestOptions {
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
}
export interface CommoditiesPriceHistoryOptions extends RequestOptions {
  cursor?: string;
  end: string;
  interval?: BarInterval;
  limit?: number;
  start: string;
}
export interface CommoditiesListPalmoilPhysicalSeriesOptions
  extends RequestOptions {
  area?: string;
  country?: string;
  currency?: string;
  cursor?: string;
  limit?: number;
  price_type?: PalmoilPriceType;
  producer_arrangement?: ProducerArrangement;
  producer_type?: string;
  product?: PalmoilProduct;
}
export interface CommoditiesListPhysicalSeriesOptions extends RequestOptions {
  category?: PhysicalCategory;
  commodity?: string;
  country?: string;
  currency?: string;
  cursor?: string;
  limit?: number;
  market?: string;
  price_type?: PhysicalPriceType;
}
export class Commodities {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Get Palmoil Observations
   * Stability: stable.
   * @param series_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.price_month Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async palmoilPhysicalObservations(
    series_id: string,
    options: CommoditiesPalmoilPhysicalObservationsOptions = {},
  ): Promise<models.PalmoilHistory> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "price_month", options.price_month, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/commodities/palmoil/physical/{series_id}/observations", {
        series_id: series_id,
      }),
      query,
      undefined,
      decoders.decodePalmoilHistory,
      options.signal,
    );
  }
  /**
   * Get Palmoil Observations
   * Stability: stable.
   * @param series_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.price_month Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  palmoilPhysicalObservationsIter(
    series_id: string,
    options: CommoditiesPalmoilPhysicalObservationsOptions = {},
  ): AsyncIterableIterator<models.PalmoilObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.palmoilPhysicalObservations(series_id, {
          ...options,
          cursor,
        });
        if (page.kind === "unknown")
          return unknownPage(page, "observations", (value, tags) =>
            decoders.decodePalmoilObservation(value, {}, page.raw_body, tags),
          );
        return { items: page.observations, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Palmoil Physical
   * Stability: stable.
   * @param series_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.price_month Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async palmoilPhysicalPrice(
    series_id: string,
    options: CommoditiesPalmoilPhysicalPriceOptions = {},
  ): Promise<models.PalmoilPrice> {
    const query = new URLSearchParams();
    addQuery(query, "price_month", options.price_month, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/commodities/palmoil/physical/{series_id}", {
        series_id: series_id,
      }),
      query,
      undefined,
      decoders.decodePalmoilPrice,
      options.signal,
    );
  }
  /**
   * Get Physical Latest
   * Stability: stable.
   * @param series_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async physicalLatest(
    series_id: string,
    options: RequestOptions = {},
  ): Promise<models.PhysicalLatest> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/commodities/physical/series/{series_id}/latest", {
        series_id: series_id,
      }),
      query,
      undefined,
      decoders.decodePhysicalLatest,
      options.signal,
    );
  }
  /**
   * Get Physical Observations
   * Stability: stable.
   * @param series_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async physicalObservations(
    series_id: string,
    options: CommoditiesPhysicalObservationsOptions = {},
  ): Promise<models.PhysicalObservations> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/commodities/physical/series/{series_id}/observations", {
        series_id: series_id,
      }),
      query,
      undefined,
      decoders.decodePhysicalObservations,
      options.signal,
    );
  }
  /**
   * Get Physical Observations
   * Stability: stable.
   * @param series_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  physicalObservationsIter(
    series_id: string,
    options: CommoditiesPhysicalObservationsOptions = {},
  ): AsyncIterableIterator<models.PhysicalObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.physicalObservations(series_id, {
          ...options,
          cursor,
        });
        return { items: page.observations, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Physical Series
   * Stability: stable.
   * @param series_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async getPhysicalSeries(
    series_id: string,
    options: RequestOptions = {},
  ): Promise<models.PhysicalSeries> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/commodities/physical/series/{series_id}", {
        series_id: series_id,
      }),
      query,
      undefined,
      decoders.decodePhysicalSeries,
      options.signal,
    );
  }
  /**
   * Get Commodity Price History
   * Stability: stable.
   * @param commodity Path parameter.
   * @param currency Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.interval Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async priceHistory(
    commodity: string,
    currency: string,
    options: CommoditiesPriceHistoryOptions,
  ): Promise<models.CommodityBars> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", true, false);
    addQuery(query, "interval", options.interval, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", true, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/commodities/spot/{commodity}/{currency}/bars", {
        commodity: commodity,
        currency: currency,
      }),
      query,
      undefined,
      decoders.decodeCommodityBars,
      options.signal,
    );
  }
  /**
   * Get Commodity Price History
   * Stability: stable.
   * @param commodity Path parameter.
   * @param currency Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.interval Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  priceHistoryIter(
    commodity: string,
    currency: string,
    options: CommoditiesPriceHistoryOptions,
  ): AsyncIterableIterator<models.CommodityBar> {
    return iterate(
      async (cursor) => {
        const page = await this.priceHistory(commodity, currency, {
          ...options,
          cursor,
        });
        return { items: page.bars, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Commodity Spot
   * Stability: stable.
   * @param commodity Path parameter.
   * @param currency Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async spotPrice(
    commodity: string,
    currency: string,
    options: RequestOptions = {},
  ): Promise<models.CommoditySpot> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/commodities/spot/{commodity}/{currency}", {
        commodity: commodity,
        currency: currency,
      }),
      query,
      undefined,
      decoders.decodeCommoditySpot,
      options.signal,
    );
  }
  /**
   * List Palmoil Physical
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.area Wire parameter.
   * @param options.country Wire parameter.
   * @param options.currency Wire parameter.
   * @param options.cursor Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.price_type Wire parameter.
   * @param options.producer_arrangement Wire parameter.
   * @param options.producer_type Wire parameter.
   * @param options.product Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async listPalmoilPhysicalSeries(
    options: CommoditiesListPalmoilPhysicalSeriesOptions = {},
  ): Promise<models.PalmoilSeriesDiscovery> {
    const query = new URLSearchParams();
    addQuery(query, "area", options.area, "single", false, false);
    addQuery(query, "country", options.country, "single", false, false);
    addQuery(query, "currency", options.currency, "single", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "price_type", options.price_type, "single", false, false);
    addQuery(
      query,
      "producer_arrangement",
      options.producer_arrangement,
      "single",
      false,
      false,
    );
    addQuery(
      query,
      "producer_type",
      options.producer_type,
      "single",
      false,
      false,
    );
    addQuery(query, "product", options.product, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/commodities/palmoil/physical", {}),
      query,
      undefined,
      decoders.decodePalmoilSeriesDiscovery,
      options.signal,
    );
  }
  /**
   * List Palmoil Physical
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.area Wire parameter.
   * @param options.country Wire parameter.
   * @param options.currency Wire parameter.
   * @param options.cursor Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.price_type Wire parameter.
   * @param options.producer_arrangement Wire parameter.
   * @param options.producer_type Wire parameter.
   * @param options.product Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  listPalmoilPhysicalSeriesIter(
    options: CommoditiesListPalmoilPhysicalSeriesOptions = {},
  ): AsyncIterableIterator<models.PalmoilSeries> {
    return iterate(
      async (cursor) => {
        const page = await this.listPalmoilPhysicalSeries({
          ...options,
          cursor,
        });
        return { items: page.series, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * List Physical Series
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.category Wire parameter.
   * @param options.commodity Wire parameter.
   * @param options.country Wire parameter.
   * @param options.currency Wire parameter.
   * @param options.cursor Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.market Wire parameter.
   * @param options.price_type Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async listPhysicalSeries(
    options: CommoditiesListPhysicalSeriesOptions = {},
  ): Promise<models.PhysicalSeriesPage> {
    const query = new URLSearchParams();
    addQuery(query, "category", options.category, "single", false, false);
    addQuery(query, "commodity", options.commodity, "single", false, false);
    addQuery(query, "country", options.country, "single", false, false);
    addQuery(query, "currency", options.currency, "single", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "market", options.market, "single", false, false);
    addQuery(query, "price_type", options.price_type, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/commodities/physical/series", {}),
      query,
      undefined,
      decoders.decodePhysicalSeriesPage,
      options.signal,
    );
  }
  /**
   * List Physical Series
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.category Wire parameter.
   * @param options.commodity Wire parameter.
   * @param options.country Wire parameter.
   * @param options.currency Wire parameter.
   * @param options.cursor Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.market Wire parameter.
   * @param options.price_type Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  listPhysicalSeriesIter(
    options: CommoditiesListPhysicalSeriesOptions = {},
  ): AsyncIterableIterator<models.PhysicalSeries> {
    return iterate(
      async (cursor) => {
        const page = await this.listPhysicalSeries({ ...options, cursor });
        return { items: page.series, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
}
export interface EconomicsCpiOptions extends RequestOptions {
  period?: string;
  version_id?: string;
}
export interface EconomicsCpiHistoryOptions extends RequestOptions {
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
}
export interface EconomicsGdpOptions extends RequestOptions {
  period?: string;
  version_id?: string;
}
export interface EconomicsGdpGrowthOptions extends RequestOptions {
  period?: string;
  version_id?: string;
}
export interface EconomicsGdpGrowthHistoryOptions extends RequestOptions {
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
}
export interface EconomicsGdpHistoryOptions extends RequestOptions {
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
}
export interface EconomicsInflationOptions extends RequestOptions {
  period?: string;
  version_id?: string;
}
export interface EconomicsInflationHistoryOptions extends RequestOptions {
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
}
export interface EconomicsLabourForceParticipationOptions
  extends RequestOptions {
  period?: string;
  version_id?: string;
}
export interface EconomicsLabourForceParticipationHistoryOptions
  extends RequestOptions {
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
}
export interface EconomicsGetReleaseOptions extends RequestOptions {
  version_id?: string;
}
export interface EconomicsTradeOptions extends RequestOptions {
  period?: string;
  version_id?: string;
}
export interface EconomicsTradeExportsOptions extends RequestOptions {
  classification?: string;
  partner?: string;
  period?: string;
  product?: string;
  version_id?: string;
}
export interface EconomicsTradeExportsHistoryOptions extends RequestOptions {
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
}
export interface EconomicsTradeHistoryOptions extends RequestOptions {
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
}
export interface EconomicsTradeImportsOptions extends RequestOptions {
  classification?: string;
  partner?: string;
  period?: string;
  product?: string;
  version_id?: string;
}
export interface EconomicsTradeImportsHistoryOptions extends RequestOptions {
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
}
export interface EconomicsUnemploymentOptions extends RequestOptions {
  period?: string;
  version_id?: string;
}
export interface EconomicsUnemploymentHistoryOptions extends RequestOptions {
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
}
export interface EconomicsYieldCurveOptions extends RequestOptions {
  date?: string;
  maturity?: Array<string>;
  version_id?: string;
}
export interface EconomicsYieldCurveHistoryOptions extends RequestOptions {
  cursor?: string;
  end?: string;
  limit?: number;
  maturity?: Array<string>;
  start?: string;
}
export interface EconomicsListReleasesOptions extends RequestOptions {
  countries?: Array<string>;
  cursor?: string;
  end_date?: string;
  limit?: number;
  start_date?: string;
}
export class Economics {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Get Cpi
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Wire parameter.
   * @param options.version_id Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async cpi(
    country: string,
    options: EconomicsCpiOptions = {},
  ): Promise<models.Cpi> {
    const query = new URLSearchParams();
    addQuery(query, "period", options.period, "single", false, false);
    addQuery(query, "version_id", options.version_id, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/cpi", { country: country }),
      query,
      undefined,
      decoders.decodeCpi,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async cpiHistory(
    country: string,
    options: EconomicsCpiHistoryOptions = {},
  ): Promise<models.HistoricalEconomicsResponse> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/cpi/observations", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeHistoricalEconomicsResponse,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  cpiHistoryIter(
    country: string,
    options: EconomicsCpiHistoryOptions = {},
  ): AsyncIterableIterator<models.HistoricalObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.cpiHistory(country, { ...options, cursor });
        return { items: page.observations, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Gdp
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Wire parameter.
   * @param options.version_id Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async gdp(
    country: string,
    options: EconomicsGdpOptions = {},
  ): Promise<models.Gdp> {
    const query = new URLSearchParams();
    addQuery(query, "period", options.period, "single", false, false);
    addQuery(query, "version_id", options.version_id, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/gdp", { country: country }),
      query,
      undefined,
      decoders.decodeGdp,
      options.signal,
    );
  }
  /**
   * Get Gdp Growth
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Wire parameter.
   * @param options.version_id Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async gdpGrowth(
    country: string,
    options: EconomicsGdpGrowthOptions = {},
  ): Promise<models.GdpGrowth> {
    const query = new URLSearchParams();
    addQuery(query, "period", options.period, "single", false, false);
    addQuery(query, "version_id", options.version_id, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/gdp-growth", { country: country }),
      query,
      undefined,
      decoders.decodeGdpGrowth,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async gdpGrowthHistory(
    country: string,
    options: EconomicsGdpGrowthHistoryOptions = {},
  ): Promise<models.HistoricalEconomicsResponse> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/gdp-growth/observations", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeHistoricalEconomicsResponse,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  gdpGrowthHistoryIter(
    country: string,
    options: EconomicsGdpGrowthHistoryOptions = {},
  ): AsyncIterableIterator<models.HistoricalObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.gdpGrowthHistory(country, {
          ...options,
          cursor,
        });
        return { items: page.observations, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async gdpHistory(
    country: string,
    options: EconomicsGdpHistoryOptions = {},
  ): Promise<models.HistoricalEconomicsResponse> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/gdp/observations", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeHistoricalEconomicsResponse,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  gdpHistoryIter(
    country: string,
    options: EconomicsGdpHistoryOptions = {},
  ): AsyncIterableIterator<models.HistoricalObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.gdpHistory(country, { ...options, cursor });
        return { items: page.observations, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Inflation
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Wire parameter.
   * @param options.version_id Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async inflation(
    country: string,
    options: EconomicsInflationOptions = {},
  ): Promise<models.Inflation> {
    const query = new URLSearchParams();
    addQuery(query, "period", options.period, "single", false, false);
    addQuery(query, "version_id", options.version_id, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/inflation", { country: country }),
      query,
      undefined,
      decoders.decodeInflation,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async inflationHistory(
    country: string,
    options: EconomicsInflationHistoryOptions = {},
  ): Promise<models.HistoricalEconomicsResponse> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/inflation/observations", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeHistoricalEconomicsResponse,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  inflationHistoryIter(
    country: string,
    options: EconomicsInflationHistoryOptions = {},
  ): AsyncIterableIterator<models.HistoricalObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.inflationHistory(country, {
          ...options,
          cursor,
        });
        return { items: page.observations, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Labour Force Participation
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Wire parameter.
   * @param options.version_id Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async labourForceParticipation(
    country: string,
    options: EconomicsLabourForceParticipationOptions = {},
  ): Promise<models.LabourForceParticipation> {
    const query = new URLSearchParams();
    addQuery(query, "period", options.period, "single", false, false);
    addQuery(query, "version_id", options.version_id, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/labour-force-participation", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeLabourForceParticipation,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async labourForceParticipationHistory(
    country: string,
    options: EconomicsLabourForceParticipationHistoryOptions = {},
  ): Promise<models.HistoricalEconomicsResponse> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath(
        "/v1/economics/{country}/labour-force-participation/observations",
        { country: country },
      ),
      query,
      undefined,
      decoders.decodeHistoricalEconomicsResponse,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  labourForceParticipationHistoryIter(
    country: string,
    options: EconomicsLabourForceParticipationHistoryOptions = {},
  ): AsyncIterableIterator<models.HistoricalObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.labourForceParticipationHistory(country, {
          ...options,
          cursor,
        });
        return { items: page.observations, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Economic Release
   * Stability: stable.
   * @param release_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.version_id Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async getRelease(
    release_id: string,
    options: EconomicsGetReleaseOptions = {},
  ): Promise<models.EconomicRelease> {
    const query = new URLSearchParams();
    addQuery(query, "version_id", options.version_id, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/calendar/{release_id}", {
        release_id: release_id,
      }),
      query,
      undefined,
      decoders.decodeEconomicRelease,
      options.signal,
    );
  }
  /**
   * Get Trade
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Wire parameter.
   * @param options.version_id Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async trade(
    country: string,
    options: EconomicsTradeOptions = {},
  ): Promise<models.TradeSummary> {
    const query = new URLSearchParams();
    addQuery(query, "period", options.period, "single", false, false);
    addQuery(query, "version_id", options.version_id, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/trade", { country: country }),
      query,
      undefined,
      decoders.decodeTradeSummary,
      options.signal,
    );
  }
  /**
   * Get Trade Exports
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.classification Wire parameter.
   * @param options.partner Wire parameter.
   * @param options.period Wire parameter.
   * @param options.product Wire parameter.
   * @param options.version_id Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async tradeExports(
    country: string,
    options: EconomicsTradeExportsOptions = {},
  ): Promise<models.TradeExports> {
    const query = new URLSearchParams();
    addQuery(
      query,
      "classification",
      options.classification,
      "single",
      false,
      false,
    );
    addQuery(query, "partner", options.partner, "single", false, false);
    addQuery(query, "period", options.period, "single", false, false);
    addQuery(query, "product", options.product, "single", false, false);
    addQuery(query, "version_id", options.version_id, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/trade/exports", { country: country }),
      query,
      undefined,
      decoders.decodeTradeExports,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async tradeExportsHistory(
    country: string,
    options: EconomicsTradeExportsHistoryOptions = {},
  ): Promise<models.HistoricalEconomicsResponse> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/trade/exports/observations", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeHistoricalEconomicsResponse,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  tradeExportsHistoryIter(
    country: string,
    options: EconomicsTradeExportsHistoryOptions = {},
  ): AsyncIterableIterator<models.HistoricalObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.tradeExportsHistory(country, {
          ...options,
          cursor,
        });
        return { items: page.observations, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async tradeHistory(
    country: string,
    options: EconomicsTradeHistoryOptions = {},
  ): Promise<models.HistoricalEconomicsResponse> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/trade/observations", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeHistoricalEconomicsResponse,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  tradeHistoryIter(
    country: string,
    options: EconomicsTradeHistoryOptions = {},
  ): AsyncIterableIterator<models.HistoricalObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.tradeHistory(country, { ...options, cursor });
        return { items: page.observations, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Trade Imports
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.classification Wire parameter.
   * @param options.partner Wire parameter.
   * @param options.period Wire parameter.
   * @param options.product Wire parameter.
   * @param options.version_id Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async tradeImports(
    country: string,
    options: EconomicsTradeImportsOptions = {},
  ): Promise<models.TradeImports> {
    const query = new URLSearchParams();
    addQuery(
      query,
      "classification",
      options.classification,
      "single",
      false,
      false,
    );
    addQuery(query, "partner", options.partner, "single", false, false);
    addQuery(query, "period", options.period, "single", false, false);
    addQuery(query, "product", options.product, "single", false, false);
    addQuery(query, "version_id", options.version_id, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/trade/imports", { country: country }),
      query,
      undefined,
      decoders.decodeTradeImports,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async tradeImportsHistory(
    country: string,
    options: EconomicsTradeImportsHistoryOptions = {},
  ): Promise<models.HistoricalEconomicsResponse> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/trade/imports/observations", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeHistoricalEconomicsResponse,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  tradeImportsHistoryIter(
    country: string,
    options: EconomicsTradeImportsHistoryOptions = {},
  ): AsyncIterableIterator<models.HistoricalObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.tradeImportsHistory(country, {
          ...options,
          cursor,
        });
        return { items: page.observations, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Unemployment
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Wire parameter.
   * @param options.version_id Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async unemployment(
    country: string,
    options: EconomicsUnemploymentOptions = {},
  ): Promise<models.Unemployment> {
    const query = new URLSearchParams();
    addQuery(query, "period", options.period, "single", false, false);
    addQuery(query, "version_id", options.version_id, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/unemployment", { country: country }),
      query,
      undefined,
      decoders.decodeUnemployment,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async unemploymentHistory(
    country: string,
    options: EconomicsUnemploymentHistoryOptions = {},
  ): Promise<models.HistoricalEconomicsResponse> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/unemployment/observations", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeHistoricalEconomicsResponse,
      options.signal,
    );
  }
  /**
   * Get Economics History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  unemploymentHistoryIter(
    country: string,
    options: EconomicsUnemploymentHistoryOptions = {},
  ): AsyncIterableIterator<models.HistoricalObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.unemploymentHistory(country, {
          ...options,
          cursor,
        });
        return { items: page.observations, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Yield Curve
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.date Wire parameter.
   * @param options.maturity Wire parameter.
   * @param options.version_id Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async yieldCurve(
    country: string,
    options: EconomicsYieldCurveOptions = {},
  ): Promise<models.YieldCurve> {
    const query = new URLSearchParams();
    addQuery(query, "date", options.date, "single", false, false);
    addQuery(query, "maturity", options.maturity, "comma_join", false, false);
    addQuery(query, "version_id", options.version_id, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/yield-curve", { country: country }),
      query,
      undefined,
      decoders.decodeYieldCurve,
      options.signal,
    );
  }
  /**
   * Get Yield Curve History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.maturity Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async yieldCurveHistory(
    country: string,
    options: EconomicsYieldCurveHistoryOptions = {},
  ): Promise<models.YieldCurveHistoryResponse> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "maturity", options.maturity, "comma_join", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/yield-curve/history", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeYieldCurveHistoryResponse,
      options.signal,
    );
  }
  /**
   * Get Yield Curve History
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.maturity Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  yieldCurveHistoryIter(
    country: string,
    options: EconomicsYieldCurveHistoryOptions = {},
  ): AsyncIterableIterator<models.YieldCurveHistoryObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.yieldCurveHistory(country, {
          ...options,
          cursor,
        });
        return { items: page.observations, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * List Economic Releases
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.countries Wire parameter.
   * @param options.cursor Wire parameter.
   * @param options.end_date Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start_date Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async listReleases(
    options: EconomicsListReleasesOptions = {},
  ): Promise<models.EconomicCalendar> {
    const query = new URLSearchParams();
    addQuery(query, "countries", options.countries, "repeat", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end_date", options.end_date, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start_date", options.start_date, "single", false, false);
    query.append("view", "full");
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/calendar", {}),
      query,
      undefined,
      decoders.decodeEconomicCalendar,
      options.signal,
    );
  }
  /**
   * List Economic Releases
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.countries Wire parameter.
   * @param options.cursor Wire parameter.
   * @param options.end_date Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start_date Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  listReleasesIter(
    options: EconomicsListReleasesOptions = {},
  ): AsyncIterableIterator<models.EconomicRelease> {
    return iterate(
      async (cursor) => {
        const page = await this.listReleases({ ...options, cursor });
        return { items: page.releases, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
}
export interface EventsListOptions extends RequestOptions {
  countries?: Array<string>;
  cursor?: string;
  limit?: number;
}
export class Events {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Get Delivery Event
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async get(
    event_id: string,
    options: RequestOptions = {},
  ): Promise<models.EventDetail> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/events/{event_id}", { event_id: event_id }),
      query,
      undefined,
      decoders.decodeEventDetail,
      options.signal,
    );
  }
  /**
   * List Delivery Events
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.countries Wire parameter.
   * @param options.cursor Wire parameter.
   * @param options.limit Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async list(options: EventsListOptions = {}): Promise<models.EventsPage> {
    const query = new URLSearchParams();
    addQuery(query, "countries", options.countries, "repeat", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/events", {}),
      query,
      undefined,
      decoders.decodeEventsPage,
      options.signal,
    );
  }
  /**
   * List Delivery Events
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.countries Wire parameter.
   * @param options.cursor Wire parameter.
   * @param options.limit Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  listIter(
    options: EventsListOptions = {},
  ): AsyncIterableIterator<models.DeliveryEvent> {
    return iterate(
      async (cursor) => {
        const page = await this.list({ ...options, cursor });
        return { items: page.events, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
}
export interface FxConvertCurrencyOptions extends RequestOptions {
  amount: string | Decimal;
  from: string;
  to: string;
}
export interface FxRateBarsOptions extends RequestOptions {
  currency: string;
  cursor?: string;
  end: string;
  interval?: BarInterval;
  limit?: number;
  start: string;
}
export interface FxRateHistoryOptions extends RequestOptions {
  currencies: Array<string>;
  cursor?: string;
  end_date: string;
  limit?: number;
  start_date: string;
}
export interface FxRatesOptions extends RequestOptions {
  currencies?: Array<string>;
}
export class Fx {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Convert Fx
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.amount Wire parameter.
   * @param options.from Wire parameter.
   * @param options.to Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async convertCurrency(
    options: FxConvertCurrencyOptions,
  ): Promise<models.FxConversion> {
    const query = new URLSearchParams();
    addQuery(query, "amount", options.amount, "single", true, true);
    addQuery(query, "from", options.from, "single", true, false);
    addQuery(query, "to", options.to, "single", true, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/fx/convert", {}),
      query,
      undefined,
      decoders.decodeFxConversion,
      options.signal,
    );
  }
  /**
   * Get Fx Rate Bars
   * Stability: stable.
   * @param base Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.currency Wire parameter.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.interval Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async rateBars(
    base: string,
    options: FxRateBarsOptions,
  ): Promise<models.FxBars> {
    const query = new URLSearchParams();
    addQuery(query, "currency", options.currency, "single", true, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", true, false);
    addQuery(query, "interval", options.interval, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", true, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/fx/rates/{base}/bars", { base: base }),
      query,
      undefined,
      decoders.decodeFxBars,
      options.signal,
    );
  }
  /**
   * Get Fx Rate Bars
   * Stability: stable.
   * @param base Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.currency Wire parameter.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.interval Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  rateBarsIter(
    base: string,
    options: FxRateBarsOptions,
  ): AsyncIterableIterator<models.FxBar> {
    return iterate(
      async (cursor) => {
        const page = await this.rateBars(base, { ...options, cursor });
        return { items: page.bars, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Fx Rate History
   * Stability: stable.
   * @param base Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.currencies Wire parameter.
   * @param options.cursor Wire parameter.
   * @param options.end_date Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start_date Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async rateHistory(
    base: string,
    options: FxRateHistoryOptions,
  ): Promise<models.FxHistory> {
    const query = new URLSearchParams();
    addQuery(
      query,
      "currencies",
      options.currencies,
      "comma_join",
      true,
      false,
    );
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end_date", options.end_date, "single", true, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start_date", options.start_date, "single", true, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/fx/rates/{base}/observations", { base: base }),
      query,
      undefined,
      decoders.decodeFxHistory,
      options.signal,
    );
  }
  /**
   * Get Fx Rate History
   * Stability: stable.
   * @param base Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.currencies Wire parameter.
   * @param options.cursor Wire parameter.
   * @param options.end_date Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start_date Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  rateHistoryIter(
    base: string,
    options: FxRateHistoryOptions,
  ): AsyncIterableIterator<models.FxHistoricalObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.rateHistory(base, { ...options, cursor });
        return { items: page.observations, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Fx Rates
   * Stability: stable.
   * @param base Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.currencies Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async rates(
    base: string,
    options: FxRatesOptions = {},
  ): Promise<models.FxRates> {
    const query = new URLSearchParams();
    addQuery(
      query,
      "currencies",
      options.currencies,
      "comma_join",
      false,
      false,
    );
    return this.#transport.request(
      "GET",
      encodePath("/v1/fx/rates/{base}", { base: base }),
      query,
      undefined,
      decoders.decodeFxRates,
      options.signal,
    );
  }
}
export interface PredictionsBinaryOptions extends RequestOptions {
  at?: string;
}
export interface PredictionsBinaryHistoryOptions extends RequestOptions {
  end: string;
  interval?: string;
  start: string;
}
export interface PredictionsExtremeOptions extends RequestOptions {
  at?: string;
}
export interface PredictionsExtremeHistoryOptions extends RequestOptions {
  end: string;
  interval?: string;
  start: string;
}
export interface PredictionsPolicyPathHistoryOptions extends RequestOptions {
  end: string;
  start: string;
}
export interface PredictionsScalarOptions extends RequestOptions {
  at?: string;
}
export interface PredictionsScalarHistoryOptions extends RequestOptions {
  end: string;
  interval?: string;
  start: string;
}
export interface PredictionsTimingOptions extends RequestOptions {
  at?: string;
}
export interface PredictionsTimingHistoryOptions extends RequestOptions {
  end: string;
  interval?: string;
  start: string;
}
export interface PredictionsListEventsOptions extends RequestOptions {
  cursor?: string;
  from?: string;
  limit?: number;
  release_id?: string;
  shape?: PredictionShape;
  status?: PredictionEventStatus;
  to?: string;
  topic?: string;
}
export interface PredictionsListTopicsOptions extends RequestOptions {
  group?: TopicGroup;
}
export class Predictions {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Get Prediction
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.at Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async binary(
    event_id: string,
    options: PredictionsBinaryOptions = {},
  ): Promise<models.BinaryEvent> {
    const query = new URLSearchParams();
    addQuery(query, "at", options.at, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/predictions/binary/{event_id}", { event_id: event_id }),
      query,
      undefined,
      decoders.decodeBinaryEvent,
      options.signal,
    );
  }
  /**
   * Get Prediction History
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.end Wire parameter.
   * @param options.interval Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async binaryHistory(
    event_id: string,
    options: PredictionsBinaryHistoryOptions,
  ): Promise<models.PredictionHistory> {
    const query = new URLSearchParams();
    addQuery(query, "end", options.end, "single", true, false);
    addQuery(query, "interval", options.interval, "single", false, false);
    addQuery(query, "start", options.start, "single", true, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/predictions/binary/{event_id}/history", {
        event_id: event_id,
      }),
      query,
      undefined,
      decoders.decodePredictionHistory,
      options.signal,
    );
  }
  /**
   * Get Prediction
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.at Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async extreme(
    event_id: string,
    options: PredictionsExtremeOptions = {},
  ): Promise<models.ExtremeEvent> {
    const query = new URLSearchParams();
    addQuery(query, "at", options.at, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/predictions/extreme/{event_id}", { event_id: event_id }),
      query,
      undefined,
      decoders.decodeExtremeEvent,
      options.signal,
    );
  }
  /**
   * Get Prediction History
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.end Wire parameter.
   * @param options.interval Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async extremeHistory(
    event_id: string,
    options: PredictionsExtremeHistoryOptions,
  ): Promise<models.PredictionHistory> {
    const query = new URLSearchParams();
    addQuery(query, "end", options.end, "single", true, false);
    addQuery(query, "interval", options.interval, "single", false, false);
    addQuery(query, "start", options.start, "single", true, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/predictions/extreme/{event_id}/history", {
        event_id: event_id,
      }),
      query,
      undefined,
      decoders.decodePredictionHistory,
      options.signal,
    );
  }
  /**
   * Get Policy Path
   * Stability: stable.
   * @param authority Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async policyPath(
    authority: string,
    options: RequestOptions = {},
  ): Promise<models.PolicyPath> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/predictions/policy-paths/{authority}", {
        authority: authority,
      }),
      query,
      undefined,
      decoders.decodePolicyPath,
      options.signal,
    );
  }
  /**
   * Get Policy Path History
   * Stability: stable.
   * @param authority Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.end Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async policyPathHistory(
    authority: string,
    options: PredictionsPolicyPathHistoryOptions,
  ): Promise<models.PolicyPathHistory> {
    const query = new URLSearchParams();
    addQuery(query, "end", options.end, "single", true, false);
    addQuery(query, "start", options.start, "single", true, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/predictions/policy-paths/{authority}/history", {
        authority: authority,
      }),
      query,
      undefined,
      decoders.decodePolicyPathHistory,
      options.signal,
    );
  }
  /**
   * Get Prediction
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.at Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async scalar(
    event_id: string,
    options: PredictionsScalarOptions = {},
  ): Promise<models.ScalarEvent> {
    const query = new URLSearchParams();
    addQuery(query, "at", options.at, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/predictions/scalar/{event_id}", { event_id: event_id }),
      query,
      undefined,
      decoders.decodeScalarEvent,
      options.signal,
    );
  }
  /**
   * Get Prediction History
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.end Wire parameter.
   * @param options.interval Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async scalarHistory(
    event_id: string,
    options: PredictionsScalarHistoryOptions,
  ): Promise<models.PredictionHistory> {
    const query = new URLSearchParams();
    addQuery(query, "end", options.end, "single", true, false);
    addQuery(query, "interval", options.interval, "single", false, false);
    addQuery(query, "start", options.start, "single", true, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/predictions/scalar/{event_id}/history", {
        event_id: event_id,
      }),
      query,
      undefined,
      decoders.decodePredictionHistory,
      options.signal,
    );
  }
  /**
   * Get Prediction
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.at Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async timing(
    event_id: string,
    options: PredictionsTimingOptions = {},
  ): Promise<models.TimingEvent> {
    const query = new URLSearchParams();
    addQuery(query, "at", options.at, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/predictions/timing/{event_id}", { event_id: event_id }),
      query,
      undefined,
      decoders.decodeTimingEvent,
      options.signal,
    );
  }
  /**
   * Get Prediction History
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.end Wire parameter.
   * @param options.interval Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async timingHistory(
    event_id: string,
    options: PredictionsTimingHistoryOptions,
  ): Promise<models.PredictionHistory> {
    const query = new URLSearchParams();
    addQuery(query, "end", options.end, "single", true, false);
    addQuery(query, "interval", options.interval, "single", false, false);
    addQuery(query, "start", options.start, "single", true, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/predictions/timing/{event_id}/history", {
        event_id: event_id,
      }),
      query,
      undefined,
      decoders.decodePredictionHistory,
      options.signal,
    );
  }
  /**
   * Get Prediction Topic
   * Stability: stable.
   * @param topic_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async getTopic(
    topic_id: string,
    options: RequestOptions = {},
  ): Promise<models.PredictionTopicDetail> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/predictions/topics/{topic_id}", { topic_id: topic_id }),
      query,
      undefined,
      decoders.decodePredictionTopicDetail,
      options.signal,
    );
  }
  /**
   * List Prediction Events
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.from Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.release_id Wire parameter.
   * @param options.shape Wire parameter.
   * @param options.status Wire parameter.
   * @param options.to Wire parameter.
   * @param options.topic Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async listEvents(
    options: PredictionsListEventsOptions = {},
  ): Promise<models.PredictionEventsPage> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "from", options.from, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "release_id", options.release_id, "single", false, false);
    addQuery(query, "shape", options.shape, "single", false, false);
    addQuery(query, "status", options.status, "single", false, false);
    addQuery(query, "to", options.to, "single", false, false);
    addQuery(query, "topic", options.topic, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/predictions/events", {}),
      query,
      undefined,
      decoders.decodePredictionEventsPage,
      options.signal,
    );
  }
  /**
   * List Prediction Events
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.from Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.release_id Wire parameter.
   * @param options.shape Wire parameter.
   * @param options.status Wire parameter.
   * @param options.to Wire parameter.
   * @param options.topic Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  listEventsIter(
    options: PredictionsListEventsOptions = {},
  ): AsyncIterableIterator<models.PredictionEventSummary> {
    return iterate(
      async (cursor) => {
        const page = await this.listEvents({ ...options, cursor });
        return { items: page.events, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * List Prediction Topics
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.group Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async listTopics(
    options: PredictionsListTopicsOptions = {},
  ): Promise<models.PredictionTopics> {
    const query = new URLSearchParams();
    addQuery(query, "group", options.group, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/predictions/topics", {}),
      query,
      undefined,
      decoders.decodePredictionTopics,
      options.signal,
    );
  }
}
export interface WebhooksCreateDestinationOptions extends RequestOptions {
  countries: Array<string>;
  enabled?: boolean | null;
  families: Array<WebhookFamily>;
  url: string;
}
export interface WebhooksDeliveryHistoryOptions extends RequestOptions {
  cursor?: string;
  limit?: number;
}
export interface WebhooksUpdateDestinationOptions extends RequestOptions {
  countries: Array<string>;
  enabled: boolean;
  families: Array<WebhookFamily>;
  url: string;
}
export class Webhooks {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Configuration History
   * Stability: stable.
   * @param destination_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async configurationHistory(
    destination_id: string,
    options: RequestOptions = {},
  ): Promise<models.WebhookHistoryResponse> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/webhooks/destinations/{destination_id}/history", {
        destination_id: destination_id,
      }),
      query,
      undefined,
      decoders.decodeWebhookHistoryResponse,
      options.signal,
    );
  }
  /**
   * Create Destination
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.countries Countries from the active profile's catalogue.
   * @param options.enabled Wire parameter.
   * @param options.families Wire parameter.
   * @param options.url Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async createDestination(
    options: WebhooksCreateDestinationOptions,
  ): Promise<models.WebhookDestinationCreated> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "POST",
      encodePath("/v1/webhooks/destinations", {}),
      query,
      encodeBody(
        {
          countries: options.countries,
          enabled: options.enabled,
          families: options.families,
          url: options.url,
        },
        ["countries", "families", "url"],
        [],
      ),
      decoders.decodeWebhookDestinationCreated,
      options.signal,
    );
  }
  /**
   * Delete Destination
   * Stability: stable.
   * @param destination_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async deleteDestination(
    destination_id: string,
    options: RequestOptions = {},
  ): Promise<models.WebhookDeleteResponse> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "DELETE",
      encodePath("/v1/webhooks/destinations/{destination_id}", {
        destination_id: destination_id,
      }),
      query,
      undefined,
      decoders.decodeWebhookDeleteResponse,
      options.signal,
    );
  }
  /**
   * Delivery History
   * Stability: stable.
   * @param destination_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.limit Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async deliveryHistory(
    destination_id: string,
    options: WebhooksDeliveryHistoryOptions = {},
  ): Promise<models.WebhookDeliveriesResponse> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/webhooks/destinations/{destination_id}/deliveries", {
        destination_id: destination_id,
      }),
      query,
      undefined,
      decoders.decodeWebhookDeliveriesResponse,
      options.signal,
    );
  }
  /**
   * Delivery History
   * Stability: stable.
   * @param destination_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.limit Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  deliveryHistoryIter(
    destination_id: string,
    options: WebhooksDeliveryHistoryOptions = {},
  ): AsyncIterableIterator<models.WebhookDelivery> {
    return iterate(
      async (cursor) => {
        const page = await this.deliveryHistory(destination_id, {
          ...options,
          cursor,
        });
        return { items: page.deliveries, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Destination
   * Stability: stable.
   * @param destination_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async getDestination(
    destination_id: string,
    options: RequestOptions = {},
  ): Promise<models.WebhookDestinationResponse> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/webhooks/destinations/{destination_id}", {
        destination_id: destination_id,
      }),
      query,
      undefined,
      decoders.decodeWebhookDestinationResponse,
      options.signal,
    );
  }
  /**
   * List Destinations
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async listDestinations(
    options: RequestOptions = {},
  ): Promise<models.WebhookDestinationList> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/webhooks/destinations", {}),
      query,
      undefined,
      decoders.decodeWebhookDestinationList,
      options.signal,
    );
  }
  /**
   * Replay Delivery
   * Stability: stable.
   * @param delivery_id Path parameter.
   * @param destination_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async replayDelivery(
    delivery_id: string,
    destination_id: string,
    options: RequestOptions = {},
  ): Promise<models.WebhookReplayResponse> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "POST",
      encodePath(
        "/v1/webhooks/destinations/{destination_id}/deliveries/{delivery_id}/replay",
        { delivery_id: delivery_id, destination_id: destination_id },
      ),
      query,
      undefined,
      decoders.decodeWebhookReplayResponse,
      options.signal,
    );
  }
  /**
   * Rotate Secret
   * Stability: stable.
   * @param destination_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async rotateSecret(
    destination_id: string,
    options: RequestOptions = {},
  ): Promise<models.WebhookDestinationCreated> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "POST",
      encodePath("/v1/webhooks/destinations/{destination_id}/rotate-secret", {
        destination_id: destination_id,
      }),
      query,
      undefined,
      decoders.decodeWebhookDestinationCreated,
      options.signal,
    );
  }
  /**
   * Test Destination
   * Stability: stable.
   * @param destination_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async testDestination(
    destination_id: string,
    options: RequestOptions = {},
  ): Promise<models.WebhookTestResponse> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "POST",
      encodePath("/v1/webhooks/destinations/{destination_id}/test", {
        destination_id: destination_id,
      }),
      query,
      undefined,
      decoders.decodeWebhookTestResponse,
      options.signal,
    );
  }
  /**
   * Update Destination
   * Stability: stable.
   * @param destination_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.countries Countries from the active profile's catalogue.
   * @param options.enabled Wire parameter.
   * @param options.families Wire parameter.
   * @param options.url Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async updateDestination(
    destination_id: string,
    options: WebhooksUpdateDestinationOptions,
  ): Promise<models.WebhookDestinationResponse> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "PATCH",
      encodePath("/v1/webhooks/destinations/{destination_id}", {
        destination_id: destination_id,
      }),
      query,
      encodeBody(
        {
          countries: options.countries,
          enabled: options.enabled,
          families: options.families,
          url: options.url,
        },
        ["countries", "enabled", "families", "url"],
        [],
      ),
      decoders.decodeWebhookDestinationResponse,
      options.signal,
    );
  }
}
export class StableOperations {
  readonly calendarSubscriptions: CalendarSubscriptions;
  readonly calendars: Calendars;
  readonly commodities: Commodities;
  readonly economics: Economics;
  readonly events: Events;
  readonly fx: Fx;
  readonly predictions: Predictions;
  readonly webhooks: Webhooks;
  readonly unstable: UnstableOperations;
  constructor(transport: Transport) {
    this.calendarSubscriptions = new CalendarSubscriptions(transport);
    this.calendars = new Calendars(transport);
    this.commodities = new Commodities(transport);
    this.economics = new Economics(transport);
    this.events = new Events(transport);
    this.fx = new Fx(transport);
    this.predictions = new Predictions(transport);
    this.webhooks = new Webhooks(transport);
    this.unstable = new UnstableOperations();
  }
}
export class UnstableOperations {}

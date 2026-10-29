// Generated from spec/live/openapi.json sha256 5071bd97e9507eb56b344d00a24ba056ce1340fe1184faa4d755fe7e407e1cf6. Do not edit.
// Generated from spec/next/openapi.json sha256 5071bd97e9507eb56b344d00a24ba056ce1340fe1184faa4d755fe7e407e1cf6. Do not edit.
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
  CatalogueLatestFrequency,
  CostOfCapitalBeta,
  CostOfCapitalFrequency,
  CostOfCapitalPeriod,
  CostOfCapitalWindow,
  CryptoBarInterval,
  CryptoQuote,
  EconomicFamily,
  EquityType,
  FilingType,
  FinancialStatement,
  FinancialsBasis,
  FinancialsPeriod,
  FinancialsVersion,
  FundType,
  HolidayScope,
  Language,
  PalmoilPriceType,
  PalmoilProduct,
  PhysicalCategory,
  PhysicalPriceType,
  PredictionEventStatus,
  PredictionShape,
  ProducerArrangement,
  Registry,
  TopicGroup,
  WebhookFamily,
} from "./models.js";
export const LIVE_SPEC_SHA =
  "5071bd97e9507eb56b344d00a24ba056ce1340fe1184faa4d755fe7e407e1cf6";
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
   * @param subscription_id Calendar subscription ID (UUID).
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async revoke(
    subscription_id: string,
    options: RequestOptions = {},
  ): Promise<models.NoContent> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "DELETE",
      encodePath("/v1/calendars/subscriptions/{subscription_id}", {
        subscription_id: subscription_id,
      }),
      query,
      undefined,
      decoders.decodeNoContent,
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
   * Published public holidays on one date. Returns 404 when no calendar is published for the country, year or scope.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param date Date, YYYY-MM-DD. Plan history window - Free: the last 12 months. Basic: the last 5 years. Pro: full history.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.scope Only holidays and coverage of this scope, for example national_public.
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
   * Next published public holiday on or after a date. Returns 404 when no calendar is published for the country, year or scope.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.from_date Date to search from, YYYY-MM-DD. Plan history window - Free: the last 12 months. Basic: the last 5 years. Pro: full history.
   * @param options.scope Only holidays and coverage of this scope, for example national_public.
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
   * Published public holidays for a country and year, with the calendar coverage. An empty `subdivision_codes` list means the holiday applies nationwide. Returns 404 when no calendar is published for the country, year or scope.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param year Calendar year. Plan history window - Free: the last 12 months. Basic: the last 5 years. Pro: full history.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.scope Only holidays and coverage of this scope, for example national_public.
   * @param options.version_id Immutable calendar version from a holiday event.
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
  price_type?: PhysicalPriceType;
}
export class Commodities {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Get Palmoil Observations
   * Palm-oil prices of one series by native period. Supply start and end together.
   * Stability: stable.
   * @param series_id Palm-oil series ID.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end First day to exclude from the range. Supply start and end together.
   * @param options.limit Maximum rows per page.
   * @param options.price_month Month to read, YYYY-MM. MPOB CPO series only.
   * @param options.start First date to include. Supply start and end together.
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
   * Palm-oil prices of one series by native period. Supply start and end together.
   * Stability: stable.
   * @param series_id Palm-oil series ID.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end First day to exclude from the range. Supply start and end together.
   * @param options.limit Maximum rows per page.
   * @param options.price_month Month to read, YYYY-MM. MPOB CPO series only.
   * @param options.start First date to include. Supply start and end together.
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
   * Latest approved palm-oil price of one series: a single CPO price or a full FFB age schedule.
   * Stability: stable.
   * @param series_id Palm-oil series ID.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.price_month Month to read, YYYY-MM. MPOB CPO series only.
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
   * Latest published price of one physical price series.
   * Stability: stable.
   * @param series_id Series ID. `latest` is not a series ID.
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
   * Published prices of one physical price series. `start` is inclusive and `end` is exclusive. Supply start and end together.
   * Stability: stable.
   * @param series_id Series ID. `latest` is not a series ID.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end First day to exclude from the range. Supply start and end together.
   * @param options.limit Maximum rows per page.
   * @param options.start First day to include. Supply start and end together.
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
   * Published prices of one physical price series. `start` is inclusive and `end` is exclusive. Supply start and end together.
   * Stability: stable.
   * @param series_id Series ID. `latest` is not a series ID.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end First day to exclude from the range. Supply start and end together.
   * @param options.limit Maximum rows per page.
   * @param options.start First day to include. Supply start and end together.
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
   * Definition of one physical price series: commodity, category, product, country, area, price type, basis, currency, unit, unit_quantity, frequency, description, attribution, coverage_start and coverage_end.
   * Stability: stable.
   * @param series_id Series ID. `latest` is not a series ID.
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
   * Closed price bars for one commodity and quote currency, from one minute to one day. A request may span at most 3 days of 1m bars, 14 days of 5m bars, 60 days of 15m bars; a longer range returns 400. Wider intervals have no cap.
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
   * Closed price bars for one commodity and quote currency, from one minute to one day. A request may span at most 3 days of 1m bars, 14 days of 5m bars, 60 days of 15m bars; a longer range returns 400. Wider intervals have no cap.
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
   * List approved palm-oil price series. Filters combine. A filter that matches nothing returns an empty list.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.area Area code inside the country.
   * @param options.country ISO 3166-1 alpha-3 country code.
   * @param options.currency Quote currency, ISO 4217 code.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.limit Maximum rows per page.
   * @param options.price_type Price definition.
   * @param options.producer_arrangement Producer arrangement: purchase_agreement or supported_scheme.
   * @param options.producer_type Producer type; only smallholder is supported.
   * @param options.product ffb (fresh fruit bunches) or cpo (crude palm oil).
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
   * List approved palm-oil price series. Filters combine. A filter that matches nothing returns an empty list.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.area Area code inside the country.
   * @param options.country ISO 3166-1 alpha-3 country code.
   * @param options.currency Quote currency, ISO 4217 code.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.limit Maximum rows per page.
   * @param options.price_type Price definition.
   * @param options.producer_arrangement Producer arrangement: purchase_agreement or supported_scheme.
   * @param options.producer_type Producer type; only smallholder is supported.
   * @param options.product ffb (fresh fruit bunches) or cpo (crude palm oil).
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
   * List published physical and official reference price series. Filters combine. A filter that matches nothing returns an empty list.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.category Commodity category.
   * @param options.commodity Commodity slug, for example wheat.
   * @param options.country Market: ISO 3166-1 alpha-3 code, WLD (world) or EUU (European Union).
   * @param options.currency Quote currency, ISO 4217 code.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.limit Maximum rows per page.
   * @param options.price_type Price type, for example retail_average.
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
   * List published physical and official reference price series. Filters combine. A filter that matches nothing returns an empty list.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.category Commodity category.
   * @param options.commodity Commodity slug, for example wheat.
   * @param options.country Market: ISO 3166-1 alpha-3 code, WLD (world) or EUU (European Union).
   * @param options.currency Quote currency, ISO 4217 code.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.limit Maximum rows per page.
   * @param options.price_type Price type, for example retail_average.
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
export interface CompanyCalendarsDividendsOptions extends RequestOptions {
  country?: string;
  end?: string;
  start?: string;
}
export interface CompanyCalendarsSplitsOptions extends RequestOptions {
  country?: string;
  end?: string;
  start?: string;
}
export class CompanyCalendars {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Company dividends calendar
   * Dividends going ex in the window: the ex-date, the amount per share and its currency. `start` and `end` are inclusive days (YYYY-MM-DD); left out, `start` is today (UTC) and `end` is `start`. Dates run from 30 days back to 90 days ahead (400 invalid_query outside), and a request spans at most 7 days (400 range_too_large). `country` is USA, the only country for now (404 not_covered). Only companies in our symbol list appear, with our id and name; units and share classes of one issuer are one row. Open to every plan and one call a request.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.country Three-letter country code of the listing. Left out means USA, the only country for now (another one is 404 not_covered).
   * @param options.end Last day, inclusive. Left out means `start`. At most 7 days from `start` (400 range_too_large).
   * @param options.start First day (YYYY-MM-DD), inclusive. Left out means today (UTC). Between 30 days back and 90 days ahead.
   * @returns Decoded response with header metadata.
   */
  async dividends(
    options: CompanyCalendarsDividendsOptions = {},
  ): Promise<models.DividendsCalendar> {
    const query = new URLSearchParams();
    addQuery(query, "country", options.country, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/calendars/dividends", {}),
      query,
      undefined,
      decoders.decodeDividendsCalendar,
      options.signal,
    );
  }
  /**
   * Company splits calendar
   * Stock splits taking effect in the window, with the ratio as new shares for old (4:1 gives four for one; 1:10 is a reverse split). `start` and `end` are inclusive days (YYYY-MM-DD); left out, `start` is today (UTC) and `end` is `start`. Dates run from 30 days back to 90 days ahead (400 invalid_query outside), and a request spans at most 7 days (400 range_too_large). `country` is USA, the only country for now (404 not_covered). Only companies in our symbol list appear, with our id and name; units and share classes of one issuer are one row. Open to every plan and one call a request.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.country Three-letter country code of the listing. Left out means USA, the only country for now (another one is 404 not_covered).
   * @param options.end Last day, inclusive. Left out means `start`. At most 7 days from `start` (400 range_too_large).
   * @param options.start First day (YYYY-MM-DD), inclusive. Left out means today (UTC). Between 30 days back and 90 days ahead.
   * @returns Decoded response with header metadata.
   */
  async splits(
    options: CompanyCalendarsSplitsOptions = {},
  ): Promise<models.SplitsCalendar> {
    const query = new URLSearchParams();
    addQuery(query, "country", options.country, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/calendars/splits", {}),
      query,
      undefined,
      decoders.decodeSplitsCalendar,
      options.signal,
    );
  }
}
export interface CryptoBarsOptions extends RequestOptions {
  cursor?: string;
  end?: string;
  interval?: CryptoBarInterval;
  start?: string;
}
export interface CryptoPricesOptions extends RequestOptions {
  pairs: string;
}
export interface CryptoListPairsOptions extends RequestOptions {
  quote?: CryptoQuote;
}
export class Crypto {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Price bars of one crypto pair
   * Daily (`1d`, one UTC day, closing at 00:00 UTC) or one-minute (`1m`) bars, oldest first. A day's bar is out at 00:00 UTC (Free: 15 minutes later, and `end` comes back when that cut the range); today's partial bar is never shown. One-minute bars are for Basic and Pro (Free gets 403 plan_upgrade_required). History: Free 12 months, Basic 5 years, Pro everything; `start` is sent back when the plan raised it. Up to 5,000 bars a page, with `next_cursor`; a cursor that no longer matches the prices is 409 cursor_expired. One call a page.
   * Stability: stable.
   * @param pair Crypto pair: the coin, a dash and the quote currency, for example BTC-USD or ETH-EUR. Any case; a slash in place of the dash is accepted. The answer carries the canonical pair.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor `next_cursor` of the previous page, with the same parameters.
   * @param options.end Last bar. `1d`: a date, inclusive; left out means the latest finished day. `1m`: a UTC time, exclusive; left out means now, or five days after `start`. At most 5 days between `start` and `end` for `1m` (400 range_too_large).
   * @param options.interval `1d` (one bar per UTC day, closing at 00:00 UTC) or `1m` (one-minute bars, Basic and Pro only). Anything else is 400 invalid_interval.
   * @param options.start First bar. `1d`: a date (YYYY-MM-DD), inclusive; left out means the oldest bar your plan reaches. `1m`: a UTC time (YYYY-MM-DDTHH:MM:SSZ, or a date for 00:00 UTC), inclusive; left out means one day before `end`.
   * @returns Decoded response with header metadata.
   */
  async bars(
    pair: string,
    options: CryptoBarsOptions = {},
  ): Promise<models.CryptoBars> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "interval", options.interval, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/crypto/{pair}/bars", { pair: pair }),
      query,
      undefined,
      decoders.decodeCryptoBars,
      options.signal,
    );
  }
  /**
   * Price bars of one crypto pair
   * Daily (`1d`, one UTC day, closing at 00:00 UTC) or one-minute (`1m`) bars, oldest first. A day's bar is out at 00:00 UTC (Free: 15 minutes later, and `end` comes back when that cut the range); today's partial bar is never shown. One-minute bars are for Basic and Pro (Free gets 403 plan_upgrade_required). History: Free 12 months, Basic 5 years, Pro everything; `start` is sent back when the plan raised it. Up to 5,000 bars a page, with `next_cursor`; a cursor that no longer matches the prices is 409 cursor_expired. One call a page.
   * Stability: stable.
   * @param pair Crypto pair: the coin, a dash and the quote currency, for example BTC-USD or ETH-EUR. Any case; a slash in place of the dash is accepted. The answer carries the canonical pair.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor `next_cursor` of the previous page, with the same parameters.
   * @param options.end Last bar. `1d`: a date, inclusive; left out means the latest finished day. `1m`: a UTC time, exclusive; left out means now, or five days after `start`. At most 5 days between `start` and `end` for `1m` (400 range_too_large).
   * @param options.interval `1d` (one bar per UTC day, closing at 00:00 UTC) or `1m` (one-minute bars, Basic and Pro only). Anything else is 400 invalid_interval.
   * @param options.start First bar. `1d`: a date (YYYY-MM-DD), inclusive; left out means the oldest bar your plan reaches. `1m`: a UTC time (YYYY-MM-DDTHH:MM:SSZ, or a date for 00:00 UTC), inclusive; left out means one day before `end`.
   * @returns Items yielded lazily across pages.
   */
  barsIter(
    pair: string,
    options: CryptoBarsOptions = {},
  ): AsyncIterableIterator<models.CryptoBar> {
    return iterate(
      async (cursor) => {
        const page = await this.bars(pair, { ...options, cursor });
        return { items: page.bars, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Latest price of one crypto pair
   * The latest composite price of a pair, with the 24-hour change (left out on Free and when it is not known). Crypto trades all day, so there is no market session; `stale` is true when the price is more than 5 minutes old. Free sees the price 15 minutes late and the answer carries `delayed: true`. `change_24h_percent` is in percent.
   * Stability: stable.
   * @param pair Crypto pair: the coin, a dash and the quote currency, for example BTC-USD or ETH-EUR. Any case; a slash in place of the dash is accepted. The answer carries the canonical pair.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async price(
    pair: string,
    options: RequestOptions = {},
  ): Promise<models.CryptoPrice> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/crypto/{pair}/price", { pair: pair }),
      query,
      undefined,
      decoders.decodeCryptoPrice,
      options.signal,
    );
  }
  /**
   * Latest prices for up to 50 crypto pairs
   * Latest price of each listed pair (Free sees them 15 minutes late). One call is counted for each pair that returns a price, taken in one step: if fewer calls are left than pairs that resolved, the whole request is refused with 429 quota_exceeded. Pairs that return no price are listed in `errors` (as `id`) and cost nothing. `change_24h_percent` is in percent.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.pairs Comma-separated pairs, at most 50 after duplicates are removed. Each pair follows the same rules as the single-price route. One call is counted for each pair that returns a price.
   * @returns Decoded response with header metadata.
   */
  async prices(options: CryptoPricesOptions): Promise<models.CryptoPrices> {
    const query = new URLSearchParams();
    addQuery(query, "pairs", options.pairs, "single", true, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/crypto/prices", {}),
      query,
      undefined,
      decoders.decodeCryptoPrices,
      options.signal,
    );
  }
  /**
   * Crypto pairs we price
   * Every pair we price, by pair (`BTC-USD` style). Optional `quote` (USD, EUR or GBP). A pair is listed while it trades at least once every 30 seconds and dropped when it falls below once every 2 minutes. Read from our own pair list, so it is open to every plan and counts one call.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.quote Only pairs quoted in this currency (USD, EUR or GBP).
   * @returns Decoded response with header metadata.
   */
  async listPairs(
    options: CryptoListPairsOptions = {},
  ): Promise<models.CryptoPairs> {
    const query = new URLSearchParams();
    addQuery(query, "quote", options.quote, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/crypto/pairs", {}),
      query,
      undefined,
      decoders.decodeCryptoPairs,
      options.signal,
    );
  }
}
export interface EconomicsCentralBankBalanceSheetOptions
  extends RequestOptions {
  period?: string;
}
export interface EconomicsCentralBankReservesOptions extends RequestOptions {
  period?: string;
}
export interface EconomicsCpiOptions extends RequestOptions {
  period?: string;
  version_id?: string;
}
export interface EconomicsCpiHistoryOptions extends RequestOptions {
  as_of?: string;
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
  version?: string;
}
export interface EconomicsGetEquityRiskPremiumOptions extends RequestOptions {
  date?: string;
}
export interface EconomicsEquityRiskPremiumHistoryOptions
  extends RequestOptions {
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
  as_of?: string;
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
  version?: string;
}
export interface EconomicsGdpHistoryOptions extends RequestOptions {
  as_of?: string;
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
  version?: string;
}
export interface EconomicsInflationOptions extends RequestOptions {
  period?: string;
  version_id?: string;
}
export interface EconomicsInflationHistoryOptions extends RequestOptions {
  as_of?: string;
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
  version?: string;
}
export interface EconomicsLabourForceParticipationOptions
  extends RequestOptions {
  period?: string;
  version_id?: string;
}
export interface EconomicsLabourForceParticipationHistoryOptions
  extends RequestOptions {
  as_of?: string;
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
  version?: string;
}
export interface EconomicsPolicyRateOptions extends RequestOptions {
  date?: string;
}
export interface EconomicsPolicyRateHistoryOptions extends RequestOptions {
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
export interface EconomicsTradeHistoryOptions extends RequestOptions {
  as_of?: string;
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
  version?: string;
}
export interface EconomicsUnemploymentOptions extends RequestOptions {
  period?: string;
  version_id?: string;
}
export interface EconomicsUnemploymentHistoryOptions extends RequestOptions {
  as_of?: string;
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
  version?: string;
}
export interface EconomicsYieldCurveOptions extends RequestOptions {
  date?: string;
  maturity?: Array<string>;
  version_id?: string;
}
export interface EconomicsYieldCurveHistoryOptions extends RequestOptions {
  as_of?: string;
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
export interface EconomicsReadCatalogueLatestBatchOptions
  extends RequestOptions {
  ids: string;
}
export interface EconomicsReadCatalogueObservationsOptions
  extends RequestOptions {
  cursor?: string;
  end?: string;
  id: string;
  limit?: number;
  start?: string;
}
export interface EconomicsReadCatalogueSeriesOptions extends RequestOptions {
  id: string;
}
export interface EconomicsReadSeriesObservationsOptions extends RequestOptions {
  as_of?: string;
  cursor?: string;
  end?: string;
  limit?: number;
  start?: string;
  version?: string;
}
export interface EconomicsSearchCatalogueOptions extends RequestOptions {
  country?: string;
  cursor?: string;
  frequency?: CatalogueLatestFrequency;
  limit?: number;
  q?: string;
  source?: string;
}
export class Economics {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Get Central Bank Balance Sheet
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async centralBankBalanceSheet(
    country: string,
    options: EconomicsCentralBankBalanceSheetOptions = {},
  ): Promise<models.CentralBankBalanceSheet> {
    const query = new URLSearchParams();
    addQuery(query, "period", options.period, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/central-bank/balance-sheet", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeCentralBankBalanceSheet,
      options.signal,
    );
  }
  /**
   * Get Central Bank Reserves
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async centralBankReserves(
    country: string,
    options: EconomicsCentralBankReservesOptions = {},
  ): Promise<models.CentralBankReserves> {
    const query = new URLSearchParams();
    addQuery(query, "period", options.period, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/central-bank/reserves", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeCentralBankReserves,
      options.signal,
    );
  }
  /**
   * Get Cpi
   * Latest headline consumer price index for a country, or one period with `period`.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Period to read: YYYY-MM. Omit it for the latest period. Plan history window - Free: the last 12 months. Basic: the last 5 years. Pro: full history.
   * @param options.version_id Immutable publication version to read. Omit it for the current version.
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
   * Get Cpi History
   * The headline consumer price index by period, oldest first.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.limit Maximum periods per page.
   * @param options.start First period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Decoded response with header metadata.
   */
  async cpiHistory(
    country: string,
    options: EconomicsCpiHistoryOptions = {},
  ): Promise<models.CpiHistory> {
    const query = new URLSearchParams();
    addQuery(query, "as_of", options.as_of, "single", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    addQuery(query, "version", options.version, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/cpi/observations", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeCpiHistory,
      options.signal,
    );
  }
  /**
   * Get Cpi History
   * The headline consumer price index by period, oldest first.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.limit Maximum periods per page.
   * @param options.start First period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Items yielded lazily across pages.
   */
  cpiHistoryIter(
    country: string,
    options: EconomicsCpiHistoryOptions = {},
  ): AsyncIterableIterator<models.CpiHistoryObservation> {
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
   * Get Equity Risk Premium
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.date Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async getEquityRiskPremium(
    country: string,
    options: EconomicsGetEquityRiskPremiumOptions = {},
  ): Promise<models.EquityRiskPremium> {
    const query = new URLSearchParams();
    addQuery(query, "date", options.date, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/equity-risk-premium", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeEquityRiskPremium,
      options.signal,
    );
  }
  /**
   * Get Equity Risk Premium History
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
  async equityRiskPremiumHistory(
    country: string,
    options: EconomicsEquityRiskPremiumHistoryOptions = {},
  ): Promise<models.EquityRiskPremiumHistoryResponse> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/equity-risk-premium/history", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeEquityRiskPremiumHistoryResponse,
      options.signal,
    );
  }
  /**
   * Get Equity Risk Premium History
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
  equityRiskPremiumHistoryIter(
    country: string,
    options: EconomicsEquityRiskPremiumHistoryOptions = {},
  ): AsyncIterableIterator<models.EquityRiskPremium> {
    return iterate(
      async (cursor) => {
        const page = await this.equityRiskPremiumHistory(country, {
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
   * Get Gdp
   * Latest GDP at current prices for a country, or one period with `period`.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Period to read: YYYY-QN. Omit it for the latest period. Plan history window - Free: the last 12 months. Basic: the last 5 years. Pro: full history.
   * @param options.version_id Immutable publication version to read. Omit it for the current version.
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
   * Latest real GDP growth for a country, or one period with `period`.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Period to read: YYYY-QN. Omit it for the latest period. Plan history window - Free: the last 12 months. Basic: the last 5 years. Pro: full history.
   * @param options.version_id Immutable publication version to read. Omit it for the current version.
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
   * Get Gdp Growth History
   * The real GDP growth by period, oldest first.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.limit Maximum periods per page.
   * @param options.start First period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Decoded response with header metadata.
   */
  async gdpGrowthHistory(
    country: string,
    options: EconomicsGdpGrowthHistoryOptions = {},
  ): Promise<models.GdpGrowthHistory> {
    const query = new URLSearchParams();
    addQuery(query, "as_of", options.as_of, "single", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    addQuery(query, "version", options.version, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/gdp-growth/observations", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeGdpGrowthHistory,
      options.signal,
    );
  }
  /**
   * Get Gdp Growth History
   * The real GDP growth by period, oldest first.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.limit Maximum periods per page.
   * @param options.start First period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Items yielded lazily across pages.
   */
  gdpGrowthHistoryIter(
    country: string,
    options: EconomicsGdpGrowthHistoryOptions = {},
  ): AsyncIterableIterator<models.GdpGrowthHistoryObservation> {
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
   * Get Gdp History
   * The GDP at current prices by period, oldest first.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.limit Maximum periods per page.
   * @param options.start First period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Decoded response with header metadata.
   */
  async gdpHistory(
    country: string,
    options: EconomicsGdpHistoryOptions = {},
  ): Promise<models.GdpHistory> {
    const query = new URLSearchParams();
    addQuery(query, "as_of", options.as_of, "single", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    addQuery(query, "version", options.version, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/gdp/observations", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeGdpHistory,
      options.signal,
    );
  }
  /**
   * Get Gdp History
   * The GDP at current prices by period, oldest first.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.limit Maximum periods per page.
   * @param options.start First period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Items yielded lazily across pages.
   */
  gdpHistoryIter(
    country: string,
    options: EconomicsGdpHistoryOptions = {},
  ): AsyncIterableIterator<models.GdpHistoryObservation> {
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
   * Latest headline inflation for a country, or one period with `period`.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Period to read: YYYY-MM. Omit it for the latest period. Plan history window - Free: the last 12 months. Basic: the last 5 years. Pro: full history.
   * @param options.version_id Immutable publication version to read. Omit it for the current version.
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
   * Get Inflation History
   * The headline inflation by period, oldest first.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.limit Maximum periods per page.
   * @param options.start First period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Decoded response with header metadata.
   */
  async inflationHistory(
    country: string,
    options: EconomicsInflationHistoryOptions = {},
  ): Promise<models.InflationHistory> {
    const query = new URLSearchParams();
    addQuery(query, "as_of", options.as_of, "single", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    addQuery(query, "version", options.version, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/inflation/observations", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeInflationHistory,
      options.signal,
    );
  }
  /**
   * Get Inflation History
   * The headline inflation by period, oldest first.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.limit Maximum periods per page.
   * @param options.start First period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Items yielded lazily across pages.
   */
  inflationHistoryIter(
    country: string,
    options: EconomicsInflationHistoryOptions = {},
  ): AsyncIterableIterator<models.InflationHistoryObservation> {
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
   * Latest labour-force participation rate for a country, or one period with `period`.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Period to read: YYYY, YYYY-MM or YYYY-QN. Omit it for the latest period. Plan history window - Free: the last 12 months. Basic: the last 5 years. Pro: full history.
   * @param options.version_id Immutable publication version to read. Omit it for the current version.
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
   * Get Labour Force Participation History
   * The labour-force participation rate by period, oldest first.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.limit Maximum periods per page.
   * @param options.start First period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Decoded response with header metadata.
   */
  async labourForceParticipationHistory(
    country: string,
    options: EconomicsLabourForceParticipationHistoryOptions = {},
  ): Promise<models.RateHistory> {
    const query = new URLSearchParams();
    addQuery(query, "as_of", options.as_of, "single", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    addQuery(query, "version", options.version, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath(
        "/v1/economics/{country}/labour-force-participation/observations",
        { country: country },
      ),
      query,
      undefined,
      decoders.decodeRateHistory,
      options.signal,
    );
  }
  /**
   * Get Labour Force Participation History
   * The labour-force participation rate by period, oldest first.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.limit Maximum periods per page.
   * @param options.start First period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Items yielded lazily across pages.
   */
  labourForceParticipationHistoryIter(
    country: string,
    options: EconomicsLabourForceParticipationHistoryOptions = {},
  ): AsyncIterableIterator<models.RateHistoryObservation> {
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
   * Get Policy Rate
   * Stability: stable.
   * @param country Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.date Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async policyRate(
    country: string,
    options: EconomicsPolicyRateOptions = {},
  ): Promise<models.PolicyRate> {
    const query = new URLSearchParams();
    addQuery(query, "date", options.date, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/central-bank/policy-rate", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodePolicyRate,
      options.signal,
    );
  }
  /**
   * Get Policy Rate History
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
  async policyRateHistory(
    country: string,
    options: EconomicsPolicyRateHistoryOptions = {},
  ): Promise<models.PolicyRateHistoryResponse> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/central-bank/policy-rate/history", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodePolicyRateHistoryResponse,
      options.signal,
    );
  }
  /**
   * Get Policy Rate History
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
  policyRateHistoryIter(
    country: string,
    options: EconomicsPolicyRateHistoryOptions = {},
  ): AsyncIterableIterator<models.PolicyRateObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.policyRateHistory(country, {
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
   * One release calendar entry by release ID.
   * Stability: stable.
   * @param release_id Release ID (UUID).
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.version_id Immutable release version to read. Omit it for the current one.
   * @returns Decoded response with header metadata.
   */
  async getRelease(
    release_id: string,
    options: EconomicsGetReleaseOptions = {},
  ): Promise<models.EconomicReleaseDetail> {
    const query = new URLSearchParams();
    addQuery(query, "version_id", options.version_id, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/calendar/{release_id}", {
        release_id: release_id,
      }),
      query,
      undefined,
      decoders.decodeEconomicReleaseDetail,
      options.signal,
    );
  }
  /**
   * Get Trade
   * Latest merchandise trade for a country, or one period with `period`.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Period to read: YYYY or YYYY-MM. Omit it for the latest period. Plan history window - Free: the last 12 months. Basic: the last 5 years. Pro: full history.
   * @param options.version_id Immutable publication version to read. Omit it for the current version.
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
   * Get Trade History
   * The merchandise trade by period, oldest first.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.limit Maximum periods per page.
   * @param options.start First period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Decoded response with header metadata.
   */
  async tradeHistory(
    country: string,
    options: EconomicsTradeHistoryOptions = {},
  ): Promise<models.TradeHistory> {
    const query = new URLSearchParams();
    addQuery(query, "as_of", options.as_of, "single", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    addQuery(query, "version", options.version, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/trade/observations", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeTradeHistory,
      options.signal,
    );
  }
  /**
   * Get Trade History
   * The merchandise trade by period, oldest first.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.limit Maximum periods per page.
   * @param options.start First period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Items yielded lazily across pages.
   */
  tradeHistoryIter(
    country: string,
    options: EconomicsTradeHistoryOptions = {},
  ): AsyncIterableIterator<models.TradeHistoryObservation> {
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
   * Get Unemployment
   * Latest unemployment rate for a country, or one period with `period`.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.period Period to read: YYYY, YYYY-MM or YYYY-QN. Omit it for the latest period. Plan history window - Free: the last 12 months. Basic: the last 5 years. Pro: full history.
   * @param options.version_id Immutable publication version to read. Omit it for the current version.
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
   * Get Unemployment History
   * The unemployment rate by period, oldest first.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.limit Maximum periods per page.
   * @param options.start First period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Decoded response with header metadata.
   */
  async unemploymentHistory(
    country: string,
    options: EconomicsUnemploymentHistoryOptions = {},
  ): Promise<models.RateHistory> {
    const query = new URLSearchParams();
    addQuery(query, "as_of", options.as_of, "single", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    addQuery(query, "version", options.version, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/{country}/unemployment/observations", {
        country: country,
      }),
      query,
      undefined,
      decoders.decodeRateHistory,
      options.signal,
    );
  }
  /**
   * Get Unemployment History
   * The unemployment rate by period, oldest first.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.limit Maximum periods per page.
   * @param options.start First period to include: YYYY, YYYY-MM or YYYY-QN.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Items yielded lazily across pages.
   */
  unemploymentHistoryIter(
    country: string,
    options: EconomicsUnemploymentHistoryOptions = {},
  ): AsyncIterableIterator<models.RateHistoryObservation> {
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
   * Government bond yield curve for one source date, in percent. `curve_type` shows how the country's source defines the curve. Omit `date` for the latest curve.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.date Source date, YYYY-MM-DD. Omit it for the latest curve. Plan history window - Free: the last 12 months. Basic: the last 5 years. Pro: full history.
   * @param options.maturity Comma-separated maturities to return, for example 2y,10y. Omit for all.
   * @param options.version_id Immutable publication version to read. Omit it for the current one.
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
   * Government bond yield curves by source date, oldest first, in percent.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The curves as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last source date to include, YYYY-MM-DD.
   * @param options.limit Maximum rows per page.
   * @param options.maturity Comma-separated maturities to return, for example 2y,10y. Omit for all.
   * @param options.start First source date to include, YYYY-MM-DD.
   * @returns Decoded response with header metadata.
   */
  async yieldCurveHistory(
    country: string,
    options: EconomicsYieldCurveHistoryOptions = {},
  ): Promise<models.YieldCurveHistoryResponse> {
    const query = new URLSearchParams();
    addQuery(query, "as_of", options.as_of, "single", false, false);
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
   * Government bond yield curves by source date, oldest first, in percent.
   * Stability: stable.
   * @param country Uppercase three-letter country code, for example USA.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The curves as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last source date to include, YYYY-MM-DD.
   * @param options.limit Maximum rows per page.
   * @param options.maturity Comma-separated maturities to return, for example 2y,10y. Omit for all.
   * @param options.start First source date to include, YYYY-MM-DD.
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
   * List Equity Risk Premium
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async listEquityRiskPremium(
    options: RequestOptions = {},
  ): Promise<models.EquityRiskPremiumList> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/equity-risk-premium", {}),
      query,
      undefined,
      decoders.decodeEquityRiskPremiumList,
      options.signal,
    );
  }
  /**
   * List Economic Releases
   * Release calendar entries for the chosen countries within a date window.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.countries Uppercase three-letter country codes (EMU for the euro area). Omit for all.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end_date Last date of the window.
   * @param options.limit Maximum rows per page.
   * @param options.start_date First date of the window.
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
   * Release calendar entries for the chosen countries within a date window.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.countries Uppercase three-letter country codes (EMU for the euro area). Omit for all.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end_date Last date of the window.
   * @param options.limit Maximum rows per page.
   * @param options.start_date First date of the window.
   * @returns Items yielded lazily across pages.
   */
  listReleasesIter(
    options: EconomicsListReleasesOptions = {},
  ): AsyncIterableIterator<models.EconomicReleaseSummary> {
    return iterate(
      async (cursor) => {
        const page = await this.listReleases({ ...options, cursor });
        return { items: page.releases, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Read Catalogue Latest Batch
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.ids Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async readCatalogueLatestBatch(
    options: EconomicsReadCatalogueLatestBatchOptions,
  ): Promise<models.CatalogueBulkLatest> {
    const query = new URLSearchParams();
    addQuery(query, "ids", options.ids, "single", true, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/catalogue/latest", {}),
      query,
      undefined,
      decoders.decodeCatalogueBulkLatest,
      options.signal,
    );
  }
  /**
   * Read Catalogue History
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.id Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async readCatalogueObservations(
    options: EconomicsReadCatalogueObservationsOptions,
  ): Promise<models.CatalogueHistory> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "id", options.id, "single", true, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/catalogue/series/observations", {}),
      query,
      undefined,
      decoders.decodeCatalogueHistory,
      options.signal,
    );
  }
  /**
   * Read Catalogue History
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.id Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  readCatalogueObservationsIter(
    options: EconomicsReadCatalogueObservationsOptions,
  ): AsyncIterableIterator<models.ResourceObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.readCatalogueObservations({
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
   * Read Catalogue Series
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.id Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async readCatalogueSeries(
    options: EconomicsReadCatalogueSeriesOptions,
  ): Promise<models.CatalogueSeries> {
    const query = new URLSearchParams();
    addQuery(query, "id", options.id, "single", true, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/catalogue/series", {}),
      query,
      undefined,
      decoders.decodeCatalogueSeries,
      options.signal,
    );
  }
  /**
   * Read Resource History
   * Observations of one economic series, oldest first.
   * Stability: stable.
   * @param series_id Series ID (UUID).
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last observation period to include.
   * @param options.limit Maximum rows per page.
   * @param options.start First observation period to include.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Decoded response with header metadata.
   */
  async readSeriesObservations(
    series_id: string,
    options: EconomicsReadSeriesObservationsOptions = {},
  ): Promise<models.ResourceHistory> {
    const query = new URLSearchParams();
    addQuery(query, "as_of", options.as_of, "single", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    addQuery(query, "version", options.version, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/series/{series_id}/observations", {
        series_id: series_id,
      }),
      query,
      undefined,
      decoders.decodeResourceHistory,
      options.signal,
    );
  }
  /**
   * Read Resource History
   * Observations of one economic series, oldest first.
   * Stability: stable.
   * @param series_id Series ID (UUID).
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of The series as published up to the end of this UTC day. Pro plan only.
   * @param options.cursor The next_cursor from the previous page.
   * @param options.end Last observation period to include.
   * @param options.limit Maximum rows per page.
   * @param options.start First observation period to include.
   * @param options.version first_reported: the first value stored per period. Pro plan only.
   * @returns Items yielded lazily across pages.
   */
  readSeriesObservationsIter(
    series_id: string,
    options: EconomicsReadSeriesObservationsOptions = {},
  ): AsyncIterableIterator<models.ResourceObservation> {
    return iterate(
      async (cursor) => {
        const page = await this.readSeriesObservations(series_id, {
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
   * Search Series Catalogue
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.country Wire parameter.
   * @param options.cursor Wire parameter.
   * @param options.frequency Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.q Wire parameter.
   * @param options.source Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async searchCatalogue(
    options: EconomicsSearchCatalogueOptions = {},
  ): Promise<models.CatalogueSearchPage> {
    const query = new URLSearchParams();
    addQuery(query, "country", options.country, "single", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "frequency", options.frequency, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "q", options.q, "single", false, false);
    addQuery(query, "source", options.source, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/economics/catalogue", {}),
      query,
      undefined,
      decoders.decodeCatalogueSearchPage,
      options.signal,
    );
  }
  /**
   * Search Series Catalogue
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.country Wire parameter.
   * @param options.cursor Wire parameter.
   * @param options.frequency Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.q Wire parameter.
   * @param options.source Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  searchCatalogueIter(
    options: EconomicsSearchCatalogueOptions = {},
  ): AsyncIterableIterator<models.CatalogueEntry> {
    return iterate(
      async (cursor) => {
        const page = await this.searchCatalogue({ ...options, cursor });
        return { items: page.results, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
}
export interface EquitiesBarsOptions extends RequestOptions {
  cursor?: string;
  end?: string;
  interval?: CryptoBarInterval;
  start?: string;
}
export interface EquitiesCostOfCapitalOptions extends RequestOptions {
  benchmark?: string;
  beta?: CostOfCapitalBeta;
  erp?: string;
  frequency?: CostOfCapitalFrequency;
  period?: CostOfCapitalPeriod;
  risk_free?: string;
  tax_rate?: string;
  window?: CostOfCapitalWindow;
}
export interface EquitiesDividendsOptions extends RequestOptions {
  cursor?: string;
}
export interface EquitiesEarningsOptions extends RequestOptions {
  cursor?: string;
}
export interface EquitiesMoversOptions extends RequestOptions {
  direction?: string;
  market?: string;
}
export interface EquitiesPricesOptions extends RequestOptions {
  ids: string;
}
export interface EquitiesSearchOptions extends RequestOptions {
  country?: string;
  cursor?: string;
  q: string;
  type?: EquityType;
}
export class Equities {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Price bars of one stock
   * Daily (`1d`) or one-minute (`1m`) bars, oldest first, adjusted for splits and dividends. History: Free 12 months, Basic 5 years, Pro everything; `start` is sent back when the plan raised it. One-minute bars are for Basic and Pro (Free gets 403 plan_upgrade_required), reach back to 2020 and cover at most 5 days a call (400 range_too_large). Today's daily bar appears after the exchange closes, and for Free 15 minutes after; `end` is sent back when that cut the range. Up to 5,000 bars a page, with `next_cursor`; a cursor that no longer matches the prices is 409 cursor_expired. One call a page.
   * Stability: stable.
   * @param id Listing id: the exchange's four-letter code, a colon and the ticker, for example XNAS:MSFT or XNYS:BRK.B. A bare US ticker such as MSFT also works when it names one US listing; the answer carries the canonical id. Share classes use a dot (BRK.B); BRK-B is accepted.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor `next_cursor` of the previous page, with the same other parameters. A cursor stops working when the prices behind it changed (a split or dividend): 409 cursor_expired.
   * @param options.end Last bar. `1d`: a date, inclusive; left out means the latest session whose bar is out. `1m`: a UTC time, exclusive; left out means now, or five days after `start`. At most 5 days between `start` and `end` for `1m` (400 range_too_large).
   * @param options.interval `1d` (one bar per session) or `1m` (one-minute bars, Basic and Pro only). Anything else is 400 invalid_interval.
   * @param options.start First bar. `1d`: a date (YYYY-MM-DD), inclusive; left out means the oldest bar your plan reaches. `1m`: a UTC time (YYYY-MM-DDTHH:MM:SSZ, or a date for 00:00 UTC), inclusive; left out means one day before `end`.
   * @returns Decoded response with header metadata.
   */
  async bars(
    id: string,
    options: EquitiesBarsOptions = {},
  ): Promise<models.EquityBars> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "interval", options.interval, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/equities/{id}/bars", { id: id }),
      query,
      undefined,
      decoders.decodeEquityBars,
      options.signal,
    );
  }
  /**
   * Price bars of one stock
   * Daily (`1d`) or one-minute (`1m`) bars, oldest first, adjusted for splits and dividends. History: Free 12 months, Basic 5 years, Pro everything; `start` is sent back when the plan raised it. One-minute bars are for Basic and Pro (Free gets 403 plan_upgrade_required), reach back to 2020 and cover at most 5 days a call (400 range_too_large). Today's daily bar appears after the exchange closes, and for Free 15 minutes after; `end` is sent back when that cut the range. Up to 5,000 bars a page, with `next_cursor`; a cursor that no longer matches the prices is 409 cursor_expired. One call a page.
   * Stability: stable.
   * @param id Listing id: the exchange's four-letter code, a colon and the ticker, for example XNAS:MSFT or XNYS:BRK.B. A bare US ticker such as MSFT also works when it names one US listing; the answer carries the canonical id. Share classes use a dot (BRK.B); BRK-B is accepted.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor `next_cursor` of the previous page, with the same other parameters. A cursor stops working when the prices behind it changed (a split or dividend): 409 cursor_expired.
   * @param options.end Last bar. `1d`: a date, inclusive; left out means the latest session whose bar is out. `1m`: a UTC time, exclusive; left out means now, or five days after `start`. At most 5 days between `start` and `end` for `1m` (400 range_too_large).
   * @param options.interval `1d` (one bar per session) or `1m` (one-minute bars, Basic and Pro only). Anything else is 400 invalid_interval.
   * @param options.start First bar. `1d`: a date (YYYY-MM-DD), inclusive; left out means the oldest bar your plan reaches. `1m`: a UTC time (YYYY-MM-DDTHH:MM:SSZ, or a date for 00:00 UTC), inclusive; left out means one day before `end`.
   * @returns Items yielded lazily across pages.
   */
  barsIter(
    id: string,
    options: EquitiesBarsOptions = {},
  ): AsyncIterableIterator<models.EquityBar> {
    return iterate(
      async (cursor) => {
        const page = await this.bars(id, { ...options, cursor });
        return { items: page.bars, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Beta, cost of equity, cost of debt and WACC of one stock
   * Beta of one US or Korean stock against a benchmark ETF (weekly returns over two years by default, from prices adjusted for splits and dividends), the risk-free rate (the 10-year point of the country's government yield curve, or yours), the cost of equity (risk-free plus beta times the equity risk premium: yours in `erp`, or by default our own published total premium of the stock's country), the cost of debt (interest expense over average total debt from company filings, or, where that cannot be used, the risk-free rate plus a public table's default spread for the company's interest coverage; before and after tax, with the country's corporate tax rate from a public table unless you send `tax_rate`) and WACC, weighted by market cap and total debt. Every input is in the answer with its value, its basis and its date. Banks and insurers are 422 not_applicable; an input that cannot be worked out correctly is named in 422 inputs_unavailable, never repaired; a number that is shown but needs care comes with a `warnings` entry. Basic and Pro only (Free gets 403 plan_upgrade_required). One call.
   * Stability: stable.
   * @param id Listing id: the exchange's four-letter code, a colon and the ticker, for example XNAS:MSFT or XNYS:BRK.B. A bare US ticker such as MSFT also works when it names one US listing; the answer carries the canonical id. Share classes use a dot (BRK.B); BRK-B is accepted.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.benchmark Listing id of the market proxy beta is measured against: an ETF, fund or stock priced in the same currency as the stock. Left out, it is ARCX:SPY for a US stock, XKRX:069500 for a Korean one and XTKS:1306 for a Japanese one; any other market needs it.
   * @param options.beta Which beta feeds the cost of equity: `raw` (default) or `adjusted` (0.67 raw plus 0.33). Both are always in the answer.
   * @param options.erp Your equity risk premium, in percent (5 means 5%). Left out, it is our own published total equity risk premium of the stock's country (the answer names its date and basis). Where we publish none, without it the answer is 400 erp_required. Above 0 and at most 25.
   * @param options.frequency Return interval: `weekly` (default; the last common trading day of each ISO week) or `monthly`.
   * @param options.period Period of interest expense: the last 12 months (`ttm`, default) or the latest full fiscal year (`annual`). Korea and Japan have annual figures only, so `annual` is what they get.
   * @param options.risk_free Your own risk-free rate, in percent. Left out, it is the 10-year point of the country's government yield curve. Needed where we have no curve (Korea): without it the answer is 422 risk_free_unavailable.
   * @param options.tax_rate Your own tax rate for the debt shield, in percent. Left out, it is the corporate tax rate of the stock's country from Damodaran's public table (PwC rates). Between 0 and 60.
   * @param options.window How far back the returns reach: `2y` (default) or `5y`.
   * @returns Decoded response with header metadata.
   */
  async costOfCapital(
    id: string,
    options: EquitiesCostOfCapitalOptions = {},
  ): Promise<models.EquityCostOfCapital> {
    const query = new URLSearchParams();
    addQuery(query, "benchmark", options.benchmark, "single", false, false);
    addQuery(query, "beta", options.beta, "single", false, false);
    addQuery(query, "erp", options.erp, "single", false, false);
    addQuery(query, "frequency", options.frequency, "single", false, false);
    addQuery(query, "period", options.period, "single", false, false);
    addQuery(query, "risk_free", options.risk_free, "single", false, false);
    addQuery(query, "tax_rate", options.tax_rate, "single", false, false);
    addQuery(query, "window", options.window, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/equities/{id}/cost-of-capital", { id: id }),
      query,
      undefined,
      decoders.decodeEquityCostOfCapital,
      options.signal,
    );
  }
  /**
   * Dividends of one stock
   * Cash dividends of one listing, newest ex-date first, paged. The list may include announced future rows. The plan sets how far back the past goes: Free 12 months, Basic 5 years, Pro full. `start` is sent only when older rows were cut off; upcoming rows are never cut. Each request counts one call. An unknown id is 404 not_found; a market without data yet is 404 not_covered.
   * Stability: stable.
   * @param id Listing id: the exchange's four-letter code, a colon and the ticker, for example XNAS:MSFT or XNYS:BRK.B. A bare US ticker such as MSFT also works when it names one US listing; the answer carries the canonical id. Share classes use a dot (BRK.B); BRK-B is accepted.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async dividends(
    id: string,
    options: EquitiesDividendsOptions = {},
  ): Promise<models.EquityDividends> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/equities/{id}/dividends", { id: id }),
      query,
      undefined,
      decoders.decodeEquityDividends,
      options.signal,
    );
  }
  /**
   * Dividends of one stock
   * Cash dividends of one listing, newest ex-date first, paged. The list may include announced future rows. The plan sets how far back the past goes: Free 12 months, Basic 5 years, Pro full. `start` is sent only when older rows were cut off; upcoming rows are never cut. Each request counts one call. An unknown id is 404 not_found; a market without data yet is 404 not_covered.
   * Stability: stable.
   * @param id Listing id: the exchange's four-letter code, a colon and the ticker, for example XNAS:MSFT or XNYS:BRK.B. A bare US ticker such as MSFT also works when it names one US listing; the answer carries the canonical id. Share classes use a dot (BRK.B); BRK-B is accepted.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  dividendsIter(
    id: string,
    options: EquitiesDividendsOptions = {},
  ): AsyncIterableIterator<models.EquityDividend> {
    return iterate(
      async (cursor) => {
        const page = await this.dividends(id, { ...options, cursor });
        return { items: page.dividends, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Earnings of one stock
   * Past earnings reports of one listing (dated today or earlier at the exchange), with estimate, actual and surprise, newest first, paged. Upcoming report dates are not included yet. `surprise_percent` is in percent. `eps_actual` is on the market data basis and can differ from the filings EPS in the valuation. `filing_id` names the annual or quarterly report that covers a past report when we hold it. The plan sets how far back the past goes: Free 12 months, Basic 5 years, Pro full. `start` is sent only when older rows were cut off. Each request counts one call. An unknown id is 404 not_found; a market without data yet is 404 not_covered.
   * Stability: stable.
   * @param id Listing id: the exchange's four-letter code, a colon and the ticker, for example XNAS:MSFT or XNYS:BRK.B. A bare US ticker such as MSFT also works when it names one US listing; the answer carries the canonical id. Share classes use a dot (BRK.B); BRK-B is accepted.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async earnings(
    id: string,
    options: EquitiesEarningsOptions = {},
  ): Promise<models.EquityEarnings> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/equities/{id}/earnings", { id: id }),
      query,
      undefined,
      decoders.decodeEquityEarnings,
      options.signal,
    );
  }
  /**
   * Earnings of one stock
   * Past earnings reports of one listing (dated today or earlier at the exchange), with estimate, actual and surprise, newest first, paged. Upcoming report dates are not included yet. `surprise_percent` is in percent. `eps_actual` is on the market data basis and can differ from the filings EPS in the valuation. `filing_id` names the annual or quarterly report that covers a past report when we hold it. The plan sets how far back the past goes: Free 12 months, Basic 5 years, Pro full. `start` is sent only when older rows were cut off. Each request counts one call. An unknown id is 404 not_found; a market without data yet is 404 not_covered.
   * Stability: stable.
   * @param id Listing id: the exchange's four-letter code, a colon and the ticker, for example XNAS:MSFT or XNYS:BRK.B. A bare US ticker such as MSFT also works when it names one US listing; the answer carries the canonical id. Share classes use a dot (BRK.B); BRK-B is accepted.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  earningsIter(
    id: string,
    options: EquitiesEarningsOptions = {},
  ): AsyncIterableIterator<models.EquityEarning> {
    return iterate(
      async (cursor) => {
        const page = await this.earnings(id, { ...options, cursor });
        return { items: page.earnings, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Top US stock movers
   * The top 25 US stocks and ETFs by `direction`: `gainers`, `losers` or `active` (most traded by value among the day's biggest gainers and losers, not the whole market). Only ordinary shares and ETFs priced at $1 or more, with at least 100,000 shares and $1 million traded today; ranked by us and cached for 10 minutes. `change_percent` is in percent. Basic and Pro only (Free gets 403 plan_upgrade_required). `market` is `us` for now; another market is 404 not_covered, an unknown `direction` is 400 invalid_query. One call.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.direction `gainers` (biggest rise), `losers` (biggest fall) or `active` (most traded by value among the day's biggest gainers and losers, not the whole market). Anything else is 400 invalid_query.
   * @param options.market Market to rank. Only `us` for now; another market is 404 not_covered.
   * @returns Decoded response with header metadata.
   */
  async movers(
    options: EquitiesMoversOptions = {},
  ): Promise<models.EquityMovers> {
    const query = new URLSearchParams();
    addQuery(query, "direction", options.direction, "single", false, false);
    addQuery(query, "market", options.market, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/equities/movers", {}),
      query,
      undefined,
      decoders.decodeEquityMovers,
      options.signal,
    );
  }
  /**
   * Latest price of one stock
   * Latest price of one listing. Free plans see the price 15 minutes late and the answer carries `delayed: true`. `change_percent` is in percent. An unknown id is 404 not_found; a market without prices yet is 404 not_covered.
   * Stability: stable.
   * @param id Listing id: the exchange's four-letter code, a colon and the ticker, for example XNAS:MSFT or XNYS:BRK.B. A bare US ticker such as MSFT also works when it names one US listing; the answer carries the canonical id. Share classes use a dot (BRK.B); BRK-B is accepted.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async price(
    id: string,
    options: RequestOptions = {},
  ): Promise<models.EquityPrice> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/equities/{id}/price", { id: id }),
      query,
      undefined,
      decoders.decodeEquityPrice,
      options.signal,
    );
  }
  /**
   * Latest prices for up to 50 stocks
   * Latest price of each listed id. One call is counted for each id that returns a price, taken in one step: if fewer calls are left than ids that resolved, the whole request is refused with 429 quota_exceeded. Ids that return no price are listed in `errors` and cost nothing. Free plans see prices 15 minutes late. `change_percent` is in percent.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.ids Comma-separated listing ids, at most 50 after duplicates are removed. Each id follows the same rules as the single-price route. One call is counted for each id that returns a price.
   * @returns Decoded response with header metadata.
   */
  async prices(options: EquitiesPricesOptions): Promise<models.EquityPrices> {
    const query = new URLSearchParams();
    addQuery(query, "ids", options.ids, "single", true, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/equities/prices", {}),
      query,
      undefined,
      decoders.decodeEquityPrices,
      options.signal,
    );
  }
  /**
   * Profile of one stock
   * The listing (symbol, name, type, exchange, country, currency), the company's sector, industry and website, and `company_id` when the listing matches a company in our filings. Open to every plan. Japan listings carry only name, exchange, country, currency and `company_id`. Fields that are not known are left out.
   * Stability: stable.
   * @param id Listing id: the exchange's four-letter code, a colon and the ticker, for example XNAS:MSFT or XNYS:BRK.B. A bare US ticker such as MSFT also works when it names one US listing; the answer carries the canonical id. Share classes use a dot (BRK.B); BRK-B is accepted.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async profile(
    id: string,
    options: RequestOptions = {},
  ): Promise<models.EquityProfile> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/equities/{id}", { id: id }),
      query,
      undefined,
      decoders.decodeEquityProfile,
      options.signal,
    );
  }
  /**
   * Splits of one stock
   * Share splits of one listing, newest first. The plan sets how far back the past goes: Free 12 months, Basic 5 years, Pro full. `start` is sent only when older rows were cut off; upcoming rows are never cut. Each request counts one call. An unknown id is 404 not_found; a market without data yet is 404 not_covered.
   * Stability: stable.
   * @param id Listing id: the exchange's four-letter code, a colon and the ticker, for example XNAS:MSFT or XNYS:BRK.B. A bare US ticker such as MSFT also works when it names one US listing; the answer carries the canonical id. Share classes use a dot (BRK.B); BRK-B is accepted.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async splits(
    id: string,
    options: RequestOptions = {},
  ): Promise<models.EquitySplits> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/equities/{id}/splits", { id: id }),
      query,
      undefined,
      decoders.decodeEquitySplits,
      options.signal,
    );
  }
  /**
   * Market cap, P/E, P/S, P/B and dividend yield of one stock
   * Market cap (latest price times shares outstanding), P/E (latest price over trailing 12-month diluted EPS from company filings, GAAP or IFRS as reported), P/S (market cap over trailing 12-month revenue), P/B (market cap over total equity of the latest balance sheet) and dividend yield (trailing 12-month dividends per share over the price, in percent) of one US or Korean listing, with the inputs and the dates they are as of. Korea has P/E only for now; market cap, P/S, P/B and yield come with share counts and dividends. A figure that cannot be worked out correctly is left out, never sent as 0: market cap after a split since the share count, for several share classes without a count each, and for a depositary receipt or foreign filer; P/E when EPS is negative or under 0.01, reported in another currency, or for a depositary receipt. Another class of a company, such as a preferred line, has no figures of its own and shows none. Basic and Pro only (Free gets 403 plan_upgrade_required). A listing outside the US and Korea, or without a clean company match, is 404 not_covered. One call; paid plans see live prices.
   * Stability: stable.
   * @param id Listing id: the exchange's four-letter code, a colon and the ticker, for example XNAS:MSFT or XNYS:BRK.B. A bare US ticker such as MSFT also works when it names one US listing; the answer carries the canonical id. Share classes use a dot (BRK.B); BRK-B is accepted.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async valuation(
    id: string,
    options: RequestOptions = {},
  ): Promise<models.EquityValuation> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/equities/{id}/valuation", { id: id }),
      query,
      undefined,
      decoders.decodeEquityValuation,
      options.signal,
    );
  }
  /**
   * Valuation history of one stock
   * Market cap, P/E, P/S, P/B and dividend yield at every fiscal period end (quarter or year end) of one US or Korean listing, oldest first. Each point is the closing price on or just before that day, adjusted for splits only, and the figures filed for that period (trailing 12-month EPS, revenue and dividends, total equity, the nearest share count), so a later restatement is in it. A figure that cannot be worked out is left out, never sent as 0, by the same rules as the valuation. History: Basic 5 years, Pro everything; `start` is sent back when the plan cut older periods. Basic and Pro only (Free gets 403 plan_upgrade_required). A listing outside the US and Korea, or without a clean company match, is 404 not_covered. One call.
   * Stability: stable.
   * @param id Listing id: the exchange's four-letter code, a colon and the ticker, for example XNAS:MSFT or XNYS:BRK.B. A bare US ticker such as MSFT also works when it names one US listing; the answer carries the canonical id. Share classes use a dot (BRK.B); BRK-B is accepted.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async valuationHistory(
    id: string,
    options: RequestOptions = {},
  ): Promise<models.EquityValuationHistory> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/equities/{id}/valuation/history", { id: id }),
      query,
      undefined,
      decoders.decodeEquityValuationHistory,
      options.signal,
    );
  }
  /**
   * Search stocks by ticker or name
   * Listings whose ticker or name starts with `q`, any case: an exact ticker first, then other tickers, then names. Optional `country` (three letters) and `type` filters. Up to 50 a page, with `next_cursor`. Read from our own symbol list, so it is open to every plan and counts one call.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.country Only listings in this country, three letters (USA, KOR).
   * @param options.cursor `next_cursor` of the previous page, with the same other parameters.
   * @param options.q Start of a ticker or of a company name, any case, at least 2 characters (for example `ms` or `micro`). Order: the exact ticker, other tickers, the start of a name, then the start of a later word of a name; US primary listings first within each.
   * @param options.type Only this kind of listing.
   * @returns Decoded response with header metadata.
   */
  async search(
    options: EquitiesSearchOptions,
  ): Promise<models.EquitySearchResults> {
    const query = new URLSearchParams();
    addQuery(query, "country", options.country, "single", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "q", options.q, "single", true, false);
    addQuery(query, "type", options.type, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/equities/search", {}),
      query,
      undefined,
      decoders.decodeEquitySearchResults,
      options.signal,
    );
  }
  /**
   * Search stocks by ticker or name
   * Listings whose ticker or name starts with `q`, any case: an exact ticker first, then other tickers, then names. Optional `country` (three letters) and `type` filters. Up to 50 a page, with `next_cursor`. Read from our own symbol list, so it is open to every plan and counts one call.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.country Only listings in this country, three letters (USA, KOR).
   * @param options.cursor `next_cursor` of the previous page, with the same other parameters.
   * @param options.q Start of a ticker or of a company name, any case, at least 2 characters (for example `ms` or `micro`). Order: the exact ticker, other tickers, the start of a name, then the start of a later word of a name; US primary listings first within each.
   * @param options.type Only this kind of listing.
   * @returns Items yielded lazily across pages.
   */
  searchIter(
    options: EquitiesSearchOptions,
  ): AsyncIterableIterator<models.EquitySearchResult> {
    return iterate(
      async (cursor) => {
        const page = await this.search({ ...options, cursor });
        return { items: page.results, cursor: page.next_cursor };
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
   * One delivery event by ID.
   * Stability: stable.
   * @param event_id Event ID (UUID).
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
   * A page of delivery events, oldest first. `next_cursor` is null at the head.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.countries Uppercase three-letter country codes (EMU for the euro area). Omit for all.
   * @param options.cursor Event position to read from: the cursor or next_cursor of an earlier page.
   * @param options.limit Maximum events per page.
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
   * A page of delivery events, oldest first. `next_cursor` is null at the head.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.countries Uppercase three-letter country codes (EMU for the euro area). Omit for all.
   * @param options.cursor Event position to read from: the cursor or next_cursor of an earlier page.
   * @param options.limit Maximum events per page.
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
export interface FilingsCompanyOptions extends RequestOptions {
  as_of?: string;
  lang?: Language;
}
export interface FilingsFilingOptions extends RequestOptions {
  lang?: Language;
}
export interface FilingsFinancialsOptions extends RequestOptions {
  as_of?: string;
  basis?: FinancialsBasis;
  fields?: string;
  fiscal_year?: number;
  period?: FinancialsPeriod;
  statement?: FinancialStatement;
  version?: FinancialsVersion;
}
export interface FilingsListCompanyFilingsOptions extends RequestOptions {
  cursor?: string;
  filed_from?: string;
  filed_to?: string;
  form?: string;
  include_amendments?: boolean;
  lang?: Language;
  limit?: number;
  type?: FilingType;
}
export interface FilingsListHoldersOptions extends RequestOptions {
  lang?: Language;
  limit?: number;
  security?: string;
}
export interface FilingsListLatestFilingsOptions extends RequestOptions {
  country?: string;
  lang?: Language;
  limit?: number;
  type?: FilingType;
}
export interface FilingsSearchCompaniesOptions extends RequestOptions {
  as_of?: string;
  country?: string;
  lang?: Language;
  limit?: number;
  q?: string;
  registry?: Registry;
}
export class Filings {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Get As Reported
   * Stability: stable.
   * @param filing_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async asReported(
    filing_id: string,
    options: RequestOptions = {},
  ): Promise<models.AsReportedPage> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/filings/{filing_id}/financials/as-reported", {
        filing_id: filing_id,
      }),
      query,
      undefined,
      decoders.decodeAsReportedPage,
      options.signal,
    );
  }
  /**
   * Get Company
   * Stability: stable.
   * @param company_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of Wire parameter.
   * @param options.lang Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async company(
    company_id: string,
    options: FilingsCompanyOptions = {},
  ): Promise<models.CompanyWithListings> {
    const query = new URLSearchParams();
    addQuery(query, "as_of", options.as_of, "single", false, false);
    addQuery(query, "lang", options.lang, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/companies/{company_id}", { company_id: company_id }),
      query,
      undefined,
      decoders.decodeCompanyWithListings,
      options.signal,
    );
  }
  /**
   * Get Filing
   * Stability: stable.
   * @param filing_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.lang Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async filing(
    filing_id: string,
    options: FilingsFilingOptions = {},
  ): Promise<models.Filing> {
    const query = new URLSearchParams();
    addQuery(query, "lang", options.lang, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/filings/{filing_id}", { filing_id: filing_id }),
      query,
      undefined,
      decoders.decodeFiling,
      options.signal,
    );
  }
  /**
   * Get Financials
   * Stability: stable.
   * @param company_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of Pro plan only.
   * @param options.basis Wire parameter.
   * @param options.fields Wire parameter.
   * @param options.fiscal_year Wire parameter.
   * @param options.period Wire parameter.
   * @param options.statement Wire parameter.
   * @param options.version first_reported is Pro plan only.
   * @returns Decoded response with header metadata.
   */
  async financials(
    company_id: string,
    options: FilingsFinancialsOptions = {},
  ): Promise<models.Financials> {
    const query = new URLSearchParams();
    addQuery(query, "as_of", options.as_of, "single", false, false);
    addQuery(query, "basis", options.basis, "single", false, false);
    addQuery(query, "fields", options.fields, "single", false, false);
    addQuery(query, "fiscal_year", options.fiscal_year, "single", false, false);
    addQuery(query, "period", options.period, "single", false, false);
    addQuery(query, "statement", options.statement, "single", false, false);
    addQuery(query, "version", options.version, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/companies/{company_id}/financials", {
        company_id: company_id,
      }),
      query,
      undefined,
      decoders.decodeFinancials,
      options.signal,
    );
  }
  /**
   * List Company Filings
   * Stability: stable.
   * @param company_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.filed_from Wire parameter.
   * @param options.filed_to Wire parameter.
   * @param options.form Wire parameter.
   * @param options.include_amendments Wire parameter.
   * @param options.lang Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.type Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async listCompanyFilings(
    company_id: string,
    options: FilingsListCompanyFilingsOptions = {},
  ): Promise<models.CompanyFilingsPage> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "filed_from", options.filed_from, "single", false, false);
    addQuery(query, "filed_to", options.filed_to, "single", false, false);
    addQuery(query, "form", options.form, "single", false, false);
    addQuery(
      query,
      "include_amendments",
      options.include_amendments,
      "single",
      false,
      false,
    );
    addQuery(query, "lang", options.lang, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "type", options.type, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/companies/{company_id}/filings", {
        company_id: company_id,
      }),
      query,
      undefined,
      decoders.decodeCompanyFilingsPage,
      options.signal,
    );
  }
  /**
   * List Company Filings
   * Stability: stable.
   * @param company_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.filed_from Wire parameter.
   * @param options.filed_to Wire parameter.
   * @param options.form Wire parameter.
   * @param options.include_amendments Wire parameter.
   * @param options.lang Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.type Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  listCompanyFilingsIter(
    company_id: string,
    options: FilingsListCompanyFilingsOptions = {},
  ): AsyncIterableIterator<models.ListedFiling> {
    return iterate(
      async (cursor) => {
        const page = await this.listCompanyFilings(company_id, {
          ...options,
          cursor,
        });
        return { items: page.filings, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * List Holders
   * Stability: stable.
   * @param company_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.lang Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.security Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async listHolders(
    company_id: string,
    options: FilingsListHoldersOptions = {},
  ): Promise<models.HoldersPage> {
    const query = new URLSearchParams();
    addQuery(query, "lang", options.lang, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "security", options.security, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/companies/{company_id}/holders", {
        company_id: company_id,
      }),
      query,
      undefined,
      decoders.decodeHoldersPage,
      options.signal,
    );
  }
  /**
   * List Latest Filings
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.country Wire parameter.
   * @param options.lang Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.type Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async listLatestFilings(
    options: FilingsListLatestFilingsOptions = {},
  ): Promise<models.LatestFilingsPage> {
    const query = new URLSearchParams();
    addQuery(query, "country", options.country, "single", false, false);
    addQuery(query, "lang", options.lang, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "type", options.type, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/filings/latest", {}),
      query,
      undefined,
      decoders.decodeLatestFilingsPage,
      options.signal,
    );
  }
  /**
   * Search Companies
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.as_of Wire parameter.
   * @param options.country Wire parameter.
   * @param options.lang Wire parameter.
   * @param options.limit Wire parameter.
   * @param options.q Wire parameter.
   * @param options.registry Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async searchCompanies(
    options: FilingsSearchCompaniesOptions = {},
  ): Promise<models.CompanySearchPage> {
    const query = new URLSearchParams();
    addQuery(query, "as_of", options.as_of, "single", false, false);
    addQuery(query, "country", options.country, "single", false, false);
    addQuery(query, "lang", options.lang, "single", false, false);
    addQuery(query, "limit", options.limit, "single", false, false);
    addQuery(query, "q", options.q, "single", false, false);
    addQuery(query, "registry", options.registry, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/companies", {}),
      query,
      undefined,
      decoders.decodeCompanySearchPage,
      options.signal,
    );
  }
}
export interface FundsBarsOptions extends RequestOptions {
  cursor?: string;
  end?: string;
  interval?: CryptoBarInterval;
  start?: string;
}
export interface FundsDistributionsOptions extends RequestOptions {
  cursor?: string;
}
export interface FundsPricesOptions extends RequestOptions {
  ids: string;
}
export interface FundsSearchOptions extends RequestOptions {
  country?: string;
  cursor?: string;
  q: string;
  type?: FundType;
}
export class Funds {
  #transport: Transport;
  constructor(transport: Transport) {
    this.#transport = transport;
  }
  /**
   * Price bars of one fund
   * Daily (`1d`) or one-minute (`1m`) bars, oldest first, in the stock bar shape. A mutual fund's daily bar is its daily NAV (open, high, low and close are the NAV, no volume); it has no one-minute bars (400 invalid_interval). One-minute bars are for ETFs on Basic and Pro (Free gets 403 plan_upgrade_required). History: Free 12 months, Basic 5 years, Pro everything; `start` is sent back when the plan raised it. Up to 5,000 bars a page, with `next_cursor`; a cursor that no longer matches the prices is 409 cursor_expired. One call a page.
   * Stability: stable.
   * @param id Fund id. An ETF is its listing id: the exchange's four-letter code, a colon and the ticker (ARCX:SPY). A mutual fund is FUND, a colon and its ticker (FUND:VFIAX). A bare US ticker such as SPY also works when it names one US listing; the answer carries the canonical id.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor `next_cursor` of the previous page, with the same other parameters. A cursor stops working when the prices behind it changed (a split or dividend): 409 cursor_expired.
   * @param options.end Last bar. `1d`: a date, inclusive; left out means the latest session whose bar is out. `1m`: a UTC time, exclusive; left out means now, or five days after `start`. At most 5 days between `start` and `end` for `1m` (400 range_too_large).
   * @param options.interval `1d` (one bar per session; a mutual fund's bar is its daily NAV) or `1m` (one-minute bars: ETFs only, Basic and Pro only). Anything else is 400 invalid_interval.
   * @param options.start First bar. `1d`: a date (YYYY-MM-DD), inclusive; left out means the oldest bar your plan reaches. `1m`: a UTC time (YYYY-MM-DDTHH:MM:SSZ, or a date for 00:00 UTC), inclusive; left out means one day before `end`.
   * @returns Decoded response with header metadata.
   */
  async bars(
    id: string,
    options: FundsBarsOptions = {},
  ): Promise<models.EquityBars> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "end", options.end, "single", false, false);
    addQuery(query, "interval", options.interval, "single", false, false);
    addQuery(query, "start", options.start, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/funds/{id}/bars", { id: id }),
      query,
      undefined,
      decoders.decodeEquityBars,
      options.signal,
    );
  }
  /**
   * Price bars of one fund
   * Daily (`1d`) or one-minute (`1m`) bars, oldest first, in the stock bar shape. A mutual fund's daily bar is its daily NAV (open, high, low and close are the NAV, no volume); it has no one-minute bars (400 invalid_interval). One-minute bars are for ETFs on Basic and Pro (Free gets 403 plan_upgrade_required). History: Free 12 months, Basic 5 years, Pro everything; `start` is sent back when the plan raised it. Up to 5,000 bars a page, with `next_cursor`; a cursor that no longer matches the prices is 409 cursor_expired. One call a page.
   * Stability: stable.
   * @param id Fund id. An ETF is its listing id: the exchange's four-letter code, a colon and the ticker (ARCX:SPY). A mutual fund is FUND, a colon and its ticker (FUND:VFIAX). A bare US ticker such as SPY also works when it names one US listing; the answer carries the canonical id.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor `next_cursor` of the previous page, with the same other parameters. A cursor stops working when the prices behind it changed (a split or dividend): 409 cursor_expired.
   * @param options.end Last bar. `1d`: a date, inclusive; left out means the latest session whose bar is out. `1m`: a UTC time, exclusive; left out means now, or five days after `start`. At most 5 days between `start` and `end` for `1m` (400 range_too_large).
   * @param options.interval `1d` (one bar per session; a mutual fund's bar is its daily NAV) or `1m` (one-minute bars: ETFs only, Basic and Pro only). Anything else is 400 invalid_interval.
   * @param options.start First bar. `1d`: a date (YYYY-MM-DD), inclusive; left out means the oldest bar your plan reaches. `1m`: a UTC time (YYYY-MM-DDTHH:MM:SSZ, or a date for 00:00 UTC), inclusive; left out means one day before `end`.
   * @returns Items yielded lazily across pages.
   */
  barsIter(
    id: string,
    options: FundsBarsOptions = {},
  ): AsyncIterableIterator<models.EquityBar> {
    return iterate(
      async (cursor) => {
        const page = await this.bars(id, { ...options, cursor });
        return { items: page.bars, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Distributions of one fund
   * Distributions of one fund, newest ex-date first, paged. The plan sets how far back the past goes: Free 12 months, Basic 5 years, Pro full; `start` is sent only when older rows were cut off. Each request counts one call. An unknown id is 404 not_found.
   * Stability: stable.
   * @param id Fund id. An ETF is its listing id: the exchange's four-letter code, a colon and the ticker (ARCX:SPY). A mutual fund is FUND, a colon and its ticker (FUND:VFIAX). A bare US ticker such as SPY also works when it names one US listing; the answer carries the canonical id.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @returns Decoded response with header metadata.
   */
  async distributions(
    id: string,
    options: FundsDistributionsOptions = {},
  ): Promise<models.FundDistributions> {
    const query = new URLSearchParams();
    addQuery(query, "cursor", options.cursor, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/funds/{id}/distributions", { id: id }),
      query,
      undefined,
      decoders.decodeFundDistributions,
      options.signal,
    );
  }
  /**
   * Distributions of one fund
   * Distributions of one fund, newest ex-date first, paged. The plan sets how far back the past goes: Free 12 months, Basic 5 years, Pro full; `start` is sent only when older rows were cut off. Each request counts one call. An unknown id is 404 not_found.
   * Stability: stable.
   * @param id Fund id. An ETF is its listing id: the exchange's four-letter code, a colon and the ticker (ARCX:SPY). A mutual fund is FUND, a colon and its ticker (FUND:VFIAX). A bare US ticker such as SPY also works when it names one US listing; the answer carries the canonical id.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  distributionsIter(
    id: string,
    options: FundsDistributionsOptions = {},
  ): AsyncIterableIterator<models.FundDistribution> {
    return iterate(
      async (cursor) => {
        const page = await this.distributions(id, { ...options, cursor });
        return { items: page.distributions, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Latest price of one fund
   * An ETF's last price, in the stock price shape plus `type: etf` (Free sees it 15 minutes late and the answer carries `delayed: true`), or a mutual fund's latest NAV (`type: mutual_fund`: `nav`, `previous_nav`, `change`, `change_percent` and the NAV's `date`; an end-of-day value, never delayed, `stale` once it is older than the next business day). `change_percent` is in percent. A stock id is 404 not_found.
   * Stability: stable.
   * @param id Fund id. An ETF is its listing id: the exchange's four-letter code, a colon and the ticker (ARCX:SPY). A mutual fund is FUND, a colon and its ticker (FUND:VFIAX). A bare US ticker such as SPY also works when it names one US listing; the answer carries the canonical id.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async price(
    id: string,
    options: RequestOptions = {},
  ): Promise<models.FundPrice> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/funds/{id}/price", { id: id }),
      query,
      undefined,
      decoders.decodeFundPrice,
      options.signal,
    );
  }
  /**
   * Latest prices for up to 50 funds
   * Latest price of each listed fund: an ETF's last price (Free sees it 15 minutes late) or a mutual fund's latest NAV. One call is counted for each id that returns a price, taken in one step: if fewer calls are left than ids that resolved, the whole request is refused with 429 quota_exceeded. Ids that return no price are listed in `errors` and cost nothing. `change_percent` is in percent.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.ids Comma-separated fund ids, at most 50 after duplicates are removed. Each id follows the same rules as the single-price route. One call is counted for each id that returns a price.
   * @returns Decoded response with header metadata.
   */
  async prices(options: FundsPricesOptions): Promise<models.FundPrices> {
    const query = new URLSearchParams();
    addQuery(query, "ids", options.ids, "single", true, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/funds/prices", {}),
      query,
      undefined,
      decoders.decodeFundPrices,
      options.signal,
    );
  }
  /**
   * Profile of one fund
   * The fund's symbol, name, type (`etf` or `mutual_fund`), exchange (ETFs only), country and currency, as our symbol list holds them. Open to every plan. Fields that are not known are left out.
   * Stability: stable.
   * @param id Fund id. An ETF is its listing id: the exchange's four-letter code, a colon and the ticker (ARCX:SPY). A mutual fund is FUND, a colon and its ticker (FUND:VFIAX). A bare US ticker such as SPY also works when it names one US listing; the answer carries the canonical id.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async profile(
    id: string,
    options: RequestOptions = {},
  ): Promise<models.FundProfile> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "GET",
      encodePath("/v1/funds/{id}", { id: id }),
      query,
      undefined,
      decoders.decodeFundProfile,
      options.signal,
    );
  }
  /**
   * Search ETFs and mutual funds by ticker or name
   * Funds whose ticker or name starts with `q`, any case: an exact ticker first, then other tickers, then names. Optional `type` (`etf` or `mutual_fund`) and `country` (three letters) filters. Up to 50 a page, with `next_cursor`. Read from our own symbol list, so it is open to every plan and counts one call.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.country Only funds in this country, three letters (USA).
   * @param options.cursor `next_cursor` of the previous page, with the same other parameters.
   * @param options.q Start of a ticker or of a fund name, any case, at least 2 characters (for example `vf` or `vanguard 500`). Order: the exact ticker, other tickers, the start of a name, then the start of a later word of a name.
   * @param options.type Only ETFs or only mutual funds.
   * @returns Decoded response with header metadata.
   */
  async search(options: FundsSearchOptions): Promise<models.FundSearchResults> {
    const query = new URLSearchParams();
    addQuery(query, "country", options.country, "single", false, false);
    addQuery(query, "cursor", options.cursor, "single", false, false);
    addQuery(query, "q", options.q, "single", true, false);
    addQuery(query, "type", options.type, "single", false, false);
    return this.#transport.request(
      "GET",
      encodePath("/v1/funds/search", {}),
      query,
      undefined,
      decoders.decodeFundSearchResults,
      options.signal,
    );
  }
  /**
   * Search ETFs and mutual funds by ticker or name
   * Funds whose ticker or name starts with `q`, any case: an exact ticker first, then other tickers, then names. Optional `type` (`etf` or `mutual_fund`) and `country` (three letters) filters. Up to 50 a page, with `next_cursor`. Read from our own symbol list, so it is open to every plan and counts one call.
   * Stability: stable.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.country Only funds in this country, three letters (USA).
   * @param options.cursor `next_cursor` of the previous page, with the same other parameters.
   * @param options.q Start of a ticker or of a fund name, any case, at least 2 characters (for example `vf` or `vanguard 500`). Order: the exact ticker, other tickers, the start of a name, then the start of a later word of a name.
   * @param options.type Only ETFs or only mutual funds.
   * @returns Items yielded lazily across pages.
   */
  searchIter(
    options: FundsSearchOptions,
  ): AsyncIterableIterator<models.FundSearchResult> {
    return iterate(
      async (cursor) => {
        const page = await this.search({ ...options, cursor });
        return { items: page.results, cursor: page.next_cursor };
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
   * Closed open-high-low-close bars for one currency against USD, from one minute to one day. A request may span at most 3 days of 1m bars, 14 days of 5m bars, 60 days of 15m bars; a longer range returns 400. Wider intervals have no cap.
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
   * Closed open-high-low-close bars for one currency against USD, from one minute to one day. A request may span at most 3 days of 1m bars, 14 days of 5m bars, 60 days of 15m bars; a longer range returns 400. Wider intervals have no cap.
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
  cursor?: string;
  end: string;
  interval?: string;
  start: string;
}
export interface PredictionsExtremeOptions extends RequestOptions {
  at?: string;
}
export interface PredictionsExtremeHistoryOptions extends RequestOptions {
  cursor?: string;
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
  cursor?: string;
  end: string;
  interval?: string;
  start: string;
}
export interface PredictionsTimingOptions extends RequestOptions {
  at?: string;
}
export interface PredictionsTimingHistoryOptions extends RequestOptions {
  cursor?: string;
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
   * Get Binary Prediction
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
   * Get Binary Prediction History
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
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
    addQuery(query, "cursor", options.cursor, "single", false, false);
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
   * Get Binary Prediction History
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.interval Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  binaryHistoryIter(
    event_id: string,
    options: PredictionsBinaryHistoryOptions,
  ): AsyncIterableIterator<models.PredictionSeries> {
    return iterate(
      async (cursor) => {
        const page = await this.binaryHistory(event_id, { ...options, cursor });
        return { items: page.series, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Extreme Prediction
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
   * Get Extreme Prediction History
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
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
    addQuery(query, "cursor", options.cursor, "single", false, false);
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
   * Get Extreme Prediction History
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.interval Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  extremeHistoryIter(
    event_id: string,
    options: PredictionsExtremeHistoryOptions,
  ): AsyncIterableIterator<models.PredictionSeries> {
    return iterate(
      async (cursor) => {
        const page = await this.extremeHistory(event_id, {
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
   * Get Scalar Prediction
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
   * Get Scalar Prediction History
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
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
    addQuery(query, "cursor", options.cursor, "single", false, false);
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
   * Get Scalar Prediction History
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.interval Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  scalarHistoryIter(
    event_id: string,
    options: PredictionsScalarHistoryOptions,
  ): AsyncIterableIterator<models.PredictionSeries> {
    return iterate(
      async (cursor) => {
        const page = await this.scalarHistory(event_id, { ...options, cursor });
        return { items: page.series, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
    );
  }
  /**
   * Get Timing Prediction
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
   * Get Timing Prediction History
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
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
    addQuery(query, "cursor", options.cursor, "single", false, false);
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
   * Get Timing Prediction History
   * Stability: stable.
   * @param event_id Path parameter.
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.cursor Wire parameter.
   * @param options.end Wire parameter.
   * @param options.interval Wire parameter.
   * @param options.start Wire parameter.
   * @returns Items yielded lazily across pages.
   */
  timingHistoryIter(
    event_id: string,
    options: PredictionsTimingHistoryOptions,
  ): AsyncIterableIterator<models.PredictionSeries> {
    return iterate(
      async (cursor) => {
        const page = await this.timingHistory(event_id, { ...options, cursor });
        return { items: page.series, cursor: page.next_cursor };
      },
      options.cursor,
      this.#transport.signal(options.signal),
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
  companies?: Array<string> | null;
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
  companies?: Array<string> | null;
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
   * @param destination_id Webhook destination ID (UUID).
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
   * @param options.companies Companies to watch, as `usa:0000320193`. Required with the `filings` family and refused without it: only filings of a listed company (or, for 13D/G, its subject) are sent. Basic 50, Pro 1,000.
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
          companies: options.companies,
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
   * @param destination_id Webhook destination ID (UUID).
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async deleteDestination(
    destination_id: string,
    options: RequestOptions = {},
  ): Promise<models.NoContent> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "DELETE",
      encodePath("/v1/webhooks/destinations/{destination_id}", {
        destination_id: destination_id,
      }),
      query,
      undefined,
      decoders.decodeNoContent,
      options.signal,
    );
  }
  /**
   * Delivery History
   * Stability: stable.
   * @param destination_id Webhook destination ID (UUID).
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
   * @param destination_id Webhook destination ID (UUID).
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
   * @param destination_id Webhook destination ID (UUID).
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
   * @param delivery_id Delivery ID (UUID).
   * @param destination_id Webhook destination ID (UUID).
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @returns Decoded response with header metadata.
   */
  async replayDelivery(
    delivery_id: string,
    destination_id: string,
    options: RequestOptions = {},
  ): Promise<models.NoContent> {
    const query = new URLSearchParams();
    return this.#transport.request(
      "POST",
      encodePath(
        "/v1/webhooks/destinations/{destination_id}/deliveries/{delivery_id}/replay",
        { delivery_id: delivery_id, destination_id: destination_id },
      ),
      query,
      undefined,
      decoders.decodeNoContent,
      options.signal,
    );
  }
  /**
   * Rotate Secret
   * Stability: stable.
   * @param destination_id Webhook destination ID (UUID).
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
   * @param destination_id Webhook destination ID (UUID).
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
   * @param destination_id Webhook destination ID (UUID).
   * @param options Query parameters, request fields and cancellation signal.
   * @param options.signal Cancels the call and further retries.
   * @param options.companies Companies to watch, as `usa:0000320193`. Required with the `filings` family and refused without it: only filings of a listed company (or, for 13D/G, its subject) are sent. Basic 50, Pro 1,000.
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
          companies: options.companies,
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
  readonly companyCalendars: CompanyCalendars;
  readonly crypto: Crypto;
  readonly economics: Economics;
  readonly equities: Equities;
  readonly events: Events;
  readonly filings: Filings;
  readonly funds: Funds;
  readonly fx: Fx;
  readonly predictions: Predictions;
  readonly webhooks: Webhooks;
  readonly unstable: UnstableOperations;
  constructor(transport: Transport) {
    this.calendarSubscriptions = new CalendarSubscriptions(transport);
    this.calendars = new Calendars(transport);
    this.commodities = new Commodities(transport);
    this.companyCalendars = new CompanyCalendars(transport);
    this.crypto = new Crypto(transport);
    this.economics = new Economics(transport);
    this.equities = new Equities(transport);
    this.events = new Events(transport);
    this.filings = new Filings(transport);
    this.funds = new Funds(transport);
    this.fx = new Fx(transport);
    this.predictions = new Predictions(transport);
    this.webhooks = new Webhooks(transport);
    this.unstable = new UnstableOperations();
  }
}
export class UnstableOperations {}

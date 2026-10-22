import { readDecimal, readJson, readObject } from "./decode.js";
import {
  AbortError,
  ApiError,
  BadRequest,
  CursorExpired,
  DecodeError,
  NotFound,
  RateLimited,
  ServiceUnavailable,
  TransportError,
  Unauthorized,
} from "./errors.js";
import {
  type HeaderInput,
  headerEntries,
  integerHeader,
  type ResponseMeta,
  responseMeta,
} from "./meta.js";
import { VERSION } from "./version.js";

export interface RequestOptions {
  /** Either this signal or the client signal cancels a call and its retries. */
  signal?: AbortSignal;
}
export interface ClientOptions extends RequestOptions {
  apiKey?: string;
  baseUrl?: string;
  /** Total deadline per attempt in seconds. */
  timeout?: number;
  maxRetries?: number;
  maxRetryWait?: number;
  extraHeaders?: HeaderInput;
  fetch?: typeof globalThis.fetch;
  /** Monotonic seconds; injectable with sleep for deterministic retry tests. */
  clock?: () => number;
  sleep?: (seconds: number) => Promise<void>;
  randomFraction?: () => number;
}
export function throwIfAborted(signal?: AbortSignal): void {
  if (signal?.aborted) throw new AbortError();
}
function environment(name: string): string | undefined {
  try {
    const host = globalThis as typeof globalThis & {
      process?: { env?: Record<string, string | undefined> };
    };
    return host.process?.env?.[name];
  } catch {
    return undefined;
  }
}
export function encodePath(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{([^}]+)\}/g, (_match, name: string) => {
    const value = values[name];
    if (value === undefined || value === null)
      throw new TypeError("Missing path parameter");
    if (value === "." || value === "..")
      throw new TypeError("Path parameters must not be dot-only segments");
    return encodeURIComponent(String(value)).replace(
      /[!'()*]/g,
      (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
    );
  });
}
export function addQuery(
  query: URLSearchParams,
  name: string,
  value: unknown,
  wire: string,
  required: boolean,
  decimal: boolean,
): void {
  if (decimal && value != null) readDecimal(value);
  if (value != null && (wire === "repeat" || wire === "comma_join")) {
    if (
      !Array.isArray(value) ||
      value.some((v: unknown) => typeof v !== "string" || !v || v.includes(","))
    ) {
      throw new TypeError(
        `${name} must be an array of nonempty strings without commas`,
      );
    }
  }
  if (
    value == null ||
    (value === "" && name !== "cursor") ||
    (Array.isArray(value) && value.length === 0)
  ) {
    if (required) throw new TypeError(`Missing query parameter: ${name}`);
    return;
  }
  if (Array.isArray(value)) {
    if (wire === "comma_join") query.append(name, value.join(","));
    else for (const item of value) query.append(name, item);
  } else query.append(name, String(value));
}
export function encodeBody(
  fields: Record<string, unknown>,
  required: string[],
  decimals: string[] = [],
): Record<string, unknown> {
  for (const field of decimals)
    if (fields[field] != null) readDecimal(fields[field]);
  for (const field of required) {
    if (fields[field] === undefined || fields[field] === null)
      throw new TypeError(`Missing body field: ${field}`);
  }
  return Object.fromEntries(
    Object.entries(fields).filter(([, value]) => value !== undefined),
  );
}
// Short-window limits are retried; quota and unknown 429 codes are not.
const RETRYABLE_LIMITS = new Set(["rate_limit_exceeded", "rate_limited"]);
function apiError(response: Response, raw: Uint8Array): ApiError {
  let data: Record<string, unknown> = {};
  try {
    data = readObject(readJson(raw));
  } catch {
    /* Non-problem errors still carry HTTP status and bytes. */
  }
  const string = (key: string, fallback = ""): string =>
    typeof data[key] === "string" ? data[key] : fallback;
  // Problem documents carry `code`; the shared core also reads the
  // `{"error": code}` and `{"code", "message"}` envelopes other APIs use.
  const code = string("code") || string("error") || "unknown";
  const Type =
    code === "cursor_expired"
      ? CursorExpired
      : ({
          400: BadRequest,
          401: Unauthorized,
          404: NotFound,
          429: RateLimited,
          503: ServiceUnavailable,
        }[response.status] ?? ApiError);
  return new Type({
    status: response.status,
    code,
    title: string("title"),
    detail: string("detail") || string("message"),
    request_id:
      response.headers.get("x-request-id") || string("request_id") || undefined,
    instance: string("instance") || undefined,
    retry_after: integerHeader(response.headers.get("retry-after")),
    raw_body: raw,
  });
}
export class Transport {
  readonly baseUrl: string;
  #headers: Headers;
  #timeout: number;
  #maxRetries: number;
  #maxRetryWait: number;
  #fetch: typeof globalThis.fetch;
  #clock: () => number;
  #sleep?: (seconds: number) => Promise<void>;
  #signal?: AbortSignal;
  #random: () => number;
  constructor(options: ClientOptions, specSha: string) {
    const key = options.apiKey ?? environment("NARWHAL_API_KEY");
    if (typeof key !== "string" || !key)
      throw new TypeError("NARWHAL_API_KEY is required");
    this.baseUrl = (
      options.baseUrl ??
      environment("NARWHAL_BASE_URL") ??
      "https://api.narwhalapi.com"
    ).replace(/\/+$/, "");
    this.#timeout = options.timeout ?? 30;
    this.#maxRetries = options.maxRetries ?? 2;
    this.#maxRetryWait = options.maxRetryWait ?? 30;
    if (
      !Number.isFinite(this.#timeout) ||
      this.#timeout <= 0 ||
      !Number.isSafeInteger(this.#maxRetries) ||
      this.#maxRetries < 0 ||
      !Number.isFinite(this.#maxRetryWait) ||
      this.#maxRetryWait < 0
    )
      throw new TypeError(
        "Timeout must be positive and retry settings nonnegative",
      );
    this.#headers = new Headers({
      Accept: "application/json, application/problem+json",
      "User-Agent": `narwhalapi-typescript/${VERSION} (spec ${specSha.slice(0, 8)})`,
    });
    new Headers(headerEntries(options.extraHeaders ?? {})).forEach(
      (value, name) => {
        this.#headers.set(name, value);
      },
    );
    try {
      this.#headers.set("Authorization", `Bearer ${key}`);
    } catch {
      throw new TypeError("Invalid API key");
    }
    this.#fetch = options.fetch ?? globalThis.fetch;
    this.#clock = options.clock ?? (() => performance.now() / 1000);
    this.#sleep = options.sleep;
    this.#signal = options.signal;
    this.#random = options.randomFraction ?? Math.random;
  }
  toString(): string {
    return "Transport(api_key=<redacted>)";
  }
  signal(perCall?: AbortSignal): AbortSignal | undefined {
    return this.#signal && perCall
      ? AbortSignal.any([this.#signal, perCall])
      : (perCall ?? this.#signal);
  }
  async request<T>(
    method: string,
    path: string,
    query: URLSearchParams,
    body: Record<string, unknown> | undefined,
    decode: (value: unknown, meta: ResponseMeta, raw: Uint8Array) => T,
    perCallSignal?: AbortSignal,
  ): Promise<T> {
    const signal = this.signal(perCallSignal);
    const suffix = query.size ? `?${query}` : "";
    for (let attempt = 0; ; attempt++) {
      throwIfAborted(signal);
      let failure: ApiError | TransportError;
      let received: { response: Response; raw: Uint8Array };
      try {
        received = await this.#attempt(
          method,
          this.baseUrl + path + suffix,
          body,
          signal,
        );
      } catch (cause) {
        throwIfAborted(signal);
        if (!(cause instanceof TransportError)) throw cause;
        failure = cause;
        const wait = this.#retryWait(method, attempt, failure);
        if (wait === undefined) throw failure;
        await this.#wait(wait, signal);
        continue;
      }
      throwIfAborted(signal);
      const { response, raw } = received;
      if (response.ok) {
        try {
          // A 204 answer has no body; it reads as an empty object.
          return decode(
            readJson(
              response.status === 204 && raw.length === 0
                ? new TextEncoder().encode("{}")
                : raw,
            ),
            responseMeta(response.headers),
            raw,
          );
        } catch {
          throw new DecodeError(raw);
        }
      }
      failure = apiError(response, raw);
      const wait = this.#retryWait(method, attempt, failure);
      if (wait === undefined) throw failure;
      await this.#wait(wait, signal);
    }
  }
  async #wait(seconds: number, signal?: AbortSignal): Promise<void> {
    throwIfAborted(signal);
    let timer: ReturnType<typeof setTimeout> | undefined;
    let onAbort = () => {};
    const aborted = new Promise<never>((_resolve, reject) => {
      onAbort = () => reject(new AbortError());
      signal?.addEventListener("abort", onAbort, { once: true });
    });
    try {
      const sleep = async () => {
        throwIfAborted(signal);
        if (this.#sleep) return this.#sleep(seconds);
        return new Promise<void>((resolve) => {
          timer = setTimeout(resolve, seconds * 1000);
        });
      };
      await Promise.race([sleep(), aborted]);
      throwIfAborted(signal);
    } catch (cause) {
      throwIfAborted(signal);
      throw cause;
    } finally {
      clearTimeout(timer);
      signal?.removeEventListener("abort", onAbort);
    }
  }
  #retryWait(
    method: string,
    attempt: number,
    error: ApiError | TransportError,
  ): number | undefined {
    if (attempt >= this.#maxRetries) return undefined;
    if (error instanceof ApiError) {
      if (
        !(error.status === 429 && RETRYABLE_LIMITS.has(error.code)) &&
        !(error.status === 503 && method === "GET")
      )
        return undefined;
      if (error.retry_after !== undefined)
        return error.retry_after <= this.#maxRetryWait
          ? error.retry_after
          : undefined;
    } else if (method !== "GET" || error.response_received) return undefined;
    return 0.5 * 2 ** attempt * this.#random();
  }
  async #attempt(
    method: string,
    url: string,
    body: Record<string, unknown> | undefined,
    signal?: AbortSignal,
  ): Promise<{ response: Response; raw: Uint8Array }> {
    const controller = new AbortController();
    const deadline = this.#clock() + this.#timeout;
    let responseReceived = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const headers = new Headers(this.#headers);
    if (body !== undefined) headers.set("Content-Type", "application/json");
    let onAbort = () => {};
    const aborted = new Promise<never>((_resolve, reject) => {
      onAbort = () => reject(controller.signal.reason);
      controller.signal.addEventListener("abort", onAbort, { once: true });
    });
    const cancel = () => controller.abort(new AbortError());
    signal?.addEventListener("abort", cancel, { once: true });
    timer = setTimeout(
      () => controller.abort(new Error("Request deadline exceeded")),
      this.#timeout * 1000,
    );
    const send = async () => {
      throwIfAborted(signal);
      return this.#fetch(url, {
        method,
        headers,
        body: body === undefined ? undefined : JSON.stringify(body),
        redirect: "manual",
        signal: controller.signal,
      });
    };
    try {
      const response = await Promise.race([send(), aborted]);
      responseReceived = true;
      const remaining = deadline - this.#clock();
      if (remaining <= 0) throw new Error("Request deadline exceeded");
      clearTimeout(timer);
      timer = setTimeout(
        () => controller.abort(new Error("Request deadline exceeded")),
        remaining * 1000,
      );
      // The race also bounds injected transports which do not react to abort.
      const raw = new Uint8Array(
        await Promise.race([response.arrayBuffer(), aborted]),
      );
      return { response, raw };
    } catch (cause) {
      controller.abort();
      throwIfAborted(signal);
      throw new TransportError(cause, responseReceived);
    } finally {
      clearTimeout(timer);
      signal?.removeEventListener("abort", cancel);
      controller.signal.removeEventListener("abort", onAbort);
    }
  }
}

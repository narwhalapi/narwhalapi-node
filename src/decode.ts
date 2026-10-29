import type { ResponseMeta } from "./meta.js";

/** Exact decimal wire text. No arithmetic or numeric conversion is implicit. */
export type Decimal = string & { readonly __decimal: unique symbol };

export function readString(value: unknown): string {
  if (typeof value !== "string") throw new TypeError("Expected a string");
  return value;
}
export function readDecimal(value: unknown): Decimal {
  const text = readString(value);
  if (!/^-?[0-9]+(?:\.[0-9]+)?$/.test(text) || text.endsWith("\n")) {
    throw new TypeError("Expected a decimal wire string");
  }
  return text as Decimal;
}
class JsonNumber {
  constructor(readonly source: string) {}
}
/** A decimal sent as a JSON number, as exact text; exponents move the point, never round. */
export function readDecimalNumber(value: unknown): Decimal {
  if (!(value instanceof JsonNumber))
    throw new TypeError("Expected a JSON number");
  const match = /^(-?)([0-9]+)(?:\.([0-9]+))?(?:[eE]([+-]?[0-9]+))?$/.exec(
    value.source,
  );
  if (!match) throw new TypeError("Expected decimal JSON number text");
  const [, sign = "", whole = "", fraction = "", exponent] = match;
  if (exponent === undefined) return value.source as Decimal;
  const shift = Number.parseInt(exponent, 10);
  if (Math.abs(shift) > 400)
    throw new TypeError("JSON number exponent is out of range");
  let digits = whole + fraction;
  let point = whole.length + shift;
  if (point <= 0) {
    digits = "0".repeat(1 - point) + digits;
    point = 1;
  }
  if (point > digits.length) digits += "0".repeat(point - digits.length);
  const integer = digits.slice(0, point).replace(/^0+(?=[0-9])/, "");
  const rest = digits.slice(point);
  return `${sign}${integer}${rest ? `.${rest}` : ""}` as Decimal;
}
export function readInt(value: unknown): number {
  if (value instanceof JsonNumber) {
    if (!/^-?(?:0|[1-9][0-9]*)$/.test(value.source))
      throw new TypeError("Expected integer wire text");
    value = Number.parseInt(value.source, 10);
  }
  if (typeof value !== "number" || !Number.isSafeInteger(value)) {
    throw new TypeError("Expected a safe integer");
  }
  return value;
}
export function readBool(value: unknown): boolean {
  if (typeof value !== "boolean") throw new TypeError("Expected a boolean");
  return value;
}
export function readObject(value: unknown): Record<string, unknown> {
  if (
    value === null ||
    typeof value !== "object" ||
    Array.isArray(value) ||
    value instanceof JsonNumber
  ) {
    throw new TypeError("Expected an object");
  }
  return value as Record<string, unknown>;
}
/** The keys of `data` outside `known`, each read as a decimal string. Null values are skipped. */
export function readDecimalItems(
  data: Record<string, unknown>,
  known: readonly string[],
): Record<string, Decimal> {
  return Object.fromEntries(
    Object.entries(data)
      .filter(([key, value]) => value !== null && !known.includes(key))
      .map(([key, value]) => [key, readDecimal(value)]),
  );
}
export function readArray(value: unknown): unknown[] {
  if (!Array.isArray(value)) throw new TypeError("Expected an array");
  return value;
}
export function optional<T>(
  value: unknown,
  decode: (value: unknown) => T,
): T | undefined {
  return value == null ? undefined : decode(value);
}
const bodies = new WeakMap<object, Uint8Array>();
export function readJson(raw: Uint8Array): unknown {
  return JSON.parse(
    new TextDecoder("utf-8", { fatal: true }).decode(raw),
    (_key: string, value: unknown, context?: { source?: string }): unknown => {
      if (typeof value === "number") {
        if (context?.source === undefined)
          throw new TypeError("JSON number source text is required");
        return new JsonNumber(context.source);
      }
      if (value !== null && typeof value === "object") bodies.set(value, raw);
      return value;
    },
  );
}
function rawJson(value: unknown): unknown {
  if (value instanceof JsonNumber) return value.source;
  if (Array.isArray(value)) return value.map(rawJson);
  if (value !== null && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, rawJson(child)]),
    );
  return value;
}
export function unknownValue(
  data: Record<string, unknown>,
  rawBody: Uint8Array,
): {
  readonly kind: "unknown";
  raw: Record<string, unknown>;
  readonly raw_body: Uint8Array;
} {
  return Object.defineProperty(
    {
      kind: "unknown" as const,
      raw: readObject(rawJson(data)),
      raw_body: bodies.get(data) ?? rawBody,
    },
    "raw_body",
    { enumerable: false, writable: false, configurable: false },
  );
}
export function withMeta<T extends object>(
  value: T,
  meta: ResponseMeta,
): T & { readonly meta: ResponseMeta } {
  return Object.defineProperty(value, "meta", {
    value: meta,
    enumerable: false,
  }) as T & { readonly meta: ResponseMeta };
}

export function readCursor(value: unknown): string {
  const cursor = readString(value);
  if (cursor === "") throw new TypeError("next_cursor must not be empty");
  return cursor;
}

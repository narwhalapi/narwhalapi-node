import { LIVE_SPEC_SHA, StableOperations } from "./generated/operations.js";
import { type ClientOptions, Transport } from "./transport.js";

/** Server-side Narwhal API client. Safe to share across concurrent requests. */
export class Narwhal extends StableOperations {
  constructor(options: ClientOptions = {}) {
    super(new Transport(options, LIVE_SPEC_SHA));
  }
  toString(): string {
    return "Narwhal(api_key=<redacted>)";
  }
  toJSON(): string {
    return this.toString();
  }
}
export * as codes from "./codes.js";
export type { Decimal } from "./decode.js";
export * from "./errors.js";
export type * from "./generated/models.js";
export type { HeaderInput, RateLimit, ResponseMeta } from "./meta.js";
export type { ClientOptions, RequestOptions } from "./transport.js";
export { VERSION } from "./version.js";

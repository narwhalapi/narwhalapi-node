export class NarwhalError extends Error {
  constructor(message: string) {
    super(message);
    this.name = new.target.name;
  }
}
export interface ApiErrorFields {
  status: number;
  code: string;
  title: string;
  detail: string;
  request_id?: string;
  instance?: string;
  retry_after?: number;
  raw_body: Uint8Array;
}
export class ApiError extends NarwhalError implements ApiErrorFields {
  readonly status: number;
  readonly code: string;
  readonly title: string;
  readonly detail: string;
  readonly request_id?: string;
  readonly instance?: string;
  readonly retry_after?: number;
  readonly raw_body: Uint8Array;
  constructor(fields: ApiErrorFields) {
    super(
      `HTTP ${fields.status} ${fields.code}: ${fields.title}` +
        (fields.request_id ? ` (request_id ${fields.request_id})` : ""),
    );
    this.status = fields.status;
    this.code = fields.code;
    this.title = fields.title;
    this.detail = fields.detail;
    this.request_id = fields.request_id;
    this.instance = fields.instance;
    this.retry_after = fields.retry_after;
    this.raw_body = fields.raw_body;
  }
}
export class BadRequest extends ApiError {}
export class Unauthorized extends ApiError {}
export class NotFound extends ApiError {}
export class ServiceUnavailable extends ApiError {}
export class RateLimited extends ApiError {
  get is_quota_exhausted(): boolean {
    return this.code === "quota_exhausted" || this.code === "quota_exceeded";
  }
}
export class CursorExpired extends ApiError {}
export class TransportError extends NarwhalError {
  readonly cause: unknown;
  constructor(
    cause: unknown,
    readonly response_received = false,
  ) {
    super("Request transport failed");
    Object.defineProperty(this, "cause", { value: cause, enumerable: false });
  }
}
/** Cancellation is compatible with the standard AbortError name. */
export class AbortError extends NarwhalError {
  constructor() {
    super("Request aborted");
  }
}
export class DecodeError extends NarwhalError {
  constructor(readonly raw_body: Uint8Array) {
    super("Response did not match the contract");
  }
}
export type WebhookFailureReason =
  | "missing_header"
  | "bad_timestamp"
  | "timestamp_out_of_range"
  | "no_matching_signature"
  | "invalid_body";
export class WebhookVerificationError extends NarwhalError {
  constructor(readonly reason: WebhookFailureReason) {
    super(reason);
  }
}

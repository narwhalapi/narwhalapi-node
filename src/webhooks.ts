/** Local webhook verification. Always verify the exact raw request bytes. */
import { readJson } from "./decode.js";
import { WebhookVerificationError } from "./errors.js";
import { decodeDeliveryEvent } from "./generated/decoders.js";
import type { DeliveryEvent } from "./generated/models.js";
import { type HeaderInput, headerEntries } from "./meta.js";

export interface WebhookOptions {
  toleranceSeconds?: number;
  /** Unix seconds; fractional seconds are truncated before comparison. */
  now?: number;
}
/** Verify raw bytes, then use event_id as the idempotency key. */
export async function verifyWebhook(
  rawBody: Uint8Array | ArrayBuffer,
  headers: HeaderInput,
  secrets: string | readonly string[],
  options: WebhookOptions = {},
): Promise<DeliveryEvent> {
  if (rawBody instanceof ArrayBuffer) rawBody = new Uint8Array(rawBody);
  if (!(rawBody instanceof Uint8Array))
    throw new TypeError(
      "Pass the exact raw request bytes as Uint8Array or ArrayBuffer",
    );
  const keys = typeof secrets === "string" ? [secrets] : secrets;
  if (
    !Array.isArray(keys) ||
    keys.length === 0 ||
    keys.some((key) => typeof key !== "string" || key.length === 0)
  )
    throw new TypeError("Webhook secrets must not be empty");
  const savedKeys = [...keys];
  const tolerance = options.toleranceSeconds ?? 300;
  const current = Math.trunc(options.now ?? Date.now() / 1000);
  if (
    !Number.isSafeInteger(current) ||
    !Number.isSafeInteger(tolerance) ||
    tolerance < 0
  )
    throw new TypeError("Invalid webhook time options");
  const values = Object.fromEntries(
    headerEntries(headers).map(([name, value]) => [name.toLowerCase(), value]),
  );
  const timestamp = values["x-narwhal-timestamp"];
  const signature = values["x-narwhal-signature"];
  if (timestamp === undefined || signature === undefined)
    throw new WebhookVerificationError("missing_header");
  if (!/^[0-9]+$/.test(timestamp) || timestamp.endsWith("\n"))
    throw new WebhookVerificationError("bad_timestamp");
  // Bound conversion before BigInt, including very long zero-prefixed timestamps.
  const digits = timestamp.replace(/^0+/, "") || "0";
  const upper = BigInt(current) + BigInt(tolerance);
  if (digits.length > upper.toString().length)
    throw new WebhookVerificationError("timestamp_out_of_range");
  const ts = BigInt(digits);
  if (ts > upper || ts < BigInt(current) - BigInt(tolerance))
    throw new WebhookVerificationError("timestamp_out_of_range");
  const prefix = new TextEncoder().encode(`${timestamp}.`);
  const message = new Uint8Array(prefix.length + rawBody.length);
  message.set(prefix);
  message.set(rawBody, prefix.length);
  const candidates: Uint8Array<ArrayBuffer>[] = [];
  for (const entry of signature.split(",")) {
    const trimmed = entry.trim();
    if (!trimmed.startsWith("sha256=")) continue;
    const hex = trimmed.slice(7).toLowerCase();
    if (!/^[0-9a-f]{64}$/.test(hex)) continue;
    const bytes = new Uint8Array(32);
    for (let i = 0; i < bytes.length; i++)
      bytes[i] = Number.parseInt(hex.slice(i * 2, i * 2 + 2), 16);
    candidates.push(bytes);
  }
  let matched = false;
  for (const secret of savedKeys) {
    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"],
    );
    for (const candidate of candidates) {
      // Web Crypto performs the authentication comparison, including rotation pairs.
      const valid = await crypto.subtle.verify("HMAC", key, candidate, message);
      matched = valid || matched;
    }
  }
  if (!matched) throw new WebhookVerificationError("no_matching_signature");
  try {
    return decodeDeliveryEvent(readJson(message.subarray(prefix.length)));
  } catch {
    throw new WebhookVerificationError("invalid_body");
  }
}

import {
  optional,
  readArray,
  readCursor,
  readJson,
  readObject,
} from "./decode.js";
import { DecodeError } from "./errors.js";
import { throwIfAborted } from "./transport.js";

export async function* iterate<T>(
  page: (
    cursor: string | undefined,
  ) => Promise<{ items: T[]; cursor: string | undefined }>,
  cursor: string | undefined,
  signal?: AbortSignal,
): AsyncIterableIterator<T> {
  for (;;) {
    const result = await page(cursor);
    for (const item of result.items) {
      throwIfAborted(signal);
      yield item;
    }
    throwIfAborted(signal);
    cursor = result.cursor;
    if (cursor === undefined) return;
  }
}
export function unknownPage<T>(
  page: { readonly raw_body: Uint8Array },
  items: string,
  decode: (value: unknown, page: Record<string, unknown>) => T,
): { items: T[]; cursor: string | undefined } {
  try {
    const data = readObject(readJson(page.raw_body));
    return {
      items: readArray(data[items]).map((value) => decode(value, data)),
      cursor: optional(data.next_cursor, readCursor),
    };
  } catch {
    throw new DecodeError(page.raw_body);
  }
}

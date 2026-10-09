/** Header inputs shared by server runtimes without requiring DOM declarations. */
export type HeaderInput =
  | Headers
  | Record<string, string | readonly string[] | undefined>
  | [string, string][];

export function headerEntries(headers: HeaderInput): [string, string][] {
  const entries =
    headers instanceof Headers
      ? [...headers.entries()]
      : Array.isArray(headers)
        ? headers
        : Object.entries(headers);
  return entries.flatMap(([name, value]): [string, string][] =>
    value === undefined
      ? []
      : [[name, typeof value === "string" ? value : value.join(",")]],
  );
}

export interface RateLimit {
  limit?: number;
  remaining?: number;
  reset?: string;
}
export interface ResponseMeta {
  request_id?: string;
  quota?: RateLimit;
  short?: RateLimit;
}
export function integerHeader(value: string | null): number | undefined {
  if (value === null || !/^[0-9]+$/.test(value)) return undefined;
  const parsed = Number.parseInt(value, 10);
  return Number.isSafeInteger(parsed) ? parsed : undefined;
}
export function responseMeta(headers: Headers): ResponseMeta {
  function rate(prefix: string): RateLimit | undefined {
    const limit = integerHeader(headers.get(`${prefix}limit`));
    const remaining = integerHeader(headers.get(`${prefix}remaining`));
    const reset = headers.get(`${prefix}reset`) ?? undefined;
    return limit === undefined && remaining === undefined && reset === undefined
      ? undefined
      : { limit, remaining, reset };
  }
  return {
    request_id: headers.get("x-request-id") ?? undefined,
    quota: rate("x-ratelimit-"),
    short: rate("x-ratelimit-short-"),
  };
}

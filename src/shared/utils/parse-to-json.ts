import { isEmpty } from "./is-empty";

export function parseValue<T>(value?: unknown, fallback?: T) {
  let result: T | undefined;

  try {
    result = JSON.parse(value as any) as T;
  } catch (e) {
    if (typeof value === 'string' && !/^[{[]/.test(value)) {
      result = value as T;
    }
  }

  return isEmpty(result) ? fallback : result;
}

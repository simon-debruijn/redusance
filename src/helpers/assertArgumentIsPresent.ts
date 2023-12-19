import { assert } from "./assert"

export function assertArgumentIsPresent(
  value: unknown,
  message?: string,
): asserts value {
  assert(value !== undefined && value !== null, message ?? `Missing argument`)
}

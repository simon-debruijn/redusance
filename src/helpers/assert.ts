export class AssertionError extends Error {
  name = "AssertionError"
}

export function assert(condition: boolean, msg?: string): asserts condition {
  if (!condition) {
    throw new AssertionError(msg)
  }
}

import { assertNumber } from "../helpers/assertNumber"

export function toMax() {
  const reducer = (
    max: number,
    current: number,
    index: number,
    arr: number[],
  ) => {
    assertNumber(current)

    if (current > max) {
      return current
    }

    return max
  }

  return [reducer, -Infinity] as const
}

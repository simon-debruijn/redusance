import { assertNumber } from "../helpers/assertNumber"

export function toMin() {
  const reducer = (
    min: number,
    current: number,
    index: number,
    arr: number[],
  ) => {
    assertNumber(current)

    if (current < min) {
      return current
    }

    return min
  }

  return [reducer, Infinity] as const
}

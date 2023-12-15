import { assertNumber } from "../helpers/assertNumber"

export function toMedian() {
  const reducer = (
    acc: number,
    current: number,
    index: number,
    arr: number[],
  ): number => {
    assertNumber(current)

    const isLast = index === arr.length - 1

    if (!isLast) {
      return acc
    }

    const sorted = [...arr].sort((a, b) => a - b)

    const isEven = sorted.length % 2 === 0

    if (isEven) {
      const middle1 = sorted[sorted.length / 2 - 1]!
      const middle2 = sorted[sorted.length / 2]!

      return (middle2 + middle1) / 2
    }

    const middle = Math.ceil(sorted.length / 2) - 1

    return sorted[middle]!
  }

  return [reducer, NaN] as const
}

import { assertNumber } from "../helpers/assertNumber";

export function toAvg() {
  const reducer = (
    sum: number,
    current: number,
    index: number,
    arr: number[],
  ): number => {
    assertNumber(current);

    const isLast = index === arr.length - 1;

    const newSum = sum + current;

    if (isLast) {
      return newSum / arr.length;
    }

    return newSum;
  };

  return [reducer, 0] as const;
}

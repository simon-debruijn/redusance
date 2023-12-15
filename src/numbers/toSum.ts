import { assertNumber } from "../helpers/assertNumber";

export function toSum() {
  const reducer = (
    sum: number,
    current: number,
    index: number,
    arr: number[],
  ): number => {
    assertNumber(current);

    return sum + current;
  };

  return [reducer, 0] as const;
}

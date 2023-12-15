import { describe, expect, it } from "vitest";
import { toSum } from "./toSum";
import { AssertionError } from "../helpers/assert";

describe("toSum", () => {
  it("should sum elements of a numeric array", () => {
    const numbers = [1, 2, 3, 4, 5];

    const sum = numbers.reduce(...toSum());

    expect(sum).toEqual(15);
  });

  it("should sum elements of a numeric array with negative numbers", () => {
    const numbers = [1, -2, 3, -4, 5];

    const sum = numbers.reduce(...toSum());

    expect(sum).toEqual(3);
  });

  it("should throw on non numeric elements", () => {
    const numbers = [1, "a", 3, -4, 5];

    // @ts-expect-error
    expect(() => numbers.reduce(...toSum())).toThrowError(
      new AssertionError("a is not a valid number"),
    );
  });
});

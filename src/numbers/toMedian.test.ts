import { describe, expect, it } from "vitest"
import { toMedian } from "./toMedian"
import { AssertionError } from "../helpers/assert"

describe("toMedian", () => {
  it("should calculate the median of a numeric array with odd length", () => {
    const numbers = [1, 2, 3, 4, 5]

    const median = numbers.reduce(...toMedian())

    expect(median).toEqual(3)
  })

  it("should calculate the median of a numeric array with even length", () => {
    const numbers = [1, 2, 3, 4]

    const median = numbers.reduce(...toMedian())

    expect(median).toEqual(2.5)
  })

  it("should calculate the median of a numeric array with negative numbers and a odd length", () => {
    const numbers = [1, -2, 3, -4, 5]

    const median = numbers.reduce(...toMedian())

    expect(median).toEqual(1)
  })

  it("should calculate the median of a numeric array with negative numbers and a even length", () => {
    const numbers = [1, -2, -4, 5]

    const median = numbers.reduce(...toMedian())

    expect(median).toEqual(-0.5)
  })

  it("should throw on non numeric elements", () => {
    const numbers = [1, "a", 3, -4, 5]

    // @ts-expect-error
    expect(() => numbers.reduce(...toMedian())).toThrowError(
      new AssertionError("a is not a valid number"),
    )
  })
})

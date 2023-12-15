import { describe, expect, it } from "vitest"
import { toAvg } from "./toAvg"
import { AssertionError } from "../helpers/assert"

describe("toAvg", () => {
  it("should take average of a numeric array", () => {
    const numbers = [1, 2, 3, 4, 5]

    const sum = numbers.reduce(...toAvg())

    expect(sum).toEqual(3)
  })

  it("should take average of a numeric array with negative numbers", () => {
    const numbers = [1, -2, 3, -4, 5]

    const sum = numbers.reduce(...toAvg())

    expect(sum).toEqual(0.6)
  })

  it("should throw on non numeric elements", () => {
    const numbers = [1, "a", 3, -4, 5]

    // @ts-expect-error
    expect(() => numbers.reduce(...toAvg())).toThrowError(
      new AssertionError("a is not a valid number"),
    )
  })
})

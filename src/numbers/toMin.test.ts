import { describe, expect, it } from "vitest"
import { AssertionError } from "../helpers/assert"
import { toMin } from "./toMin"

describe("toMin", () => {
  it("should find the max of a numeric array", () => {
    const numbers = [1, 2, 3, 4, 5]

    const max = numbers.reduce(...toMin())

    expect(max).toEqual(1)
  })

  it("should find the max of a numeric array with negative numbers", () => {
    const numbers = [1, -2, 3, -4, 5]

    const max = numbers.reduce(...toMin())

    expect(max).toEqual(-4)
  })

  it("should throw on non numeric elements", () => {
    const numbers = [1, "a", 3, -4, 5]

    // @ts-expect-error
    expect(() => numbers.reduce(...toMin())).toThrowError(
      new AssertionError("a is not a valid number"),
    )
  })
})

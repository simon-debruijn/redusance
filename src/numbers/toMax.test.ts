import { describe, expect, it } from "vitest"
import { toMax } from "./toMax"
import { AssertionError } from "../helpers/assert"

describe("toMax", () => {
  it("should find the max of a numeric array", () => {
    const numbers = [1, 2, 3, 4, 5]

    const sum = numbers.reduce(...toMax())

    expect(sum).toEqual(5)
  })

  it("should find the max of a numeric array with negative numbers", () => {
    const numbers = [1, -2, 3, -4, 5]

    const sum = numbers.reduce(...toMax())

    expect(sum).toEqual(0)
  })

  it("should throw on non numeric elements", () => {
    const numbers = [1, "a", 3, -4, 5]

    // @ts-expect-error
    expect(() => numbers.reduce(...toMax())).toThrowError(
      new AssertionError("a is not a valid number"),
    )
  })
})

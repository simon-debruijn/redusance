import { describe, expect, it } from "vitest"
import { toDistinct } from "./toDistinct"
import { getTheOfficeCharacters } from "../testData/office"
import { AssertionError } from "../helpers/assert"

describe("toDistinct", () => {
  it("should filter the distinct elements of a numeric array", () => {
    const numbers = [5, 1, -2, -2, -4, 5]

    const distinct = numbers.reduce(...toDistinct())

    expect(distinct).toEqual([1, -4])
  })

  it("should filter the distinct elements of a string array", () => {
    const numbers = ["hello", "ola", "hallo", "hello", "bonjour", "ola"]

    const distinct = numbers.reduce(...toDistinct())

    expect(distinct).toEqual(["hallo", "bonjour"])
  })

  it("should filter the distinct elements of an objects array", () => {
    const { micheal, angela, jim, pam } = getTheOfficeCharacters()

    const persons = [angela, micheal, jim, jim, pam, angela]

    type Person = (typeof persons)[number]

    const distinct = persons.reduce(
      ...toDistinct(
        (person: Person) => `${person.firstName}${person.lastName}`,
      ),
    )

    expect(distinct).toEqual([micheal, pam])
  })

  it("should filter the distinct elements of an array containing arrays", () => {
    const { micheal, angela, jim, pam } = getTheOfficeCharacters()

    const persons = [
      [angela, micheal],
      [jim, pam],
      [angela, micheal],
    ]

    type PersonArray = (typeof persons)[number]

    const distinct = persons.reduce(
      ...toDistinct((pair: PersonArray) =>
        pair.map((person) => `${person.firstName}${person.lastName}`).join("-"),
      ),
    )

    expect(distinct).toEqual([[jim, pam]])
  })

  it("should filter the distinct elements of a mixed array", () => {
    const { jim, pam } = getTheOfficeCharacters()

    const persons = ["Jim Halpert", jim, pam, 20]

    type Mixed = (typeof persons)[number]

    const distinct = persons.reduce(
      ...toDistinct((item: Mixed) =>
        typeof item === "object" ? `${item.firstName} ${item.lastName}` : item,
      ),
    )

    expect(distinct).toEqual([pam, 20])
  })

  it("should throw on non string/numeric/symbol elements when no uniqueKeyFn is provided", () => {
    const { micheal, angela, jim, pam } = getTheOfficeCharacters()

    const persons = [angela, micheal, jim, jim, pam, angela]

    expect(() => persons.reduce(...toDistinct())).toThrowError(
      new AssertionError(
        `[object Object] is not a string/numeric/symbol. You should provide a uniqueKeyFn so the uniqueness of the item can be checked`,
      ),
    )
  })
})

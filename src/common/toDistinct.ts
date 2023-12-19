import { assertArgumentIsPresent } from "../helpers/assertArgumentIsPresent"

export function toDistinct<TItem = unknown>(
  uniqueKeyFn?: (item: TItem) => PropertyKey,
) {
  const uniqueItems = new Map<PropertyKey, TItem>()

  const reducer = (
    distinct: TItem[],
    current: TItem,
    index: number,
    arr: TItem[],
  ) => {
    let key: PropertyKey

    if (
      typeof current === "number" ||
      typeof current === "string" ||
      typeof current === "symbol"
    ) {
      key = uniqueKeyFn ? uniqueKeyFn(current) : current
    } else {
      assertArgumentIsPresent(
        uniqueKeyFn,
        `${current} is not a string/numeric/symbol. You should provide a uniqueKeyFn so the uniqueness of the item can be checked`,
      )

      key = uniqueKeyFn(current)
    }

    if (!uniqueItems.has(key)) {
      uniqueItems.set(key, current)
    } else {
      uniqueItems.delete(key)
    }

    const isLast = index === arr.length - 1

    if (isLast) {
      return [...uniqueItems.values()]
    }

    return distinct
  }

  return [reducer, [] as TItem[]] as const
}

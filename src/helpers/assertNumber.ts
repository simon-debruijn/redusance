import { assert } from "./assert"

export function assertNumber(value: unknown) {
  assert(
    typeof value === "number" && !isNaN(value),
    `${value} is not a valid number`,
  )
}

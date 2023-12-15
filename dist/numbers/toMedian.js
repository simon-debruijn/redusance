"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/numbers/toMedian.ts
var toMedian_exports = {};
__export(toMedian_exports, {
  toMedian: () => toMedian
});
module.exports = __toCommonJS(toMedian_exports);

// src/helpers/assert.ts
var AssertionError = class extends Error {
  constructor() {
    super(...arguments);
    this.name = "AssertionError";
  }
};
function assert(condition, msg) {
  if (!condition) {
    throw new AssertionError(msg);
  }
}

// src/helpers/assertNumber.ts
function assertNumber(value) {
  assert(
    typeof value === "number" && !isNaN(value),
    `${value} is not a valid number`
  );
}

// src/numbers/toMedian.ts
function toMedian() {
  const reducer = (acc, current, index, arr) => {
    assertNumber(current);
    const isLast = index === arr.length - 1;
    if (isLast) {
      const sorted = [...arr].sort((a, b) => a - b);
      const isEven = sorted.length % 2 === 0;
      if (isEven) {
        const middle1 = sorted[sorted.length / 2 - 1];
        const middle2 = sorted[sorted.length / 2];
        return (middle2 + middle1) / 2;
      }
      const middle = Math.ceil(sorted.length / 2) - 1;
      return sorted[middle];
    }
    return acc;
  };
  return [reducer, NaN];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  toMedian
});

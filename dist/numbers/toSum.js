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

// src/numbers/toSum.ts
var toSum_exports = {};
__export(toSum_exports, {
  toSum: () => toSum
});
module.exports = __toCommonJS(toSum_exports);

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

// src/numbers/toSum.ts
function toSum() {
  const reducer = (sum, current, index, arr) => {
    assertNumber(current);
    return sum + current;
  };
  return [reducer, 0];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  toSum
});

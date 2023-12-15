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

// src/common/groupBy.ts
var groupBy_exports = {};
__export(groupBy_exports, {
  groupBy: () => groupBy
});
module.exports = __toCommonJS(groupBy_exports);
function groupBy(groupByFn) {
  const reducer = (groups, current, index, arr) => {
    var _a;
    const key = groupByFn(current);
    const group = (_a = groups[key]) != null ? _a : [];
    groups[key] = [...group, current];
    return groups;
  };
  return [reducer, {}];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  groupBy
});

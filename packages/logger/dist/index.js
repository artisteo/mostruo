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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  log: () => log,
  saludar: () => saludar
});
module.exports = __toCommonJS(src_exports);
var printLog = (log2) => {
  console.log(log2.content);
};
var sendLog = (log2) => {
  console.log("sent log", log2);
};
var handleLog = ({
  content,
  source,
  type
}) => {
  const timestamp = (/* @__PURE__ */ new Date()).getTime().toString();
  const log2 = {
    content,
    source,
    type,
    timestamp
  };
  printLog(log2);
  sendLog(log2);
};
var log = {
  server: {
    info: (content) => {
      handleLog({ source: "server", type: "info", content });
    }
  },
  client: {
    info: (content) => {
      handleLog({ source: "client", type: "info", content });
    }
  }
};
var saludar = () => {
  console.log("holaoh");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  log,
  saludar
});

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_node_fs = __toESM(require("fs"));
var import_fastify = __toESM(require("fastify"));
var fastify = (0, import_fastify.default)({});
fastify.get("/", async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  const logStream = import_node_fs.default.createWriteStream("logs.txt", { flags: "a" });
  const data = {
    mili: "pili"
  };
  logStream.write(JSON.stringify(data));
  logStream.end("\n,");
  return { "\u041A\u0430\u043A \u0432\u044B": "\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E" };
});
var start = async () => {
  try {
    await fastify.listen({ port: 3e3 });
  } catch (err) {
    process.exit(1);
  }
};
void start();

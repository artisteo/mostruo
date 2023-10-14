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
var import_fastify = __toESM(require("fastify"));
var import_cors = __toESM(require("@fastify/cors"));
var import_pino = __toESM(require("pino"));
var date = /* @__PURE__ */ new Date();
var dateFormated = `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`;
var logFileName = `logs-${dateFormated}`;
var consoleLogger = (0, import_pino.default)({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true
    }
  }
});
var fileLogger = (0, import_pino.default)((0, import_pino.destination)(`${logFileName}.log`));
var humanFileLogger = (0, import_pino.default)({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: false,
      destination: `${logFileName}-pretty.log`
    }
  }
});
var app = (0, import_fastify.default)({});
app.get("/", async (request, reply) => {
  await reply.send({ "\u041A\u0430\u043A \u0432\u044B": "\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E" });
});
app.post("/", async (request, reply) => {
  const rawLog = await request.body;
  const log = JSON.parse(rawLog);
  const extraFields = {
    source: log.source,
    type: log.type,
    original_timestamp: log.timestamp
  };
  const content = JSON.stringify(log.content);
  consoleLogger.info(extraFields, content);
  fileLogger.info(extraFields, content);
  humanFileLogger.info(extraFields, content);
  await reply.send({});
});
var start = async () => {
  try {
    await app.register(import_cors.default, {
      origin: "*",
      credentials: true
    });
    await app.listen({ port: 3e3 });
  } catch (err) {
    process.exit(1);
  }
};
void start();

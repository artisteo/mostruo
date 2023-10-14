import Fastify from "fastify";
import cors from "@fastify/cors";
import { pino, destination } from "pino";
import type { Log } from "logger";

const date = new Date();
const dateFormated = `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`;
const logFileName = `logs-${dateFormated}`;

const consoleLogger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

const fileLogger = pino(destination(`${logFileName}.log`));

const humanFileLogger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: false,
      destination: `${logFileName}-pretty.log`,
    },
  },
});

const app = Fastify({});

app.get("/", async (request, reply) => {
  await reply.send({ "Как вы": "нормально" });
});

app.post("/", async (request, reply) => {
  const rawLog = (await request.body) as string;
  const log = JSON.parse(rawLog) as Log;
  const extraFields = {
    source: log.source,
    type: log.type,
    original_timestamp: log.timestamp,
  };
  const content = JSON.stringify(log.content);
  consoleLogger.info(extraFields, content);
  fileLogger.info(extraFields, content);
  humanFileLogger.info(extraFields, content);
  await reply.send({});
});

const start = async (): Promise<void> => {
  try {
    await app.register(cors, {
      origin: "*",
      credentials: true,
    });
    await app.listen({ port: 3000 });
  } catch (err) {
    process.exit(1);
  }
};
void start();

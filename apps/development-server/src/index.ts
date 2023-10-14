import fs from "node:fs";
import Fastify from "fastify";

const fastify = Fastify({});

fastify.get("/", async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  const logStream = fs.createWriteStream("logs.txt", { flags: "a" });

  const data = {
    mili: "banili",
  };
  logStream.write(JSON.stringify(data));
  logStream.end("\n");
  return { hello: "world" };
});

const start = async (): Promise<void> => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    process.exit(1);
  }
};
void start();

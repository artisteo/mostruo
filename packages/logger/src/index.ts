type Source = "server" | "client";

type Type = "info" | "fetch" | "auth";

type Timestamp = string;

type Content = string | object;

interface Log {
  source: Source;
  type: Type;
  timestamp: Timestamp;
  content: Content;
}

const printLog = (log: Log): void => {
  // eslint-disable-next-line no-console -- We actually want to use console.log
  console.log(log.content);
};
const sendLog = (log: Log): void => {
  // eslint-disable-next-line no-console -- We actually want to use console.log
  console.log("lont sent over http", log);
};

const handleLog = ({
  content,
  source,
  type,
}: {
  content: Content;
  source: Source;
  type: Type;
}): void => {
  const timestamp = new Date().getTime().toString();
  const log: Log = {
    content,
    source,
    type,
    timestamp,
  };
  printLog(log);
  sendLog(log);
};

interface LogClient {
  server: {
    info: (content: Content) => void;
  };
  client: {
    info: (content: Content) => void;
  };
}

export const log: LogClient = {
  server: {
    info: (content: Content) => {
      handleLog({ source: "server", type: "info", content });
    },
  },
  client: {
    info: (content: Content) => {
      handleLog({ source: "client", type: "info", content });
    },
  },
};

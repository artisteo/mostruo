type Content = string | object;
interface LogClient {
    server: {
        info: (content: Content) => void;
    };
    client: {
        info: (content: Content) => void;
    };
}
declare const log: LogClient;
declare const saludar: () => void;

export { log, saludar };

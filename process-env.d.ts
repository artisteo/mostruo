declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      NEXT_PUBLIC_DOT_ENV: string;
      NODE_ENV: string;
    }
  }
}

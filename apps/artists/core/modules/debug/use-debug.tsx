import { useAuth } from "../auth/use-auth";
import type Debug from "./debug";
import type EnvironmentDebug from "./debug-environment";

const useDebug = (): Debug => {
  const environment: EnvironmentDebug = {
    NEXT_PUBLIC_DOT_ENV: process.env.NEXT_PUBLIC_DOT_ENV,
    NODE_ENV: process.env.NODE_ENV,
  };

  const auth = useAuth();

  const debug: Debug = {
    environment,
    auth,
  };
  return debug;
};

export default useDebug;

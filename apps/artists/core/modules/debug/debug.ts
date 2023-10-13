import type DebugAuth from "./debug-auth";
import type DebugEnvironment from "./debug-environment";

export default interface Debug {
  auth: DebugAuth;
  environment: DebugEnvironment;
}

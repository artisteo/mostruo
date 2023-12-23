import type Token from "../token/token";
import { setGenericServerCookie } from "../../_hex/cookies/set-generic-server-cookie";
import AUTH_COOKIE_NAME from "./auth-cookie-name";

function setAuthCookie(token: Token): void {
  const value = token.toString();
  setGenericServerCookie(AUTH_COOKIE_NAME, value);
}

export default setAuthCookie;
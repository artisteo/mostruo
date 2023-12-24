import { setGenericServerCookie } from "../../../base/cookies/set-generic-server-cookie";
import Token from "./token";

function setAuthCookie(token: Token): void {
  const value = token.toString();
  setGenericServerCookie(Token.AUTH_COOKIE_NAME, value);
}

export default setAuthCookie;

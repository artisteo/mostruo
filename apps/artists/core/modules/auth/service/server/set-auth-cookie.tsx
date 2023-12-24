import Token from "../../token/token";
import { setGenericServerCookie } from "../../../../cookies/set-generic-server-cookie";

function setAuthCookie(token: Token): void {
  const value = token.toString();
  setGenericServerCookie(Token.AUTH_COOKIE_NAME, value);
}

export default setAuthCookie;

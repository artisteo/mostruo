import Token from "../../token/token";
import { getGenericClientCookie } from "../../../../cookies/get-generic-client-cookie";
import AUTH_COOKIE_NAME from "../../cookie/auth-cookie-name";

function getAuthClientCookie(): Token | null {
  const cookie = getGenericClientCookie(AUTH_COOKIE_NAME);
  if (cookie === null) return null;
  return new Token(cookie);
}

export default getAuthClientCookie;

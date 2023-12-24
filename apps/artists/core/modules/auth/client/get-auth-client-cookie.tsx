import { getGenericClientCookie } from "../../../cookies/get-generic-client-cookie";
import Token from "../token/token";

function getAuthClientCookie(): Token | null {
  const cookie = getGenericClientCookie(Token.AUTH_COOKIE_NAME);
  if (cookie === null) return null;
  return new Token(cookie);
}

export default getAuthClientCookie;

import Token from "../../token/token";
import { getGenericClientCookie } from "../../../../cookies/get-generic-client-cookie";

function getAuthClientCookie(): Token | null {
  const cookie = getGenericClientCookie(Token.AUTH_COOKIE_NAME);
  if (cookie === null) return null;
  return new Token(cookie);
}

export default getAuthClientCookie;

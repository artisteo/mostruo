import { cookies } from "next/headers";
import Token from "./token";

export function setGenericServerCookie(name: string, value: string): void {
  cookies().set(name, value);
}
function setAuthCookie(token: Token): void {
  const value = token.toString();
  setGenericServerCookie(Token.AUTH_COOKIE_NAME, value);
}

export default setAuthCookie;

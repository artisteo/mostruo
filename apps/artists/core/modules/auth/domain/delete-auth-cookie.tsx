import { cookies } from "next/headers";
import Token from "./token";

export function deleteGenericServerCookie(name: string): void {
  cookies().delete(name);
}

function deleteAuthCookie(): void {
  deleteGenericServerCookie(Token.AUTH_COOKIE_NAME);
}

export default deleteAuthCookie;

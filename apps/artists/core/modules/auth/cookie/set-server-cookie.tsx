import { cookies } from "next/headers";
import COOKIE_NAME from "./cookie-name";

function setGenericServerCookie(name: string, value: string): void {
  cookies().set(name, value);
}

function setServerCookie(token: string): void {
  setGenericServerCookie(COOKIE_NAME, token);
}

export default setServerCookie;

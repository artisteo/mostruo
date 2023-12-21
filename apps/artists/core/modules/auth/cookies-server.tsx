import { cookies } from "next/headers";
import AUTH_COOKIE_NAME from "./auth-cookie-name";

function setServerCookie(name: string, value: string): void {
  cookies().set(name, value);
}

function deleteServerCookie(name: string): void {
  cookies().delete(name);
}

export function setServerAuthCookie(token: string): void {
  setServerCookie(AUTH_COOKIE_NAME, token);
}

export function deleteServerAuthCookie(): void {
  deleteServerCookie(AUTH_COOKIE_NAME);
}

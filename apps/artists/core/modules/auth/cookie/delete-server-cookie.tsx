import { cookies } from "next/headers";
import COOKIE_NAME from "./cookie-name";

function deleteGenericServerCookie(name: string): void {
  cookies().delete(name);
}

function deleteServerCookie(): void {
  deleteGenericServerCookie(COOKIE_NAME);
}

export default deleteServerCookie;

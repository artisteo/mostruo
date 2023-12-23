import { cookies } from "next/headers";

export function setGenericServerCookie(name: string, value: string): void {
    cookies().set(name, value);
}

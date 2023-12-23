import { cookies } from "next/headers";

export function deleteGenericServerCookie(name: string): void {
    cookies().delete(name);
}

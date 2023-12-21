import AUTH_COOKIE_NAME from "./auth-cookie-name";

function getClientCookie(name: string): string | null {
  try {
    const nameLenPlus = name.length + 1;
    return (
      document.cookie
        .split(";")
        .map((c) => c.trim())
        .filter((cookie) => {
          return cookie.substring(0, nameLenPlus) === `${name}=`;
        })
        .map((cookie) => {
          return decodeURIComponent(cookie.substring(nameLenPlus));
        })[0] || null
    );
  } catch (e) {
    return null;
  }
}

export function getClientAuthCookie(): string | null {
  return getClientCookie(AUTH_COOKIE_NAME);
}

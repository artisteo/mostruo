import COOKIE_NAME from "./cookie-name";

function getGenericClientCookie(name: string): string | null {
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

function getClientCookie(): string | null {
  return getGenericClientCookie(COOKIE_NAME);
}

export default getClientCookie;
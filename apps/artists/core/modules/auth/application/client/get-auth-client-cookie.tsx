import Token from "../../domain/token";

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

function getAuthClientCookie(): Token | null {
  const cookie = getGenericClientCookie(Token.AUTH_COOKIE_NAME);
  if (cookie === null) return null;
  return new Token(cookie);
}

export default getAuthClientCookie;

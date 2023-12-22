import * as jose from "jose";
import type TokenPublicDto from "./token-public-dto";
import TOKEN_SECRET from "./token-secret";

const createToken = async (tokenPublicDto: TokenPublicDto): Promise<string> => {
  const secret = new TextEncoder().encode(TOKEN_SECRET);
  const alg = "HS256";

  const jwt = await new jose.SignJWT({ ...tokenPublicDto })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(secret);

  return jwt;
};

export default createToken;

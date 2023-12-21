import * as jose from "jose";
import type LoginDto from "./use-cases/login/login-dto";

export const createToken = async (dto: LoginDto): Promise<string> => {
  const secret = new TextEncoder().encode(
    "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2"
  );
  const alg = "HS256";

  const jwt = await new jose.SignJWT({
    user: {
      email: dto.email,
      isAdmin: false,
    },
  })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    // .setIssuer("urn:example:issuer")
    // .setAudience("urn:example:audience")
    .setExpirationTime("24h")
    .sign(secret);

  return jwt;
};

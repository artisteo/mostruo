import * as jose from "jose";
import type LoginDto from "./use-cases/login/login-dto";

export interface Claims {
  user: {
    email: string;
  };
}

export const createToken = async (dto: LoginDto): Promise<string> => {
  const secret = new TextEncoder().encode(
    "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2"
  );
  const alg = "HS256";

  const claims: Claims = {
    user: {
      email: dto.email,
    },
  };

  const jwt = await new jose.SignJWT({ claims })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    // .setIssuer("urn:example:issuer")
    // .setAudience("urn:example:audience")
    .setExpirationTime("24h")
    .sign(secret);

  return jwt;
};

export const getTokenClaims = (token: string): Claims => {
  const claims = jose.decodeJwt(token).claims as Claims;
  return claims;
};

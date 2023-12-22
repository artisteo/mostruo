import * as jose from "jose";
import type TokenPublicDto from "./token-public-dto";

const getTokenPublicDto = (token: string): TokenPublicDto => {
  const claims = jose.decodeJwt(token) as TokenPublicDto;
  return claims;
};

export default getTokenPublicDto;

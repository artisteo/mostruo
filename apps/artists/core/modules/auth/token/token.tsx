import * as jose from "jose";
import type TokenPublicDto from "./token-public-dto";

class Token {
  public readonly value: string;
  public static readonly TOKEN_SECRET =
    "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2";

  constructor(value: string) {
    this.value = value;
  }

  public toString(): string {
    return this.value;
  }

  public getTokenPublicDto(): TokenPublicDto {
    const tokenPublicDto = jose.decodeJwt(this.value) as TokenPublicDto;
    return tokenPublicDto;
  }

  public static async createToken(email: string): Promise<Token> {
    const tokenPublicDto: TokenPublicDto = {
      user: {
        email,
      },
    };
    const secret = new TextEncoder().encode(Token.TOKEN_SECRET);
    const alg = "HS256";

    const jwt = await new jose.SignJWT({ ...tokenPublicDto })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(secret);

    return new Token(jwt);
  }
}

export default Token;

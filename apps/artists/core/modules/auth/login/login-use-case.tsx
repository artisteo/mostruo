import { NextResponse } from "next/server";
import setServerCookie from "../cookie/set-server-cookie";
import createToken from "../token/create-token";
import type TokenPublicDto from "../token/token-public-dto";
import type LoginDto from "./login-dto";

const loginUseCase = async (loginDto: LoginDto): Promise<NextResponse> => {
  try {
    // TODO extract credential validations
    const { password, email } = loginDto;
    if (email === "1" && password === "1") {
      const tokenPublicData: TokenPublicDto = {
        user: {
          email,
        },
      };
      const token = await createToken(tokenPublicData);
      setServerCookie(token);
      // TODO unify responses
      return NextResponse.json({ token }, { status: 200 });
    }
    return NextResponse.json({}, { status: 403 });
  } catch (e) {
    // eslint-disable-next-line no-console -- ^^
    console.error(e);
    return NextResponse.json({}, { status: 400 });
  }
};

export default loginUseCase;

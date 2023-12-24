import type { NextRequest } from "next/server";
import { Ok, Err } from "oxide.ts";
import type { Result } from "oxide.ts";
import {
  BadCredentialsError,
  BadDtoFormatError,
  BadJSONFormatError,
  InternalServerError,
} from "../../../errors/errors";
import LoginDto from "../application/login-dto";
import Token from "./token";
import setAuthCookie from "./set-auth-cookie";

type LoginUseCaseResult = Result<
  Token,
  | typeof InternalServerError
  | typeof BadCredentialsError
  | typeof BadJSONFormatError
  | typeof BadDtoFormatError
>;

const loginUseCase = async (
  request: NextRequest
): Promise<LoginUseCaseResult> => {
  try {
    const loginDto = await LoginDto.createFromRequest(request);
    const { password, email } = loginDto;
    if (email !== "1" || password !== "1") {
      return Err(BadCredentialsError);
    }
    const token = await Token.createToken(email);
    setAuthCookie(token);
    return Ok(token);
  } catch (e) {
    const error = e as Error;
    if (error.message === BadJSONFormatError) {
      return Err(BadJSONFormatError);
    }
    if (error.message === BadDtoFormatError) return Err(BadDtoFormatError);
    return Err(InternalServerError);
  }
};

export default loginUseCase;

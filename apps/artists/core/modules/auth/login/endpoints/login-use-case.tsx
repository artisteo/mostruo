import type { NextRequest } from "next/server";
import { Ok, Err } from "oxide.ts";
import LoginDto from "../login-dto";
import createToken from "../../token/create-token";
import setServerCookie from "../../cookie/set-server-cookie";
import type { LoginUseCaseResult } from "../../../_hex/utils";
import {
  BadCredentialsError,
  BadDtoFormatError,
  BadJSONFormatError,
  InternalServerError,
} from "../../../_hex/utils";

const loginUseCase = async (
  request: NextRequest
): Promise<LoginUseCaseResult> => {
  try {
    const loginDto = await LoginDto.createFromRequest(request);
    const { password, email } = loginDto;
    if (email !== "1" || password !== "1") {
      return Err(BadCredentialsError);
    }
    const token = await createToken(loginDto);
    setServerCookie(token);
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

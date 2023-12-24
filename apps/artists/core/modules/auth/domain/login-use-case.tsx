import type { NextRequest } from "next/server";
import { Result } from "result-type-ts";
import type { BadJSONFormatError ,
  BadCredentialsError,
  BadDtoFormatError} from "../errors/errors";
import {
  InternalError,
} from "../errors/errors";
import LoginDto from "./login-dto";
import Token from "./token";
import setAuthCookie from "./set-auth-cookie";

const loginUseCase = async (
  request: NextRequest
): Promise<
  Result<
    Token,
    | typeof InternalError
    | typeof BadCredentialsError
    | typeof BadJSONFormatError
    | typeof BadDtoFormatError
  >
> => {
  try {
    //
    const createResult = await LoginDto.createFromRequestResult(request);
    if (createResult.isFailure) return createResult;
    //
    const loginDto = createResult.value;
    const validateResult = LoginDto.validate(loginDto);
    if (validateResult.isFailure) {
      return validateResult;
    }
    //
    const verifyResult = LoginDto.verifyCredentials(loginDto);
    if (verifyResult.isFailure) return verifyResult;
    //
    const token = await Token.createToken(loginDto.email);
    setAuthCookie(token);
    //
    return Result.success(token);
  } catch (e) {
    return Result.failure(InternalError);
  }
};

export default loginUseCase;

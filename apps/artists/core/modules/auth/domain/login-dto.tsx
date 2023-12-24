import jointz from "jointz";
import type { NextRequest } from "next/server";
import { Result } from "result-type-ts";
import {
  BadCredentialsError,
  BadDtoFormatError,
  BadJSONFormatError,
} from "./errors";

const LoginDtoValidator = jointz
  .object({
    email: jointz.string(),
    password: jointz.string(),
  })
  .requiredKeys(["email", "password"]);

export const getJsonFromRequest = async (
  request: NextRequest
): Promise<LoginDto> => {
  try {
    const loginDto = (await request.json()) as LoginDto;
    return loginDto;
  } catch (e) {
    throw new Error(BadJSONFormatError);
  }
};

export const validateDTO = (loginDto: LoginDto): void => {
  const errors = LoginDtoValidator.validate(loginDto);
  if (errors.length > 0) {
    throw new Error(BadDtoFormatError);
  }
};

class LoginDto {
  public readonly email: string;
  public readonly password: string;

  public static async createFromRequestResult(
    request: NextRequest
  ): Promise<Result<LoginDto, typeof BadJSONFormatError>> {
    try {
      const loginDto = (await request.json()) as LoginDto;
      return Result.success(loginDto);
    } catch (e) {
      return Result.failure(BadJSONFormatError);
    }
  }

  public static validate(
    loginDto: LoginDto
  ): Result<boolean, typeof BadDtoFormatError> {
    const errors = LoginDtoValidator.validate(loginDto);
    if (errors.length > 0) {
      return Result.failure(BadDtoFormatError);
    }
    return Result.success(true);
  }
}

export default LoginDto;

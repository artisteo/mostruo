import jointz from "jointz";
import type { NextRequest } from "next/server";
import { BadDtoFormatError, BadJSONFormatError } from "../errors/errors";

const LoginDtoValidator = jointz
  .object({
    email: jointz.string(),
    password: jointz.string(),
  })
  .requiredKeys(["email", "password"]);

const getJsonFromRequest = async (request: NextRequest): Promise<LoginDto> => {
  try {
    const loginDto = (await request.json()) as LoginDto;
    return loginDto;
  } catch (e) {
    throw new Error(BadJSONFormatError);
  }
};

const validateDTO = (loginDto: LoginDto): void => {
  const errors = LoginDtoValidator.validate(loginDto);
  if (errors.length > 0) {
    throw new Error(BadDtoFormatError);
  }
};

class LoginDto {
  public readonly email: string;
  public readonly password: string;

  public static async createFromRequest(
    request: NextRequest
  ): Promise<LoginDto> {
    const loginDto = await getJsonFromRequest(request);
    validateDTO(loginDto);
    return loginDto;
  }
}

export default LoginDto;

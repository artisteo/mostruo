import { Result, ResultAsync } from "neverthrow";
import { Err, Ok } from "neverthrow";
import jointz from "jointz";
import BadDtoFormatError from "../errors/bad-dto-format-error";
import { NextRequest } from "next/server";
import BadJSONFormatError from "../errors/bad-json-format-error";

const LoginDtoValidator = jointz
  .object({
    email: jointz.string(),
    password: jointz.string(),
  })
  .requiredKeys(["email", "password"]);

class LoginDto {
  constructor(
    public password: string,
    public email: string
  ) {}

  public static validate(
    loginDto: LoginDto
  ): Result<LoginDto, typeof BadDtoFormatError> {
    const errors = LoginDtoValidator.validate(loginDto);

    if (errors.length > 0) {
      return new Err(BadDtoFormatError);
    }
    return new Ok(loginDto);
  }

  public static async getFromRequestAsync(
    request: NextRequest
  ): Promise<LoginDto> {
    return (await request.json()) as LoginDto;
  }

  public static getFromRequest(
    request: NextRequest
  ): ResultAsync<LoginDto, typeof BadJSONFormatError> {
    return ResultAsync.fromPromise(
      LoginDto.getFromRequestAsync(request),
      () => BadJSONFormatError
    );
  }
}

export default LoginDto;

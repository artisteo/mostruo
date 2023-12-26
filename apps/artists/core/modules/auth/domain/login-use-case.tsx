import type { NextRequest } from "next/server";
import type { Result } from "neverthrow";
import { errAsync, okAsync } from "neverthrow";
import type BadJSONFormatError from "../errors/bad-json-format-error";
import type BadDtoFormatError from "../errors/bad-dto-format-error";
import type BadCredentialsError from "../errors/bad-credentials-error";
import type InternalError from "../errors/internal-error";
import ServerError from "../errors/server-error";
import type LoginDto from "./login-dto";
import type Token from "./token";
import saveToken from "./service/save-token";
import verifyCredentials from "./service/verify-credentials";
import getFromJSON from "./service/get-from-json";
import validateDTO from "./service/validate-dto";

const loginUseCase = async (
  request: NextRequest
): Promise<
  Result<
    Token,
    | typeof BadJSONFormatError
    | typeof BadDtoFormatError
    | typeof BadCredentialsError
    | typeof InternalError
    | typeof ServerError
  >
> => {
  try {
    const result = getFromJSON(request).andThen((loginDto: LoginDto) =>
      validateDTO(loginDto).asyncAndThen(() =>
        verifyCredentials(loginDto).andThen(() =>
          saveToken(loginDto).andThen((token) => okAsync(token))
        )
      )
    );
    return result;
  } catch (e) {
    return errAsync(ServerError);
  }
};

export default loginUseCase;

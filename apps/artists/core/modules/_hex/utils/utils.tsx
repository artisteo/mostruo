import type { Result } from "oxide.ts";
import type Token from "../../auth/token/token";

export const BadCredentialsError = "BadCredentialsError";

export const BadJSONFormatError = "BadJSONFormatError";

export const BadDtoFormatError = "BadDtoFormatError";

export const InternalServerError = "InternalServerError";

export type LoginUseCaseResult = Result<
  Token,
  | typeof InternalServerError
  | typeof BadCredentialsError
  | typeof BadJSONFormatError
  | typeof BadDtoFormatError
>;

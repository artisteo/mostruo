import type { Result } from "oxide.ts";

export const BadCredentialsError = "BadCredentialsError";

export const BadJSONFormatError = "BadJSONFormatError";

export const BadDtoFormatError = "BadDtoFormatError";

export const InternalServerError = "InternalServerError";

export type LoginUseCaseResult = Result<
  string,
  | typeof InternalServerError
  | typeof BadCredentialsError
  | typeof BadJSONFormatError
  | typeof BadDtoFormatError
>;

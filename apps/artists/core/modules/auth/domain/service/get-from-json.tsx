import type { NextRequest } from "next/server";
import { ResultAsync } from "neverthrow";
import type LoginDto from "../login-dto";
import BadJSONFormatError from "../errors/bad-json-format-error";

const getFromJSONAsync = async (request: NextRequest): Promise<LoginDto> => {
  return (await request.json()) as LoginDto;
};

const getFromJSON = (
  request: NextRequest
): ResultAsync<LoginDto, typeof BadJSONFormatError> => {
  return ResultAsync.fromPromise(
    getFromJSONAsync(request),
    () => BadJSONFormatError
  );
};

export default getFromJSON;

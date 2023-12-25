import type { NextRequest, NextResponse } from "next/server";
import loginUseCase from "../domain/login-use-case";
import {
  BadCredentialsError,
  BadDtoFormatError,
  BadJSONFormatError,
} from "../errors";
import HttpResponse from "./http-response";

const LoginPostController = async (
  request: NextRequest
): Promise<NextResponse> => {
  const result = await loginUseCase(request);
  if (result.isOk()) {
    const token = result.value;
    return HttpResponse.OK(token);
  }
  const error = result.error;
  if (error === BadJSONFormatError || error === BadDtoFormatError)
    return HttpResponse.BadRequest(error);
  if (error === BadCredentialsError) return HttpResponse.Unauthorized(error);
  return HttpResponse.InternalServerError(error);
};

export default LoginPostController;

import type { NextRequest, NextResponse } from "next/server";
import loginUseCase from "../../domain/login-use-case";
import type Token from "../../domain/token";
import HttpResponse from "../http-response";

export type LoginPostControllerResponse =
  | NextResponse<Token>
  | NextResponse<string>;

const LoginPostController = async (
  request: NextRequest
): Promise<NextResponse<Token> | NextResponse<string>> => {
  const result = await loginUseCase(request);
  if (result.isOk()) {
    const token = result.value;
    const response = HttpResponse.OkPremium(token);
    return response;
  }
  const error = result.error;
  if (error === "BadJSONFormatError" || error === "BadDtoFormatError") {
    const response = HttpResponse.BadRequestPremium(error);
    return response;
  }
  if (error === "BadCredentialsError") {
    const response = HttpResponse.UnauthorizedPremium(error);
    return response;
  }
  const response = HttpResponse.InternalServerErrorPremium(error);
  return response;
};

export default LoginPostController;

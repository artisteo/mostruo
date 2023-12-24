import type { NextRequest, NextResponse } from "next/server";
import HttpResponse from "./http-response";
import loginUseCase from "../../domain/login-use-case";

const LoginPostController = async (
  request: NextRequest
): Promise<NextResponse> => {
  const result = await loginUseCase(request);
  return result.match(
    (token) => HttpResponse.OK(token),
    (error) => {
      switch (error) {
        case "BadCredentialsError":
          return HttpResponse.Unauthorized();
        case "BadJSONFormatError":
        case "BadDtoFormatError":
          return HttpResponse.BadRequest();
        case "InternalError":
          return HttpResponse.InternalServerError();
      }
    }
  );
};

export default LoginPostController;

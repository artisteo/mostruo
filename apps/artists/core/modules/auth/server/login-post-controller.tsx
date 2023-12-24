import type { NextRequest, NextResponse } from "next/server";
import loginUseCase from "../domain/login-use-case";
import HttpResponse from "./http-response";

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

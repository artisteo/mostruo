import type { NextRequest, NextResponse } from "next/server";
import { match } from "oxide.ts";
import HttpResponse from "../http-response";
import {
  BadCredentialsError,
  BadDtoFormatError,
  BadJSONFormatError,
} from "../../errors/errors";
import loginUseCase from "../../domain/login-use-case";
import type Token from "../../domain/token";

const LoginPostController = async (
  request: NextRequest
): Promise<NextResponse> => {
  const result = await loginUseCase(request);
  return match(result, {
    Ok: (token: Token) => HttpResponse.OK(token),
    Err: (err) => {
      if (err === BadDtoFormatError || err === BadJSONFormatError)
        return HttpResponse.BadRequest(err);
      if (err === BadCredentialsError) return HttpResponse.Unauthorized();
      return HttpResponse.InternalServerError();
    },
  });
};

export default LoginPostController;

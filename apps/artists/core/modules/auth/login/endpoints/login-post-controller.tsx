import type { NextRequest, NextResponse } from "next/server";
import { match } from "oxide.ts";
import HttpResponse from "../../../../base/http-response";
import {
  BadCredentialsError,
  BadDtoFormatError,
  BadJSONFormatError,
} from "../../../../base/errors";
import loginUseCase from "./login-use-case";

const LoginPostController = async (
  request: NextRequest
): Promise<NextResponse> => {
  const result = await loginUseCase(request);
  return match(result, {
    Ok: (token) => HttpResponse.OK(token),
    Err: (err) => {
      if (err === BadDtoFormatError || err === BadJSONFormatError)
        return HttpResponse.BadRequest(err);
      if (err === BadCredentialsError) return HttpResponse.Unauthorized();
      return HttpResponse.InternalServerError();
    },
  });
};

export default LoginPostController;

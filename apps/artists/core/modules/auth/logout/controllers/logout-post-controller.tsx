import type { NextResponse } from "next/server";
import { match } from "oxide.ts";
import HttpResponse from "../../../../http/http-response";
import logoutUseCase from "../logout-use-case";

const LogoutPostController = (): NextResponse => {
  const result = logoutUseCase();
  return match(result, {
    Ok: () => HttpResponse.OK(),
    Err: () => {
      return HttpResponse.InternalServerError();
    },
  });
};

export default LogoutPostController;

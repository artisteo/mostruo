import type { NextResponse } from "next/server";
import HttpResponse from "../../../../base/http-response";
import logoutUseCase from "../../domain/logout-use-case";

const LogoutPostController = (): NextResponse => {
  return logoutUseCase().match(
    () => HttpResponse.OK(),
    () => HttpResponse.InternalServerError()
  );
};

export default LogoutPostController;

import type { NextResponse } from "next/server";
import logoutUseCase from "../../domain/logout-use-case";
import HttpResponse from "../http-response";

const LogoutPostController = (): NextResponse => {
  return logoutUseCase().match(
    () => HttpResponse.OK(),
    () => HttpResponse.InternalServerError()
  );
};

export default LogoutPostController;

import type { NextResponse } from "next/server";
import logoutUseCase from "../logout-use-case";

// POST ENDPOINT CONTROLLER
const LogoutPost = (): NextResponse => {
  // return use case response
  return logoutUseCase();
};

export default LogoutPost;

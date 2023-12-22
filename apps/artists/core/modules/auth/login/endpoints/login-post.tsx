import type { NextRequest, NextResponse } from "next/server";
import loginUseCase from "../login-use-case";

// POST ENDPOINT CONTROLLER
const LoginPost = async (request: NextRequest): Promise<NextResponse> => {
  // return use case response
  return loginUseCase(request);
};

export default LoginPost;

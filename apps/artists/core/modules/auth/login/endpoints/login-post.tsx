import type { NextRequest, NextResponse } from "next/server";
import type LoginDto from "../login-dto";
import loginUseCase from "../login-use-case";

// POST ENDPOINT CONTROLLER
const LoginPost = async (request: NextRequest): Promise<NextResponse> => {
  // extract the parameters from the request
  const dto = (await request.json()) as LoginDto;
  // return use case response
  return loginUseCase(dto);
};

export default LoginPost;

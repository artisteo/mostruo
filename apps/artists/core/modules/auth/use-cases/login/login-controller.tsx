import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type LoginDto from "./login-dto";
import Login from "./login";

export interface LoginParams {
  email: string;
  password: string;
}

const POST = async (request: NextRequest): Promise<NextResponse> => {
  const dto = (await request.json()) as LoginDto;
  const login = new Login(dto);
  return login.run();
};

const GET = (): NextResponse => {
  return NextResponse.json({ health: "login ok" }, { status: 200 });
};

export { POST, GET };

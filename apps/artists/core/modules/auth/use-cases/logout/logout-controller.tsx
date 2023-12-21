import { NextResponse } from "next/server";
import Logout from "./logout";

export interface LoginParams {
  email: string;
  password: string;
}

const POST = (): NextResponse => {
  const logout = new Logout();
  return logout.run();
};

const GET = (): NextResponse => {
  return NextResponse.json({ health: "logout ok" }, { status: 200 });
};

export { POST, GET };

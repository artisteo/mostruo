import { NextResponse } from "next/server";

// GET ENDPOINT CONTROLLER
const LoginGet = (): NextResponse => {
  return NextResponse.json({ health: "login ok" }, { status: 200 });
};

export default LoginGet;

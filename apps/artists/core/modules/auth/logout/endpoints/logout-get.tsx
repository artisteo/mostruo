import { NextResponse } from "next/server";

// GET ENDPOINT CONTROLLER
const LogoutGet = (): NextResponse => {
  // TODO Extract response ok
  return NextResponse.json({ health: "logout ok" }, { status: 200 });
};

export default LogoutGet;

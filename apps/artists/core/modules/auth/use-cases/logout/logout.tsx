/* eslint-disable no-console -- ^^ */
import { NextResponse } from "next/server";
import { deleteServerAuthCookie } from "../../cookies-server";

class Logout {
  run(): NextResponse {
    console.log("🔥 ~ Logout:");
    deleteServerAuthCookie();
    return NextResponse.json({}, { status: 200 });
  }
}

export default Logout;

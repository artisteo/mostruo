/* eslint-disable no-console -- ^^ */
import { NextResponse } from "next/server";
import { createToken } from "../../jwt";
import { setServerAuthCookie } from "../../cookies-server";
import type LoginDto from "./login-dto";

class Login {
  constructor(protected dto: LoginDto) {}
  async run(): Promise<NextResponse> {
    console.log("🔥 ~ Login:");
    try {
      const { password, email } = this.dto;
      if (email === "1" && password === "1") {
        const token = await createToken(this.dto);
        setServerAuthCookie(token);
        return NextResponse.json({ token }, { status: 200 });
      }
      return NextResponse.json({}, { status: 403 });
    } catch (e) {
      console.error(e);
      return NextResponse.json({}, { status: 400 });
    }
  }
}

export default Login;

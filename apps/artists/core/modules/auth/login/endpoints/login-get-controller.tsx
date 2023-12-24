import type { NextResponse } from "next/server";
import HttpResponse from "../../../../base/http-response";

const LoginGetController = (): NextResponse => HttpResponse.HEALTH("Login");

export default LoginGetController;

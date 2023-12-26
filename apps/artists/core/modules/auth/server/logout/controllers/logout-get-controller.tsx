import type { NextResponse } from "next/server";
import HttpResponse from "../../http-response";

const LogoutGetController = (): NextResponse => HttpResponse.HEALTH("Logout");

export default LogoutGetController;

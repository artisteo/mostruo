import type { NextResponse } from "next/server";
import HttpResponse from "../../../_hex/http-response";
import LOGIN_ROUTE_PATH from "./login-route-path";

const loginGetController = (): NextResponse =>
  HttpResponse.HEALTH(LOGIN_ROUTE_PATH);

export default loginGetController;

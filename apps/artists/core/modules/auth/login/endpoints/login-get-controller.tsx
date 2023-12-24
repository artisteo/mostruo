import type { NextResponse } from "next/server";
import HttpResponse from "../../../../base/http-response";

const loginGetController = (): NextResponse => HttpResponse.HEALTH("LOGIN");

export default loginGetController;

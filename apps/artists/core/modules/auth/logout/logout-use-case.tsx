import { NextResponse } from "next/server";
import deleteServerCookie from "../cookie/delete-server-cookie";

const logoutUseCase = (): NextResponse => {
  deleteServerCookie();
  return NextResponse.json({}, { status: 200 });
};

export default logoutUseCase;

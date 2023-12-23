import { NextResponse } from "next/server";
import deleteAuthCookie from "../cookie/delete-auth-cookie";

const logoutUseCase = (): NextResponse => {
  deleteAuthCookie();
  return NextResponse.json({}, { status: 200 });
};

export default logoutUseCase;

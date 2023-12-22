/* eslint-disable no-console -- ^^ */
import { NextResponse } from "next/server";
import deleteServerCookie from "../cookie/delete-server-cookie";

const logoutUseCase = (): NextResponse => {
  console.log("🔥 ~ logoutUseCase:");
  deleteServerCookie();
  return NextResponse.json({}, { status: 200 });
};

export default logoutUseCase;

import type { NextResponse } from "next/server";
import HttpResponse from "../../../../http/http-response";
import deleteAuthCookie from "../../service/server/delete-auth-cookie";

const LogoutPostController = (): NextResponse => {
  deleteAuthCookie();
  return HttpResponse.OK();
};

export default LogoutPostController;

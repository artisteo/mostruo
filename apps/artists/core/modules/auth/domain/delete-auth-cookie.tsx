import { deleteGenericServerCookie } from "../../../cookies/delete-generic-server-cookie";
import Token from "./token";

function deleteAuthCookie(): void {
  deleteGenericServerCookie(Token.AUTH_COOKIE_NAME);
}

export default deleteAuthCookie;

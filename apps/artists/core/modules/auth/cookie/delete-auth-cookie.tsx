import { deleteGenericServerCookie } from "../../../cookies/delete-generic-server-cookie";
import AUTH_COOKIE_NAME from "./auth-cookie-name";

function deleteAuthCookie(): void {
  deleteGenericServerCookie(AUTH_COOKIE_NAME);
}

export default deleteAuthCookie;

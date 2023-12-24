import { Ok, Err } from "oxide.ts";
import type { Result } from "oxide.ts";
import { InternalServerError } from "../../../errors/errors";
import deleteAuthCookie from "../server/delete-auth-cookie";

type LogoutUseCaseResult = Result<boolean, typeof InternalServerError>;

const logoutUseCase = (): LogoutUseCaseResult => {
  try {
    deleteAuthCookie();
    return Ok(true);
  } catch (e) {
    return Err(InternalServerError);
  }
};

export default logoutUseCase;

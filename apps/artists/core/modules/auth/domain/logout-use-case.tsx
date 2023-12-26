import type { Result } from "neverthrow";
import { Err, Ok } from "neverthrow";
import ServerError from "../errors/server-error";
import deleteAuthCookie from "./auth-service/delete-auth-cookie";

type LogoutUseCaseResult = Result<boolean, typeof ServerError>;

const logoutUseCase = (): LogoutUseCaseResult => {
  try {
    deleteAuthCookie();
    return new Ok(true);
  } catch (e) {
    return new Err(ServerError);
  }
};

export default logoutUseCase;

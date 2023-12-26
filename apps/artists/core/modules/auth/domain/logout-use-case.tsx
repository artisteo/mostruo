import { Result } from "result-type-ts";
import ServerError from "../errors/server-error";
import deleteAuthCookie from "./service/delete-auth-cookie";

type LogoutUseCaseResult = Result<boolean, typeof ServerError>;

const logoutUseCase = (): LogoutUseCaseResult => {
  try {
    deleteAuthCookie();
    return Result.success(true);
  } catch (e) {
    return Result.failure(ServerError);
  }
};

export default logoutUseCase;

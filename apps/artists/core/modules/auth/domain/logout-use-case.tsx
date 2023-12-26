import { Result } from "result-type-ts";
import deleteAuthCookie from "./service/delete-auth-cookie";
import InternalError from "../errors/internal-error";

type LogoutUseCaseResult = Result<boolean, typeof InternalError>;

const logoutUseCase = (): LogoutUseCaseResult => {
  try {
    deleteAuthCookie();
    return Result.success(true);
  } catch (e) {
    return Result.failure(InternalError);
  }
};

export default logoutUseCase;

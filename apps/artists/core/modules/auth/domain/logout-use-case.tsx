import { Result } from "result-type-ts";
import { InternalError } from "../../../base/errors";
import deleteAuthCookie from "./delete-auth-cookie";

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

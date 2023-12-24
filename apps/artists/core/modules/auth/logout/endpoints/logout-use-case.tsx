import deleteAuthCookie from "../../service/server/delete-auth-cookie";

const logoutUseCase = (): void => {
  deleteAuthCookie();
};

export default logoutUseCase;

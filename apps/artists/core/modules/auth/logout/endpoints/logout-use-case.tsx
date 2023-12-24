import deleteAuthCookie from "../../cookie/delete-auth-cookie";

const logoutUseCase = (): void => {
  deleteAuthCookie();
};

export default logoutUseCase;

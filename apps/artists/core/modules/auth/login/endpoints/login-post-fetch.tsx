import type LoginDto from "../login-dto";
import LOGIN_ROUTE_PATH from "./login-route-path";

// frontend will call this
// TODO we could inject token for auth calls
// TODO we could handle fetch errors and have a special type of Response to consume in frontend
const loginPostFetch = async (dto: LoginDto): Promise<Response> => {
  return fetch(LOGIN_ROUTE_PATH, {
    method: "POST",
    body: JSON.stringify(dto),
  });
};

export default loginPostFetch;

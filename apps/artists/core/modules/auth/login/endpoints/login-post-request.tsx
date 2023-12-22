import type LoginDto from "../login-dto";
import LOGIN_POST_PATH from "./login-post-path";

// frontend will call this
// TODO we could inject token for auth calls
// TODO we could handle fetch errors and have a special type of Response to consume in frontend
const loginPostRequest = async (dto: LoginDto): Promise<Response> => {
  return fetch(LOGIN_POST_PATH, {
    method: "POST",
    body: JSON.stringify(dto),
  });
};

export default loginPostRequest;

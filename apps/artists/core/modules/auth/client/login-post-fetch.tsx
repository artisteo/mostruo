// frontend will call this
// TODO we could inject token for auth calls

import type LoginDto from "../domain/login-dto";

// TODO we could handle fetch errors and have a special type of Response to consume in frontend
const loginPostFetch = async (dto: LoginDto): Promise<Response> => {
  return fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(dto),
  });
};

export default loginPostFetch;

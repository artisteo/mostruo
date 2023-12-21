import type LoginDto from "./login-dto";

const loginRequest = async (dto: LoginDto): Promise<Response> => {
  return fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(dto),
  });
};

export default loginRequest;

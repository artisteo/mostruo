// frontend will call this
// TODO we could inject token for auth calls

import type { Result } from "neverthrow";
import { Err, Ok } from "neverthrow";
import type LoginDto from "../../domain/login-dto";
import Token from "../../domain/token";
import FetchError from "../../errors/fetch-error";
import type { LoginPostControllerResponse } from "./controllers/login-post-controller";

const loginPostFetchResult = async (
  dto: LoginDto
): Promise<Result<Token, string>> => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(dto),
    });
    const typedResponse = response as LoginPostControllerResponse;
    if (typedResponse.status === 200) {
      const token = (await typedResponse.json()) as Token;
      const realToken = new Token(token.value);
      return new Ok(realToken);
    }
    const responseError = (await typedResponse.json()) as string;
    return new Err(responseError);
  } catch (e) {
    return new Err(FetchError);
  }
};

export default loginPostFetchResult;

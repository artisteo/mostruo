// frontend will call this
// TODO we could inject token for auth calls

import type { Result } from "neverthrow";
import { Err, Ok } from "neverthrow";
import type LoginDto from "../domain/login-dto";
import type { LoginPostControllerResponse } from "../server/controllers/login-post-controller";
import Token from "../domain/token";
import { InternalError } from "../domain/errors";

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
    return new Err(InternalError);
  }
};

export default loginPostFetchResult;

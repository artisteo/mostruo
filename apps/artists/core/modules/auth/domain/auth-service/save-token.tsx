import { ResultAsync } from "neverthrow";
import { cookies } from "next/headers";
import Token from "../token";
import InternalError from "../../errors/internal-error";
import type LoginDto from "../login-dto";

const setGenericServerCookie = (name: string, value: string): void => {
  cookies().set(name, value);
};

const setAuthCookie = (token: Token): void => {
  const value = token.toString();
  setGenericServerCookie(Token.AUTH_COOKIE_NAME, value);
};

const saveTokenAsync = async (loginDto: LoginDto): Promise<Token> => {
  const token = await Token.createToken(loginDto.email);
  setAuthCookie(token);
  return token;
};

const saveToken = (
  loginDto: LoginDto
): ResultAsync<Token, typeof InternalError> => {
  return ResultAsync.fromPromise(saveTokenAsync(loginDto), () => InternalError);
};

export default saveToken;

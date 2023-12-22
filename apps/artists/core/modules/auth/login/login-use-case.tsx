import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ExtendableError } from "ts-error";
import jointz from "jointz";
import setServerCookie from "../cookie/set-server-cookie";
import createToken from "../token/create-token";
import fakeTimeout from "../../utils/fake-timeout";
import type LoginDto from "./login-dto";

class CredentialsError extends ExtendableError {}
class BadFormatError extends ExtendableError {}

class Response<T> {
  static readonly STATUS_OK = 200;
  static readonly STATUS_INTERNAL_SERVER_ERROR = 500;
  static readonly STATUS_BAD_REQUEST = 400;
  static readonly STATUS_UNAUTHORIZED = 401;

  constructor(
    private status: number,
    private payload: T
  ) {}
  private get(): NextResponse {
    return NextResponse.json(this.payload, { status: this.status });
  }

  public static OK<T>(payload?: T): NextResponse {
    return new Response<T | undefined>(this.STATUS_OK, payload).get();
  }
  public static InternalServerError<T>(payload?: T): NextResponse {
    return new Response<T | undefined>(
      this.STATUS_INTERNAL_SERVER_ERROR,
      payload
    ).get();
  }
  public static BadRequest<T>(payload?: T): NextResponse {
    return new Response<T | undefined>(this.STATUS_BAD_REQUEST, payload).get();
  }
  public static Unauthorized<T>(payload?: T): NextResponse {
    return new Response<T | undefined>(this.STATUS_UNAUTHORIZED, payload).get();
  }
}

const verifyCredentials = async (loginDto: LoginDto): Promise<void> => {
  await fakeTimeout(0);
  const { password, email } = loginDto;

  if (email === "1" && password === "1") {
    return;
  }
  throw new CredentialsError();
};

const getLoginDto = async (request: NextRequest): Promise<LoginDto> => {
  try {
    const loginDto = (await request.json()) as LoginDto;

    const LoginDtoValidator = jointz
      .object({
        email: jointz.string(),
        password: jointz.string(),
      })
      .requiredKeys(["email", "password"]);

    const errors = LoginDtoValidator.validate(loginDto);
    if (errors.length) {
      throw new BadFormatError();
    }
    return loginDto;
  } catch (e) {
    throw new BadFormatError();
  }
};

const loginUseCase = async (request: NextRequest): Promise<NextResponse> => {
  try {
    await fakeTimeout(1000);
    const loginDto = await getLoginDto(request);
    await verifyCredentials(loginDto);
    const token = await createToken(loginDto);
    setServerCookie(token);
    return Response.OK(token);
  } catch (e) {
    if (e instanceof CredentialsError) {
      return Response.Unauthorized();
    } else if (e instanceof BadFormatError) {
      return Response.BadRequest();
    }
    return Response.InternalServerError();
  }
};

export default loginUseCase;
    
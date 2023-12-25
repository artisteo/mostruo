import type { NextRequest } from "next/server";
import type { Result } from "neverthrow";
import { ResultAsync, errAsync, okAsync, Ok, Err } from "neverthrow";
import { MongoClient, ServerApiVersion } from "mongodb";
import jointz from "jointz";
import {
  BadCredentialsError,
  BadDtoFormatError,
  BadJSONFormatError,
  InternalError,
} from "../errors";
import type LoginDto from "./login-dto";
import Token from "./token";
import setAuthCookie from "./set-auth-cookie";

const uri =
  "mongodb+srv://hiartisteo:GvXlroaJ2ymRdKCd@database-cluster.kn4clcy.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const getFromJSONAsync = async (request: NextRequest): Promise<LoginDto> => {
  return (await request.json()) as LoginDto;
};

const getFromJSON = (
  request: NextRequest
): ResultAsync<LoginDto, typeof BadJSONFormatError> => {
  return ResultAsync.fromPromise(
    getFromJSONAsync(request),
    () => BadJSONFormatError
  );
};

const LoginDtoValidator = jointz
  .object({
    email: jointz.string(),
    password: jointz.string(),
  })
  .requiredKeys(["email", "password"]);

const validateDTO = (
  loginDto: LoginDto
): Result<LoginDto, typeof BadDtoFormatError> => {
  const errors = LoginDtoValidator.validate(loginDto);

  if (errors.length > 0) {
    return new Err(BadDtoFormatError);
  }
  return new Ok(loginDto);
};

const verifyCredentialsAsync = async (
  loginDto: LoginDto
): Promise<LoginDto> => {
  await client.connect();
  const database = client.db("database-production");
  await client.db("database-production").command({ ping: 1 });
  const users = database.collection("users");
  const query = { password: loginDto.password, email: loginDto.email };
  const user = await users.findOne(query);
  if (user === null) throw new Error(BadCredentialsError);
  return loginDto;
};

const verifyCredentials = (
  loginDto: LoginDto
): ResultAsync<LoginDto, typeof BadCredentialsError> => {
  return ResultAsync.fromPromise(
    verifyCredentialsAsync(loginDto),
    () => BadCredentialsError
  );
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

const loginUseCase = async (
  request: NextRequest
): Promise<
  Result<
    Token,
    | typeof BadJSONFormatError
    | typeof BadDtoFormatError
    | typeof BadCredentialsError
    | typeof InternalError
  >
> => {
  try {
    const result = getFromJSON(request).andThen((loginDto: LoginDto) =>
      validateDTO(loginDto).asyncAndThen(() =>
        verifyCredentials(loginDto).andThen(() =>
          saveToken(loginDto).andThen((token: Token) => okAsync(token))
        )
      )
    );
    return result;
  } catch (e) {
    return errAsync(InternalError);
  }
};

export default loginUseCase;

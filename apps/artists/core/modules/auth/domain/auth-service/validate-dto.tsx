import type { Result } from "neverthrow";
import { Ok, Err } from "neverthrow";
import jointz from "jointz";
import type LoginDto from "../login-dto";
import BadDtoFormatError from "../../errors/bad-dto-format-error";

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

export default validateDTO;

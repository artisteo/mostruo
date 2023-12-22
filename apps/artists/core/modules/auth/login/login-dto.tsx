interface LoginDto {
  email: string;
  password: string;
  validate: () => void;
}

export default LoginDto;

import LoginForm from "../login-form/login-form";
import RegisterForm from "../register-form/register-form";

function AnonymousContent(): JSX.Element {
  return (
    <div>
      <h1>AnonymousContent</h1>
      <LoginForm />
      <RegisterForm />
    </div>
  );
}

export default AnonymousContent;

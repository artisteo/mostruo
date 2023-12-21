"use client";
import useLoginForm from "./use-login-form";

function LoginForm(): JSX.Element {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    canSubmit,
    onSubmit,
  } = useLoginForm();

  return (
    <div>
      <h2>SigninForm</h2>
      <form autoComplete="off">
        <div>
          <label htmlFor="email">email</label>
          <input
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            value={password}
          />
        </div>
        <div>
          <button
            disabled={!canSubmit}
            onClick={() => {
              void onSubmit();
            }}
            type="button"
          >
            {isLoading ? "..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

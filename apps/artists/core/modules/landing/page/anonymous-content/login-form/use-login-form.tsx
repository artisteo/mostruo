"use client";
import type { Dispatch, SetStateAction } from "react";
import { useCallback, useMemo, useState } from "react";
import useAuth from "../../../../auth/service/client/use-auth";
import type Token from "../../../../auth/token/token";
import loginPostFetch from "../../../../auth/login/endpoints/login-post-fetch";

function useLoginForm(): {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  canSubmit: boolean;
  onSubmit: () => Promise<void>;
} {
  const auth = useAuth();
  const [email, setEmail] = useState("1");
  const [password, setPassword] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  const canSubmit = useMemo(
    () => !isLoading && email.trim().length > 0 && password.trim().length > 0,
    [email, password, isLoading]
  );

  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    const response = await loginPostFetch({ email, password });
    const data = (await response.json()) as { token: Token };
    const token = data.token;
    auth.setToken(token);
    setIsLoading(false);
  }, [email, password, auth]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    canSubmit,
    onSubmit,
  };
}

export default useLoginForm;

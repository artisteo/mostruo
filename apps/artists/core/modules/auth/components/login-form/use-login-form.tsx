"use client";
import type { Dispatch, SetStateAction } from "react";
import { useCallback, useMemo, useState } from "react";
import useAuth from "../../client/use-auth";

function useLoginForm(): {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  canSubmit: boolean;
  onSubmit: () => Promise<void>;
  error: string;
} {
  const auth = useAuth();
  const [email, setEmail] = useState("1");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  const canSubmit = useMemo(
    () => !isLoading && email.trim().length > 0 && password.trim().length > 0,
    [email, password, isLoading]
  );

  const onSubmit = useCallback(async () => {
    setError("");
    setIsLoading(true);
    try {
      const response = await auth.loginPostFetchResult({ email, password });
      if (response.isOk()) {
        auth.clearToken();
      } else {
        setError(response.error);
      }
    } catch (e) {
      setError("FetchError");
    } finally {
      setIsLoading(false);
    }
  }, [email, password, auth]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    canSubmit,
    onSubmit,
    error,
  };
}

export default useLoginForm;

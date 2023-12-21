import { hookstate, useHookstate } from "@hookstate/core";
import { useCallback, useEffect, useMemo } from "react";
import { getClientAuthCookie } from "./cookies-client";

interface Auth {
  token: string | null;
  isAuthReady: boolean;
}

const initialState: Auth = {
  token: null,
  isAuthReady: false,
};

const authState = hookstate(initialState);

const useAuth = (): {
  isAnonymous: boolean;
  isAuthReady: boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
} => {
  const auth = useHookstate(authState);

  const loadClientAuthCookie = useCallback((): void => {
    const clientAuthCookie = getClientAuthCookie();
    auth.set({
      token: clientAuthCookie,
      isAuthReady: true,
    });
  }, [auth]);

  useEffect(() => {
    loadClientAuthCookie();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we want this
  }, []);

  const setToken = useCallback(
    (token: string) => {
      auth.set((currentState) => {
        const newState = { ...currentState, token };
        return newState;
      });
    },
    [auth]
  );

  const clearToken = useCallback(() => {
    auth.set((currentState) => {
      const newState = { ...currentState, token: null };
      return newState;
    });
  }, [auth]);

  const useAuthValue = useMemo(() => {
    const currentAuth = auth.get();
    const isAuthReady = currentAuth.isAuthReady;
    const token = currentAuth.token;
    const isAnonymous = token === null;
    return {
      token,
      isAuthReady,
      isAnonymous,
      setToken,
      clearToken,
    };
  }, [auth, clearToken, setToken]);

  return useAuthValue;
};

export default useAuth;

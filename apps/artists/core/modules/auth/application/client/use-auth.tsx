import { hookstate, useHookstate } from "@hookstate/core";
import { useCallback, useEffect, useMemo } from "react";
import type Token from "../../domain/token";
import type TokenPublicDto from "../../domain/token-public-dto";
import type LoginDto from "../login-dto";
import loginPostFetch from "./login-post-fetch";
import logoutPostFetch from "./logout-post-fetch";
import getAuthClientCookie from "./get-auth-client-cookie";

interface Auth {
  token: Token | null;
  isAuthReady: boolean;
}

const initialState: Auth = {
  token: null,
  isAuthReady: false,
};

const authState = hookstate(initialState);

const useAuth = (): {
  isAuthReady: boolean;
  isAnonymous: boolean;
  setToken: (token: Token) => void;
  clearToken: () => void;
  tokenPublicDto: TokenPublicDto | null;
  loginPostFetch: (dto: LoginDto) => Promise<Response>;
  logoutPostFetch: () => Promise<Response>;
} => {
  const auth = useHookstate(authState);

  const loadClientAuthCookie = useCallback((): void => {
    const clientCookie = getAuthClientCookie();
    auth.set({
      token: clientCookie,
      isAuthReady: true,
    });
  }, [auth]);

  useEffect(() => {
    loadClientAuthCookie();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we want this
  }, []);

  const setToken = useCallback(
    (token: Token) => {
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
    const tokenPublicDto = token ? token.getTokenPublicDto() : null;

    return {
      isAuthReady,
      isAnonymous,
      setToken,
      clearToken,
      tokenPublicDto,
      loginPostFetch,
      logoutPostFetch,
    };
  }, [auth, clearToken, setToken]);

  return useAuthValue;
};

export default useAuth;

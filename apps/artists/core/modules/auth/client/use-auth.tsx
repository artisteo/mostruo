import { hookstate, useHookstate } from "@hookstate/core";
import { useCallback, useMemo } from "react";
import type { Result } from "neverthrow";
import type Token from "../domain/token";
import type TokenPublicDto from "../domain/token-public-dto";
import type LoginDto from "../domain/login-dto";
import loginPostFetchResult from "../server/login/login-post-fetch-result";
import logoutPostFetch from "../server/logout/logout-post-fetch";
import getAuthClientCookie from "../domain/auth-service/get-auth-client-cookie";
import { useEffectOnce } from "./use-effect-once";

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
  loginPostFetchResult: (dto: LoginDto) => Promise<Result<Token, string>>;
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

  useEffectOnce(() => {
    loadClientAuthCookie();
  });

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
    loadClientAuthCookie();
  }, [loadClientAuthCookie]);

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
      loginPostFetchResult,
      logoutPostFetch,
    };
  }, [auth, clearToken, setToken]);

  return useAuthValue;
};

export default useAuth;

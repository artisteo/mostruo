import { createContext } from "react";
import type User from "./user";

export interface AuthContextProps {
  user: User | null;
  isLoading: boolean;
  login?: ({ username }: { username: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoading: true,
});

export default AuthContext;

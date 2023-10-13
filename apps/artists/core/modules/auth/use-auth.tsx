import { useContext } from "react";
import type { AuthContextProps } from "./auth-context";
import AuthContext from "./auth-context";

export const useAuth = (): AuthContextProps => useContext(AuthContext);

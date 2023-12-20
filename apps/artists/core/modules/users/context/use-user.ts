import { createContext, useContext } from "react";
import type { UserContextType } from "./user-context-type";

export const UserContext = createContext<UserContextType | null>(null);

export const useUser = (): UserContextType => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentUserContext.Provider>"
    );
  }

  return userContext;
};

import { createContext } from "react";
import type { UserContextType } from "./user-context-type";

export const UserContext = createContext<UserContextType | null>(null);

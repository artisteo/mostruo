"use client";
import React, { useEffect, useState } from "react";
import { getInitialUser } from "../use cases/get-initial-user";
import { createVisit } from "../use cases/create-visit";
import { UserContext } from "./use-user";
import type { UserContextType } from "./user-context-type";

export function UserProvider({ children }): React.JSX.Element {
  const [data, setData] = useState<UserContextType>({
    user: null,
  });

  useEffect(() => {
    const initialUser = getInitialUser();
    const visitingUser = createVisit(initialUser);
    setData({
      user: visitingUser,
    });
  }, []);

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

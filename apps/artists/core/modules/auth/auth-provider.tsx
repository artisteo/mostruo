"use client";
import React, { useState, useEffect } from "react";
import User from "./user";
import AuthContext from "./auth-context";

export function AuthProvider({ children }): React.JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadUserFromManagedService(): Promise<void> {
      await new Promise((resolve) => {
        setTimeout(resolve, 4000);
      });
      //   const userFromProvider = null;
      const userFromProvider: User = new User("victor");

      //   eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- TODO implementation
      if (userFromProvider) {
        setUser(userFromProvider);
      }
      setIsLoading(false);
    }
    void loadUserFromManagedService();
  }, []);

  const login = async ({ username }: { username: string }): Promise<void> => {
    const userFromProvider: User = new User(username);
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
    setUser(userFromProvider);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login }}>
      {children}
    </AuthContext.Provider>
  );
}

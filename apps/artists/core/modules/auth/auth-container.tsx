"use client";
import React from "react";
import { AuthProvider } from "./auth-provider";

export function AuthContainer({ children }): React.JSX.Element {
  return <AuthProvider>{children}</AuthProvider>;
}

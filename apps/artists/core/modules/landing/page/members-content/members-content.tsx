"use client";
import { useState } from "react";
import useAuth from "../../../auth/use-auth";
import logoutRequest from "../../../auth/use-cases/logout/logout-request";

function MembersContent(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const { clearToken, claims } = useAuth();
  const onLogout = async (): Promise<void> => {
    setIsLoading(true);
    const request = await logoutRequest();
    await request.json();
    clearToken();
    setIsLoading(false);
  };

  return (
    <div>
      <h1>MembersContent</h1>
      <p>email: {claims?.user.email}</p>
      <button
        disabled={isLoading}
        onClick={() => {
          void onLogout();
        }}
        type="button"
      >
        {isLoading ? "..." : "Log out"}
      </button>
    </div>
  );
}

export default MembersContent;

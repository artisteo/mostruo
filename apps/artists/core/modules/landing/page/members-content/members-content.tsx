"use client";
import { useState } from "react";
import useAuth from "../../../auth/use-auth";
import logoutRequest from "../../../auth/logout/endpoints/logout-post-fetch";

function MembersContent(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const { clearToken, tokenPublicDto } = useAuth();
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
      <p>email: {tokenPublicDto?.user.email}</p>
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

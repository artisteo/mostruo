"use client";
import { useState } from "react";
import useAuth from "../../use-auth";

function MembersContent(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const onLogout = async (): Promise<void> => {
    setIsLoading(true);
    const request = await auth.logoutPostFetch();
    await request.json();
    auth.clearToken();
    setIsLoading(false);
  };

  return (
    <div>
      <h1>MembersContent</h1>
      <p>email: {auth.tokenPublicDto?.user.email}</p>
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

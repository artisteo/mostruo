"use client";
import useAuth from "../../application/client/use-auth";
import AnonymousContent from "../anonymous-content/anonymous-content";
import MembersContent from "../members-content/members-content";

function AuthSection(): JSX.Element {
  const { isAnonymous, isAuthReady } = useAuth();
  if (!isAuthReady) return <></>;
  return isAnonymous ? <AnonymousContent /> : <MembersContent />;
}

export default AuthSection;

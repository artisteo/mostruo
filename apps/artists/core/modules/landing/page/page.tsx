"use client";
import DebugDisplays from "../../../../app/debug-displays";
import useAuth from "../../auth/use-auth";
import MembersContent from "./members-content/members-content";
import AnonymousContent from "./anonymous-content/anonymous-content";

function LandingPage(): JSX.Element {
  const { isAnonymous, isAuthReady } = useAuth();

  return (
    <main>
      <DebugDisplays />
      <h1>Landing</h1>
      {isAuthReady ? (
        <>{isAnonymous ? <AnonymousContent /> : <MembersContent />}</>
      ) : null}
    </main>
  );
}

export default LandingPage;

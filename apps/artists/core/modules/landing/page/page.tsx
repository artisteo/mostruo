"use client";
import SETTINGS from "../../../../settings";
import EnvironmentDisplay from "../../environment/environment-display";
import useAuth from "../../auth/client/use-auth";
import MembersContent from "./members-content/members-content";
import AnonymousContent from "./anonymous-content/anonymous-content";

function LandingPage(): JSX.Element {
  const { isAnonymous, isAuthReady } = useAuth();
  const { debugEnvironment } = SETTINGS;

  return (
    <main>
      {debugEnvironment ? <EnvironmentDisplay /> : null}
      <h1>Landing</h1>
      {isAuthReady ? (
        <>{isAnonymous ? <AnonymousContent /> : <MembersContent />}</>
      ) : null}
    </main>
  );
}

export default LandingPage;

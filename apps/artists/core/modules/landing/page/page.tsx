"use client";
import useAuth from "../../auth/use-auth";
import SETTINGS from "../../../../settings";
import EnvironmentDisplay from "../../utils/environment-display";
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

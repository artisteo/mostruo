import SETTINGS from "../../../settings";
import AuthSection from "../auth/components/auth-section/auth-section";
import EnvironmentDisplay from "../environment/environment-display";

function LandingPage(): JSX.Element {
  const { debugEnvironment } = SETTINGS;

  return (
    <main>
      {debugEnvironment ? <EnvironmentDisplay /> : null}
      <h1>Landing</h1>
      <AuthSection />
    </main>
  );
}

export default LandingPage;

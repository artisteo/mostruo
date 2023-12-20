"use client";
import EnvironmentDisplay from "../core/utils/environment-display";
import { fetchDefaultSettings } from "./settings";

function DebugDisplays(): JSX.Element {
  const settings = fetchDefaultSettings();
  const debugEnviroment = settings.debug.environment;
  if (debugEnviroment) return <EnvironmentDisplay />;
  // eslint-disable-next-line react/jsx-no-useless-fragment -- ^^
  return <></>;
}

export default DebugDisplays;

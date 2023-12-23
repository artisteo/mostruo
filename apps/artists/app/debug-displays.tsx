"use client";
import EnvironmentDisplay from "../core/modules/utils/environment-display";
import { fetchDefaultSettings } from "./settings";

function DebugDisplays(): JSX.Element {
  const settings = fetchDefaultSettings();
  const debugEnviroment = settings.debug.environment;
  // eslint-disable-next-line react/jsx-no-useless-fragment -- what else
  return debugEnviroment ? <EnvironmentDisplay /> : <></>;
}

export default DebugDisplays;

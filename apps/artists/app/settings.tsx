import values from "./settings-default";

interface Settings {
  debug: {
    environment: boolean;
  };
}

export const fetchDefaultSettings = (): Settings => {
  return values;
};

export default Settings;

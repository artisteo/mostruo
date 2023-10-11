"use-client";
import DebugInfo from "../debug-info";

export default async function DebugInfoDisplay(): Promise<JSX.Element> {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  const debugInfo = new DebugInfo();
  return (
    <div>
      <p>
        <b>enviroment:</b> {debugInfo.enviroment}
      </p>
    </div>
  );
}

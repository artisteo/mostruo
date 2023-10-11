"use-client";
import Link from "next/link";
import DebugInfo from "../debug-info";

const DebugInfoDisplay = async (): Promise<JSX.Element> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  const debugInfo = new DebugInfo();
  return (
    <div>
      <hr />
      <p>Start debug</p>
      <p>
        <Link href="/">Landing</Link>
      </p>
      <p>
        <Link href="/questions">Questions</Link>
      </p>
      <p>
        <b>enviroment</b> {debugInfo.enviroment}
      </p>
      <p>End debug</p>
      <hr />
    </div>
  );
};

export default DebugInfoDisplay;

"use-client";
import Link from "next/link";
import DebugInfo from "../debug-info";

const DebugInfoDisplay = async (): Promise<JSX.Element> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const debugInfo = new DebugInfo();
  return (
    <div>
      <hr />
      <p>
        <Link href="/">Landing</Link>
      </p>
      <p>
        <Link href="/questions">Questions</Link>
      </p>
      <p>
        <b>enviroment</b> {debugInfo.enviroment}
      </p>
      <hr />
    </div>
  );
};

export default DebugInfoDisplay;

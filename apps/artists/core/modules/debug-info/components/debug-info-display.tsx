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
        <b>NODE_ENV</b> {debugInfo.NODE_ENV}
      </p>
      <p>
        <b>NEXT_PUBLIC_DOT_ENV</b> {debugInfo.NEXT_PUBLIC_DOT_ENV}
      </p>
      <hr />
    </div>
  );
};

export default DebugInfoDisplay;

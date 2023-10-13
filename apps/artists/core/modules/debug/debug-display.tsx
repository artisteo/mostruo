"use client";
import useDebug from "./use-debug";

function DebugDisplay(): JSX.Element {
  const debug = useDebug();
  return (
    <div>
      <h1>environment</h1>
      <p>
        <b>debug.environment.NODE_ENV</b>
      </p>
      <p>{debug.environment.NODE_ENV}</p>
      <p>
        <b>debug.environment.NEXT_PUBLIC_DOT_ENV</b>
      </p>
      <p>{debug.environment.NEXT_PUBLIC_DOT_ENV}</p>
      <p>
        <b>debug.auth.context.user</b>
      </p>
      <p>{JSON.stringify(debug.auth.user)}</p>
      <h1>auth</h1>
      <p>
        <b>debug.auth.context.isLoading</b>
      </p>
      <p>{debug.auth.isLoading ? "true" : "false"}</p>
      <p>
        <b>debug.auth.context.user</b>
      </p>
      <p>{JSON.stringify(debug.auth.user)}</p>
      <p>
        <button
          onClick={() => {
            if (debug.auth.login) void debug.auth.login({ username: "victor" });
          }}
          type="button"
        >
          Login victor
        </button>
        <button
          onClick={() => {
            if (debug.auth.login) void debug.auth.login({ username: "paco" });
          }}
          type="button"
        >
          Login paco
        </button>
      </p>
    </div>
  );
}

export default DebugDisplay;

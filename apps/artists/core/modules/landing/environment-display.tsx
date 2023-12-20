import useEnvironment from "../../utils/use-environment";

function EnvironmentDisplay(): JSX.Element {
  const { NEXT_PUBLIC_DOT_ENV, NODE_ENV } = useEnvironment();
  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        border: "3px solid black",
        borderRadius: 16,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "lightgray",
      }}
    >
      <p>
        NEXT_PUBLIC_DOT_ENV <b />
        {NEXT_PUBLIC_DOT_ENV}
      </p>
      <p>
        NODE_ENV <b />
        {NODE_ENV}
      </p>
    </div>
  );
}

export default EnvironmentDisplay;

import useEnvironment from "../../utils/use-environment";

function EnvironmentDisplay(): JSX.Element {
  const { NEXT_PUBLIC_DOT_ENV, NODE_ENV } = useEnvironment();
  return (
    <div>
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

function Container({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  const withBorder = false;

  return (
    <div
      className={`flex flex-grow content-center flex-wrap gap-4 p-4 ${
        withBorder ? "border border-4 border-orange-600" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Container;

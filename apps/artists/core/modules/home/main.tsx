function Main({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  const withBorder = false;

  return (
    <main
      className={`flex flex-col ${
        withBorder ? "border border-4 border-blue-600" : ""
      }`}
    >
      {children}
    </main>
  );
}

export default Main;

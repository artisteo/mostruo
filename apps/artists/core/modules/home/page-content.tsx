function PageContent({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  const withBorder = false;

  return (
    <div
      className={`flex bg-red-500 overflow-hidden h-full ${
        withBorder ? "border border-4 border-red-600" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default PageContent;

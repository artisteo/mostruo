function AppPage({
  children,
  theme,
  sticky = false,
}: {
  children: JSX.Element | JSX.Element[];
  theme: string;
  sticky?: boolean;
}): JSX.Element {
  return (
    <div
      className={`flex flex-col grow flex-auto justify-between ${
        sticky && "overflow-auto"
      }`}
      style={{ backgroundColor: theme }}
    >
      <h1>AppPage ({theme})</h1>
      {children}
    </div>
  );
}
export default AppPage;

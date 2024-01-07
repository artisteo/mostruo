function AppPage({
  children,
  sticky = false,
}: {
  children: JSX.Element | JSX.Element[];
  sticky?: boolean;
}): JSX.Element {
  return (
    <div className={`bg-indigo-100 ${sticky && "overflow-auto"}`}>
      <h1>AppPage</h1>
      {children}
    </div>
  );
}
export default AppPage;

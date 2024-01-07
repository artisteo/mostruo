function AppShell({
  children,
  sticky = false,
}: {
  children: JSX.Element | JSX.Element[];
  sticky?: boolean;
}): JSX.Element {
  return (
    <main className={`flex flex-col h-full ${sticky && "overflow-hidden"}`}>
      {children}
    </main>
  );
}

export default AppShell;

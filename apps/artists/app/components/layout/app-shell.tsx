function AppShell({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    <main className="flex flex-col h-full border-solid border-4 border-red-900">
      {children}
    </main>
  );
}

export default AppShell;

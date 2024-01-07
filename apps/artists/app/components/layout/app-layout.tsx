import AppFooter from "./app-footer";
import AppHeader from "./app-header";
import AppPage from "./app-page";
import AppShell from "./app-shell";

function AppLayout({
  children,
  sticky = false,
}: {
  children: JSX.Element;
  sticky?: boolean;
}): JSX.Element {
  return (
    <AppShell sticky={sticky}>
      <AppHeader />
      <AppPage sticky={sticky}>
        {children}
        <AppFooter />
      </AppPage>
    </AppShell>
  );
}

export default AppLayout;

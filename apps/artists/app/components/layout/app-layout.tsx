import AppFooter from "./app-footer";
import AppHeader from "./app-header";
import AppPage from "./app-page";
import AppShell from "./app-shell";

function AppLayout({
  children,
  theme,
  sticky = false,
}: {
  children: JSX.Element;
  theme: string;
  sticky?: boolean;
}): JSX.Element {
  return (
    <AppShell>
      <AppHeader />
      <AppPage sticky={sticky} theme={theme}>
        {children}
        <AppFooter />
      </AppPage>
    </AppShell>
  );
}

export default AppLayout;

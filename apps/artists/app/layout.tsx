import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "../core/modules/users/context/user-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XX_PROJECT_TITLE_XX",
  description: "XX_PROJECT_DESCRIPTION_XX",
};

function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}

export default RootLayout;

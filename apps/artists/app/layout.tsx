import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XX_PROJECT_TITLE_XX",
  description: "XX_PROJECT_DESCRIPTION_XX",
};

function RootLayout({ children }: { children: JSX.Element }): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout;

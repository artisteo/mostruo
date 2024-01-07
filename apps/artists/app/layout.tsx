import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "./components/layout/app-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XX_PROJECT_TITLE_XX",
  description: "XX_PROJECT_DESCRIPTION_XX",
};

interface StoreConfig {
  sticky: boolean;
}

async function getData(): Promise<StoreConfig> {
  const res = await fetch("https://dummyjson.com/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const storeConfig = {
    sticky: true,
  };

  return storeConfig;
}

async function RootLayout({
  children,
}: {
  children: JSX.Element;
}): Promise<JSX.Element> {
  const storeConfig = await getData();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout sticky>
          <>
            <p>storeConfig.sticky {storeConfig.sticky ? "true" : "false"}</p>
            {children}
          </>
        </AppLayout>
      </body>
    </html>
  );
}

export default RootLayout;

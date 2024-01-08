import type { Metadata } from "next";
import AppLayout from "../../components/layout/app-layout";
import { getStoreConfig } from "../../store-config/get-store-config";

export const metadata: Metadata = {
  title: "XX_STORE NAME_XX",
  description: "XX_STORE_DESCRIPTION_XX",
};

async function StoreLayout({
  children,
  params,
}: {
  params: { storeDomain: string };
  children: JSX.Element;
}): Promise<JSX.Element> {
  const { storeDomain } = params;
  const storeConfig = await getStoreConfig(storeDomain);
  return (
    <AppLayout sticky={storeConfig.sticky} theme={storeConfig.theme}>
      <>
        <h1 className="">StoreLayout storeConfig.storeId: {storeConfig.storeId}</h1>
        <h1 className="">StoreLayout storeConfig.theme: {storeConfig.theme}</h1>
        {children}
      </>
    </AppLayout>
  );
}

export default StoreLayout;

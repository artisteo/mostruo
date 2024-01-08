import fakeTimeout from "../../../utils/fake-timeout";
import ProductCard from "../../components/product-card";
import { getStores } from "../../store-config/get-stores";

function StoreHome({
  params,
}: {
  params: { storeDomain: string };
}): JSX.Element {
  return (
    <div className="">
      <h1>Store Home params.storeDomain {params.storeDomain}</h1>
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export async function generateStaticParams(): Promise<
  {
    storeDomain: string;
  }[]
> {
  await fakeTimeout(1000);
  const stores = await getStores();
  const staticParams = stores.map((store) => {
    return {
      storeDomain: store,
    };
  });
  return staticParams;
}

export default StoreHome;

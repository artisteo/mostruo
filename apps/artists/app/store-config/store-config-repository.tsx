import fakeTimeout from "../../utils/fake-timeout";
import type { StoreConfig } from "./store-config";

const defaultStoreConfig: StoreConfig = {
  sticky: false,
  theme: "gray",
  storeId: "Default Store",
};

const configsByDomain: Record<string, StoreConfig> = {
  camisetas: {
    sticky: true,
    theme: "red",
    storeId: "Marca de camisetas",
  },
  preparacionismo: {
    sticky: true,
    theme: "indigo",
    storeId: "Tienda de preparacionismo",
  },
  cosmetica: {
    sticky: true,
    theme: "pink",
    storeId: "Tienda de cosméticos",
  },
};

export class StoreConfigRepository {
  public async findByDomain(storeDomain: string): Promise<StoreConfig | null> {
    await fakeTimeout(1000);
    if (Object.keys(configsByDomain).includes(storeDomain)) {
      const config = configsByDomain[storeDomain];
      return config;
    }
    return null;
  }

  public async findAll(): Promise<string[]> {
    await fakeTimeout(1000);
    return Object.keys(configsByDomain);
  }

  public getDefaultStoreConfig(): StoreConfig {
    return defaultStoreConfig;
  }
}

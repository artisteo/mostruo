import type { StoreConfig } from "./store-config";
import { StoreConfigRepository } from "./store-config-repository";

export async function getStoreConfig(
  storeDomain: string
): Promise<StoreConfig> {
  const storeConfigRepository = new StoreConfigRepository();
  const config = await storeConfigRepository.findByDomain(storeDomain);
  if (config === null) return storeConfigRepository.getDefaultStoreConfig();
  return config;
}

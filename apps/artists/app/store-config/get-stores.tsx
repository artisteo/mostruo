import { StoreConfigRepository } from "./store-config-repository";

export async function getStores(): Promise<string[]> {
  const storeConfigRepository = new StoreConfigRepository();
  const stores = await storeConfigRepository.findAll();
  return stores;
}

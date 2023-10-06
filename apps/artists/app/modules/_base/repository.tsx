import type Entity from "./entity";

export default interface EntityRepository<T extends Entity> {
  save: (entity: T) => Promise<void>;
  getAll: () => Promise<T[]>;
}

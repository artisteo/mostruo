import type Entity from "./entity";

interface EntityRepository<T extends Entity> {
  save: (entity: T) => Promise<void>;
  getAll: () => Promise<T[]>;
}

export default EntityRepository;

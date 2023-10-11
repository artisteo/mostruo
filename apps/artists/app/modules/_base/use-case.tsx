import type Entity from "./entity";
import type EntityRepository from "./repository";

abstract class UseCase<T extends Entity> {
  constructor(protected repository: EntityRepository<T>) {}
}

export default UseCase;

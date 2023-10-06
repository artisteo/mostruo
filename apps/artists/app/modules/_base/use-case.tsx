import type Entity from "./entity";
import type EntityRepository from "./repository";

export default abstract class UseCase<T extends Entity> {
  constructor(protected repository: EntityRepository<T>) {}
}

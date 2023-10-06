export abstract class Entity {
  readonly id: string;
  protected created_at: string;
  constructor() {
    this.id = crypto.randomUUID();
    this.created_at = new Date().toISOString();
  }
  serialize(): object {
    return { ...this };
  }
}

export interface EntityRepository<T extends Entity> {
  save: (entity: T) => Promise<void>;
  getAll: () => Promise<T[]>;
}

export abstract class UseCase<T extends Entity> {
  constructor(protected repository: EntityRepository<T>) {}
}

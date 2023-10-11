abstract class Entity {
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

export default Entity;

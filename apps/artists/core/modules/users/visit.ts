import Entity from "../../base/entity";
import type User from "./user";

class Visit extends Entity {
  public userId: string;
  public date: string;

  constructor(user: User) {
    super();
    this.userId = user.id;
    this.date = new Date().toISOString();
  }
}

export default Visit;

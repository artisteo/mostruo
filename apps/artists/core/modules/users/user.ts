import { faker } from "@faker-js/faker";
import Entity from "../../base/entity";

class User extends Entity {
  public username: string | null;
  public lastVisit: Date | null;
  public isRegistered: boolean;
  public visitsCount: number;

  constructor() {
    super();
    this.username = faker.person.fullName();
    this.lastVisit = null;
    this.isRegistered = false;
    this.visitsCount = 0;
  }
}

export default User;

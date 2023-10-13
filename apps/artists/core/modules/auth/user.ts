import Entity from "../../base/entity";

class User extends Entity {
  public username: string;
  public isRegistered: boolean;
  constructor(username: string) {
    super();
    this.username = username;
    this.isRegistered = false;
  }
}

export default User;

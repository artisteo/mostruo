class User {
  private _id?: string;

  constructor(
    private email: string,
    private password: string
  ) {}
}

export default User;

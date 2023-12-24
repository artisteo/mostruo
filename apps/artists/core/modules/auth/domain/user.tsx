import { Result } from "result-type-ts";
import { MongoClient, ServerApiVersion } from "mongodb";
import { BadCredentialsError, InternalError } from "./errors";
import type LoginDto from "./login-dto";

const uri =
  "mongodb+srv://hiartisteo:GvXlroaJ2ymRdKCd@database-cluster.kn4clcy.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

class User {
  private _id?: string;

  constructor(
    private email: string,
    private password: string
  ) {}

  public static async findOneByLoginDto(
    loginDto: LoginDto
  ): Promise<
    Result<boolean, typeof BadCredentialsError | typeof InternalError>
  > {
    try {
      await client.connect();
      const database = client.db("database-production");
      await client.db("database-production").command({ ping: 1 });
      const users = database.collection("users");
      const query = { password: loginDto.password, email: loginDto.email };
      const user = await users.findOne(query);
      if (user === null) return Result.failure(BadCredentialsError);
      return Result.success(true);
    } catch (e) {
      return Result.failure(InternalError);
    } finally {
      await client.close();
    }
  }
}

export default User;

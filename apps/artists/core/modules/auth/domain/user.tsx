import { ResultAsync } from "neverthrow";
import type { ObjectId } from "mongodb";
import { MongoClient, ServerApiVersion } from "mongodb";
import BadCredentialsError from "../errors/bad-credentials-error";
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

interface UserInterface {
  password: string;
  email: string;
  id?: ObjectId;
}

class User implements UserInterface {
  constructor(
    public password: string,
    public email: string,
    public id?: ObjectId
  ) {}

  public static async findOneByLoginDto(loginDto: LoginDto): Promise<LoginDto> {
    const database = client.db("database-production");
    await client.db("database-production").command({ ping: 1 });
    const users = database.collection<User>("users");
    const query = { password: loginDto.password, email: loginDto.email };
    const user = await users.findOne(query);
    if (user === null) throw new Error(BadCredentialsError);
    return loginDto;
  }

  public static findOneByLoginDtoResult(
    loginDto: LoginDto
  ): ResultAsync<LoginDto, typeof BadCredentialsError> {
    return ResultAsync.fromPromise(
      User.findOneByLoginDto(loginDto),
      () => BadCredentialsError
    );
  }
}

export default User;

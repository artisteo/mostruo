import { ResultAsync } from "neverthrow";
import { MongoClient, ServerApiVersion } from "mongodb";
import { BadCredentialsError } from "../errors";
import type LoginDto from "../login-dto";

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

const verifyCredentialsAsync = async (
  loginDto: LoginDto
): Promise<LoginDto> => {
  await client.connect();
  const database = client.db("database-production");
  await client.db("database-production").command({ ping: 1 });
  const users = database.collection("users");
  const query = { password: loginDto.password, email: loginDto.email };
  const user = await users.findOne(query);
  if (user === null) throw new Error(BadCredentialsError);
  return loginDto;
};

const verifyCredentials = (
  loginDto: LoginDto
): ResultAsync<LoginDto, typeof BadCredentialsError> => {
  return ResultAsync.fromPromise(
    verifyCredentialsAsync(loginDto),
    () => BadCredentialsError
  );
};

export default verifyCredentials;

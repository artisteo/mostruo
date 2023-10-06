import FirebaseRepository from "../../../infra/firebase-repository";
import type { EntityRepository } from "../../base";
import type Question from "../question";

const QuestionFirestoreRepository: EntityRepository<Question> =
  new FirebaseRepository<Question>("questions");

export default QuestionFirestoreRepository;

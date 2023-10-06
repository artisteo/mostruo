import FirebaseRepository from "../../../infra/firebase/firebase-repository";
import type EntityRepository from "../../_base/repository";
import type Question from "../question";

const QuestionFirestoreRepository: EntityRepository<Question> =
  new FirebaseRepository<Question>("questions");

export default QuestionFirestoreRepository;

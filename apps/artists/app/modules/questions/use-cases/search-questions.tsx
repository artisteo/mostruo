import type EntityRepository from "../../_base/repository";
import UseCase from "../../_base/use-case";
import type Question from "../question";

class SearchQuestions extends UseCase<Question> {
  constructor(protected repository: EntityRepository<Question>) {
    super(repository);
  }
  async run(): Promise<Question[]> {
    return this.repository.getAll();
  }
}

export default SearchQuestions;

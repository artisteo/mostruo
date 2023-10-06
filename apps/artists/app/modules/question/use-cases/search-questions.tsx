import type { EntityRepository } from "../../base";
import { UseCase } from "../../base";
import type Question from "../question";

export default class SearchQuestions extends UseCase<Question> {
  constructor(protected repository: EntityRepository<Question>) {
    super(repository);
  }
  async run(): Promise<Question[]> {
    return this.repository.getAll();
  }
}

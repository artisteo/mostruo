import type { EntityRepository } from "../../base";
import { UseCase } from "../../base";
import Question from "../question";

export default class CreateQuestion extends UseCase<Question> {
  constructor(protected repository: EntityRepository<Question>) {
    super(repository);
  }
  async run(content: string): Promise<void> {
    const question = new Question(content);
    return this.repository.save(question);
  }
}

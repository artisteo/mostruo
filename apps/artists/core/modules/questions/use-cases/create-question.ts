import type EntityRepository from "../../../base/repository";
import UseCase from "../../../base/use-case";
import Question from "../question";

class CreateQuestion extends UseCase<Question> {
  constructor(protected repository: EntityRepository<Question>) {
    super(repository);
  }
  async run(content: string): Promise<void> {
    const question = new Question(content);
    return this.repository.save(question);
  }
}

export default CreateQuestion;
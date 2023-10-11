import type EntityRepository from "../../_base/repository";
import type Question from "../question";

const QuestionMockRepository: EntityRepository<Question> = {
  save: async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  },
  getAll: async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
    return [];
  },
};

export default QuestionMockRepository;

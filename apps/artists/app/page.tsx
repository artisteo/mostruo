import { Card } from "ui";
import CreateQuestion from "./modules/question/use-cases/create-question";
import QuestionFirestoreRepository from "./modules/question/repositories/question-firestore-repository";
import SearchQuestions from "./modules/question/use-cases/search-questions";

export default async function Page(): Promise<JSX.Element> {
  const createQuestion = new CreateQuestion(QuestionFirestoreRepository);
  await createQuestion.run("is it working?");

  const searchQuestions = new SearchQuestions(QuestionFirestoreRepository);
  const questions = await searchQuestions.run();
  return (
    <main>
      <Card>ARTISTS APP</Card>
      <p>
        <b>Questions: ({questions.length})</b>
      </p>
      {questions.map((q) => (
        <p key={q.id}>{q.content}</p>
      ))}
    </main>
  );
}

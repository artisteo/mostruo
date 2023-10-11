import QuestionFirestoreRepository from "../repositories/question-firestore-repository";
import SearchQuestions from "../use-cases/search-questions";

export default async function QuestionsList(): Promise<JSX.Element> {
  const searchQuestions = new SearchQuestions(QuestionFirestoreRepository);
  const questions = await searchQuestions.run();
  return (
    <>
      <p>
        <b>Questions list ({questions.length})</b>
      </p>
      {questions.map((q) => (
        <p key={q.id}>{q.content}</p>
      ))}
    </>
  );
}

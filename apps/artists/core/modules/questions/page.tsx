import QuestionsList from "./components/questions-list";
import QuestionForm from "./components/question-form";

function QuestionsPage(): JSX.Element {
  return (
    <main>
      <h1>Questions</h1>
      <QuestionsList />
      <QuestionForm />
    </main>
  );
}

export default QuestionsPage;

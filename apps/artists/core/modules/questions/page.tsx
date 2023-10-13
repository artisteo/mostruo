import DebugInfoDisplay from "../debug-info/debug-info-display";
import QuestionsList from "./components/questions-list";
import QuestionForm from "./components/question-form";

function QuestionsPage(): JSX.Element {
  return (
    <main>
      <DebugInfoDisplay />
      <h1>Questions</h1>
      <QuestionsList />
      <QuestionForm />
    </main>
  );
}

export default QuestionsPage;

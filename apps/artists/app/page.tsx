import { Card } from "ui";
import QuestionsList from "./modules/question/components/questions-list";
import QuestionForm from "./modules/question/components/question-form";
import DebugInfoDisplay from "./modules/debug-info/components/debug-info-display";

export default function Page(): JSX.Element {
  return (
    <main>
      <Card>ARTISTS APP</Card>
      {/* TODO fix this upgrading react versions */}
      {/* @ts-expect-error Server Component */}
      <DebugInfoDisplay />
      <QuestionsList />
      <QuestionForm />
    </main>
  );
}

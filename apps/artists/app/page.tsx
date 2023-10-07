import { Card } from "ui";
import QuestionForm from "./question-form";
import QuestionsList from "./questions-list";

export default function Page(): JSX.Element {
  return (
    <main>
      <Card>ARTISTS APP</Card>
      {/* TODO fix this upgrading react versions */}
      {/* @ts-expect-error Server Component */}
      <QuestionsList />
      <QuestionForm />
    </main>
  );
}

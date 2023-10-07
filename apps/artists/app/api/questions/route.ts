import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import CreateQuestion from "../../modules/question/use-cases/create-question";
import QuestionFirestoreRepository from "../../modules/question/repositories/question-firestore-repository";

interface RequestBody {
  content: string;
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as RequestBody;
  const { content } = body;
  const createQuestion = new CreateQuestion(QuestionFirestoreRepository);
  await createQuestion.run(content);
  return NextResponse.json({}, { status: 203 });
}

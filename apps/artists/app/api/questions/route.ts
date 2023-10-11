import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import QuestionFirestoreRepository from "../../../core/modules/questions/repositories/question-firestore-repository";
import CreateQuestion from "../../../core/modules/questions/use-cases/create-question";

interface RequestBody {
  content: string;
}

const POST = async (request: NextRequest): Promise<NextResponse> => {
  const body = (await request.json()) as RequestBody;
  const { content } = body;
  const createQuestion = new CreateQuestion(QuestionFirestoreRepository);
  await createQuestion.run(content);
  return NextResponse.json({}, { status: 203 });
};

export { POST };

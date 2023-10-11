"use client";

import { useState } from "react";

function QuestionForm(): JSX.Element {
  const [content, setContent] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const createQuestion = async (): Promise<void> => {
    const data = {
      content,
    };
    await fetch("/api/questions", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  const canCreateQuestion = !isCreating && content.trim().length > 0;

  const submitForm = async (): Promise<void> => {
    setIsCreating(true);
    await createQuestion();
    setContent("");
    setIsCreating(false);
  };

  return (
    <form autoComplete="off">
      <div>
        <label htmlFor="content">Question: </label>
      </div>
      <div>
        <input
          id="content"
          name="content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          type="text"
          value={content}
        />
      </div>
      <div>
        <button
          disabled={!canCreateQuestion}
          onClick={() => {
            void submitForm();
          }}
          type="button"
        >
          {isCreating ? "..." : "Ask"}
        </button>
      </div>
    </form>
  );
}

export default QuestionForm;

"use client";

import { useState } from "react";

export default function QuestionForm(): JSX.Element {
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

  return (
    <form
      // TODO fix this
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={async (e) => {
        e.preventDefault();
        setIsCreating(true);
        await createQuestion();
        setContent("");
        setIsCreating(false);
      }}
    >
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
        <button disabled={!canCreateQuestion} type="submit">
          Ask
        </button>
      </div>
    </form>
  );
}

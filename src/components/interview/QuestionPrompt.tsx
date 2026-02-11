import React from "react";
import Card from "../common/Card";

type QuestionPromptProps = {
  question: string;
};

const QuestionPrompt: React.FC<QuestionPromptProps> = ({ question }) => {
  return (
    <Card title="Interview Question">
      <p className="mb-0">{question}</p>
    </Card>
  );
};

export default QuestionPrompt;

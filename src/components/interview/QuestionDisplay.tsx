import React from "react";
import Card from "../common/Card";

type Props = {
  question: string;
};

const QuestionDisplay: React.FC<Props> = ({ question }) => {
  return (
    <Card title="Interview Question" className="mt-3">
      <p className="mb-0">{question}</p>
    </Card>
  );
};

export default QuestionDisplay;

import { useState } from "react";

export const useInterviewFlow = (questions: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questions[currentIndex];

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const resetFlow = () => {
    setCurrentIndex(0);
  };

  const isLastQuestion = currentIndex === questions.length - 1;

  return {
    currentQuestion,
    currentIndex,
    nextQuestion,
    resetFlow,
    isLastQuestion,
  };
};

import { useState } from "react";

export const useInterviewFlow = (questions: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetInterview = () => {
    setCurrentIndex(0);
    setIsFinished(false);
  };

  return {
    currentQuestion,
    currentIndex,
    isFinished,
    nextQuestion,
    resetInterview,
  };
};

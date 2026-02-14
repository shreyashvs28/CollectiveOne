import React from "react";
import Button from "../common/Button";

type Props = {
  isListening: boolean;
  onStart: () => void;
  onStop: () => void;
  onNext: () => void;
};

const InterviewControls: React.FC<Props> = ({
  isListening,
  onStart,
  onStop,
  onNext,
}) => {
  return (
    <div className="d-flex justify-content-end gap-2 mt-3">
      {!isListening ? (
        <Button onClick={onStart}>Start Answer</Button>
      ) : (
        <Button variant="danger" onClick={onStop}>
          Stop Answer
        </Button>
      )}

      <Button variant="secondary" onClick={onNext}>
        Next Question
      </Button>
    </div>
  );
};

export default InterviewControls;

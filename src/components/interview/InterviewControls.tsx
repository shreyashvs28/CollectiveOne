import React from "react";
import Button from "../common/Button";

type InterviewControlsProps = {
  onStart: () => void;
  onStop: () => void;
  onNext: () => void;
  isListening: boolean;
};

const InterviewControls: React.FC<InterviewControlsProps> = ({
  onStart,
  onStop,
  onNext,
  isListening,
}) => {
  return (
    <div className="d-flex gap-2 justify-content-end">
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

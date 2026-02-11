import React from "react";

type TimerProps = {
  seconds: number;
};

const Timer: React.FC<TimerProps> = ({ seconds }) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <span className="text-muted">
      Time: {minutes}:{remainingSeconds.toString().padStart(2, "0")}
    </span>
  );
};

export default Timer;

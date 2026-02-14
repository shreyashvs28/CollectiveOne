import React from "react";

type Props = {
  time: string;
};

const Timer: React.FC<Props> = ({ time }) => {
  return (
    <span className="badge bg-secondary">
      {time}
    </span>
  );
};

export default Timer;

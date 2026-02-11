import React from "react";

type InterviewHeaderProps = {
  role: string;
  status: "idle" | "listening" | "processing";
};

const InterviewHeader: React.FC<InterviewHeaderProps> = ({ role, status }) => {
  const statusText =
    status === "listening"
      ? "Listening"
      : status === "processing"
      ? "Processing response"
      : "Ready";

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h3 className="mb-1">HR Interview Simulation</h3>
        <small className="text-muted">Role: {role}</small>
      </div>
      <span className="badge bg-secondary">{statusText}</span>
    </div>
  );
};

export default InterviewHeader;

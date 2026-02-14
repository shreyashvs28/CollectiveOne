import React from "react";
import Card from "../common/Card";

type Props = {
  clarity: number;
  confidence: number;
  structure: number;
};

const ScoreBar = ({ label, value }: { label: string; value: number }) => {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className="mb-3">
      <strong>{label}</strong>
      <div className="progress mt-1">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${safeValue}%` }}
          aria-valuenow={safeValue}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

const CommunicationScore: React.FC<Props> = ({
  clarity,
  confidence,
  structure,
}) => {
  return (
    <Card title="Communication Assessment">
      <ScoreBar label="Clarity of Expression" value={clarity} />
      <ScoreBar label="Confidence Indicators" value={confidence} />
      <ScoreBar label="Answer Structure" value={structure} />
    </Card>
  );
};

export default CommunicationScore;

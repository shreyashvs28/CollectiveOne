import React from "react";
import Card from "../common/Card";

type CommunicationScoreProps = {
  clarity: number;     // 0–100
  confidence: number;  // 0–100
  structure: number;   // 0–100
};

const CommunicationScore: React.FC<CommunicationScoreProps> = ({
  clarity,
  confidence,
  structure,
}) => {
  const renderScore = (label: string, value: number) => (
    <div className="mb-3">
      <strong>{label}</strong>
      <div className="progress mt-1">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${value}%` }}
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );

  return (
    <Card title="Communication Assessment">
      {renderScore("Clarity of Expression", clarity)}
      {renderScore("Confidence Indicators", confidence)}
      {renderScore("Answer Structure", structure)}
    </Card>
  );
};

export default CommunicationScore;

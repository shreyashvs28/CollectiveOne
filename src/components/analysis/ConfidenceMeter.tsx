import React from "react";
import Card from "../common/Card";

type ConfidenceMeterProps = {
  confidenceScore: number; // 0–100
};

const ConfidenceMeter: React.FC<ConfidenceMeterProps> = ({
  confidenceScore,
}) => {
  const clampedScore = Math.min(100, Math.max(0, confidenceScore));

  return (
    <Card title="Confidence Indicator">
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${clampedScore}%` }}
          aria-valuenow={clampedScore}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <small className="text-muted d-block mt-2">
        Indicative score based on speech patterns
      </small>
    </Card>
  );
};

export default ConfidenceMeter;

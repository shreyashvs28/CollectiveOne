import React from "react";
import Card from "../common/Card";

type Props = {
  score: number; // 0 - 100
};

const ConfidenceMeter: React.FC<Props> = ({ score }) => {
  const safeScore = Math.min(100, Math.max(0, score));

  return (
    <Card title="Overall Confidence Indicator">
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${safeScore}%` }}
          aria-valuenow={safeScore}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      <div className="mt-2">
        <strong>{safeScore}/100</strong>
      </div>

      <small className="text-muted">
        Derived from communication and presence metrics.
      </small>
    </Card>
  );
};

export default ConfidenceMeter;

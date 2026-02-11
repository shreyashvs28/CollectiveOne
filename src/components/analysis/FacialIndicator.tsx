import React from "react";
import Card from "../common/Card";

type FacialIndicatorProps = {
  faceDetected: boolean;
  lookingForward: boolean;
};

const FacialIndicator: React.FC<FacialIndicatorProps> = ({
  faceDetected,
  lookingForward,
}) => {
  return (
    <Card title="Visual Presence">
      <ul className="list-unstyled mb-0">
        <li>
          <strong>Face Detected:</strong>{" "}
          {faceDetected ? "Yes" : "No"}
        </li>
        <li>
          <strong>Facing Camera:</strong>{" "}
          {lookingForward ? "Mostly" : "Often Away"}
        </li>
      </ul>
      <small className="text-muted d-block mt-2">
        Based on webcam position indicators
      </small>
    </Card>
  );
};

export default FacialIndicator;

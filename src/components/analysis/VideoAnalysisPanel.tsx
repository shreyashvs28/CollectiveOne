import React from "react";
import Card from "../common/Card";

type Props = {
  faceDetectedPercentage: number;
  stabilityScore: number;
  cameraInterruptions: number;
};

const VideoAnalysisPanel: React.FC<Props> = ({
  faceDetectedPercentage,
  stabilityScore,
  cameraInterruptions,
}) => {
  return (
    <Card title="Video Analysis">
      <ul className="list-unstyled mb-0">
        <li>
          <strong>Face Detected:</strong> {faceDetectedPercentage}%
        </li>
        <li>
          <strong>Head Stability Score:</strong> {stabilityScore}/100
        </li>
        <li>
          <strong>Camera Interruptions:</strong> {cameraInterruptions}
        </li>
      </ul>
    </Card>
  );
};

export default VideoAnalysisPanel;

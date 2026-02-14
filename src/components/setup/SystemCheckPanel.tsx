import React from "react";
import Card from "../common/Card";
import StatusIndicator from "../common/StatusIndicator";

type Props = {
  audioStatus: "success" | "error" | "neutral";
  videoStatus: "success" | "error" | "neutral";
  faceStatus: "success" | "warning" | "neutral";
};

const SystemCheckPanel: React.FC<Props> = ({
  audioStatus,
  videoStatus,
  faceStatus,
}) => {
  return (
    <Card title="System Check">
      <StatusIndicator label="Microphone Access" status={audioStatus} />
      <StatusIndicator label="Camera Access" status={videoStatus} />
      <StatusIndicator label="Face Detection" status={faceStatus} />
    </Card>
  );
};

export default SystemCheckPanel;

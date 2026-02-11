import React from "react";
import Card from "../common/Card";

type AudioAnalysisPanelProps = {
  speechRate: number; // words per minute
  fillerCount: number;
  pauseCount: number;
};

const AudioAnalysisPanel: React.FC<AudioAnalysisPanelProps> = ({
  speechRate,
  fillerCount,
  pauseCount,
}) => {
  return (
    <Card title="Speech Analysis">
      <ul className="list-unstyled mb-0">
        <li>
          <strong>Speech Rate:</strong> {speechRate} wpm
        </li>
        <li>
          <strong>Filler Words:</strong> {fillerCount}
        </li>
        <li>
          <strong>Long Pauses:</strong> {pauseCount}
        </li>
      </ul>
    </Card>
  );
};

export default AudioAnalysisPanel;

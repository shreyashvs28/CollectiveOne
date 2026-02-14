import React from "react";
import Card from "../common/Card";

type Props = {
  wordCount: number;
  speechRate: number;
  fillerCount: number;
  duration: number;
};

const AudioAnalysisPanel: React.FC<Props> = ({
  wordCount,
  speechRate,
  fillerCount,
  duration,
}) => {
  return (
    <Card title="Audio Analysis">
      <ul className="list-unstyled mb-0">
        <li><strong>Total Words:</strong> {wordCount}</li>
        <li><strong>Speech Rate:</strong> {speechRate} WPM</li>
        <li><strong>Filler Words:</strong> {fillerCount}</li>
        <li><strong>Answer Duration:</strong> {duration} sec</li>
      </ul>
    </Card>
  );
};

export default AudioAnalysisPanel;

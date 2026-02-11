import React from "react";
import Card from "../common/Card";

type TranscriptBoxProps = {
  transcript: string;
};

const TranscriptBox: React.FC<TranscriptBoxProps> = ({ transcript }) => {
  return (
    <Card title="Your Response">
      <textarea
        className="form-control"
        rows={6}
        value={transcript}
        readOnly
        placeholder="Your spoken response will appear here..."
      />
    </Card>
  );
};

export default TranscriptBox;

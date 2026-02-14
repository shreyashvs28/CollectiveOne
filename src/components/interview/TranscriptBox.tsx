import React from "react";
import Card from "../common/Card";

type Props = {
  transcript: string;
};

const TranscriptBox: React.FC<Props> = ({ transcript }) => {
  return (
    <Card title="Your Response" className="mt-3">
      <textarea
        className="form-control"
        rows={6}
        value={transcript}
        readOnly
        placeholder="Your spoken answer will appear here..."
      />
    </Card>
  );
};

export default TranscriptBox;

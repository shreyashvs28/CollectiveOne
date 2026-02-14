import React from "react";
import Button from "../common/Button";

type Props = {
  onDownload?: () => void;
  onRestart: () => void;
  onSave?: () => void;
};

const ReportActions: React.FC<Props> = ({
  onDownload,
  onRestart,
  onSave,
}) => {
  return (
    <div className="d-flex justify-content-end gap-2 mt-4">
      {onSave && (
        <Button variant="secondary" onClick={onSave}>
          Save Report
        </Button>
      )}

      {onDownload && (
        <Button variant="outline" onClick={onDownload}>
          Download PDF
        </Button>
      )}

      <Button variant="primary" onClick={onRestart}>
        Restart Interview
      </Button>
    </div>
  );
};

export default ReportActions;

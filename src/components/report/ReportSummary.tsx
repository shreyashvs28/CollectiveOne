import React from "react";
import Card from "../common/Card";

type ReportSummaryProps = {
  candidateName?: string;
  role: string;
  overallScore: number; // 0–100
};

const ReportSummary: React.FC<ReportSummaryProps> = ({
  candidateName,
  role,
  overallScore,
}) => {
  const score = Math.min(100, Math.max(0, overallScore));

  return (
    <Card title="Interview Summary">
      <p className="mb-2">
        <strong>Role Evaluated:</strong> {role}
      </p>

      {candidateName && (
        <p className="mb-2">
          <strong>Candidate:</strong> {candidateName}
        </p>
      )}

      <p className="mb-3">
        <strong>Overall Readiness Score:</strong> {score}/100
      </p>

      <p className="text-muted mb-0">
        This assessment reflects observable communication and behavioral
        indicators during the simulated HR interview. It is intended as
        guidance for improvement, not as a hiring decision.
      </p>
    </Card>
  );
};

export default ReportSummary;

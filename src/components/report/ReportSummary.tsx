import React from "react";
import Card from "../common/Card";

type Props = {
  candidateName: string;
  role: string;
  overallScore: number;
  interviewDate: string;
};

const ReportSummary: React.FC<Props> = ({
  candidateName,
  role,
  overallScore,
  interviewDate,
}) => {
  const score = Math.min(100, Math.max(0, overallScore));

  return (
    <Card title="Interview Summary">
      <p><strong>Candidate:</strong> {candidateName}</p>
      <p><strong>Role Evaluated:</strong> {role}</p>
      <p><strong>Date:</strong> {interviewDate}</p>
      <p>
        <strong>Overall Readiness Score:</strong> {score}/100
      </p>

      <small className="text-muted">
        This score reflects aggregated communication and behavioral indicators observed during the simulated interview.
      </small>
    </Card>
  );
};

export default ReportSummary;

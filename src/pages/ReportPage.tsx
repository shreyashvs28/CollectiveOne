import React from "react";
import ReportSummary from "../components/report/ReportSummary";
import CommunicationScore from "../components/report/CommunicationScore";
import Suggestions from "../components/report/Suggestions";
import Button from "../components/common/Button";

type ReportPageProps = {
  onRestart: () => void;
};

const ReportPage: React.FC<ReportPageProps> = ({ onRestart }) => {
  return (
    <div className="container mt-5">
      <ReportSummary
        role="Software Engineer"
        overallScore={72}
      />

      <div className="my-4">
        <CommunicationScore
          clarity={75}
          confidence={68}
          structure={70}
        />
      </div>

      <div className="mb-4">
        <Suggestions
          suggestions={[
            "Provide more concrete examples when answering behavioral questions.",
            "Reduce filler words during longer responses.",
            "Maintain consistent pacing throughout the answer.",
          ]}
        />
      </div>

      <div className="text-center">
        <Button onClick={onRestart} variant="secondary">
          Restart Interview
        </Button>
      </div>
    </div>
  );
};

export default ReportPage;

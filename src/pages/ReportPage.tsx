import React, { useMemo } from "react";
import { useInterview } from "../context/InterviewContext";
import ReportSummary from "../components/report/ReportSummary";
import CommunicationScore from "../components/report/CommunicationScore";
import Suggestions from "../components/report/Suggestions";
import ReportActions from "../components/report/ReportActions";
import {
  calculateAudioConfidence,
  calculateOverallConfidence,
} from "../utils/scoring";
import {
  buildSpeechRateTrend,
  buildStabilityTrend,
} from "../utils/graphHelpers";

type Props = {
  onRestart: () => void;
};

const ReportPage: React.FC<Props> = ({ onRestart }) => {
  const { state, resetInterview } = useInterview();

  const reportData = useMemo(() => {
    const answers = state.answers;

    const audioScores = answers.map((a) =>
      calculateAudioConfidence(a.audioMetrics!)
    );

    const avgAudio =
      audioScores.reduce((a, b) => a + b, 0) /
      (audioScores.length || 1);

    const overall = calculateOverallConfidence(avgAudio, {
      stabilityScore: 80,
    });

    const suggestions: string[] = [];

    if (avgAudio < 60)
      suggestions.push(
        "Improve clarity and reduce filler words."
      );

    if (overall < 70)
      suggestions.push(
        "Maintain consistent eye contact and delivery pace."
      );

    return {
      overall,
      avgAudio,
      suggestions,
      speechTrend: buildSpeechRateTrend(answers),
      stabilityTrend: buildStabilityTrend(answers),
    };
  }, [state.answers]);

  return (
    <div className="container mt-4">
      <ReportSummary
        candidateName={state.basicDetails.name}
        role={state.basicDetails.role}
        overallScore={reportData.overall}
        interviewDate={new Date().toLocaleDateString()}
      />

      <div className="my-4">
        <CommunicationScore
          clarity={reportData.avgAudio}
          confidence={reportData.overall}
          structure={70}
        />
      </div>

      <Suggestions suggestions={reportData.suggestions} />

      <ReportActions
        onRestart={() => {
          resetInterview();
          onRestart();
        }}
      />
    </div>
  );
};

export default ReportPage;

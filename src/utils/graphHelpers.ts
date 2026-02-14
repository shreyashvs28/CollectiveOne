// src/utils/graphHelpers.ts

type AnswerRecord = {
  question: string;
  audioMetrics?: {
    speechRate: number;
  };
  videoMetrics?: {
    stabilityScore: number;
  };
};

export const buildSpeechRateTrend = (
  answers: AnswerRecord[]
) => {
  return answers.map((answer, index) => ({
    label: `Q${index + 1}`,
    value: answer.audioMetrics?.speechRate || 0,
  }));
};

export const buildStabilityTrend = (
  answers: AnswerRecord[]
) => {
  return answers.map((answer, index) => ({
    label: `Q${index + 1}`,
    value: answer.videoMetrics?.stabilityScore || 0,
  }));
};

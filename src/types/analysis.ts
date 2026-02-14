// src/types/analysis.ts

export type AudioAnalysisResult = {
  wordCount: number;
  fillerCount: number;
  speechRate: number;
};

export type VideoAnalysisResult = {
  faceDetected: boolean;
  stabilityScore: number;
};

export type ConfidenceScores = {
  audioConfidence: number;
  videoConfidence: number;
  overallConfidence: number;
};

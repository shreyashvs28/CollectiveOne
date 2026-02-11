// src/types/analysis.ts

export type AudioAnalysis = {
  wordCount: number;
  fillerCount: number;
  speechRate: number;
  pauseCount: number;
};

export type VisualAnalysis = {
  faceDetected: boolean;
  lookingForward: boolean;
};

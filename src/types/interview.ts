// src/types/interview.ts

export type BasicDetails = {
  name: string;
  email: string;
  role: string;
};

export type ExperienceDetails = {
  years: number;
  summary: string;
};

export type AudioMetrics = {
  wordCount: number;
  fillerCount: number;
  speechRate: number;
};

export type VideoMetrics = {
  faceDetectedPercentage: number;
  stabilityScore: number;
};

export type AnswerRecord = {
  question: string;
  transcript: string;
  duration: number;
  audioMetrics?: AudioMetrics;
  videoMetrics?: VideoMetrics;
};

export type InterviewState = {
  basicDetails: BasicDetails;
  experience: ExperienceDetails;
  skills: string[];
  answers: AnswerRecord[];
  startedAt: number | null;
  completedAt: number | null;
};

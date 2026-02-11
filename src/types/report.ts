// src/types/report.ts

export type CommunicationScores = {
  clarity: number;
  confidence: number;
  structure: number;
};

export type InterviewReport = {
  role: string;
  overallScore: number;
  communication: CommunicationScores;
  suggestions: string[];
  generatedAt: number;
};

// src/types/report.ts

import { ConfidenceScores } from "./analysis";

export type CommunicationBreakdown = {
  clarity: number;
  confidence: number;
  structure: number;
};

export type InterviewReport = {
  candidateName: string;
  role: string;
  interviewDate: string;
  overallScore: number;
  confidenceScores: ConfidenceScores;
  communication: CommunicationBreakdown;
  suggestions: string[];
};

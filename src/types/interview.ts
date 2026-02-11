// src/types/interview.ts

export type InterviewStatus =
  | "idle"
  | "asking"
  | "listening"
  | "processing"
  | "completed";

export type InterviewSession = {
  role: string;
  currentQuestionIndex: number;
  transcript: string;
  status: InterviewStatus;
  startedAt: number;
};

// src/utils/scoring.ts

import { clamp } from "./helpers";

type ScoringInput = {
  wordCount: number;
  fillerCount: number;
  speechRate: number; // words per minute
};

export const calculateConfidenceScore = ({
  wordCount,
  fillerCount,
  speechRate,
}: ScoringInput): number => {
  let score = 50;

  if (wordCount > 80) score += 10;
  if (fillerCount < 5) score += 10;
  if (speechRate >= 110 && speechRate <= 160) score += 10;

  if (fillerCount > 10) score -= 10;
  if (speechRate < 90 || speechRate > 180) score -= 10;

  return clamp(score, 0, 100);
};

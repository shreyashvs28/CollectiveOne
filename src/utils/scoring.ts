// src/utils/scoring.ts

import {
  AUDIO_CONFIDENCE_WEIGHT,
  VIDEO_STABILITY_WEIGHT,
  IDEAL_SPEECH_RATE,
  MAX_CONFIDENCE_SCORE,
} from "./constants";
import { clamp } from "./helpers";

type AudioMetrics = {
  wordCount: number;
  fillerCount: number;
  speechRate: number;
};

type VideoMetrics = {
  stabilityScore: number;
};

export const calculateAudioConfidence = ({
  wordCount,
  fillerCount,
  speechRate,
}: AudioMetrics): number => {
  let score = 50;

  if (wordCount > 50) score += 10;
  if (fillerCount < 5) score += 15;

  if (
    speechRate >= IDEAL_SPEECH_RATE.min &&
    speechRate <= IDEAL_SPEECH_RATE.max
  ) {
    score += 15;
  } else {
    score -= 10;
  }

  return clamp(score, 0, MAX_CONFIDENCE_SCORE);
};

export const calculateOverallConfidence = (
  audioScore: number,
  video: VideoMetrics
): number => {
  const combined =
    audioScore * AUDIO_CONFIDENCE_WEIGHT +
    video.stabilityScore * VIDEO_STABILITY_WEIGHT;

  return clamp(Math.round(combined), 0, MAX_CONFIDENCE_SCORE);
};

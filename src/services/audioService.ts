// src/services/audioService.ts

export const countFillerWords = (
  transcript: string,
  fillers: string[] = ["uh", "um", "like", "you know"]
) => {
  const words = transcript.toLowerCase().split(/\s+/);
  return words.filter((word) => fillers.includes(word)).length;
};

export const estimateSpeechRate = (
  wordCount: number,
  durationSeconds: number
) => {
  if (durationSeconds === 0) return 0;
  return Math.round((wordCount / durationSeconds) * 60);
};

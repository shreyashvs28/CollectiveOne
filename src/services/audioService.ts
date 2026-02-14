// src/services/audioService.ts

export const calculateWordCount = (transcript: string) => {
  return transcript.trim().split(/\s+/).filter(Boolean).length;
};

export const calculateFillerWords = (
  transcript: string,
  fillers: string[] = ["uh", "um", "like", "you know"]
) => {
  const words = transcript.toLowerCase().split(/\s+/);
  return words.filter((word) => fillers.includes(word)).length;
};

export const calculateSpeechRate = (
  wordCount: number,
  durationSeconds: number
) => {
  if (durationSeconds <= 0) return 0;
  return Math.round((wordCount / durationSeconds) * 60);
};

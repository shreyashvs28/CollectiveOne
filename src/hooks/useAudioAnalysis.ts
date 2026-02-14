import { useMemo } from "react";

export const useAudioAnalysis = (
  transcript: string,
  durationSeconds: number
) => {
  return useMemo(() => {
    const words = transcript.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    const fillerWords = ["uh", "um", "like", "you know"];
    const fillerCount = words.filter((word) =>
      fillerWords.includes(word.toLowerCase())
    ).length;

    const speechRate =
      durationSeconds > 0
        ? Math.round((wordCount / durationSeconds) * 60)
        : 0;

    return {
      wordCount,
      fillerCount,
      speechRate,
    };
  }, [transcript, durationSeconds]);
};

import { useMemo } from "react";

export const useAudioAnalysis = (transcript: string) => {
  return useMemo(() => {
    const words = transcript.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    const fillerWords = ["uh", "um", "like", "you know"];
    const fillerCount = words.filter((w) =>
      fillerWords.includes(w.toLowerCase())
    ).length;

    const estimatedSpeechRate = Math.round((wordCount / 1) * 60); // placeholder

    return {
      wordCount,
      fillerCount,
      estimatedSpeechRate,
      pauseCount: 0, // placeholder for silence detection
    };
  }, [transcript]);
};

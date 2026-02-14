import { useRef } from "react";

export const useSpeechSynthesis = () => {
  const isSpeakingRef = useRef(false);

  const speak = (text: string) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.lang = "en-US";

    utterance.onstart = () => (isSpeakingRef.current = true);
    utterance.onend = () => (isSpeakingRef.current = false);

    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
  };

  return { speak, stop };
};

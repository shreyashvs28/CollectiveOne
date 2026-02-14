// src/services/speechService.ts

export const createSpeechRecognition = () => {
  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) return null;

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  return recognition;
};

export const speakText = (text: string) => {
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1;
  utterance.lang = "en-US";

  window.speechSynthesis.speak(utterance);
};

export const stopSpeaking = () => {
  window.speechSynthesis.cancel();
};

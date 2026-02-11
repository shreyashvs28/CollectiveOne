import { useEffect, useRef, useState } from "react";

export const useSpeechRecognition = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognitionCtor =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionCtor) return;

    const recognition = new SpeechRecognitionCtor();
    recognition.continuous = true;
    recognition.lang = "en-US";
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        finalTranscript += event.results[i][0].transcript;
      }

      setTranscript((prev: string) => (prev ? prev + " " + finalTranscript : finalTranscript));
    };

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;

    return () => {
      try {
        recognition.stop();
      } catch (e) {
        // ignore
      }
      recognitionRef.current = null;
    };
  }, []);

  const startListening = () => {
    try {
      recognitionRef.current?.start();
    } catch (e) {
      console.warn("SpeechRecognition start failed", e);
    }
  };

  const stopListening = () => {
    try {
      recognitionRef.current?.stop();
    } catch (e) {
      console.warn("SpeechRecognition stop failed", e);
    }
  };

  const resetTranscript = () => setTranscript("");

  return {
    transcript,
    isListening,
    startListening,
    stopListening,
    resetTranscript,
  };
};

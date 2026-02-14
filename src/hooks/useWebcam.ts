import { useEffect, useState } from "react";

export const useWebcam = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startMedia = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setStream(mediaStream);
    } catch (error) {
      console.error("Media access denied", error);
    }
  };

  const stopMedia = () => {
    stream?.getTracks().forEach((track) => track.stop());
    setStream(null);
  };

  useEffect(() => {
    return () => {
      stopMedia();
    };
  }, []);

  return {
    stream,
    startMedia,
    stopMedia,
  };
};

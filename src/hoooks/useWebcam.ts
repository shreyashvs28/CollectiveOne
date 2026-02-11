import { useEffect, useState } from "react";

export const useWebcam = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    return () => {
      stopMedia();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startMedia = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setStream(mediaStream);
      setIsActive(true);
    } catch (error) {
      console.error("Media access denied or failed", error);
      setIsActive(false);
    }
  };

  const stopMedia = () => {
    stream?.getTracks().forEach((track) => track.stop());
    setStream(null);
    setIsActive(false);
  };

  return {
    stream,
    isActive,
    startMedia,
    stopMedia,
  };
};

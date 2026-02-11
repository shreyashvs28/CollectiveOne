// src/services/webcamService.ts

export const startWebcam = async (): Promise<MediaStream | null> => {
  try {
    return await navigator.mediaDevices.getUserMedia({ video: true });
  } catch {
    return null;
  }
};

export const stopWebcam = (stream: MediaStream | null) => {
  stream?.getTracks().forEach((track) => track.stop());
};

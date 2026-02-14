// src/services/webcamService.ts

export const requestMediaAccess = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    return stream;
  } catch (error) {
    console.error("Media access denied:", error);
    return null;
  }
};

export const stopMediaStream = (stream: MediaStream | null) => {
  stream?.getTracks().forEach((track) => track.stop());
};

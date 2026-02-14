import { useEffect, useState } from "react";
import * as faceDetection from "@tensorflow-models/face-detection";
import "@tensorflow/tfjs-backend-webgl";

export const useTensorflowAnalysis = (
  video: HTMLVideoElement | null
) => {
  const [faceDetected, setFaceDetected] = useState(false);

  useEffect(() => {
    let detector: any;
    let interval: any;

    const init = async () => {
      const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
      detector = await faceDetection.createDetector(model, {
        runtime: "tfjs",
      });

      interval = setInterval(async () => {
        if (video) {
          const faces = await detector.estimateFaces(video);
          setFaceDetected(faces.length > 0);
        }
      }, 300);
    };

    if (video) init();

    return () => {
      clearInterval(interval);
      detector?.dispose();
    };
  }, [video]);

  return { faceDetected };
};

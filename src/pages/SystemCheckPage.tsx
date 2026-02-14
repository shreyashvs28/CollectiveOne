import React, { useEffect, useState } from "react";
import Button from "../components/common/Button";
import SystemCheckPanel from "../components/setup/SystemCheckPanel";
import { useWebcam } from "../hooks/useWebcam";

type Props = {
  onNext: () => void;
};

const SystemCheckPage: React.FC<Props> = ({ onNext }) => {
  const { stream, startMedia } = useWebcam();

  const [audioStatus, setAudioStatus] = useState<"success" | "error" | "neutral">("neutral");
  const [videoStatus, setVideoStatus] = useState<"success" | "error" | "neutral">("neutral");
  const [faceStatus] = useState<"success" | "warning" | "neutral">("neutral");

  // Start media on mount
  useEffect(() => {
    startMedia();
  }, []);

  // React to stream changes
  useEffect(() => {
    if (stream) {
      setAudioStatus("success");
      setVideoStatus("success");
    } else {
      setAudioStatus("error");
      setVideoStatus("error");
    }
  }, [stream]);

  return (
    <div className="container mt-4">
      <SystemCheckPanel
        audioStatus={audioStatus}
        videoStatus={videoStatus}
        faceStatus={faceStatus}
      />

      <div className="text-end mt-4">
        <Button
          onClick={onNext}
          disabled={!stream}
        >
          Start Interview
        </Button>
      </div>
    </div>
  );
};

export default SystemCheckPage;

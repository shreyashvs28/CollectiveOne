import { useEffect, useRef } from "react";
import Card from "../common/Card";

type CameraPreviewProps = {
  stream: MediaStream | null;
};

const CameraPreview: React.FC<CameraPreviewProps> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <Card title="Camera Preview">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          width: "100%",
          borderRadius: "6px",
        }}
      />
    </Card>
  );
};

export default CameraPreview;

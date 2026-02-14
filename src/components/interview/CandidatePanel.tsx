import React, { useEffect, useRef } from "react";
import Card from "../common/Card";

type Props = {
  stream: MediaStream | null;
};

const CandidatePanel: React.FC<Props> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <Card title="Your Video">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        width="100%"
        style={{ borderRadius: "6px" }}
      />
    </Card>
  );
};

export default CandidatePanel;

import React, { useEffect } from "react";

import InterviewHeader from "../components/interview/InterviewHeader";
import QuestionPrompt from "../components/interview/QuestionPrompt";
import TranscriptBox from "../components/interview/TranscriptBox";
import InterviewControls from "../components/interview/InterviewControls";
import Timer from "../components/interview/Timer";
import CameraPreview from "../components/interview/CameraPreview";

import { useSpeechRecognition } from "../hoooks/useSpeechRecognition";
import { useSpeechSynthesis } from "../hoooks/useSpeechSynthesis";
import { useInterviewFlow } from "../hoooks/useInterviewFlow";
import { useWebcam } from "../hoooks/useWebcam";

import { interviewQuestions } from "../utils/interviewQuestions";

type InterviewPageProps = {
  onFinish: () => void;
};

const InterviewPage: React.FC<InterviewPageProps> = ({ onFinish }) => {
  const {
    transcript,
    isListening,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition();

  const { speak, stop: stopSpeaking } = useSpeechSynthesis();

  const { currentQuestion, isFinished, nextQuestion } =
    useInterviewFlow(interviewQuestions);

  const { stream, isActive, startMedia, stopMedia } = useWebcam();

  // Start camera + mic when interview begins
  useEffect(() => {
    startMedia();
    return () => {
      stopMedia();
      stopSpeaking();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 🔊 AI asks the question when it changes
  useEffect(() => {
    if (currentQuestion) {
      speak(currentQuestion);
    }
  }, [currentQuestion, speak]);

  if (isFinished) {
    stopMedia();
    onFinish();
    return null;
  }

  const handleNext = () => {
    stopListening();
    resetTranscript();
    nextQuestion();
  };

  return (
    <div className="container mt-4">
      <InterviewHeader
        role="Software Engineer"
        status={isListening ? "listening" : "idle"}
      />

      <div className="row mb-4">
        <div className="col-md-7">
          {/* 👁 Text shown immediately */}
          <QuestionPrompt question={currentQuestion} />
        </div>

        <div className="col-md-5">
          {isActive && <CameraPreview stream={stream} />}
        </div>
      </div>

      <div className="mb-4">
        <TranscriptBox transcript={transcript} />
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <Timer seconds={0} />
        <InterviewControls
          isListening={isListening}
          onStart={startListening}
          onStop={stopListening}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};

export default InterviewPage;

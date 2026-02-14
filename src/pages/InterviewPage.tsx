import React, { useEffect, useMemo, useState } from "react";

import InterviewHeader from "../components/interview/InterviewHeader";
import HrPanel from "../components/interview/HrPanel";
import CandidatePanel from "../components/interview/CandidatePanel";
import QuestionDisplay from "../components/interview/QuestionDisplay";
import TranscriptBox from "../components/interview/TranscriptBox";
import InterviewControls from "../components/interview/InterviewControls";

import { useSpeechRecognition } from "../hooks/useSpeechRecognition";
import { useSpeechSynthesis } from "../hooks/useSpeechSynthesis";
import { useInterviewFlow } from "../hooks/useInterviewFlow";
import { useAudioAnalysis } from "../hooks/useAudioAnalysis";
import { useTimer } from "../hooks/useTimer";
import { useWebcam } from "../hooks/useWebcam";

import { useInterview } from "../context/InterviewContext";
import { getQuestionsByRole } from "../utils/interviewQuestions";
import { formatTime } from "../utils/helpers";

type Props = {
  onFinish: () => void;
};

const InterviewPage: React.FC<Props> = ({ onFinish }) => {
  const { state, addAnswer, startInterview, completeInterview } =
    useInterview();

  const questions = useMemo(
    () => getQuestionsByRole(state.basicDetails.role),
    [state.basicDetails.role]
  );

  const {
    currentQuestion,
    nextQuestion,
    isLastQuestion,
  } = useInterviewFlow(questions);

  const {
    transcript,
    isListening,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition();

  const { speak, stop } = useSpeechSynthesis();
  const { seconds, start, stop: stopTimer, reset } = useTimer();
  const { stream, startMedia } = useWebcam();

  const audioMetrics = useAudioAnalysis(transcript, seconds);

  const [isSpeaking, setIsSpeaking] = useState(false);

  // Start interview lifecycle
  useEffect(() => {
    startInterview();
    startMedia();
  }, []);

  // AI asks question when it changes
  useEffect(() => {
    if (currentQuestion) {
      setIsSpeaking(true);
      speak(currentQuestion);
      setTimeout(() => setIsSpeaking(false), 1500);
    }
  }, [currentQuestion]);

  const handleStartAnswer = () => {
    resetTranscript();
    reset();
    start();
    startListening();
  };

  const handleStopAnswer = () => {
    stopListening();
    stopTimer();
  };

  const handleNext = () => {
    stop();
    stopListening();
    stopTimer();

    // Save answer to context
    addAnswer({
      question: currentQuestion,
      transcript,
      duration: seconds,
      audioMetrics: {
        wordCount: audioMetrics.wordCount,
        fillerCount: audioMetrics.fillerCount,
        speechRate: audioMetrics.speechRate,
      },
      videoMetrics: {
        faceDetectedPercentage: 60, // placeholder until TF integration added
        stabilityScore: 40, // placeholder
      },
    });

    resetTranscript();
    reset();

    if (isLastQuestion) {
      completeInterview();
      onFinish();
    } else {
      nextQuestion();
    }
  };

  return (
    <div className="container mt-4">
      <InterviewHeader
        name={state.basicDetails.name}
        role={state.basicDetails.role}
        experience={state.experience.years}
        time={formatTime(seconds)}
      />

      <div className="row mt-4">
        <div className="col-md-6">
          <HrPanel isSpeaking={isSpeaking} />
          <QuestionDisplay question={currentQuestion} />
        </div>

        <div className="col-md-6">
          <CandidatePanel stream={stream} />
          <TranscriptBox transcript={transcript} />
        </div>
      </div>

      <InterviewControls
        isListening={isListening}
        onStart={handleStartAnswer}
        onStop={handleStopAnswer}
        onNext={handleNext}
      />
    </div>
  );
};

export default InterviewPage;

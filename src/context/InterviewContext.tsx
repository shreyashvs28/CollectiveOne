import React, { createContext, useContext, useState } from "react";

/* =========================
   TYPES
========================= */

type BasicDetails = {
  name: string;
  email: string;
  role: string;
};

type ExperienceDetails = {
  years: number;
  summary: string;
};

type AnswerRecord = {
  question: string;
  transcript: string;
  duration: number;
  audioMetrics?: {
    wordCount: number;
    fillerCount: number;
    speechRate: number;
  };
  videoMetrics?: {
    faceDetectedPercentage: number;
    stabilityScore: number;
  };
};

type InterviewState = {
  basicDetails: BasicDetails;
  experience: ExperienceDetails;
  skills: string[];
  answers: AnswerRecord[];
  startedAt: number | null;
  completedAt: number | null;
};

/* =========================
   CONTEXT TYPE
========================= */

type InterviewContextType = {
  state: InterviewState;

  updateBasicDetails: (data: BasicDetails) => void;
  updateExperience: (data: ExperienceDetails) => void;
  updateSkills: (skills: string[]) => void;

  addAnswer: (answer: AnswerRecord) => void;

  startInterview: () => void;
  completeInterview: () => void;

  resetInterview: () => void;
};

/* =========================
   INITIAL STATE
========================= */

const initialState: InterviewState = {
  basicDetails: {
    name: "",
    email: "",
    role: "",
  },
  experience: {
    years: 0,
    summary: "",
  },
  skills: [],
  answers: [],
  startedAt: null,
  completedAt: null,
};

/* =========================
   CREATE CONTEXT
========================= */

const InterviewContext = createContext<InterviewContextType | undefined>(
  undefined
);

/* =========================
   PROVIDER
========================= */

export const InterviewProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, setState] = useState<InterviewState>(initialState);

  const updateBasicDetails = (data: BasicDetails) => {
    setState((prev) => ({ ...prev, basicDetails: data }));
  };

  const updateExperience = (data: ExperienceDetails) => {
    setState((prev) => ({ ...prev, experience: data }));
  };

  const updateSkills = (skills: string[]) => {
    setState((prev) => ({ ...prev, skills }));
  };

  const addAnswer = (answer: AnswerRecord) => {
    setState((prev) => ({
      ...prev,
      answers: [...prev.answers, answer],
    }));
  };

  const startInterview = () => {
    setState((prev) => ({
      ...prev,
      startedAt: Date.now(),
    }));
  };

  const completeInterview = () => {
    setState((prev) => ({
      ...prev,
      completedAt: Date.now(),
    }));
  };

  const resetInterview = () => {
    setState(initialState);
  };

  return (
    <InterviewContext.Provider
      value={{
        state,
        updateBasicDetails,
        updateExperience,
        updateSkills,
        addAnswer,
        startInterview,
        completeInterview,
        resetInterview,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
};

/* =========================
   CUSTOM HOOK
========================= */

export const useInterview = () => {
  const context = useContext(InterviewContext);
  if (!context) {
    throw new Error("useInterview must be used within InterviewProvider");
  }
  return context;
};

// src/utils/interviewQuestions.ts

export const defaultQuestions = [
  "Tell me about yourself.",
  "What are your key strengths?",
  "Describe a challenge you faced and how you handled it.",
  "How do you handle feedback or criticism?",
  "Why should we hire you for this role?",
];

export const getQuestionsByRole = (role: string): string[] => {
  if (role.toLowerCase().includes("frontend")) {
    return [
      "Explain the difference between controlled and uncontrolled components in React.",
      "How do you optimize React application performance?",
      "Describe your experience with state management.",
      ...defaultQuestions,
    ];
  }

  if (role.toLowerCase().includes("backend")) {
    return [
      "Explain RESTful API principles.",
      "How do you handle database indexing?",
      "Describe a scalability challenge you solved.",
      ...defaultQuestions,
    ];
  }

  return defaultQuestions;
};

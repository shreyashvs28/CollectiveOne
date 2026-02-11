import { useState } from "react";

import HomePage from "./pages/HomePage";
import InterviewPage from "./pages/InterviewPage";
import ReportPage from "./pages/ReportPage";

type Page = "home" | "interview" | "report";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const startInterview = () => {
    setCurrentPage("interview");
  };

  const finishInterview = () => {
    setCurrentPage("report");
  };

  const restartInterview = () => {
    setCurrentPage("home");
  };

  return (
    <>
      {currentPage === "home" && (
        <HomePage onStart={startInterview} />
      )}

      {currentPage === "interview" && (
        <InterviewPage onFinish={finishInterview} />
      )}

      {currentPage === "report" && (
        <ReportPage onRestart={restartInterview} />
      )}
    </>
  );
}

export default App;

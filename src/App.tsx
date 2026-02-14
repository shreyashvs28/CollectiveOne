import { useState } from "react";

import HomePage from "./pages/HomePage";
import SetupPage from "./pages/SetupPage";
import SystemCheckPage from "./pages/SystemCheckPage";
import InterviewPage from "./pages/InterviewPage";
import ReportPage from "./pages/ReportPage";

type Page =
  | "home"
  | "setup"
  | "system-check"
  | "interview"
  | "report";

function App() {
  const [page, setPage] = useState<Page>("home");

  const goToHome = () => setPage("home");
  const goToSetup = () => setPage("setup");
  const goToSystemCheck = () => setPage("system-check");
  const goToInterview = () => setPage("interview");
  const goToReport = () => setPage("report");

  return (
    <>
      {page === "home" && (
        <HomePage onStart={goToSetup} />
      )}

      {page === "setup" && (
        <SetupPage onNext={goToSystemCheck} />
      )}

      {page === "system-check" && (
        <SystemCheckPage onNext={goToInterview} />
      )}

      {page === "interview" && (
        <InterviewPage onFinish={goToReport} />
      )}

      {page === "report" && (
        <ReportPage onRestart={goToHome} />
      )}
    </>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { InterviewProvider } from "./context/InterviewContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/theme.css";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <InterviewProvider>
      <App />
    </InterviewProvider>
  </React.StrictMode>
);

import React from "react";
import Card from "../common/Card";

type Props = {
  isSpeaking: boolean;
};

const HrPanel: React.FC<Props> = ({ isSpeaking }) => {
  return (
    <Card title="AI HR Interviewer">
      <div className="text-center">
        <img
          src="/assets/images/hr-robot.png"
          alt="AI HR"
          style={{ width: "120px", opacity: 0.9 }}
        />
        <div className="mt-3">
          <span
            className={`badge ${
              isSpeaking ? "bg-success" : "bg-secondary"
            }`}
          >
            {isSpeaking ? "Asking Question" : "Waiting"}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default HrPanel;

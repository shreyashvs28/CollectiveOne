import React from "react";
import Card from "../common/Card";

type Props = {
  name: string;
  role: string;
  experience: number;
  time: string;
};

const InterviewHeader: React.FC<Props> = ({
  name,
  role,
  experience,
  time,
}) => {
  return (
    <Card className="mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5 className="mb-1">{name}</h5>
          <small className="text-muted">
            Role: {role} | Experience: {experience} years
          </small>
        </div>

        <div>
          <strong>Time:</strong> {time}
        </div>
      </div>
    </Card>
  );
};

export default InterviewHeader;

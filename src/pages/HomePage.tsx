import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

type Props = {
  onStart: () => void;
};

const HomePage: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="container mt-5">
      <Card className="text-center">
        <h2 className="mb-3">AI Interview Simulator</h2>
        <p className="text-muted mb-4">
          Practice structured interviews with real-time analysis and feedback.
        </p>
        <Button onClick={onStart}>Begin Setup</Button>
      </Card>
    </div>
  );
};

export default HomePage;

import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

type HomePageProps = {
  onStart: () => void;
};

const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <div className="container mt-5">
      <Card className="text-center">
        <h2 className="mb-3">HR Interview Simulator</h2>
        <p className="text-muted mb-4">
          Practice structured HR interviews and receive objective feedback
          on communication and presence.
        </p>
        <Button onClick={onStart}>Start Interview</Button>
      </Card>
    </div>
  );
};

export default HomePage;

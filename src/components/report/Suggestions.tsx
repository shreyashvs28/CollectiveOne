import React from "react";
import Card from "../common/Card";

type Props = {
  suggestions: string[];
};

const Suggestions: React.FC<Props> = ({ suggestions }) => {
  return (
    <Card title="Improvement Recommendations">
      {suggestions.length === 0 ? (
        <p className="text-muted mb-0">
          No major improvement areas identified.
        </p>
      ) : (
        <ul className="mb-0">
          {suggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Suggestions;

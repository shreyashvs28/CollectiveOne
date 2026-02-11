import React from "react";
import Card from "../common/Card";

type SuggestionsProps = {
  suggestions: string[];
};

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions }) => {
  if (suggestions.length === 0) {
    return (
      <Card title="Improvement Suggestions">
        <p className="mb-0 text-muted">
          No specific improvement areas were identified in this session.
        </p>
      </Card>
    );
  }

  return (
    <Card title="Improvement Suggestions">
      <ul className="mb-0">
        {suggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  );
};

export default Suggestions;

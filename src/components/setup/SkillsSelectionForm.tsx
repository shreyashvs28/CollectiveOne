import React from "react";
import Card from "../common/Card";

type Props = {
  selectedSkills: string[];
  onToggleSkill: (skill: string) => void;
};

const skillsList = [
  "JavaScript",
  "React",
  "Node.js",
  "TypeScript",
  "Database",
  "System Design",
];

const SkillsSelectionForm: React.FC<Props> = ({
  selectedSkills,
  onToggleSkill,
}) => {
  return (
    <Card title="Select Relevant Skills">
      {skillsList.map((skill) => (
        <div className="form-check" key={skill}>
          <input
            className="form-check-input"
            type="checkbox"
            checked={selectedSkills.includes(skill)}
            onChange={() => onToggleSkill(skill)}
            id={skill}
          />
          <label
            className="form-check-label"
            htmlFor={skill}
          >
            {skill}
          </label>
        </div>
      ))}
    </Card>
  );
};

export default SkillsSelectionForm;

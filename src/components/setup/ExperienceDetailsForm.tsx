import React from "react";
import Card from "../common/Card";

type ExperienceDetails = {
  years: number;
  summary: string;
};

type Props = {
  values: ExperienceDetails;
  onChange: (field: keyof ExperienceDetails, value: string | number) => void;
};

const ExperienceDetailsForm: React.FC<Props> = ({ values, onChange }) => {
  return (
    <Card title="Experience Details">
      <div className="mb-3">
        <label className="form-label">Years of Experience</label>
        <input
          type="number"
          className="form-control"
          value={values.years}
          onChange={(e) =>
            onChange("years", Number(e.target.value))
          }
        />
      </div>

      <div>
        <label className="form-label">Brief Experience Summary</label>
        <textarea
          className="form-control"
          rows={4}
          value={values.summary}
          onChange={(e) =>
            onChange("summary", e.target.value)
          }
        />
      </div>
    </Card>
  );
};

export default ExperienceDetailsForm;

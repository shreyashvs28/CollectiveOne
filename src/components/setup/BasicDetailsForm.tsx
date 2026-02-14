import React from "react";
import Card from "../common/Card";

type BasicDetails = {
  name: string;
  email: string;
  role: string;
};

type Props = {
  values: BasicDetails;
  onChange: (field: keyof BasicDetails, value: string) => void;
};

const BasicDetailsForm: React.FC<Props> = ({ values, onChange }) => {
  return (
    <Card title="Basic Details">
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control"
          value={values.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={values.email}
          onChange={(e) => onChange("email", e.target.value)}
        />
      </div>

      <div>
        <label className="form-label">Role Applied For</label>
        <input
          type="text"
          className="form-control"
          value={values.role}
          onChange={(e) => onChange("role", e.target.value)}
        />
      </div>
    </Card>
  );
};

export default BasicDetailsForm;

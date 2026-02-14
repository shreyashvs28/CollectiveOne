import React from "react";
import Card from "../common/Card";

type Props = {
  name: string;
  email: string;
  role: string;
  years: number;
  skills: string[];
};

const ReviewCard: React.FC<Props> = ({
  name,
  email,
  role,
  years,
  skills,
}) => {
  return (
    <Card title="Review Your Details">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Experience:</strong> {years} years</p>
      <p>
        <strong>Skills:</strong> {skills.join(", ")}
      </p>
    </Card>
  );
};

export default ReviewCard;

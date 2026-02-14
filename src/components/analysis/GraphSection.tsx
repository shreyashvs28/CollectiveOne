import React from "react";
import Card from "../common/Card";

type DataPoint = {
  label: string;
  value: number;
};

type Props = {
  title: string;
  data: DataPoint[];
};

const GraphSection: React.FC<Props> = ({ title, data }) => {
  return (
    <Card title={title}>
      {data.length === 0 ? (
        <p className="text-muted mb-0">
          No data available for this section.
        </p>
      ) : (
        <ul className="list-unstyled mb-0">
          {data.map((point, index) => (
            <li key={index} className="mb-2">
              <strong>{point.label}:</strong> {point.value}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default GraphSection;

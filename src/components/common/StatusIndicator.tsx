import React from "react";

type StatusType = "success" | "warning" | "error" | "neutral";

type StatusIndicatorProps = {
  label: string;
  status: StatusType;
};

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  label,
  status,
}) => {
  const getBadgeClass = () => {
    switch (status) {
      case "success":
        return "bg-success";
      case "warning":
        return "bg-warning text-dark";
      case "error":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-2">
      <span>{label}</span>
      <span className={`badge ${getBadgeClass()}`}>
        {status.toUpperCase()}
      </span>
    </div>
  );
};

export default StatusIndicator;

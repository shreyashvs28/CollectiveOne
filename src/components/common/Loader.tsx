import React from "react";

type LoaderProps = {
  text?: string;
};

const Loader: React.FC<LoaderProps> = ({
  text = "Processing...",
}) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-4">
      <div
        className="spinner-border text-primary mb-3"
        role="status"
      />
      <span className="text-muted">{text}</span>
    </div>
  );
};

export default Loader;

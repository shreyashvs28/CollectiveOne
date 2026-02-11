import React from "react";

type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, children, className = "" }) => {
  return (
    <div className={`card p-4 ${className}`}>
      {title && <h5 className="mb-3">{title}</h5>}
      {children}
    </div>
  );
};

export default Card;

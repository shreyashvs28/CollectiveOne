import React from "react";

type CardProps = {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  children,
  footer,
  className = "",
}) => {
  return (
    <div className={`card p-4 ${className}`}>
      {title && <h5 className="mb-3">{title}</h5>}
      <div>{children}</div>
      {footer && <div className="mt-3">{footer}</div>}
    </div>
  );
};

export default Card;

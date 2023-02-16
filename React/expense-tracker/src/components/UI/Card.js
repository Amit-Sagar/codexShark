import React from "react";

const Card = ({ className, children }) => {
  return <div className={`rounded-xl shadow-xl ${className}`}>{children}</div>;
};

export default Card;

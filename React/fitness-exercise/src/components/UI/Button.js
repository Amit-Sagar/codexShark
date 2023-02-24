import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`font-medium border-1 py-1 px-2 rounded-md  active:scale-95 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

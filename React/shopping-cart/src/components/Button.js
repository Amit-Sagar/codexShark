import React from "react";
import styles from "../styles/Button.module.css";
const Button = ({ children, className, onClick }) => {
  return (
    <div>
      <button className={`${styles.button} ${className}`} onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;

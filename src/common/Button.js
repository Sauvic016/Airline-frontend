import React from "react";

const Button = ({ title, customStyle, onClick, disabled = false }) => {
  return (
    <button
      className={` shadow-md  rounded-xl  cursor-pointer font-medium ${customStyle} `}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;

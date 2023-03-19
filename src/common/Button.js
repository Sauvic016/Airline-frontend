import React from "react";

const Button = ({ title, customStyle, onClick }) => {
  return (
    <button
      className={`shadow-md bg-primarypurple rounded-xl ${customStyle} cursor-pointer font-medium  `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

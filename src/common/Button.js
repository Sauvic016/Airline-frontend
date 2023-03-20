import React from "react";

const Button = ({ title, customStyle, onClick }) => {
  return (
    <button className={` shadow-md  rounded-xl  cursor-pointer font-medium ${customStyle} `} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

import React from "react";

const Button = ({ title, customStyle }) => {
  return (
    <button className={`shadow-md bg-[#605DEC] rounded-xl text-slate-100 cursor-pointer font-medium ${customStyle} `}>
      {title}
    </button>
  );
};

export default Button;

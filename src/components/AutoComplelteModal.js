import React from "react";

const AutoComplelteModal = ({ data, setFormData, formData, setShowOptions, name, setCityData, cityData }) => {
  // const set = new Set(data.map((item) => item.id));
  // let mydata = Array.from(set);
  const handleClick = (el, name) => {
    setFormData({ ...formData, [name]: el.name });
    setCityData({ ...cityData, [name]: { ...el } });
    setShowOptions({ name: false });
  };
  return (
    <div className="bg-pink-200">
      {data?.map((el) => (
        <span
          key={el.id}
          className="p-3 mt-2 bg-white flex border-black border rounded-lg shadow-lg cursor-pointer w-full"
          onClick={() => handleClick(el, name)}
        >
          {el.name}
        </span>
      ))}
    </div>
  );
};

export default AutoComplelteModal;

import React from "react";
import { DatePicker, Space } from "antd";

const SearchBar = () => {
  const dateFormatList = ["DD/MM/YYYY"];
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <form className="p-5 flex flex-col justify-center bg-white rounded-xl text-sm z-10 relative m-auto top-8 shadow-lg  lg:flex-row  lg:items-center lg:mt-16 font-poppins font-normal xl:h-32 xl:w-full">
        {/* <div className=" flex flex-col w-full lg:flex-row  lg:items-center"> */}
        <input
          type="text"
          className="p-4 bg-slate-100 mb-5 mt-2 focus-within:outline-none rounded-xl placeholder:text-sm font-medium placeholder:text-[rgba(0,0,0,0.25)]
          lg:m-auto lg:mr-2 xl:w-3/12 xl:h-fit"
          placeholder="From (location)"
        />
        <input
          type="text"
          className="p-4 bg-slate-100 mb-5 focus-within:outline-none rounded-xl placeholder:text-sm font-medium placeholder:text-[rgba(0,0,0,0.25)]
          lg:m-auto lg:mr-2 xl:w-3/12"
          placeholder="To (destination)"
        />
        <div className=" flex mb-4 lg:m-auto lg:gap-1 xl:gap-7 xl:w-4/12">
          <DatePicker
            format={dateFormatList}
            className="p-4 w-6/12 mr-4 shadow-none border-none focus-within:outline-none  bg-slate-100 rounded-xl placeholder:font-semibold placeholder:text-sm  font-medium  
            lg:m-auto lg:mr-2 "
            placeholder="Departure"
            style={{ fontFamily: "Poppins" }}
          />
          <input
            type="number"
            placeholder="Passengers"
            className="p-4 w-6/12 focus-within:outline-none bg-slate-100 rounded-xl placeholder:text-sm font-medium placeholder:text-[rgba(0,0,0,0.25)]
            lg:my-auto lg:mr-2"
          />
        </div>
        <button
          className="mx-2 my-3 shadow-md bg-[#605DEC] py-4 px-10 rounded-xl text-slate-100 
        lg:m-auto lg:p-4 lg:w-1/4 xl:w-2/12"
        >
          Search flight
        </button>
      </form>
    </>
  );
};

export default SearchBar;

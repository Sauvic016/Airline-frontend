import React from "react";
import Button from "../common/Button";

const FlightDetailsCard = ({
  FlightCompanyName,
  FlightNumber,
  price,
  duration,
  departuretime,
  departureairportName,
  arrivaltime,
  arrivalAirportName,
  date,
}) => {
  return (
    <div className="mt-24">
      <div className="h-80 bg-white shadow-lg rounded-xl ">
        <div className="flex justify-center text-3xl font-semibold mt-2 p-8">{FlightCompanyName || `Indigo`}</div>
        <hr />
        <div className="flex  justify-between p-4">
          <p> 5:50 pm </p>
          <div>{"<-(✈️)->"}</div>
          <p> 7:30 pm </p>
        </div>
        <div className="flex items-center justify-between  text-[10px] pb-4 px-2">
          <p className="break-words w-1/4">Indira Gandhi International Airport</p>
          <p className="break-words w-1/4 text-right">Netaji Subhash Chandra Bose International Airport</p>
        </div>
        <hr />
        <div className="flex justify-between items-center px-2 mt-2 ">
          <span className="text-xl">Price</span>
          <span className="text-2xl font-semibold">INR ₹5000</span>
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <Button title={"Cancel"} customStyle={"bg-white text-[#605DEC] py-4 px-5"} />
        <Button title={"Confirm"} customStyle={"p-4 shadow-xl"} />
      </div>
    </div>
  );
};

export default FlightDetailsCard;

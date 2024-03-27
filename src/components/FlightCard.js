import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { getTimeIST, getDuration } from "../util/helper";

const FlightCard = ({ flightNumber, departureTime, arrivalTime, price, id }) => {
  const duration = getDuration(departureTime, arrivalTime);
  arrivalTime = getTimeIST(arrivalTime);
  departureTime = getTimeIST(departureTime);

  const navigate = useNavigate();

  const handleFlightDetails = () => {
    navigate(`/home/flightdetails/${id}`);
  };

  return (
    <>
      <div className="bg-white text-gray-600 rounded-xl shadow-lg p-2 pt-4 mt-2">
        <div>
          <div className="flex justify-between items-center p-2">
            <span className="font-semibold">Indigo {flightNumber} </span>
            <span>{duration}</span>
          </div>
          <div className="flex  justify-between p-2">
            <p> {departureTime} </p>
            <div>{"<-(✈️)->"}</div>
            <p> {arrivalTime}</p>
          </div>
        </div>
        <hr className="bg-slate-300 mt-2" />
        <div className="p-2 mt-2">
          <div className="flex justify-between items-center">
            <p>Economy</p>
            <p>
              {" "}
              From ₹<span className="font-semibold text-gray-600">{price}</span>{" "}
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              title={"Check"}
              customStyle={
                "text-slate-100 bg-primarypurple py-2 px-10  mx-2 mt-4 mb-2 lg:m-auto lg:p-4 lg:w-1/4 xl:w-2/12"
              }
              onClick={handleFlightDetails}
            />
          </div>
        </div>
      </div>
      <hr className="my-4 mb-4" />
    </>
  );
};

export default FlightCard;

import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FlightCard from "../../components/FlightCard";
import DataNotFoundModal from "../../util/DataNotFoundModal";
import LoadingModal from "../../util/LoadingModal";

const Flights = () => {
  const [searchParams] = useSearchParams();
  const [flightData, setFlightData] = useState();
  const [errorFound, setErrorFound] = useState(false);

  const params = Object.fromEntries([...searchParams]);
  const navigate = useNavigate();

  const fetchFlightsWQ = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SEARCH_API_URL}/flights?date=${params.departuredate}&departureCityId=${params.departureCityId}&arrivalCityId=${params.arrivalCityId}`
    );
    return response.json();
  };

  const { data, isLoading, isError, error } = useQuery(["flights", params], fetchFlightsWQ, {
    keepPreviousData: true,
  });

  useEffect(() => {
    if (data?.success && data?.data.totalItems > 0) {
      setFlightData(data.data);
    } else {
      setErrorFound(true);
    }
  }, [data, params, errorFound]);

  if (isLoading) {
    return <LoadingModal isLoading={isLoading} />;
  }
  if (isError) {
    console.log(error);
    setErrorFound(true);
  }

  return flightData?.totalItems > 0 ? (
    <div className="mt-14 pb-32 mx-2 xl:mx-44 ">
      {flightData?.Items?.map((item) => (
        <FlightCard key={item.id} {...item} />
      ))}
    </div>
  ) : (
    <DataNotFoundModal show={errorFound} setShow={setErrorFound} navigate={navigate} />
  );
};

export default Flights;

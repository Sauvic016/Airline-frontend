import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import FlightCard from "../../components/FlightCard";
import DataNotFoundModal from "../../util/DataNotFoundModal";

const Flights = () => {
  const [searchParams] = useSearchParams();
  const [flightData, setFlightData] = useState();
  const [isError, setIsError] = useState(false);

  const params = Object.fromEntries([...searchParams]);
  const navigate = useNavigate();

  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const apiCall = await fetch(
        `http://localhost:3005/searchservice/api/v1/flights?date=${params.departuredate}&departureCityId=${params.departureCityId}&arrivalCityId=${params.arrivalCityId}`
      );

      const data = await apiCall.json();
      if (isSubscribed && data.success && data.data.totalItems > 0) {
        setFlightData(data.data);
      } else {
        setIsError(true);
      }
    };
    fetchData().catch((err) => console.error("wow:", err));

    return () => {
      isSubscribed = false;
    };
  }, [params.departuredate, params.departureCityId, params.arrivalCityId]);

  return flightData?.totalItems > 0 ? (
    <div className="mt-14 pb-32 mx-2 xl:mx-44 ">
      {flightData?.Items?.map((item) => (
        <FlightCard key={item.id} {...item} />
      ))}
    </div>
  ) : (
    <DataNotFoundModal show={isError} setShow={setIsError} navigate={navigate} />
  );
};

export default Flights;

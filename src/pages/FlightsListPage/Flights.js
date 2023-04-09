import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FlightCard from "../../components/FlightCard";
import DataNotFoundModal from "../../util/DataNotFoundModal";
import LoadingModal from "../../util/LoadingModal";
import Button from "../../common/Button";

const Flights = () => {
  const [searchParams] = useSearchParams();
  const [flightData, setFlightData] = useState();
  const [errorFound, setErrorFound] = useState(false);
  const [page, setPage] = useState(1);

  const params = Object.fromEntries([...searchParams]);
  const navigate = useNavigate();

  const fetchFlightsWQ = async ({ queryKey }) => {
    const response = await fetch(
      `${process.env.REACT_APP_SEARCH_API_URL}/flights?date=${params.departuredate}&departureCityId=${params.departureCityId}&arrivalCityId=${params.arrivalCityId}&page=${queryKey[2]}`
    );
    return response.json();
  };

  const { data, isLoading, isError, error } = useQuery(["flights", params, page], fetchFlightsWQ, {
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
    <>
      <h1 className="pl-6 text-white text-2xl mt-8">Flight Results</h1>

      <div className="mt-14 pb-32 mx-2 xl:mx-44 ">
        {flightData?.Items?.map((item) => (
          <FlightCard key={item.id} {...item} />
        ))}
        <div className="flex justify-end mx-2 px-2">
          <Button
            customStyle={
              page === 1
                ? "bg-white text-primarypurple py-3 px-5 font-semibold lg:font-semibold cursor-not-allowed mx-2"
                : "bg-primarypurple text-white py-3 px-5 font-semibold lg:font-semibold mx-2"
            }
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
            title={"Previous"}
          />
          <Button
            onClick={() => setPage((old) => old + 1)}
            disabled={data.data.currentPage === data.data.totalPages}
            customStyle={
              data.data.currentPage === data.data.totalPages
                ? "bg-white text-primarypurple py-3 px-5 font-semibold lg:font-semibold cursor-not-allowed"
                : "bg-primarypurple text-white py-3 px-5 font-semibold lg:font-semibold"
            }
            title={"Next"}
          />
        </div>
      </div>
    </>
  ) : (
    <DataNotFoundModal show={errorFound} setShow={setErrorFound} navigate={navigate} />
  );
};

export default Flights;

import React, { useState } from "react";
import { DatePicker } from "antd";
import Button from "../../common/Button";
import AutoComplelteModal from "../../components/AutoComplelteModal";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    DepartureDate: new Date(),
    Passengers: 1,
  });

  const [cityData, setCityData] = useState({
    from: [],
    to: [],
  });
  const [showOptions, setShowOptions] = useState({
    from: false,
    to: false,
  });

  const dateFormatList = ["DD/MM/YYYY"];
  const onDateChange = (date, _) => {
    setFormData({ ...formData, DepartureDate: date.format("YYYY-MM-DD") });
  };
  const handleSearchFlights = async (e) => {
    try {
      e.preventDefault();
      navigate({
        pathname: `/flights`,
        search: `?departuredate=${formData.DepartureDate}&departureCityId=${cityData.from?.id}&arrivalCityId=${cityData.to?.id}`,
      });
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCityData = async (e) => {
    try {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      if (e.target.value) {
        const apicall = await fetch(`http://localhost:3001/searchservice/api/v1/city?name=${e.target.value}`);
        if (!apicall.ok) {
          throw new Error("Bad Response", {
            cause: { apicall },
          });
        }
        const data = await apicall.json();
        console.log(data);
        setCityData({ ...cityData, [e.target.name]: data.data });
        setShowOptions({ [e.target.name]: true });
      } else {
        setCityData(null);
      }
    } catch (err) {
      switch (err.cause?.apicall?.status) {
        case 400:
          setCityData(() => []);
          break;
        default:
          console.log("something is wrong");
          setCityData(null);
      }
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => handleSearchFlights(e)}
        className="p-5 flex flex-col justify-center bg-white rounded-xl text-sm z-10 relative m-auto top-8 shadow-lg  lg:flex-row  lg:items-center lg:mt-16 font-poppins font-normal xl:h-32 xl:w-full"
      >
        <input
          type="text"
          className="p-4 bg-slate-100 mb-5 mt-2 focus-within:outline-none rounded-xl placeholder:text-sm font-medium placeholder:text-[rgba(0,0,0,0.25)]
          lg:m-auto lg:mr-2 xl:w-3/12 xl:h-fit"
          autoComplete="off"
          placeholder="From (location)"
          value={formData.from}
          name="from"
          onChange={(e) => handleCityData(e)}
        />
        {showOptions.from ? (
          <div className="absolute left-24 top-24">
            <AutoComplelteModal
              name={"from"}
              data={cityData?.from}
              setFormData={setFormData}
              formData={formData}
              setShowOptions={setShowOptions}
              setCityData={setCityData}
              cityData={cityData}
            />
          </div>
        ) : null}

        <input
          type="text"
          className="p-4 bg-slate-100 mb-5 focus-within:outline-none rounded-xl placeholder:text-sm font-medium placeholder:text-[rgba(0,0,0,0.25)]
          lg:m-auto lg:mr-2 xl:w-3/12"
          placeholder="To (destination)"
          value={formData.to}
          name="to"
          onChange={(e) => handleCityData(e)}
        />
        {showOptions.to ? (
          <div className="absolute left-64 top-24">
            <AutoComplelteModal
              name={"to"}
              data={cityData?.to}
              setFormData={setFormData}
              formData={formData}
              setShowOptions={setShowOptions}
              setCityData={setCityData}
              cityData={cityData}
            />
          </div>
        ) : null}
        <div className=" flex mb-4 lg:m-auto lg:gap-1 xl:gap-2 xl:w-4/12">
          <DatePicker
            format={dateFormatList}
            className="p-4 w-6/12 mr-4 shadow-none border-none focus-within:outline-none  bg-slate-100 rounded-xl placeholder:font-semibold placeholder:text-sm  font-medium  
            lg:m-auto lg:mr-2 "
            placeholder="Departure"
            style={{ fontFamily: "Poppins" }}
            onChange={onDateChange}
          />
          <input
            type="number"
            placeholder="Passengers"
            className="p-4 w-6/12 focus-within:outline-none bg-slate-100 rounded-xl placeholder:text-sm font-medium placeholder:text-[rgba(0,0,0,0.25)]
            lg:my-auto lg:mr-2"
            value={formData.Passengers}
            name="Passengers"
            onChange={(e) => handleFormData(e)}
          />
        </div>
        <Button title={"Search flight"} customStyle={"py-4 px-10  mx-2 my-3 lg:m-auto lg:p-4 lg:w-1/4 xl:w-2/12"} />
      </form>
    </>
  );
};

export default SearchBar;

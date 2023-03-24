import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Button from "../../common/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const SearchBar = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    DepartureDate: dayjs(new Date()),
    Passengers: 1,
  });

  const [value1, setValue1] = useState("");
  const [option1, setOption1] = useState([]);
  const [option2, setOption2] = useState([]);
  const [value2, setValue2] = useState("");

  const [cityData, setCityData] = useState({
    from: {},
    to: {},
  });

  const onDateChange = (e) => {
    setFormData({
      ...formData,
      DepartureDate: e,
    });
  };

  const handleSearchFlights = (e) => {
    e.preventDefault();
    try {
      let d = new Date(formData.DepartureDate);
      d = d.toLocaleDateString("fr-CA");
      // if ((Object.entries(cityData).length === 0 && cityData.constructor === Object) || cityData.length === 0) {
      //   throw new Error("kk");
      // } else {
      navigate({
        pathname: `/flights`,
        search: `?departuredate=${d}&departureCityId=${cityData.from[0]?.id}&arrivalCityId=${cityData.to[0]?.id}`,
      });
      // }
    } catch (error) {
      console.log("Error", error);
      //error handling
    }
  };

  const handleAutocompleteChange1 = async (event, newValue) => {
    try {
      if (newValue.length !== 0) {
        const response = await fetchDataFromApi(newValue);
        setValue1(newValue);
        setOption1([...response?.data]);
        setCityData({ ...cityData, from: response?.data });
      } else {
        setValue1("");
        setOption1([]);
        setCityData({ ...cityData, from: "" });
      }
    } catch (error) {
      setValue1(newValue);
      setOption1([]);
    }
  };
  const handleAutocompleteChange2 = async (event, newValue) => {
    try {
      if (newValue.length) {
        const response = await fetchDataFromApi(newValue);
        setValue2(newValue);
        setOption2([...response?.data]);
        setCityData({ ...cityData, to: response?.data });
      } else {
        setValue2("");
        setOption2([]);
        setCityData({ ...cityData, to: "" });
      }
    } catch (error) {
      setValue2(newValue);
      setOption2([]);
    }
  };

  const fetchDataFromApi = async (newInputValue) => {
    try {
      const response = await fetch(`http://localhost:3001/searchservice/api/v1/city?name=${newInputValue}`);
      if (!response.ok) {
        throw new Error("Bad Response", {
          cause: { response },
        });
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSearchFlights(e)}
        className="p-5 flex flex-col justify-center bg-white rounded-xl text-sm z-10 relative m-auto top-8 shadow-lg  lg:flex-row  lg:items-center lg:mt-16 font-poppins font-normal xl:h-32 xl:w-full"
      >
        <div className="lg:flex lg:justify-between lg:w-6/12 ">
          <Autocomplete
            id="autocomplete-1"
            options={option1}
            getOptionLabel={(option) => option?.name}
            isOptionEqualToValue={(option, value) => option?.name === value?.name}
            inputValue={value1}
            onInputChange={handleAutocompleteChange1}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Enter the departure city"
                label="Departure City"
                sx={{
                  "& fieldset": { borderRadius: "0.75rem" },
                  "&.Mui-focused fieldset": {
                    borderColor: "red",
                  },
                  "& label": {
                    "&.Mui-focused": {
                      color: "#605DEC",
                    },
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "none",
                    },
                    "&:hover fieldset": {
                      borderColor: "#605DEC",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#605DEC",
                    },
                  },
                }}
                required
                className="placeholder:text-sm placeholder:font-poppins placeholder:font-bold font-medium"
              />
            )}
            popupIcon={""}
            className="bg-slate-100 rounded-xl my-2 lg:w-1/2 lg:mr-2"
          />
          <Autocomplete
            id="autocomplete-2"
            options={option2}
            getOptionLabel={(option) => option?.name || ""}
            isOptionEqualToValue={(option, value) => option?.name === value?.name}
            inputValue={value2}
            onInputChange={handleAutocompleteChange2}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Enter the arrival city"
                label="Arrival City"
                required
                className="placeholder:text-sm placeholder:font-poppins placeholder:font-bold font-medium"
                sx={{
                  "& fieldset": { borderRadius: "0.75rem" },
                  "&.Mui-focused fieldset": {
                    borderColor: "red",
                  },
                  "& label": {
                    "&.Mui-focused": {
                      color: "#605DEC",
                    },
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "none",
                    },
                    "&:hover fieldset": {
                      borderColor: "#605DEC",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#605DEC",
                    },
                  },
                }}
              />
            )}
            popupIcon={""}
            className="bg-slate-100 rounded-xl my-2 lg:w-1/2  lg:mr-2 placeholder:text-sm"
          />
        </div>
        <div className=" flex gap-2 mb-4 lg:m-auto lg:gap-1 xl:gap-2 xl:w-4/12">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="p-4 w-6/12  mx-2 shadow-none border-none focus-within:outline-none  bg-slate-100 rounded-xl placeholder:font-semibold placeholder:text-sm  font-medium
             lg:m-auto lg:mr-2 "
              label="Departure Date"
              format={"DD/MM/YYYY"}
              onChange={(e) => onDateChange(e)}
              value={formData.DepartureDate}
              sx={{
                "& fieldset": { borderRadius: "0.75rem" },
                "&.Mui-focused fieldset": {
                  borderColor: "red",
                },
                "& label": {
                  "&.Mui-focused": {
                    color: "#605DEC",
                  },
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "none",
                  },
                  "&:hover fieldset": {
                    borderColor: "#605DEC",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#605DEC",
                  },
                },
              }}
              textField={(params) => <TextField {...params} required />}
            />
          </LocalizationProvider>
          <TextField
            type="number"
            placeholder="Passengers"
            className="p-4 w-6/12 focus-within:outline-none bg-slate-100 rounded-xl placeholder:text-sm font-medium placeholder:text-[rgba(0,0,0,0.25)] border-black
            lg:my-auto lg:mr-2"
            value={formData.Passengers}
            name="Passengers"
            required
            onChange={(event) => {
              setFormData({ ...formData, Passengers: event.target.value });
            }}
            label="Seats"
            sx={{
              "& fieldset": { borderRadius: "0.75rem" },
              "&.Mui-focused fieldset": {
                borderColor: "red",
              },
              "& label": {
                "&.Mui-focused": {
                  color: "#605DEC",
                },
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "none",
                },
                "&:hover fieldset": {
                  borderColor: "#605DEC",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#605DEC",
                },
              },
            }}
          />
        </div>
        <Button
          title={"Search flight"}
          customStyle={" bg-primarypurple text-slate-100 py-4 px-10  mx-2 my-3 lg:m-auto lg:p-4 lg:w-1/4 xl:w-2/12"}
        />
      </form>
    </>
  );
};

export default SearchBar;

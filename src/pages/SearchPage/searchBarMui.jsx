import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { debounce } from "lodash";
import Button from "../../common/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const debouncedSearchOptions = debounce(async (searchTerm, setOption, setIsLoading, setCityData, type) => {
  setIsLoading(true);
  try {
    const response = await fetch(`${process.env.REACT_APP_SEARCH_API_URL}/city?name=${searchTerm}`);
    const data = await response.json();
    if (data.success) {
      setOption((prevData) => ({ ...prevData, [type]: [...data.data] }));
      setCityData((prevData) => ({ ...prevData, [type]: data.data }));
    }
  } catch (error) {
    console.error(error?.message);
  }
  setIsLoading(false);
}, 500);

const SearchBar = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    DepartureDate: dayjs(new Date()),
    Passengers: 1,
  });

  const [isLoading, setIsLoading] = useState(false);

  const [values, setValues] = useState({
    from: "",
    to: "",
  });
  const [options, setOptions] = useState({
    from: [],
    to: [],
  });

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
    let d = new Date(formData.DepartureDate);
    d = d.toLocaleDateString("fr-CA");
    navigate({
      pathname: `/flights`,
      search: `?departuredate=${d}&departureCityId=${cityData.from[0]?.id}&arrivalCityId=${cityData.to[0]?.id}`,
    });
  };

  const handleAutocompleteChange = (event, value, type) => {
    const updatedValues = { ...values, [type]: value };
    setValues(updatedValues);

    if (value.length > 0) {
      debouncedSearchOptions(value, setOptions, setIsLoading, setCityData, type);
    } else {
      setOptions((prev) => ({ ...prev, [type]: [] }));
    }
  };

  return (
    <>
      <h1 className="pl-6 text-white text-2xl mt-8">Search Flights</h1>
      <form
        onSubmit={(e) => handleSearchFlights(e)}
        className="p-5 flex flex-col justify-center bg-white rounded-xl text-sm z-10 relative m-auto top-4 shadow-lg  lg:flex-row  lg:items-center lg:mt-4 font-poppins font-normal xl:h-32 xl:w-full"
      >
        <div className="lg:flex lg:justify-between lg:w-6/12 ">
          <Autocomplete
            id="autocomplete-1"
            options={options.from}
            getOptionLabel={(option) => option?.name}
            isOptionEqualToValue={(option, value) => option?.name === value?.name}
            inputValue={values.from}
            onInputChange={(event, newValue) => handleAutocompleteChange(event, newValue, "from")}
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
            loading={isLoading}
          />
          <Autocomplete
            id="autocomplete-2"
            options={options.to}
            getOptionLabel={(option) => option?.name || ""}
            isOptionEqualToValue={(option, value) => option?.name === value?.name}
            inputValue={values.to}
            onInputChange={(event, newValue) => handleAutocompleteChange(event, newValue, "to")}
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
            loading={isLoading}
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
          title={"Search "}
          customStyle={
            " bg-primarypurple text-slate-100 py-4 px-10  mx-2 my-3 lg:m-auto lg:p-4 lg:ml-2 lg:w-1/4 xl:w-2/12"
          }
        />
      </form>
    </>
  );
};

export default SearchBar;

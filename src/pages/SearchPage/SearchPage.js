import React from "react";
import SearchBarMui from "./searchBarMui.jsx";
// import SearchBar from "./SearchBar";

const SearchPage = () => {
  return (
    <>
      {/* <SearchBar /> */}
      <SearchBarMui />
      <div className="mt-12 md:mt-20 pb-24 flex justify-around flex-wrap ">
        <div className="sm:w-sm lg:max-w-sm  rounded overflow-hidden shadow-lg mb-2">
          <img
            className=" h-44 w-full lg:h-64 object-cover"
            src="https://via.placeholder.com/640x360.png"
            alt="PlaceholderImage"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Destination-1</div>
            <p className="text-gray-700 text-base">For testing choose Silchar to Guwahati @ 19th feb 2023</p>
          </div>
        </div>
        <div className="sm:w-sm lg:max-w-sm rounded overflow-hidden shadow-lg mb-2">
          <img
            className="h-44 w-full lg:h-64 object-cover"
            src="https://via.placeholder.com/640x360.png"
            alt="PlaceholderImage"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Destination-2</div>
            <p className="text-gray-700 text-base">For testing choose Bengaluru to New Delhi @ 31 jan 2023</p>
          </div>
        </div>
        <div className="sm:w-sm lg:max-w-sm rounded overflow-hidden shadow-lg mb-2">
          <img
            className="h-44 w-full lg:h-64 object-cover"
            src="https://via.placeholder.com/640x360.png"
            alt="PlaceholderImage"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Destination-2</div>
            <p className="text-gray-700 text-base">For testing choose Bengaluru to New Delhi @ 16 jan 2023</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;

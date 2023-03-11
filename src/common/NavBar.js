import React from "react";

const NavBar = ({ children }) => {
  return (
    <div className="w-full top-0 px-6 py-8 bg-[#605DEC] h-56 rounded-b-2xl sm:py-10 sm:h-80">
      <div className="flex justify-between items-center">
        <h1 className="px-5 text-2xl font-semibold break-words text-slate-50 ">Search Flights</h1>
        <div className="text-xl p-2">🔒</div>
      </div>
      {/* <SearchPage /> */}
      {/* <Flights /> */}
      {children}
    </div>
  );
};

export default NavBar;

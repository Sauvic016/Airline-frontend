import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../common/NavBar";
// import FlightDetailsCard from "../../components/FlightDetailsCard";
import Footer from "../../Footer";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Flights from "../FlightsListPage/Flights";

// import SearchPage from "../SearchPage/SearchPage";

const Home = () => {
  return (
    <>
      <NavBar>
        <Outlet />
      </NavBar>
      <Footer />
    </>
  );
};

export default Home;

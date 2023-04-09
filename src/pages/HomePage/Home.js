import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../common/NavBar";
import Footer from "../../Footer";

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

import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css"; // Import CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          <h1 className="text-xl">Welcome to</h1>
          <div className="text-white font-bold text-5xl circle-text">Ezflights</div>
          <p className="p-2">Your one-stop destination for hassle-free travel.</p>
          <Link to="/home" className="btn btn-primary pt-4 mt-4">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

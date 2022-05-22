import React from "react";
import { Link } from "react-router-dom";

import "./AboutStyles.css";

const About = () => {
  return (
    <div className="about-container container">
      <div className="about-content">
        <h2 className="about-title">About Devine Cooling</h2>
        <p className="about-desc">
          We are Devine Cooling. We build Cooling machines and install them for
          cold-room businesses. We also give advice on how to manage a cold room
          business effectively. At Devine Cooling, customer satisfaction is our
          top priority.{" "}
        </p>
        <Link to='/about'>
          <div className="btn about_btn" data-aos="zoom-in">Learn more</div>
        </Link>
      </div>
    </div>
  );
};

export default About;

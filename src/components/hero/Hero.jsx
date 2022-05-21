import React from "react";
import heroLeadImage from "../../assets/hero_img.png";

import "./HeroStyles.css";

const Hero = () => {
  return (
    <div className="hero-container container">
      <div className="leading-texts">
        <h3 className="lead-title">
          Invest in Coldroom Business with Devine Cooling
        </h3>
        <p className="lead-desc">
          We are Devine Cooling. We build Cooling machines and install them for
          cold-room businesses. We also give advice on how to manage a cold room
          business. At Devine Cooling, customer satisfaction is our top
          priority.
        </p>
        <span className="btn lead-btn">Consult Us</span>
      </div>

      {/* Image for the hero component */}
      <div
        className="leading-img"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img
          className="hero-leading-img"
          src={heroLeadImage}
          alt="This is the hero image"
        />
      </div>
    </div>
  );
};

export default Hero;

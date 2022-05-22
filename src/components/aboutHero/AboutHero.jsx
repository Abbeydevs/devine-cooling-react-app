import React from "react";

import "./AboutHero.css";

const About_hero = () => {
  return (
    <div className="about_hero container">
      <div className="about_hero_contents">
        <small>About us</small>
        <h3>
          We are <span>Devine Cooling</span>
        </h3>
        <p>
          We build Cooling machines and install them for cold-room businesses.
          We also give advice on how to manage a cold room business effectively.
          At Devine Cooling, customer satisfaction is our top priority
        </p>
      </div>
    </div>
  );
};

export default About_hero;

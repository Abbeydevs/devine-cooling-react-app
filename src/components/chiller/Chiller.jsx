import React from "react";
import chillerImage from "../../assets/chiller-machine.png";

import "./ChillerStyles.css";

const Chiller = () => {
  return (
    <div className="chiller-container container">
      <div className="left-img" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <img
          className="chiller-img"
          src={chillerImage}
          alt="The chiller picture"
        />
      </div>
      <div className="leading-texts">
        <h2 className="lead-title">Chiller Machine</h2>
        <p className="lead-desc">
          The Chiller is a machine built for the purpose of storage of different
          products whose storage or preservation life span increases when stored
          between (+5ºC to -5C) basically it removes heat from the produce.
        </p>
        <p className="btn-transparent learnmore">Learn more</p>
      </div>
    </div>
  );
};

export default Chiller;

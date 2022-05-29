import React from "react";

import "./CoreValues.css";

const CoreValues = () => {
  return (
    <div className="core-values">
      <h2>Core Values</h2>
      <div className="cv-cards">
        <div className="cards">
          <h4>Fidelity</h4>
          <small>
            We imply strict and continuing faithfulness to our obligation, trust
            and duty.
          </small>
        </div>
        <div className="cards">
          <h4>Accountable</h4>
          <small>
            We are accountable of all incidents, mistakes that occurs during production.
          </small>
        </div>
        <div className="cards">
          <h4>Time Cautious</h4>
          <small>
            We always on time with our services and product delivery.
          </small>
        </div>
        <div className="cards">
          <h4>Effectiveness</h4>
          <small>
            We provide excellent services and products.
          </small>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;

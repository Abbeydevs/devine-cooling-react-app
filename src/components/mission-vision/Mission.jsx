import React from "react";
import { GiTargeting } from "react-icons/gi";
import { FaTripadvisor } from "react-icons/fa";
import missionImg from "../../assets/mission-img.png";

import "./MissionStyles.css";

const Mission = () => {
  return (
    <div className="mission-vision">
      <div className="m-v-contents">
        <div className="mission-statements">
          <GiTargeting className="target-icon" />
          <h4>Our Mission</h4>
          <p>
            Our mission is to create a lasting and satisfactory for our
            customers both large and small institutions.
          </p>
        </div>
        <img
          src={missionImg}
          alt="This is the representation of the mission and vision statements"
        />
        <div className="vision-statements">
          <FaTripadvisor className="vision-icon"/>
          <h4>Our Vision</h4>
          <p>
            Our vision is to reach the global world and connect people to
            effective and satisfactory products without hassles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;

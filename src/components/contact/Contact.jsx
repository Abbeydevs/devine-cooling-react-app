import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import ladyImage from "../../assets/lady-img.png";
import { ExternalLink } from "react-external-link";

import "./ContactStyles.css";

const Contact = () => {
  return (
    <div className="contact container">
      <div className="left-lead">
        <h2 className="lead-title">
          Get in <span style={{ fontWeight: "500" }}>touch</span>
        </h2>
        <div className="address">
          <MdLocationOn className="locationIcon" />
          <p>2 Sonubi Street Alapere-ketu, Lagos</p>
        </div>
        <div className="mail">
          <ExternalLink href="mailto:info@devinecooling.com.ng">
            <MdMail className="mailIcon" />
            <p>info@devinecooling.com.ng</p>
          </ExternalLink>
        </div>
        <div className="call">
          <MdAddCall className="callIcon" />
          <ExternalLink href="tel:23490132060419">
            <p>+234 913 206 0419</p>
          </ExternalLink>
          <ExternalLink href="tel:2349012150698">
            <p>+234 901 215 0698</p>
          </ExternalLink>
        </div>
        <div className="time">
          <MdAccessTimeFilled className="timeIcon" />
          <p>9:00am - 6:00pm</p>
        </div>
      </div>

      <div className="lady_img">
        <img src={ladyImage} alt="This is the lady" />
      </div>
    </div>
  );
};

export default Contact;

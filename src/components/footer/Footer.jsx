import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

import "./FooterStyles.css";

const copyrightTime = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-contents">
        <div className="footer-leads">
          <h3 className="footer-title">Devine Cooling</h3>
          <small>Customer Satisfaction is our priority</small>

          {/* This is the social icons for the company */}
          <div className="socialIcons">
            <p className="follow-text">Follow us</p>
            <ExternalLink href="https://facebook.com">
              <MdFacebook className="icons" />
            </ExternalLink>
            <ExternalLink href="https://facebook.com">
              <FaTwitter className="icons" />
            </ExternalLink>
            <ExternalLink href="https://facebook.com">
              <AiFillInstagram className="icons" />
            </ExternalLink>
          </div>
        </div>

        <div className="footer-links">
          <ul>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <p className="copyright">
        {" "}
        &copy; {copyrightTime} Devine Cooling. All rights reserved. Website
        developed by
        <ExternalLink href="https://instagram.com/abbeydev_">
          <span> Abbeydev</span>
        </ExternalLink>
      </p>
    </footer>
  );
};

export default Footer;

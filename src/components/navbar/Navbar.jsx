import React, { useState } from "react";
// import { MdMenu } from "react-icons/md";
// import {MdClose} from "react-icons/md"
import { Link } from "react-router-dom";
import companyLogo from "../../assets/logo.png";
import Hamburger from "hamburger-react";

import "./NavbarStyles.css";

const Navbar = () => {

  // Settings mobile nav
  const [click, setClick] = useState(false);
  const handleNavClick = () => setClick(!click);

  // Change nav color when scrolling
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if(window.scrollY > 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? "header header-scroll" : "header"}>
      <Link to="/">
        <img className="logo" src={companyLogo} alt="Company logo" />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about_us">About us</Link>
        </li>
        <Link to={"/book-us"}>
          <p className="btn book-btn">Book now</p>
        </Link>
      </ul>
      {/* Navbar open icon */}
      <div className="nav-open-icon" onClick={handleNavClick}>
        {click ? <Hamburger size={25} /> : <Hamburger size={25} />}
      </div>
    </div>
  );
};

export default Navbar;

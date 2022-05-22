import React, {useState} from "react";
import { MdMenu } from "react-icons/md";
import {MdClose} from "react-icons/md"
import { Link } from "react-router-dom";
import companyLogo from '../../assets/logo.png';

import "./NavbarStyles.css";

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleNavClick = () => setClick(!click)


  return (
    <div className="header container">
      <Link to="/">
        <img className="logo" src={companyLogo} alt="Company logo" />
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
      {click ? (<MdClose style={{color: '#12048c'}} />) : (<MdMenu />)}
        
      </div>
    </div>
  );
};

export default Navbar;

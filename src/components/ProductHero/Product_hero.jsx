import React from "react";
import { Link } from "react-router-dom";

import './Product_hero.css'




const Product_hero = () => {
  return (
    <div className="product-hero container">
      <div className="productHero-contents">
        <h3>Check out our Products Catalogue</h3>
        <p>
          All products don’t come with prices because price is based on
          customer’s needs. Kindly book a quote to earn more.
        </p>
        <Link to="/book-us">
          <div className="btn-transparent">Book a quote</div>
        </Link>
      </div>
    </div>
  );
};

export default Product_hero;

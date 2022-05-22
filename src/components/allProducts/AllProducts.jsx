import React from "react";
import chillerMachine from "../../assets/hero_img.png";
import blastMachine from "../../assets/blast_freezer.png";
import containerStorageMachine from "../../assets/container-storage.png";

import "./AllProducts.css";

const AllProducts = () => {
  return (
    <div className="all-products">

      <div className="product">
        <div className="product-lead-texts">
          <h4>Chiller Machine</h4>
          <p>
            The chiller is a machine built for the purpose of storage of
            difference produce or product whose storage or preservation life
            span increase when stored between (+5ºc to -5ºc) basically it
            removes heat from the produce.
          </p>

          <div className="product-btn">
            <div className="btn-transparent p-btns">Learn more</div>
            <div className="btn p-btns">Get price</div>
          </div>
        </div>

        <div className="machine">
          <img src={chillerMachine} alt="This is a Chiller Machine" />
        </div>
      </div>

      {/* The divider */}
      <div className="product-divider"></div>

      <div className="product2">
        <div className="machine">
          <img src={blastMachine} alt="This is a Chiller Machine" />
        </div>

        <div className="product-lead-texts">
          <h4>Blast Freezer</h4>
          <p>
            The chiller is a machine built for the purpose of storage of
            difference produce or product whose storage or preservation life
            span increase when stored between (+5ºc to -5ºc) basically it
            removes heat from the produce.
          </p>

          <div className="product-btn">
            <div className="btn-transparent p-btns">Learn more</div>
            <div className="btn p-btns">Get price</div>
          </div>
        </div>
      </div>

      {/* The divider */}
      <div className="product-divider"></div>

      <div className="product">
        <div className="product-lead-texts">
          <h4>Container Storage</h4>
          <p>
            The chiller is a machine built for the purpose of storage of
            difference produce or product whose storage or preservation life
            span increase when stored between (+5ºc to -5ºc) basically it
            removes heat from the produce.
          </p>

          <div className="product-btn">
            <div className="btn-transparent p-btns">Learn more</div>
            <div className="btn p-btns">Get price</div>
          </div>
        </div>

        <div className="machine">
          <img src={containerStorageMachine} alt="This is a Chiller Machine" />
        </div>
      </div>

    </div>
  );
};

export default AllProducts;

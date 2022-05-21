import React, { useRef, useState } from "react";
import firstSliderImage from "../../assets/project-img1.png";
import secondSliderImage from "../../assets/project-img2.png";
import thirdSliderImage from "../../assets/project-img3.png";

// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ProjectStyles.css";

const data = [
  {
    image: firstSliderImage,
    name: "Micheal Storage & Co.",
  },

  {
    image: secondSliderImage,
    name: "Blue Lines Ltd.",
  },

  {
    image: thirdSliderImage,
    name: "Femi Coldroom and Enterprise.",
  },
];

const Project = () => {
  return (
    <div className="project-container container">
      <div className="divider"></div>
      <div className="lead-texts">
        <h2 className="lead-title">Projects we have executed</h2>
        <p className="lead-desc">
          All these projects were executed by Devine Cooling and partners and/or
          staffs.
        </p>
      </div>

      <Swiper
        className="carousel"
        // install Swiper modules
        modules={[Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ dynamicBullets: true, clickable: true }}
      >
        {data.map(({ image, name }, index) => {
          return (
            <SwiperSlide key={index} className="slider1">
              <span className="company_name">{name}</span>
              <img
                className="slider1_img"
                src={image}
                alt="This is the first slide Image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Project;

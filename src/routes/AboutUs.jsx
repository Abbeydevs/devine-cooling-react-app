import React from "react";
import AboutHero from "../components/aboutHero/AboutHero";
import Footer from "../components/footer/Footer";
import Mission from "../components/mission-vision/Mission";
import Navbar from "../components/navbar/Navbar";

const About_us = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <Mission />
      <Footer />
    </div>
  );
};

export default About_us;

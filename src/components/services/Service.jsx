import React from "react";
import { ExternalLink } from 'react-external-link';

import "./ServiceStyles.css";

const Service = () => {
  return (
    <div className="service-container container">
      <h2 className="leading-text">Our Services</h2>
      <div className="service-columns">
        <div
          className="sales column"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h4>Sales</h4>
          <p>
            We sell components parts, compressor, complete condensing unit, and
            also provide importation services for our clients depending on the
            components or machine in question.
          </p>
          <p className="btn btn-linear col-btn">Buy now</p>
        </div>
        <div
          className="installation column"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h4>Installation</h4>
          <p>
            We also provide complete installation services of machine bought
            from us, using the best quality of materials and also provide
            additional components in some cases for maintenance purposes. We
            build both small and large coldrooms. Basically we build base on
            customers request.
          </p>
          <p className="btn btn-linear col-btn">Get Quote</p>
        </div>
        <div
          className="consultancy column"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h4>Consultancy</h4>
          <p>
            For customers looking to invest into coldroom business either for
            retail or wholesale or those in the pharmaceutical looking to store
            drugs at a particular temperature, Also are you looking at chilling
            your drinks in large quantity or you want to store your yoghurt at a
            certain temperature at devinecooling we offer you the best of advice
            and also guild you in the machine to purchase depending on your
            choice of business.
          </p>
          <ExternalLink href="https://wa.me/message/PVQSYCLYVS45C1"><p className="btn btn-linear col-btn">Chat us now</p></ExternalLink>
        </div>
        <div
          className="design column"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h4>Design</h4>
          <p>
            For every of our machine built both small or big we offer designs
            services for our clients to have a general overview of the machine
            to be built.
          </p>
          <p className="btn btn-linear col-btn">Get Quote</p>
        </div>
      </div>
    </div>
  );
};

export default Service;

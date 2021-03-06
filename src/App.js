import React, { useEffect } from "react";
import {Routes, Route} from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";


import Home from './routes/Home';
import AboutUs from "./routes/AboutUs";
import Products from "./routes/Products";
import BookUs from "./routes/BookUs";

function App() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/book-us" element={<BookUs />} />
      </Routes>
    </>
  );
}

export default App;

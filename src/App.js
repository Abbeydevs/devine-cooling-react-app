import React, { useEffect } from "react";
import {Routes, Route} from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";


import Home from './routes/Home';
import About_Us from "./routes/About_Us";
import Products from "./routes/Products";

function App() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_Us" element={<About_Us />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;

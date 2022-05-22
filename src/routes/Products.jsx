import React from 'react'
import AllProducts from '../components/allProducts/AllProducts'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import ProductHero from '../components/ProductHero/ProductHero'

const Products = () => {
  return (
    <div>
        <Navbar />
        <ProductHero />
        <AllProducts />
        <Footer />
    </div>
  )
}

export default Products
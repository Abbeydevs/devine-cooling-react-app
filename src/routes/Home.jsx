import React from 'react'
import About from '../components/about/About'
import Chiller from '../components/chiller/Chiller'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Project from '../components/projects/Project'
import Service from '../components/services/Service'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Service />
        <Chiller />
        <Project />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
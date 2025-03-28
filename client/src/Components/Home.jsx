import React from 'react'
import Hero from './Hero'
import Navbar from './NavBar'
import PartenaireCaroussel from './PartenaireCaroussel'
import ComparateurAssurance from './ComparateurAssurance'
import About from './About'
import Footer from './Footer'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <ComparateurAssurance/>
        <About/>
        <PartenaireCaroussel/>
        <Footer/>

    </div>
  )
}

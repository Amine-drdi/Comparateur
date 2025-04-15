import React from 'react'
import Hero from '../../Components/Home/Hero'
 import PartenaireCaroussel from '../../Components/Home/PartenaireCaroussel'
import ComparateurAssurance from '../../Components/mutuelle-sante/health insurance/ComparateurAssurance'
import About from '../../Components/Home/About'
 
 const Home = () => {
  return (
    <div>
         <Hero/>
        <ComparateurAssurance/>
        <About/>
        <PartenaireCaroussel/>
 
    </div>
  )
}

export default Home;


import React from 'react'
import Hero from '../Components/Hero'
 import PartenaireCaroussel from '../Components/PartenaireCaroussel'
import ComparateurAssurance from '../Components/ComparateurAssurance'
import About from '../Components/About'
 
export const Home = () => {
  return (
    <div>
         <Hero/>
        <ComparateurAssurance/>
        <About/>
        <PartenaireCaroussel/>
 
    </div>
  )
}

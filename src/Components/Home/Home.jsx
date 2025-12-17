import React from 'react'
import HeroBanner from './HeroBanner'
import AboutSection from './AboutSection'
import Features from './Features'
import Testimonials from './TestiMonials'

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Features></Features>
      <AboutSection></AboutSection>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home
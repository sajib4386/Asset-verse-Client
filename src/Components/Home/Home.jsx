import React from 'react'
import HeroBanner from './HeroBanner'
import AboutSection from './AboutSection'
import Features from './Features'
import Testimonials from './TestiMonials'
import HowItWorks from './ExtraSection/HowitWorks'
import FAQSection from './ExtraSection/FaqSection'
import ContactCTA from './ExtraSection/ContactCTA'
import PackagesSection from './PackagesSection'

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <AboutSection></AboutSection>
      <PackagesSection></PackagesSection>
      <Features></Features>
      <Testimonials></Testimonials>
      <HowItWorks></HowItWorks>
      <FAQSection></FAQSection>
      <ContactCTA></ContactCTA>
    </div>
  )
}

export default Home
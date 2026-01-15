import React from 'react'
import HeroBanner from './HeroBanner'
import AboutSection from './AboutSection'
import Features from './Features'
import Testimonials from './TestiMonials'
import HowItWorks from './ExtraSection/HowitWorks'
import FAQSection from './ExtraSection/FaqSection'
import ContactCTA from './ExtraSection/ContactCTA'
import PackagesSection from './PackagesSection'
import ServiceSection from './ServiceSection'

const Home = () => {
  return (
    <div className='bg-[#f3faff]'>
      <HeroBanner></HeroBanner>
      <AboutSection></AboutSection>
      <PackagesSection></PackagesSection>
      <Features></Features>
      <ServiceSection></ServiceSection>
      <Testimonials></Testimonials>
      <HowItWorks></HowItWorks>
      <FAQSection></FAQSection>
      <ContactCTA></ContactCTA>
    </div>
  )
}

export default Home
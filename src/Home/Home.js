import React from 'react'
import HeroSection from '../components/heroSection/HeroSection'
import CategoriesSection from '../components/categoriesSection/CategoriesSection'
import FeaturedProducts from '../components/featuredProducts/FeaturedProducts'
import Feedback from '../components/testimonials/Testimonials'
import Testimonials from '../components/testimonials/Testimonials'
import Contact from '../components/contact/Contact'
import Accordion from '../components/accordion/Accordion'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <CategoriesSection/>
      <FeaturedProducts />
     <Testimonials/>

    <Contact />
    <Accordion />
    </div>
  )
}

export default Home

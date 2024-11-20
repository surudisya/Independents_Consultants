import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Cards from '../Cards/Cards'
import ContactForm from '../ContactForm/ContactForm'
import Testimonials from '../Testimonials/Testimonials'
import Founder from '../Founder/Founder'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Cards />
        <Founder/>
        <Testimonials/>

        <ContactForm />

    </div>
  )
}

export default Home



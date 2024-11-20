import React from 'react'
import '../Profile/Profile.css'
import vijay from '../../../assets/vijay.jpeg'



export const Profile = () => {
  return (
    <div className='testimonials'>
        <img src={vijay} alt="testimonial_image" className='testimonial__image'/>
        <h3 className='testimonial__name'>Vijay</h3>
        <h4 className='testimonial__foundation'>Founder & President of TVK</h4>
        <q className='quote2'>Independens Consulants is an awesome company for software consulting and services. Keep rocking!</q>
    </div>
  )
}

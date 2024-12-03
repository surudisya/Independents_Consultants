import React from 'react'
import './Founder.css'
// import founder from '../../assets/kisan_anna_profile.jpeg'
import owner from '../../assets/kishan_anna_profile.jpeg'


const Founder = () => {
  return (
    <div className=' container founder__block' id="aboutus">
        <div className="founder">
            <div className="founder__header">        
                <q className='quote'>
                     You will pay far less than you’d ever imagined for a service that delivers more than you dreamt it could
                </q>            
                <h3 className="founder__heading">Kishanthan Poobalan</h3>
                <h4 className='founder__name'>Founder & CEO of Independents Consultant</h4>
                <a href="#contact">
                  <button className="btn btn--outline btn--oval talk ">Let's talk </button>
                </a>
            </div>
            <div className="founder__photo">
                <img src={owner} alt="CEO Profile" className='profile' />
                <div className="colors color-one"></div>
                <div className="colors color-two"></div>
                <div className="colors color-three"></div>
            </div>
            
        </div>
    </div>
  )
}

export default Founder
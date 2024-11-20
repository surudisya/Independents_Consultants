import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import video from '../../assets/video.mp4'

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-cards';

import './Hero.css'
import { Pagination, EffectCards } from 'swiper/modules';

import ExpandingCards from '../ExpandingCards/ExpandingCards'
import MobileCards from '../ExpandingCards/MobileCards';
import WebCards from '../ExpandingCards/WebCards';


const Hero = () => {

  return (
    <div className='hero' id='#'>
   {/* <video src={video} className='video'></video> */}
      <div className="layer"></div>
      
      <div className='container hero__header'>
        <h1 className="hero__heading">Empower The World With Us</h1>
        <h3 className="hero__heading_small">Connect With Us</h3>
        <a href="#contact">
          <button className='btn btn--primary btn--oval btn__start'>Get Started</button>
        </a>
      </div>
      
      {/* <div className='hero__images'> */}

        {/* <ExpandingCards /> */}

      {/* </div>  */}



    </div>
  )
}

export default Hero
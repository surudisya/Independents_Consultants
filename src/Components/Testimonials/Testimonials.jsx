import './Testimonials.css'

import React, { useState, useEffect } from 'react';

import './MobileVersion.css'
import './WebVersion.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Pagination, EffectCards } from 'swiper/modules';

import WebVersion from './WebVersion.jsx';
import MobileVersion from './MobileVersion.jsx';

const Testimonials = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);


  return (
    <div className='block2' id='testimonials'>
        <div className="container2">
            <div className="block__header">
                <h2 className="block__heading">
                    See what others says about our services
                </h2>
                <div className="testimonials">
                      {isMobile ? (
                          <WebVersion/>
                        ):
                        (
                          <MobileVersion/>
                          
                        )}
                </div>
            </div>
        </div>
     </div>
  )
}

export default Testimonials











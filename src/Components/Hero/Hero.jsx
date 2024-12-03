// import React, { useState, useEffect } from 'react';
// import './Hero.css' 

// const Hero = () => {

//   return (
//     <div className='hero' id='#'>

//       <div className="layer"></div>
      
//       <div className='container hero__header'>
//         <h1 className="hero__heading">Empower The World With Us</h1>
//         <h3 className="hero__heading_small">Connect With Us</h3>
//         <a href="#contact">
//           <button className='btn btn--primary btn--oval btn__start'>Get Started</button>
//         </a>
//       </div>
//     </div>
//   )
// }

// export default Hero

// import React, { useEffect } from 'react';
// import './Hero.css';
// import background from '../../assets/bacground rcm.webp'


// const Hero = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const heroElement = document.querySelector('.hero');
//       const scrollPosition = window.scrollY;
//       heroElement.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className='hero'
//       id="#"
//     >
//       <div className="layer"></div>
//       <div className='container hero__header'>
//         <h1 className="hero__heading">Empower The World With Us</h1>
//         {/* <h3 className="hero__heading_small">Connect With Us</h3> */}
//         <a href="#contact">
//           <button className='btn btn--primary btn--oval btn__start'>Get Started</button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const layers = document.querySelectorAll('.parallax-layer');
      const scrollPosition = window.scrollY;

      layers.forEach((layer, index) => {
        const depth = index * 0.2; // Adjust depth for each layer
        layer.style.transform = `translateY(${scrollPosition * depth}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <>
  
    <div className="parallax">
      <div className="parallax__item item-1 "></div>
      <div className="parallax__item item-2 "></div>
      <div className="parallax__item item-3 "></div>
      <div className="parallax__item item-4 "></div>
    </div>
    
    <div className="hero">
      {/* Background Layer */}
      { <div
        className="parallax-layer parallax-layer--back"
        ></div> }

      {/* Middle Layer */}
      { <div
        className="parallax-layer parallax-layer--middle"

        ></div> }

      {/* Foreground Layer */}
      <div
        className="parallax-layer parallax-layer--front"

      ></div> 

      <div className="hero__content">
        <h1 className="hero__heading">Empower The World With Us</h1>
        {/* <h3 className="hero__subheading">Scroll to Explore</h3> */}
        <a href="#contact">
          <button className="btn btn--primary btn--oval">Get Started</button>
        </a>
      </div>
    </div>
  </>
  );
};

export default Hero;

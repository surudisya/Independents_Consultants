import React from 'react'
import './Mission.css'

const Mission = () => {
  return (
    <>
    <div className='picture'>
      <div className="layer"></div>
      <div className='picture__text'>
        <div className='container mission__container'>
          <h2 className="mission__heading">Mission</h2>
          <p className="container mission__text">
          To empower businesses through innovative and reliable IT solutions,
           enhancing operational efficiency and driving digital transformation. We strive to deliver exceptional customer service, 
          leveraging cutting-edge technology and industry expertise to meet the evolving needs of our clients.
          </p>
        </div>
        <div className='container mission__container'>
          <h2 className="vission__heading">Vision</h2>
          <p className="vission__text">
          To be a trusted global leader in IT services, transforming how 
          businesses harness technology to achieve their goals and shape a smarter, more connected world.
          </p>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Mission
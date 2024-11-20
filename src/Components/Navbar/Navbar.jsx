import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { motion } from "framer-motion"

import './Navbar.css'
import '../../index.css'
import logo from '../../assets/Logo2.png'
import menu from '../../assets/menu.png'

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    } 

  return (  

        <nav className='container'>
            <img src={logo} alt="Company Logo" className='logo' />
              <ul className={mobileMenu?'' : 'hide-mobile-menu'}>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/service">Services</Link>
                  </li>
                  <li>
                      <Link to="/">About Us</Link>
                  </li>
                  <li>
                      <Link to="/services">Testimonials</Link>
                  </li>
                  <li><a href="#contact"><button className="btn btn--primary">Get in Touch</button></a></li>
                </ul>
            <img src={menu} alt="menu" className='menu' onClick={toggleMenu} />
        </nav>


  )
}

export default Navbar
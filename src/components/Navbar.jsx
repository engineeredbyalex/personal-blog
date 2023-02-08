import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
// importing styling
import "./Navbar.css"
// importing link
import { Link } from 'react-router-dom'
// importing icons
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <h2>Alex Lazarescu</h2>
        </div>
        <ul className='nav_list'>
            <Link to="/">
            <h3 className='underline-animation'>Home</h3>
            </Link>
            <Link to="/projects">
            <h3 className='underline-animation'>Projects</h3>
            </Link>
            <Link to="/about">
            <h3 className='underline-animation'>About</h3>
            </Link>
              <Link to="/contact">
            <h3 className='underline-animation'>Contact</h3>
            </Link>
        </ul>
        <ul className='contact_list'>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100007294265650"><AiFillFacebook/></a>
          <a target="_blank" href="https://www.instagram.com/nusuntlaza/"><AiFillInstagram/></a>
          <a target="_blank" href="https://www.linkedin.com/in/alexandru-lazarescu-784031252/"><AiFillLinkedin/></a>
        </ul>
    </nav>
  )
}

export default Navbar

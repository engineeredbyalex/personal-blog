import React from 'react'
// importing styling
import "./Navbar.css"
// importing link
import { Link } from 'react-router-dom'
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
        </ul>
    </nav>
  )
}

export default Navbar

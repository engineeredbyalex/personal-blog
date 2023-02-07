import React from "react"
// importing images
import ProfileImg from "../assets/images/profile.jpeg"
// importing styles
import "./Home.css"
// importing framer motion
import { motion } from "framer-motion"
// import link
import { Link } from "react-router-dom"
function Home() {
  return (
    <div className="container">
        <div className="image-container">
          <img src={ProfileImg}/>
        </div>
        <div className="about-me-text-container">
          <h2>Hello! My name is Alex</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum rerum quae laudantium unde dolorum explicabo consectetur facilis eos dolore.</h3>
        </div>
        <motion.div className="find-more-btn">
          <Link to="/about"><h3>Find More</h3></Link>
        </motion.div>
    </div>
  )
}

export default Home
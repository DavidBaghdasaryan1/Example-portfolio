import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"
import "../styles/footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaGithub />
            <FaLinkedin />
        </div>
        <p> &copy; 2024 portfolio.com</p>
    </div>
  )
}

export default Footer
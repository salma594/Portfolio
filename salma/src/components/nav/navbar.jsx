import React from 'react'
import Toggle from '../Toggles/Toggle'
import './navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">SALMA </div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                    <li>Home</li>
                </Link>
                <Link to="services" spy={true} smooth={true}>
                    <li>Services</li>
                </Link>
                <Link to="experience" spy={true} smooth={true}>
                    <li>Experience</li>
                </Link>
                <Link to="portfolio" spy={true} smooth={true}>
                    <li>Portfolio</li>
                </Link> 
                <Link to="Info" spy={true} smooth={true}>
                    <li>Info</li>
                </Link>
                    
                </ul>
            </div>
            <Link to="contact" spy={true} smooth={true}>
            <button className="button n-button">
                Contact
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
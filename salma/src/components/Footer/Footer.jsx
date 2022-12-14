import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Github from "../../img/github.png";

const Footer = () => {
  return (
    <div className="footer" id='Info'>
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className='f-content'>
        
        <div className="i-cons">
          <a href="https://github.com/salma594" target="_blank ">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/salma-saidi-312a71249/" target="_blank ">
            <img src={Linkedin} alt="" style={{size:"18rem"}}/>
          </a>
          <a href="https://www.instagram.com/ssaidik1/?hl=fr" target="_blank ">
            <img src={Instagram} alt="" />
          </a>
        </div>
        </div>
    </div>
  )
}

export default Footer
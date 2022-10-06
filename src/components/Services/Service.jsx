import React from 'react'
import './Service.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Cards/Card'
import Resume from './resume.pdf'
const Service = () => {
  return (
   <div className="services">
    {/* left side */}
    <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>This is the services available with the best quality 
            <br/>
            as a web developer and computer science engineer 
            </span>
            <a href={Resume} download>

            <button className='button s-button'>Dawnload CV</button> 
            </a>
        
        <div className='blur s-blurl'
        style={{background:"var(--blueCard)"}}>

        </div>
    </div>
    
    {/* right side */}
    <div className="cards">
        
        <div style={{left: '22rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'English'}
            detail={"Fluent communicator in English with a TOEFL certificate"}
            />
        </div>
        {/* second card */}
        <div style={{top:"12rem", left:"2rem"}}>
            <Card
            emoji={Glasses}
            heading={"Web-Developer"}
            detail={"Html, Css, Javasript,React"}
            />
        </div>
        <div style={{top: '21rem',left:'20rem'}}>
            <Card
            emoji={Humble}
            heading={"Junior UI/UX"}
            detail={"Help to improve small business owners"}
            />
        </div>
        <div className="blur s-blur2"
        style={{background:"var(--purple)"}}>
        </div>
    </div>
   </div>
  )
}

export default Service
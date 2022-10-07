import React, {useContext} from 'react'
import './Service.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Cards/Card'
import Resume from './resume.pdf'
import { themeContext } from "../../Context";
import { motion } from "framer-motion"
const Service = () => {
    //context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    //transition
    const transition = {
        duration: 1,
        type: "spring",
      };
  return (
   <div className="services" id='services'>
    {/* left side */}
    <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
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
        
        <motion.div 
        initial={{ left: "25rem" }}
        whileInView={{ left: "14rem" }}
        transition={transition}
        style={{left: '22rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'English'}
            detail={"Fluent communicator in English with a TOEFL certificate"}
            />
        </motion.div>
        {/* second card */}
        <motion.div 
          initial={{ left: "-2rem", top: "15rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        style={{top:"12rem", left:"2rem"}}>
            <Card
            emoji={Glasses}
            heading={"Web-Developer"}
            detail={"Html, Css, BooStrap, Javasript,React"}
            />
        </motion.div>
        {/* third card */}
        <motion.div 
         initial={{ top: "21rem", left: "20rem" }}
         whileInView={{ left: "12rem" }}
         transition={transition}
        style={{top: '21rem',left:'20rem'}}>
            <Card
            emoji={Humble}
            heading={"Junior UI/UX"}
            detail={"Help to improve small business owners"}
            />
        </motion.div>
        <div className="blur s-blur2"
        style={{background:"var(--purple)"}}>
        </div>
    </div>
   </div>
  )
}

export default Service
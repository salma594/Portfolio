import React, {useContext} from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";

import SquadFree from '../../img/squadfree.PNG'
import GreenOffice from '../../img/greenoffice.PNG'
import Fishships from '../../img/fish&ship.PNG'
import Devinette from '../../img/devinette.PNG'
import { themeContext } from "../../Context"; 


const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='portfolio'>
        {/* heading */}
        <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
        <span>Portfolio</span> 
        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://salma594.github.io/squadfree/" target="_blank ">
          <img src={ SquadFree} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://salma594.github.io/Fish-chips/" target="_blank ">
          <img src={Fishships} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://salma594.github.io/Maquette1/" target="_blank ">
          <img src={GreenOffice} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://salma594.github.io/Jeux-Devinette/" target="_blank ">
          <img src={Devinette} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
       
      
            
            

    
    </div>
    
  )
}

export default Portfolio
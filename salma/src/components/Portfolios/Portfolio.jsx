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
          <img src={SquadFree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fishships} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GreenOffice} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Devinette} alt="" />
        </SwiperSlide>
      </Swiper>
       
      
            
            

    
    </div>
    
  )
}

export default Portfolio
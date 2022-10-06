import React, {useContext} from 'react'
import './Portfolio.css'
import Swiper from 'swiper';
import 'swiper/css'
import SquadFree from '../../img/squadfree.png'
import GreenOffice from '../../img/greenoffice.png'
import Fishships from '../../img/fish&ships.png'
import Devinette from '../../img/devinette.png'


const Portfolio = () => {
  return (
    <div className="portfolio">
        {/* heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper>
            <SwiperSlide>
                <img src={SquadFree} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={GreenOffice} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Fishships} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Devinette} alt="" />
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio
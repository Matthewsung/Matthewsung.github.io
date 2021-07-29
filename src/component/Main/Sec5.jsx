import React,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Pagination,Navigation} from 'swiper/core';

// styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./Sec5.css";
const Sec5 = ()=>{
  SwiperCore.use([Pagination,Navigation]);

  return(
    <section className="sec_5">
      <div className="w_1440">
        <h1>React Mini Project</h1>

        <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{"clickable": true}} navigation={true} className="mySwiper">
          <SwiperSlide><img src="img/loto.png" alt="" /></SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Sec5
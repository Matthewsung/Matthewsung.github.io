import React,{ useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Pagination,Navigation} from 'swiper/core';
import Slide from './Slide'

// styles 불러오기
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./Sec5.css";
const swiperOption=[
  {
    id:1,
    title:'구구단',
    url:'img/gugudan.png',
    desc:""
  },
  {
    id:2,
    title:'끝말잇기',
    url:'img/wordrelay.png',
    desc:""
  },
  {
    id:3,
    title:'숫자 야구',
    url:'img/numberbaseball.png',
    desc:""
  },
  {
    id:4,
    title:'반응속도 체크',
    url:'img/responsechk.png',
    desc:""
  },
  {
    id:5,
    title:'가위바위보',
    url:'img/rock.png',
    desc:""
  },
  {
    id:6,
    title:'로또 번호 추첨기',
    url:'img/loto.png',
    desc:""
  },
  {
    id:7,
    title:'틱택토게임',
    url:'img/ticktackto.png',
    desc:""
  },
]
const Sec5 = ()=>{
  SwiperCore.use([Pagination,Navigation]);

  return(
    <section className="sec_5">
      <div className="w_1440">
        <h1>React Mini Project</h1>

        <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{"clickable": true}} navigation={true} className="mySwiper">
          {swiperOption.map((v,i) => {
            // console.log("슬라이드" + v.id)
            return (
              <SwiperSlide key={v.id }>
                <Slide key={"슬라이드_" + v.id} index={i} swiperOption={v} />
              </SwiperSlide>
            )
          } )}
        </Swiper>
      </div>
    </section>
  )
}

export default Sec5
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Pagination,Navigation} from 'swiper/core';
import Slide from './sub/Slide'

// styles 불러오기
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./ReactSmall.css";
const swiperOption=[
  {
    id:1,
    title:'구구단',
    url:'img/gugudan.png',
    desc:"1부터 9까지의 두개의 랜덤의 수를 곱한 값 맞추는 게임"
  },
  {
    id:2,
    title:'끝말잇기',
    url:'img/wordrelay.png',
    desc:"마지막 글자와 첫글자가 같은 단어를 이어가는 끝말잇기 게임"
  },
  {
    id:3,
    title:'숫자 야구',
    url:'img/numberbaseball.png',
    desc:"4자리의 숫자와 순서를 맞추는 숫자야구 게임"
  },
  {
    id:4,
    title:'반응속도 체크',
    url:'img/responsechk.png',
    desc:"랜덤한 초에 변하는 박스를 클릭하여 반응속도를 체크"
  },
  {
    id:5,
    title:'가위바위보',
    url:'img/rock.png',
    desc:"컴퓨터와 가위바위보 게임을 통해 점수를 구하는 게임"
  },
  {
    id:6,
    title:'로또 번호 추첨기',
    url:'img/loto.png',
    desc:"인생 역전의 발판이 될 로또 번호 추첨기"
  },
  {
    id:7,
    title:'틱택토게임',
    url:'img/ticktackto.png',
    desc:"먼저 3개의 칸을 연속으로 선택한 플레이어가 승리하는 게임"
  },
]
const ReactSmall = ()=>{
  SwiperCore.use([Pagination,Navigation]);

  return(
    <section className="sec_5">
      <div className="w_1200">
        <header className="main_header">
          <p>REACT MINI PROJECT</p>
        </header>
        <Swiper 
          slidesPerView={3} 
          spaceBetween={30} 
          slidesPerGroup={3} 
          loop={true} 
          loopFillGroupWithBlank={true} 
          pagination={{"clickable": true}} 
          navigation={true} className="mySwiper"
        >
          {
            swiperOption.map((v,i) => {
              return (
                  <SwiperSlide 
                    data-key={`Slide_${v.id}`} 
                    key={`${v.id}_SwiperSlide_${i}`}
                  >
                    <Slide 
                      key={`slide_${v.id}_${i}`}
                      swiperOption={v} 
                    />
                  </SwiperSlide>
                )
              }
            )
          }
        </Swiper>
      </div>
    </section>
  )
}

export default ReactSmall
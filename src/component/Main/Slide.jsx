import { useEffect } from "react";
import {  SwiperSlide } from "swiper/react";

const Slide = ({ swiperOption}) => {
  
  return(
      <div className="item_box" data-key={`item_box_${swiperOption.id}`}>
        <div data-key={`title_${swiperOption.id}`} className="slide_title">{swiperOption.title}</div>
          <div className="img_box" data-key={`img_box_${swiperOption.id}`}>
            <img src={swiperOption.url} alt={swiperOption.title} data-key={`img_${swiperOption.id}`} />
          </div>
        <div className="slide_desc" data-key={`desc_${swiperOption.id}`}>{swiperOption.desc}</div>
        <button data-key={`btn_${swiperOption.id}`} className="chk_code">코드 보러가기</button>
      </div>
  )
}
export default Slide
const Slide = ({ swiperOption}) => {
  return(
      <div className="item_box" key={`item_box_${swiperOption.id}`}>
        <div key={`title_${swiperOption.id}`} className="slide_title">{swiperOption.title}</div>
          <div className="img_box" key={`img_box_${swiperOption.id}`}>
            <img src={swiperOption.url} alt={swiperOption.title} key={`img_${swiperOption.id}`} />
          </div>
        <div className="slide_desc" key={`desc_${swiperOption.id}`}>{swiperOption.desc}</div>
        <button className="chk_code">코드 보러가기</button>
      </div>
  )
}
export default Slide
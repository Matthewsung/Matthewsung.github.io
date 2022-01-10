
const Slide = ({ swiperOption}) => {
  
  return(
      <div className="item_box" >
        <div className="slide_title"
        >
          {swiperOption.title}
        </div>
        <div className="img_box" >
          <img 
            src={swiperOption.url}
            alt={swiperOption.title} 
          />
        </div>
        <div className="slide_desc" >
          {swiperOption.desc}
        </div>
          <button className="chk_code">
          <a 
            href="https://github.com/Matthewsung/react"
            target="_blank"
            rel="noreferrer"
          >
            코드 보러가기
          </a>
        </button>
      </div>
  )
}
export default Slide
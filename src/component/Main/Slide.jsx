const Slide = ({index, swiperOption}) => {
console.log(swiperOption.id+"desc")
  return(
      <div className="item_box" key={"item_box_"+ swiperOption.id}>
        <h1 key={"title_"+ swiperOption.id}>{swiperOption.title}</h1>
          <div className="img_box" key={"img_box_"+ swiperOption.id}>
            <img src={swiperOption.url} alt={swiperOption.title} key={"img_"+ swiperOption.id} />
          </div>
        <div className="description" key={"desc_"+ swiperOption.id}>{swiperOption.desc}</div>
      </div>
  )
}
export default Slide
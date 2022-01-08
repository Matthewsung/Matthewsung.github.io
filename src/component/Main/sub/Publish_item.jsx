import React from 'react'
import './Publish_item.css'
const skillImg = [
  {
    type: 'html',
    url: 'url(img/html.png) no-repeat center / cover',
  },
  {
    type: 'css',
    url: 'url(img/css.png) no-repeat center / cover',
  },
  {
    type: 'styledComponent',
    url: 'url(img/styledComponent.png) no-repeat center / cover',
  },
  {
    type: 'sass',
    url: 'url(img/sass.png) no-repeat center / cover',
  },
  {
    type: 'jquery',
    url: 'url(img/jquery.png) no-repeat center / cover',
  }, 
  {
    type: 'js',
    url: 'url(img/js.png) no-repeat center / cover',
  }, 
  {
    type: 'react',
    url: 'url(img/react.png) no-repeat center / cover',
  },
  {
    type: 'vue',
    url: 'url(img/vue.png) no-repeat center / cover',
  },
]

const Publish_item = ({options})=>{
  const usedSkill = Object.values(options.skill).map((val, i) => val ? skillImg[i].url : false)
  return(
    <div className="publish_item">
      <div 
        className="publish_img_box"
        style={{ background: options.desk }}
      ></div>
      <div className="skill_box">
        <h3>사용 스킬</h3>
        <ul className="used_skill">
          {
            usedSkill.map((val, i) => console.log(val) )
          }
        </ul>
      </div>
    </div>
  )
}
export default Publish_item
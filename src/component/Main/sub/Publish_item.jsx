import React from 'react'
import { Link } from 'react-router-dom'
import './Publish_item.css'
const skillImg = [
  {
    type: 'html',
    url: 'url(img/html.png) no-repeat center / 80%',
  },
  {
    type: 'css',
    url: 'url(img/css.png) no-repeat center / 80%',
  },
  {
    type: 'styledComponent',
    url: 'url(img/styled_css.png) no-repeat center / 80%',
  },
  {
    type: 'sass',
    url: 'url(img/sass.png) no-repeat center / 80%',
  },
  {
    type: 'jquery',
    url: 'url(img/jquery.png) no-repeat center / 80%',
  }, 
  {
    type: 'js',
    url: 'url(img/js.png) no-repeat center / 80%',
  }, 
  {
    type: 'react',
    url: 'url(img/react.png) no-repeat center / 80%',
  },
  {
    type: 'vue',
    url: 'url(img/vue.png) no-repeat center / 80%',
  },
  {
    type: 'typescript',
    url: 'url(img/typescriptLogo.svg) no-repeat center / 65%',
  },
]

const Publish_item = ({options})=>{
  const skillUrl = Object.values(options.skill).map((val, i) => val ? skillImg[i].url : false)
  const usedSkill = skillUrl.map((val, i) => val ? <li style={{background: val}} key={options.git + "_li" + i}></li> : '')
  
  return(
    <div 
      className="publish_item"
    >
      <Link to={{pathname: `/detail/${options.id}`}}>
        <div 
          className="publish_img_box"
          style={{ background: options.desk }}
        ></div>
        <div 
          className="skill_box"
        >
          <h3
          >사용 스킬</h3>
          <ul 
            className="used_skill"
          >
            { usedSkill }
          </ul>
        </div>
      </Link>
      
    </div>
  )
}
export default Publish_item
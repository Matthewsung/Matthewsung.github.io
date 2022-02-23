import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
const skillImg = [
  {
    type: 'html',
    url: 'url(/img/html.png) no-repeat center / 80%',
  },
  {
    type: 'css',
    url: 'url(/img/css.png) no-repeat center / 80%',
  },
  {
    type: 'styledComponent',
    url: 'url(/img/styled_css.png) no-repeat center / 80%',
  },
  {
    type: 'sass',
    url: 'url(/img/sass.png) no-repeat center / 80%',
  },
  {
    type: 'jquery',
    url: 'url(/img/jquery.png) no-repeat center / 80%',
  }, 
  {
    type: 'js',
    url: 'url(/img/js.png) no-repeat center / 80%',
  }, 
  {
    type: 'react',
    url: 'url(/img/react.png) no-repeat center / 80%',
  },
  {
    type: 'vue',
    url: 'url(/img/vue.png) no-repeat center / 80%',
  },
  {
    type: 'typescript',
    url: 'url(/img/typescriptLogo.svg) no-repeat center / 65%',
  }
]

const DetailWebPage = ({options}) => {
  const [detailItem, setDetailItem] = useState({
    id: 0,
    desk:"",
    detail:"",
    term:"",
    web:"",
    git:"",
    skill:{
      html: false,
      css: false,
      styledComponent:false,
      sass: false,
      jquery: false, 
      js: false, 
      react: false,
      vue: false,
      typescript: false,
    }
  })

  useEffect( () => {
    const url = window.location.href;
    const itemNum = url.split('detail/')[1] - 1 ;
    
    return setDetailItem(options[itemNum])
  }, [options])

  const skillUrl = Object.values(detailItem.skill).map((val, i) => val ? skillImg[i].url : false)
  const usedSkill = skillUrl.map((val, i) => val ? <li className='deail_skill' style={{background: val}} key={options.git + "_li" + i}></li> : '')

  return(
    <section className='sec_deatil_container'>
      <div className="w_1200">
        <div className="closed_box">
          <Link to={'/'}>
            X
          </Link>
        </div>
        <div className="sec_box">
          <div className="container_L">
            <div 
              className="desk"
              style={{background: detailItem.desk}}
            ></div>
          </div>
          <div className="container_R">
            <div className="c_top">
              <div className="c_content">
                <p className="c_title">
                  TYPE
                </p> 
                <p className="c_desc">
                {detailItem && detailItem.type}
                </p>
              </div>
              <div className="c_content">
                <p className="c_title">
                    기간
                </p> 
                <p className="c_desc">
                  {detailItem && detailItem.terms}
                </p>
              </div>
              <div className="c_content">
                <p className="c_title">
                  SKILLS
                </p>
                <ul className="c_desc c_skills">
                  {
                    usedSkill
                  }
                </ul>
              </div>
              <div className="c_content">
                <p className="c_title">
                  설명
                </p>
                <p className="c_desc">
                  {detailItem && detailItem.detail}
                </p>
              </div>
            </div>
            <div className="c_bot">
              <div className="c_content">
                <div className="c_goToWeb">
                  <Link to={{pathname:detailItem.web}} target="_blank">
                    웹사이트 바로가기
                  </Link>
                </div>
                <div className="c_goToWeb">
                  <Link to={{pathname:detailItem.git}} target="_blank">
                    Github Code 보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default DetailWebPage
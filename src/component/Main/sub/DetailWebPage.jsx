import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

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
      vue: false
    }
  })
  useEffect( () => {
    const url = window.location.href;
    const itemNum = url.split('detail/')[1] - 1 ;
    return setDetailItem(options[itemNum])
  }, [])
  
  console.log(detailItem.desk)
  return(
    <section className='sec_deatil_container'>
      <div className="w_1440">
        <div className="closed_box">
          <Link to={'/'}>
            X
          </Link>
        </div>
        <div className="sec_box">
          <div className="container_L">
            <div 
              className="desk"
            ></div>
          </div>
          <div className="container_R">
            <div className="c_top">
              <div className="c_content">
                <p className="c_title">
                  TYPE
                </p> 
                <p className="c_desc">
                  반응형
                </p>
              </div>
              <div className="c_content">
                <p className="c_title">
                    참여도
                </p> 
                <p className="c_desc">
                  100%
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
                    tool
                </p>
                <p className="c_desc">
                  HTML / CSS / Javascript / Jquery
                </p>
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
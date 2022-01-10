import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const DetailWebPage = ({options}) => {
  useEffect( () => {
    const url = window.location.href;
    const itemNum = url.split('detail/')[1]
    console.log(itemNum)
    console.log(options[itemNum])
  })
  
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
            <div className="desk">
              <div className="inner_img">
                  {/* <img src={options.desk} alt=""/> */}
              </div>
            </div>
          </div>
          <div className="container_R">
            <div className="c_content"><p className="c_title">TYPE</p> 반응형</div>
            <div className="c_content"><p className="c_title">참여도</p> 100%</div>
            {/* <div className="c_content"><p className="c_title">기간</p> {options.terms}</div> */}
            <div className="c_content"><p className="c_title">tool</p> HTML / CSS / Javascript / Jquery</div>
            {/* <div className="c_goToWeb"><Link to={{pathname:options.web}} target="_blank">웹사이트 바로가기</Link></div>
            <div className="c_goToWeb"><Link to={{pathname:options.git}} target="_blank">Github Code 보기</Link></div> */}

          </div>
        </div>
      </div>
    </section>
  )
}
export default DetailWebPage
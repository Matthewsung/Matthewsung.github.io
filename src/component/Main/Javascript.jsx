import React from 'react'
import { Link } from 'react-router-dom'

const Javascript = ({options}) => {
  return(
    <section >
      <div className="w_1440">
        <div className="container_L">
          <div className="desk">
            <img src="img/r_desk.png" alt="r_desk" />
            <div className="inner_img">
                <img src={options.desk} alt=""/>
            </div>
          </div>
          <div className="tablet" style={{background:options.tablet}}>
              <img src="img/r_k.png" alt=""/>
          </div>
          <div className="phone" style={{background:options.phone}}>
              <img src="img/r_phone.png" alt=""/>
          </div>
        </div>
        <div className="container_R">
            <div className="c_content"><p className="c_title">TYPE</p> 반응형</div>
            <div className="c_content"><p className="c_title">참여도</p> 100%</div>
            <div className="c_content"><p className="c_title">기간</p> {options.terms}</div>
            <div className="c_content"><p className="c_title">tool</p> HTML / CSS / Javascript / Jquery</div>
            <div className="c_goToWeb"><Link to={{pathname:options.web}} target="_blank">웹사이트 바로가기</Link></div>
            <div className="c_goToWeb"><Link to={{pathname:options.git}} target="_blank">Github Code 보기</Link></div>
        </div>
      </div>
    </section>
  )
}
export default Javascript
import React from 'react'
import { Link } from 'react-router-dom'


const ReactContents = ({options})=>{
// console.log(options)
  return(
    <section>
      <div className="w_1440">
        <div className="sec_box">
          <div className="container_L" >
            <div className="desk">
              <img src="img/r_desk.png" alt="r_desk" />
              <div className="inner_img">
                  <img src={options.desk} alt=""/>
              </div>
            </div>
          </div>
          <div className="container_R">
            <div className="c_content"><p className="c_title">Tools</p> HTML / CSS / Javascript / React</div>
            <div className="c_content">
              <p className="c_title">Detail</p>
              <p className="c_detail">{options.detail}</p> 
            </div>
            <div className="c_goToWeb"><Link to={{pathname:options.website}} target="_blank">웹사이트 바로가기</Link></div>
            <div className="c_goToWeb"><Link to={{pathname:options.git}} target="_blank">Github Code 보기</Link></div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default ReactContents
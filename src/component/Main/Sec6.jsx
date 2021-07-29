import React,{ useRef, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


const Sec6 = ()=>{
  const Sec3Ref = useRef()
  const ShowProject = ()=>{
    const sec_6 = document.querySelector('.sec_6')
    const sec_6Top = sec_6.getBoundingClientRect().top;
    const sec_6Height = sec_6.getBoundingClientRect().height;
    //이미지 나오는 animation
    if(sec_6Top - (sec_6Height * 0.3) <= 0){
        Sec3Ref.current.style.transform = "scale(1)"
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',ShowProject)
    
  },[])

  return(
    <section className="sec_6" >
      <div className="w_1440">
        <div className="container_L" ref={Sec3Ref}>
          <div className="desk">
            <img src="img/r_desk.png" alt="r_desk" />
            <div className="inner_img">
                <img src="img/baraboda_main.png" alt=""/>
            </div>
          </div>
        </div>
        <div className="container_R">
            <div className="c_content"><p className="c_title">Tools</p> HTML / CSS / Javascript / React</div>
            <div className="c_content">
              <p className="c_title">Detail</p>
              <p>API를 이용한 </p> 
            </div>
            <div className="c_goToWeb"><Link to={{pathname:"http://jys89.dothome.co.kr"}} target="_blank">웹사이트 바로가기</Link></div>
            <div className="c_goToWeb"><Link to={{pathname:"https://github.com/Matthewsung/dr.g"}} target="_blank">Github Code 보기</Link></div>
        </div>
      </div>
    </section>
  )
}

export default Sec6
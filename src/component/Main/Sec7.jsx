import React,{ useRef, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const options ={
  desk:"img/webpage.png",
  detail:"경기생활 문화센터의 홈페이지 하드코딩",
  website:"https://matthewsung.github.io/webpage/",
  git:"https://github.com/Matthewsung/webpage/"
}

const Sec7 = ()=>{
  const Sec7Ref = useRef()
  const ShowProject = ()=>{
    const sec_7 = document.querySelector('.sec_7')
    const sec_7Top = sec_7.getBoundingClientRect().top;
    const sec_7Height = sec_7.getBoundingClientRect().height;
    //이미지 나오는 animation
    if(sec_7Top - (sec_7Height * 0.3) <= 0){
        Sec7Ref.current.style.transform = "scale(1)"
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',ShowProject)
    
  },[])

  return(
    <section className="sec_7" >
      <div className="w_1440">
        <div className="container_L" ref={Sec7Ref}>
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
    </section>
  )
}

export default Sec7
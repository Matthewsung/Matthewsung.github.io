import React,{ useRef, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const options ={
  desk:"img/covid.png",
  detail:"API를 이용한 전세계의 코로나 확진자수를 파악하고 각 국가별 검색을 통해 자세한 확진자 추세를 확인하기 위해 제작",
  website:"https://matthewsung.github.io/covid/",
  git:"https://github.com/Matthewsung/covid/"
}

const Sec6 = ()=>{
  const Sec6Ref = useRef()
  const ShowProject = ()=>{
    const sec_6 = document.querySelector('.sec_6')
    const sec_6Top = sec_6.getBoundingClientRect().top;
    const sec_6Height = sec_6.getBoundingClientRect().height;
    //이미지 나오는 animation
    if(sec_6Top - (sec_6Height * 0.3) <= 0){
        Sec6Ref.current.style.transform = "scale(1)"
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',ShowProject)
    
  },[])

  return(
    <section className="sec_6" >
      <div className="w_1440">
        <div className="container_L" ref={Sec6Ref}>
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

export default Sec6
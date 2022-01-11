import React , {useEffect} from 'react'
import Sec1 from './Main/Sec1'
import Sec2 from './Main/Sec2'
import Skills from './Main/sub/Skills'
import Publishing from './Main/Publishing'
import ReactSmall from './Main/ReactSmall'

const Main = ()=>{
  const headerScroll = () => {
    let windowScreen = window.scrollY;
    const sec1 = document.querySelector('.sec_1').getBoundingClientRect().height - 70
    const header = document.querySelector('.header')
    const header_ul = document.querySelector('.header .menu_ul')
    if(windowScreen >= sec1) {
      header.style.background = "rgba(256, 256, 256, 0.6)"
      header_ul.style.color = "#042e54"
    }
    else if(windowScreen < sec1){
      header.style.background = "transparent"
      header_ul.style.color = "#fff"
    }
  }
  useEffect( () => {
    window.addEventListener('scroll', headerScroll)
  },[])
  return(
    <>
      <Sec1 />
      <Sec2 />
      <Skills/>
      <Publishing />
      <ReactSmall />
    </>
  )
}
export default Main
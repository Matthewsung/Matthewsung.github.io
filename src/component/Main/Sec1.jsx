import React,{useState,useEffect} from 'react'
// import CanvasCircle from './CanvasCircle'

const SecTxtOption=['책임감있는', '노력하는','긍정적인',]
const Sec1 = ()=>{
  const [secTxt, setSecTxt]= useState(' ')
  let index = 0;
  useEffect(() => {
    const secP = document.querySelector('.sec_1_txt p')
    setInterval(()=>{
      secP.style.opacity = 1
      setSecTxt(SecTxtOption[index % SecTxtOption.length])
      index++
      setTimeout(()=>{
        secP.style.opacity = 0
      },1000)
    },2000,1000)
    
  }, [])
  return(
    <section className="sec_1">
        <div className="sec_1_txt">안녕하세요<p>{secTxt}</p>개발자 성주영입니다</div>
    </section>
  )
}
export default Sec1
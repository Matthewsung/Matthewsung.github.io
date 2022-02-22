import React,{ useState, useEffect } from 'react'

const SecTxtOption=['노력하는','긍정적인','책임감 있는']
const Sec1 = ()=>{
  const [secTxt, setSecTxt]= useState(null)
  let index = 0;
  useEffect(() => {
    const secP = document.querySelector('.sec_1_sub_txt')
    setTimeout(() => {
      secP.style.opacity = 0
    },2000);
    
    setInterval(() => {
      secP.style.opacity = 1
      setSecTxt(SecTxtOption[index % SecTxtOption.length])
      index++
      setTimeout(() => {
        secP.style.opacity = 0
      }, 2000)
    }, 3000, 800 )
  }, [index])
  
  return(
    <section className="sec_1">
      <div className="sec_1_txt">
        나는 
        <div className="sec_1_txt_wrap">
          <p className='sec_1_sub_txt'>
            { secTxt }
          </p>
          <p className="sec_1_line"></p>
        </div>
         개발자다
      </div>
    </section>
  )
}
export default Sec1
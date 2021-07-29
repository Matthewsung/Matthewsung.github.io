import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Publish from './Publish'
const options = [
  {
    id:1,
    sec:'sec_3',
    Sec:'Sec3',
    desk:'img/baraboda_main.png',
    tablet:'url(../img/baraboda_main_768.png) no-repeat center 23px / cover',
    phone:'url(../img/baraboda_main.png) no-repeat center 5px / cover',
    terms:'5일',
    web:'http://jys89.dothome.co.kr',
    git:'https://github.com/Matthewsung/baraboda'
  }
]
const Sec3 = ()=>{
  
  return(
   options.map((val,i) => <Publish key={val.id} options={val}/>)
  )
}
export default Sec3
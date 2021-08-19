import React from 'react'
import Javascript from './sub/Javascript'
const options = [
  {
    id:1,
    sec:'sec_3',
    desk:'img/baraboda_main.png',
    tablet:'url(../img/baraboda_main_768.png) no-repeat center 23px / cover',
    phone:'url(../img/baraboda_main_420.png) no-repeat center 5px / cover',
    terms:'6일',
    web:'http://jys89.dothome.co.kr',
    git:'https://github.com/Matthewsung/baraboda'
  },
  {
    id:2,
    sec:'sec_4',
    desk:'img/drg_main.png',
    tablet:'url(../img/drg_main_768.png) no-repeat center 23px / cover',
    phone:'url(../img/drg_main_420.png) no-repeat center 5px / cover',
    terms:'5일',
    web:'http://jys2.dothome.co.kr',
    git:'https://github.com/Matthewsung/dr.g'
  },
  
]
const Publishing = ()=>{
  return(
   options.map((val) => <Javascript options={val}key={val.id}  />)
  )
}
export default Publishing
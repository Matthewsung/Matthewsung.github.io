import React from 'react'
const Menu = [
  {
    id:1,
    txt:"MAIN"
  },
  {
    id:2,
    txt:"ABOUT ME"
  },
  {
    id:3,
    txt:"PORTFOLIO"
  },
  {
    id:4,
    txt:"CONTACT"
  },
]
const Header =()=>{
  const onClickMenu = (e) => {
    Menu.map( (v,i) => {
      if(e.target.innerText === v.txt){
        if(v.id === 4){
          const footer = document.querySelector('.footer').getBoundingClientRect().bottom
          window.scrollTo({top : footer, left : 0, behavior:'smooth' })
        }
        else{
          const section = document.querySelector('section').getBoundingClientRect().height
          window.scrollTo({top : section * (v.id - 1), left : 0, behavior:'smooth' })
        }
      }
    })
  }
  return(
    <div className="header">
      <div className="logo"><img src="img/logo.png" alt="" /></div>
      <ul className="menu_ul" >
        {Menu.map( (v,i) => <li key={Menu[i].id} className="menu_li" onClick={onClickMenu}>{Menu[i].txt}</li>)}
      </ul>
    </div>
  )
}
export default Header
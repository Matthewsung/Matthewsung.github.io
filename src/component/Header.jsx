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
const Header = () => {
  const onClickMenu = e => {
    Menu.map( v => {
      if(e.target.innerText === v.txt){
        const section = document.querySelector('section').getBoundingClientRect().height
        const wrap =document.querySelector('.wrap').getBoundingClientRect().height
        if(v.id === 4) {
          window.scrollTo({
            top : wrap, 
            left : 0, 
            behavior:'smooth' 
          })
        }
        else {
          window.scrollTo({
            top : section * (v.id - 1), 
            left : 0, 
            behavior:'smooth' 
          })
        }
      }
    })
  }
  return(
    <div className="header">
      <div className="logo">
        <img src="img/logo.png" alt="메인 로고" />
      </div>
      <ul className="menu_ul" >
        { 
          Menu.map( (v,i) => 
            <li 
              key={ Menu[i].id } 
              className="menu_li"
              onClick={onClickMenu}
            >
              { Menu[i].txt }
            </li>)
        }
      </ul>
    </div>
  )
}
export default Header
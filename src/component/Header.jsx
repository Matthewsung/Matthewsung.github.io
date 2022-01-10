import React from 'react'
// import {Link} from 'react-router-dom'
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
    txt:"WORKS"
  },
  {
    id:4,
    txt:"CONTACT"
  },
]
const Header = () => {
  const onClickMenu = e => {
    Menu.map( ( v ) => {
      if(e.target.innerText === v.txt){
        const section = document.querySelector('section').getBoundingClientRect().height
        const bot = document.querySelector('.wrap').getBoundingClientRect().height
        if (v.id === 3) {
          window.scrollTo({
            top: section * 3,
            left: 0,
            behavior: 'smooth'
          })
        }
        else if(v.id === 4) {
          window.scrollTo({
            top : bot, 
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
      return ''
    })
  }
  return(
    <div className="header">
      <div className="logo">
        {/* <Link to="/">
          <img src="img/logo.png" alt="메인 로고" />
        </Link> */}
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
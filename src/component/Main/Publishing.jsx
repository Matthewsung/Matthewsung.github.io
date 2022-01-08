import React from 'react'
// import Javascript from './sub/Javascript'
import PublishItem from './sub/Publish_item'
const options = [
  {
    id:1,
    sec:'sec_3',
    desk:'url(img/baraboda_main.png) no-repeat left top / cover',
    tablet:'url(../img/baraboda_main_768.png) no-repeat center 23px / 92%',
    phone:'url(../img/baraboda_main_420.png) no-repeat center 5px / 92%',
    terms:'6일',
    web:'http://jys89.dothome.co.kr',
    git:'https://github.com/Matthewsung/baraboda',
    skill:{
      html: true,
      css: true,
      styledComponent:false,
      sass: false,
      jquery: true, 
      js: true, 
      react: false,
      vue: false
    },
    detail: 'UI, UX를 고려하여 커피 관련 쇼핑몰을 하드코딩으로 구현'
  },
  {
    id:2,
    sec:'sec_4',
    desk:'url(img/drg_main.png) no-repeat left top / cover',
    tablet:'url(../img/drg_main_768.png) no-repeat center 23px / 92%',
    phone:'url(../img/drg_main_420.png) no-repeat center 5px / 92%',
    terms:'5일',
    web:'http://jys2.dothome.co.kr',
    git:'https://github.com/Matthewsung/dr.g',
    skill:{
      html: true,
      css: true,
      styledComponent:false,
      sass: false,
      jquery: true, 
      js: true, 
      react: false,
      vue: false
    },
    detail: 'UI, UX를 고려하여 화장품 쇼핑몰을 하드코딩으로 구현'
  },
  {
    id:3,
    desk:"url(img/covid.png) no-repeat left top / cover",
    detail:"API를 이용한 전세계의 코로나 확진자수를 파악하고 각 국가별 검색을 통해 자세한 확진자 추세를 확인하기 위해 제작",
    website:"https://matthewsung.github.io/covid/",
    git:"https://github.com/Matthewsung/covid/",
    skill:{
      html: true,
      css: true,
      styledComponent:false,
      sass: false,
      jquery: false, 
      js: true, 
      react: true,
      vue: false
    }
  },
  {
    id:4,
    desk:"url(img/webpage.png) no-repeat left top / cover",
    detail:"경기생활 문화센터의 홈페이지 하드코딩",
    website:"https://matthewsung.github.io/randomapi/",
    git:"https://github.com/Matthewsung/webpage/",
    skill:{
      html: true,
      css: true,
      styledComponent:false,
      sass: false,
      jquery: false, 
      js: true, 
      react: true,
      vue: false
    }
  },
  {
    id:5,
    desk:"url(img/api1.png) no-repeat left top / cover",
    detail:"새로고침시 랜덤으로 배우 변경 및 api를 이용한 랜덤한 배경을 local store를 이용하여 저장",
    website:"https://matthewsung.github.io/randomapi/",
    git:"https://github.com/Matthewsung/randomapi",
    skill:{
      html: true,
      css: true,
      styledComponent:false,
      sass: false,
      jquery: false, 
      js: true, 
      react: true,
      vue: false
    }
  },
  {
    id:6,
    desk:"url(img/beerlist.png) no-repeat left top / cover",
    detail:"api를 이용한 beerlist를 redux, styled-component를 이용하여 화면에 표시하고 filter기능을 구현",
    website:"https://matthewsung.github.io/beerlist/",
    git:"https://github.com/Matthewsung/beerlist",
    skill:{
      html: true,
      css: true,
      styledComponent:true,
      sass: false,
      jquery: false, 
      js: true, 
      react: true,
      vue: false
    }
  },
]
const Publishing = ()=>{
  return(
    <section className="publish_wrap">
      <div className="w_1440">
        <header className="main_header">
          <p>
            WORKS
          </p>
        </header>
        <main className="works_container">
        {
          options.map( val => {
              return <PublishItem options = { val } key={ val.git }/>
            }  
          )
        }
          
        </main>
      </div>
    </section>
  //  options.map((val) => <Javascript options={val}key={val.id}  />)
  )
}
export default Publishing
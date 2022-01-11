import React from 'react'
import { Route } from 'react-router-dom';
import PublishItem from './sub/Publish_item'
import DetailWebPage from './sub/DetailWebPage'

const options = [
  {
    id:1,
    sec:'sec_3',
    type: '반응형',
    desk:'url(/img/baraboda_main.png) no-repeat left top / cover',
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
    type: '반응형',
    desk:'url(/img/drg_main.png) no-repeat left top / cover',
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
    type: '적응형',
    desk:"url(/img/covid.png) no-repeat left top / cover",
    detail:"API를 이용한 전세계의 코로나 확진자수를 파악하고 각 국가별 검색을 통해 자세한 확진자 추세를 확인하기 위해 제작",
    term:"5일",
    web:"https://matthewsung.github.io/covid/",
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
    type: '적응형',
    desk:"url(/img/webpage.png) no-repeat left top / cover",
    detail:"경기생활 문화센터의 홈페이지 하드코딩",
    term:"5일",
    web:"https://matthewsung.github.io/webpage/",
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
    type: '적응형',
    desk:"url(/img/api1.png) no-repeat left top / cover",
    detail:"새로고침시 랜덤으로 배우 변경 및 api를 이용한 랜덤한 배경을 local store를 이용하여 저장",
    term:"5일",
    web:"https://matthewsung.github.io/randomapi/",
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
    type: '적응형',
    desk:"url(/img/beerlist.png) no-repeat left top / cover",
    detail:"api를 이용한 beerlist를 redux, styled-component를 이용하여 화면에 표시하고 filter기능을 구현",
    term:"5일",
    web:"https://matthewsung.github.io/beerlist/",
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
  {
    id:7,
    type: '적응형',
    desk:"url(/img/hollys.png) no-repeat left top / cover",
    detail:"Vue와 SCSS를 이용한 홈페이지로 chart.js를 이용해 가독성을 높였으며 카카오 로그인을 통해 접근성을 향상시켰습니다.",
    term:"5일",
    web:"https://matthewsung.github.io/hollys/",
    git:"https://github.com/Matthewsung/hollys/",
    skill:{
      html: true,
      css: true,
      styledComponent:false,
      sass: true,
      jquery: false, 
      js: true, 
      react: false,
      vue: true
    }
  },
  {
    id:8,
    type: '반응형',
    desk:"url(/img/quizrix.png) no-repeat left top / cover",
    detail:"Vue, Nuxt.js, node.js를 이용한 홈페이지로 메인페이지, 마이페이지, 어드민페이지 제작에 참여하였습니다.",
    term:"10주",
    web:"https://quizrix.com/",
    git:"https://github.com/Matthewsung",
    skill:{
      html: true,
      css: true,
      styledComponent:false,
      sass: true,
      jquery: false, 
      js: true, 
      react: false,
      vue: true
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
                return( 
                  <PublishItem 
                    options = { val } 
                    key={ val.git }
                  />
                )
              }  
            )
          }
          {
            <Route path='/detail' component={() => <DetailWebPage options={options}/> } />
          }
        </main>
      </div>
    </section>
  )
}
export default Publishing
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
      vue: false,
      typescript: false,
    },
    detail: 'UI, UX를 고려한 커피 관련 쇼핑몰을 하드코딩으로 구현하고 JSON파일을 이용하여 데이터를 불러와 가격을 계산합니다. '
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
      vue: false,
      typescript: false,
    },
    detail: '기존의 메뉴바를 사이드로 옮김으로 사용자의 편의를 높였고 다양한 이벤트로 역동성 있는 페이지로 수정하였습니다.'
  },
  {
    id:3,
    type: '적응형',
    desk:"url(/img/webpage.png) no-repeat left top / cover",
    detail:"REACT를 이용하여 경기생활 문화센터의 홈페이지 하드코딩",
    terms:"5일",
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
      vue: false,
      typescript: false,
    }
  },
  {
    id:4,
    type: '적응형',
    desk:"url(/img/covid.png) no-repeat left top / cover",
    detail:"REST API와 CHART.JS를 통해 코로나 확진자 수를 시각화 하였고 검색 기능으로 사용자의 편의를 높였습니다.",
    terms:"5일",
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
      vue: false,
      typescript: true,
    }
  },
  {
    id:5,
    type: '적응형',
    desk:"url(/img/api1.png) no-repeat left top / contain",
    detail:"랜덤으로 배우 위치 변경 및 REST API를 통해 가져온 배경을 local store를 이용하여 저장하여 새로고침시 배우의 위치는 계속해서 변경되지만 배경은 유지됩니다.",
    terms:"4일",
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
      vue: false,
      typescript: false,
    }
  },
  {
    id:6,
    type: '적응형',
    desk:"url(/img/beerlist.png) no-repeat left top / cover",
    detail:"REST API를 이용해 가져온 데이터를 REDUX와 STYLED-COMPONENT를 이용하여 화면에 표시하고 filter기능을 구현했습니다.",
    terms:"5일",
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
      vue: false,
      typescript: false,
    }
  },
  {
    id:7,
    type: '적응형',
    desk:"url(/img/hollys.png) no-repeat left top / cover",
    detail:"Vue와 SCSS를 이용한 홈페이지로 chart.js를 이용해 가독성을 높였으며 카카오 로그인을 통해 접근성을 향상시켰습니다.",
    terms:"6일",
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
      vue: true,
      typescript: false,
    }
  },
  {
    id:8,
    type: '반응형',
    desk:"url(/img/quizrix.png) no-repeat left top / cover",
    detail:"Vue, Nuxt.js, node.js를 이용한 홈페이지로 메인페이지, 마이페이지, 어드민페이지 제작에 참여했습니다.",
    terms:"10주",
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
      vue: true,
      typescript: false,
    }
  },
]

const Publishing = ()=>{

  return(
    <section className="publish_wrap">
      <div className="w_1200">
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
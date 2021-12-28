import React from 'react'
import VueContents from './sub/VueContents'
const options =[
  {
    id:1,
    desk:"img/hollys.png",
    detail:"Vue와 SCSS를 이용한 홈페이지로 chart.js를 이용해 가독성을 높였으며 카카오 로그인을 통해 접근성을 향상시켰습니다.",
    website:"https://matthewsung.github.io/hollys/",
    git:"https://github.com/Matthewsung/hollys/"
  },
  {
    id:2,
    desk:"img/quizrix.png",
    detail:"Vue, Nuxt.js, node.js를 이용한 홈페이지로 메인페이지, 마이페이지, 어드민페이지 제작에 참여하였습니다.",
    website:"https://quizrix.com/",
    git:"https://github.com/Matthewsung"
  },
]
const VueProject = () => {
  return (
    options.map((val) => <VueContents options={val}  key={val.id} /> )
  )
}

export default VueProject;
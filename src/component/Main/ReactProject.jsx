import React from 'react'
import ReactContents from './ReactContents'
const options =[
  {
    id:1,
    desk:"img/covid.png",
    detail:"API를 이용한 전세계의 코로나 확진자수를 파악하고 각 국가별 검색을 통해 자세한 확진자 추세를 확인하기 위해 제작",
    website:"https://matthewsung.github.io/covid/",
    git:"https://github.com/Matthewsung/covid/"
  },
  {
    id:2,
    desk:"img/webpage.png",
    detail:"경기생활 문화센터의 홈페이지 하드코딩",
    website:"https://matthewsung.github.io/randomapi/",
    git:"https://github.com/Matthewsung/webpage/"
  },
  {
    id:3,
    desk:"img/api1.png",
    detail:"새로고침시 랜덤으로 배우의 위기 변경 및 api를 이용한 랜덤 배경을 local store를 이용하여 페이지를 종료 후에도 동일한 배경을 지님",
    website:"https://matthewsung.github.io/randomapi/",
    git:"https://github.com/Matthewsung/randomapi"
  },
  
]
const ReactProject = () => {
  return (
    options.map((val) => <ReactContents options={val}  key={val.id} /> )
  )
}

export default ReactProject;
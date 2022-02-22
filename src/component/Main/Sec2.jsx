import React, { useEffect, useState } from "react";

const Sec2 = () => {
  const ScrollEvent = () => {
    const sec_2 = document.querySelector(".sec_2");
    const sec_2Top = sec_2.getBoundingClientRect().top;
    const sec_2Height = sec_2.getBoundingClientRect().height;
    //이미지 나오는 animation
    if (sec_2Top - sec_2Height * 0.2 <= 0) {
      const infoPan = document.querySelector(".info_pan");
      const infoOuterCir = document.querySelector(".info_outer_cir");
      const infoInnerImgr = document.querySelector(".info_inner_img");
      infoPan.style.animation = "back_pan 1s forwards";
      infoOuterCir.style.animation = "circle_big 0.25s 0.75s forwards";
      infoInnerImgr.style.animation = "img_up 0.3s 1s forwards";
    }
  };
  const [moreTxt, setMoreTxt] = useState(['+ 더보기','+ 더보기','+ 더보기','+ 더보기'])
  useEffect(() => {
    window.addEventListener("scroll", ScrollEvent);
  }, []);
  const showMore = (index) => {
      const infoDetail = document.querySelectorAll('.info_detail_box')
      const moreAll = ['+ 더보기','+ 더보기','+ 더보기','+ 더보기']

      moreTxt.forEach((val,i) => {
        infoDetail[i].style.height = '58px'
        infoDetail[i].style.display = '-webkit-box'
        
        if(index === i) {
          if(val !== '- 접어두기') {
            moreAll[i] = '- 접어두기'
            infoDetail[i].style.height = 'auto'
            infoDetail[i].style.display = 'block'
          }
        }
      }) 

      setMoreTxt(moreAll)
  }
  return (
    <section className="sec_2">
      <div className="w_1200">
        <header className="main_header">
          <p>ABOUT ME</p>
        </header>
        <main className="basic_info">
          <div className="info_img">
            <div className="info_pan">
              <div className="info_outer_cir">
                <div className="info_inner_cir">
                  <div className="info_inner_img">
                    <img src="img/my.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="info_desc">
            <li 
              className="info_row" 
              
            >
              <div className="info_title">
                <p>
                  Q. '왜' 개발자인가?
                </p>
                <p 
                  className="more_box"
                  onClick={showMore.bind(this, 0)}
                >
                  { moreTxt[0] }
                </p>
              </div>
              <div className="info_detail_box">
                A. 어릴 때부터 독립심이 강한 편이었다. 과거의 나는 여러 지역을 옮겨 다니며 일을 해야 했고, 몇 년 주기로 새로운 환경에 적응해야 하는 삶을 살아왔다. 자연스럽게 아무것도 없는 백지상태에서 시작하는 과정이 반복되었다. 그러나 이러한 과정이 막막하고 두렵기보다는 흥미롭게 다가왔다. 우연히 개발자라는 직업을 접하게 되면서 현실과는 또 다른 백지상태의 세상이 존재한다는 것을 알게 되었다. 입력하는 코드에 따라 반응하고 변화하는 개발자들의 세상은 엄청난 힘을 지니고 있었다. 그 짜릿함에 매료된 탓에 개발 만학도의 길에 들어서게 되었다.
              </div>
            </li>
            <li className="info_row" >
                <div className="info_title">
                <p>
                  Q. 요즘 나의 가장 큰 고민은?
                </p>
                <p 
                    className="more_box"
                    onClick={showMore.bind(this, 1)}
                >
                  { moreTxt[1] }
                </p>
                </div>
                <div className="info_detail_box">
                  A. 어떻게 하면 개발을 더 잘할 수 있을까?...도 물론 고민하고 있지만... 솔직한 심정으로는 나이가 늘어갈수록 겁이 늘어나는 게 고민이다. 이전에는 앞뒤 가리지 않고 하고 싶은 것들에 도전해왔고 목표 외의 것들은 신경 쓰지 않았다. 그런데 경험이 쌓이고 주변 사람들에 대한 책임감이 커질 수록 새로운 시도를 하는 것이 점점 망설여진다. 하지만 지키고 싶은 것이 많아지는 것과 그것들을 잘 지키기 위해 겁을 먹는 것은 또 다른 의미에서의 용기라고 생각하고 있다. 새해에는 도전과 안정 두 가지 사이에서 중심을 잘 잡으며 커리어를 쌓아가고 싶다.
                </div>
            </li>
            <li className="info_row" >
                <div className="info_title">
                    <p>
                      Q. 바꾸고 싶은 모습이 있다면?
                    </p>
                    <p 
                        className="more_box"
                        onClick={showMore.bind(this, 2)}
                    >
                      { moreTxt[2] }
                    </p>
                </div>
                <div className="info_detail_box">
                  A. 까무잡잡한 피부. (선크림부터 바꿔야 할 것 같다...)
                  <br />
                  사실 첫인상이 날카롭고 딱딱해 보인다는 소리를 가끔 듣는다. 흔히 사람이 나이가 들면 표정에서 살아온 삶이 나타난다고 하지 않는가? 그래서 거울을 보면서 자연스럽게 웃는 연습도 많이 하는데 생각보다 쉽지가 않은 것 같다다. (자연스러움을 연습한다는 것부터가 지극히 부자연스러움 ^^) 흔히 개발을 혼자서만 잘하면 되는 일로 생각하는 시선도 있지만 내가 그동안 프로젝트를 경험하고 포트폴리오를 쌓아오면서 느낀 것은 개발은 그 어떤 분야보다도 협업이 중요하다는 사실이다. 실제로 타인과의 소통을 통해 서로가 미처 발견하지 못했던 부분을 공유하게 되거나 명확한 아이데이션 과정을 거쳐 결과물의 퀄리티가 높아지는 사례들이 많다. 이러한 소통 과정을 보다 원활히 하기 위해서 주변 사람들에게 좀 더 친근한 모습으로 변화하고 싶다. 그러다 보면 노년에는 인심 좋은 할아버지 같은 서글서글한 인상을 갖게 될 수 있으리라 기대하고 있다.

                </div>
            </li>
            <li className="info_row" >
                <div className="info_title">
                    <p>
                      Q. 내가 가장 중요하게 생각하는 가치는?
                    </p>
                    <p 
                        className="more_box"
                        onClick={showMore.bind(this, 3)}
                    >
                      { moreTxt[3] }
                    </p>
                </div>
                <div className="info_detail_box">
                  A. 뻔하지만 '성실함'이다. '물이 고이면 썩는다'는 말이 있다. 그 물이 과거에 얼마나 맑고 깨끗한 물이었든지 말이다. 사실 모든 분야에서 어느 정도 성취를 이루면 다들 더 이상의 노력을 안 하게 되고 쉬고 싶어진다. (물론 깨끗한 물에 비견할만한 뛰어난 실력을 갖췄다는 전재에서 말이다) 그래서 이러한 나태함을 항상 경계하려고 노력한다. 개발을 시작한 이후에는 특히 더 성실함의 중요성을 뼈저리게 느끼고 있다. 아무리 뛰어난 기술을 익혔어도 하루를 쉬고, 일주일을 쉬고, 한 달을 쉬고 나면 숙련도의 차이가 피부로 느껴진다. 지금까지 쌓은 실력을 기반으로 앞으로 계속해서 새로운 개발 기술을 익히고, 그것들을 다시 응용하고 접목하면서 성장해나가고 싶다. 이를 위해서는 내가 가장 중요하게 생각하는 가치인 '성실함'이 매우 큰 무기로 작용할 것이라고 믿는다.
                </div>
            </li>
            {/*<li className="info_row" >
                <div className="info_title">
                    <p>
                    최근 보는 TV 프로그램?
                    </p>
                    <p 
                        className="more_box"
                        onClick={showMore.bind(this, 4)}
                    >
                      { moreTxt[0] }
                    </p>
                </div>
                <div className="info_detail_box">
                이번에 새로 시작한 싱어 게인 2를 눈여겨보고 있다.(사실 메인 화면도 싱어 게인을 따라 해봤다) 다른 오디션 프로그램과는 다르게 어리고 장래성이 밝은 어린아이들이 아닌 아직 기회가 없었던 이들에 조금 더 초점이 맞춰져 있는 프로그램이다. 아마 지금의 내 상태와 비슷하다는 느낌이 들어서 더욱 챙겨 보는 감도 없지 않다. 그렇기 때문인지 모든 출연자들이 원하는 바를 이룰 수 있기를 항상 바라고 있다. (그럼 나에게도 좋은 기회가 올 거라는 즐거운 상상을 한다)
                </div>
            </li>
             <li className="info_row" >
            <div className="info_title">
                    <p>
                        반드시 바꾸고 싶은 나의 모습은?
                    </p>
                    <p 
                        className="more_box"
                        onClick={showMore.bind(this, 1)}
                    >
                        + 더보기
                    </p>
                </div>
                <div className="info_detail_box">
                    사람들을 만나면 다들 내 첫인상을 보고 차갑고 엄격한 사람인 줄 안다. 까무잡잡한 피부에 날카로운 눈빛 그리고 나름 소극적인 성격이 그런 이미지를 주는 것 같다. 그래서 최근에는 선크림도 잘 바르고 웃는 상이 되려고 잠자기 전에 웃는 연습을 하고 잔다.
                    (간혹 거울보고 연습하는데 그때마다 현타가 온다..)
                    사실 얼마나 걸릴지는 모르겠지만 노년에는 서글서글하고 사람 좋아 보이는 인상을 갖고 싶다.
                </div>
                
              <p>
              한가할 때 무엇을?
              </p>
              <p>
              카페에서 책을 본다. 사실 어릴 때는 책 읽기를 싫어했다. 그게 걱정이셨는지 어머니께서 만화책이라도 좋으니 책을 읽으라고 하셨고 그 이후에 많은 만화책과 소설책을 읽었다. 특히 서설이라는 장르의 글이 머릿속에서 하나의 이미지가 되고 이미지들이 뭉쳐 전체를 한눈에 파악할 수 있게 될 때 가장 편안해지고 만족감을 느낀다. (그런데 최근 몇 년간은 한가하지 못해서 책을 못 보고 있다.)
              </p>
            </li> */}
            {/* <li className="info_row" >
              <p>Github</p>
              <p>
                <a href="https://github.com/Matthewsung">
                  https://github.com/Matthewsung
                </a>
              </p>
            </li> */}
          </ul>
        </main>
      </div>
    </section>
  );
};
export default Sec2;

import React, { useEffect } from "react";

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

  useEffect(() => {
    window.addEventListener("scroll", ScrollEvent);
  }, []);
  const showMore = (index) => {
      const infoDetail = document.querySelectorAll('.info_detail_box')
      infoDetail.forEach(el => {
          el.style.height = '60px'
      });
      infoDetail[index].style.height = 'auto'
  }
  return (
    <section className="sec_2">
      <div className="w_1440">
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
                  나는 이 일을 왜 하는가?
                </p>
                <p 
                  className="more_box"
                  onClick={showMore.bind(this, 0)}
                >
                  + 더보기
                </p>
              </div>
              <div className="info_detail_box">
                어릴 때부터 독립심 있게 사는 게 좋아 보였고 그러려고 노력했다. 예를 들어 이발을 하는 것도 미용실에서 편하게 자르는 것도 좋지만 스스로 한다는 만족감에 20대에는 거의 혼자 머리를 잘랐던 것 같다. 
                (그렇다고 아저씨에 나오는 원빈처럼 멋있게 자르지는 못하고 떨어진 머리카락을 정리하느라 고생하고 실수라도 했으면 한동안 모자만 쓰고 다닌 적도 있다.)
                그래서 그런지 백지에서 무언가를 만드는 일을 하고 싶었고 우연한 계기로 개발을 배우게 되었고 배우면 배울수록 내가 할 수 있는 일이 늘어나 만족감이 점점 커가는 것 같다.
              </div>
            </li>
            <li className="info_row" >
                <div className="info_title">
                <p>
                    요즘 나의 가장 큰 고민은?
                </p>
                <p 
                    className="more_box"
                    onClick={showMore.bind(this, 1)}
                >
                    + 더보기
                </p>
                </div>
                <div className="info_detail_box">
                    나이가 늘어갈수록 겁이 늘어가는 것 같다. 이전에는 앞뒤 가리지 않고 하고 싶은걸 해야 했고 그 외의 것들은 신경 쓰지 않았다. 그런데 경험이 늘어갈수록 주변에 신경 쓸 일이 많아지고 행동에 제약도 많아져가는 것 같다. 그래서 새해 목표는 예전의 막무가내를 다시 끄집어낼 생각이다^^
                </div>
            </li>
            <li className="info_row" >
                <div className="info_title">
                    <p>
                        반드시 바꾸고 싶은 나의 모습은?
                    </p>
                    <p 
                        className="more_box"
                        onClick={showMore.bind(this, 2)}
                    >
                        + 더보기
                    </p>
                </div>
                <div className="info_detail_box">
                    사람들을 만나면 다들 내 첫인상을 보고 차갑고 엄격한 사람인 줄 안다. 까무잡잡한 피부에 날카로운 눈빛 그리고 나름 소극적인 성격이 그런 이미지를 주는 것 같다. 그래서 최근에는 선크림도 잘 바르고 웃는 상이 되려고 잠자기 전에 웃는 연습을 하고 잔다.
                    (간혹 거울보고 연습하는데 그때마다 현타가 온다..)
                    사실 얼마나 걸릴지는 모르겠지만 노년에는 서글서글하고 사람 좋아 보이는 인상을 갖고 싶다.
                </div>
            </li>
            <li className="info_row" >
                <div className="info_title">
                    <p>
                    내가 가장 중요하게 생각하는 가치는 무엇인가?
                    </p>
                    <p 
                        className="more_box"
                        onClick={showMore.bind(this, 3)}
                    >
                        + 더보기
                    </p>
                </div>
                <div className="info_detail_box">
                꾸준하게 할 수 있는 성실함이다. 살면서 가장 와닿았던 말은 물이 고이면 썩는다는 말이다. 사실 모든 분야에서 어느 정도 성취를 이루면 다들 더 이상의 노력을 안 하게 되고 쉬고 싶어진다. 나 역시도 그런 면이 있기 때문에 항상 새로운 것에 노출되려고 노력한다. 그래서 개발을 배운 이후에는 특히 더 유튜브를 통해 많은 내용들을 접하기 위해 노력하고 있다. (최근 태블릿 거치대를 샀는데 근 몇 년 동안 구입한 물건 중 가장 만족도가 높다 ㅎㅎ)
                </div>
            </li>
            <li className="info_row" >
                <div className="info_title">
                    <p>
                    최근 보는 TV 프로그램?
                    </p>
                    <p 
                        className="more_box"
                        onClick={showMore.bind(this, 4)}
                    >
                        + 더보기
                    </p>
                </div>
                <div className="info_detail_box">
                이번에 새로 시작한 싱어 게인 2를 눈여겨보고 있다.(사실 메인 화면도 싱어 게인을 따라 해봤다) 다른 오디션 프로그램과는 다르게 어리고 장래성이 밝은 어린아이들이 아닌 아직 기회가 없었던 이들에 조금 더 초점이 맞춰져 있는 프로그램이다. 아마 지금의 내 상태와 비슷하다는 느낌이 들어서 더욱 챙겨 보는 감도 없지 않다. 그렇기 때문인지 모든 출연자들이 원하는 바를 이룰 수 있기를 항상 바라고 있다. (그럼 나에게도 좋은 기회가 올 거라는 즐거운 상상을 한다)
                </div>
            </li>
            {/* <li className="info_row" >
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

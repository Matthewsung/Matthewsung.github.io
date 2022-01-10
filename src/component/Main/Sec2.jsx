import React, { useEffect } from 'react'

const Sec2 = ()=>{
    const ScrollEvent = ()=>{
        const sec_2 = document.querySelector('.sec_2')
        const sec_2Top = sec_2.getBoundingClientRect().top;
        const sec_2Height = sec_2.getBoundingClientRect().height;
        //이미지 나오는 animation
        if(sec_2Top - (sec_2Height * 0.2) <= 0){
            const infoPan = document.querySelector('.info_pan')
            const infoOuterCir = document.querySelector('.info_outer_cir')
            const infoInnerImgr = document.querySelector('.info_inner_img')
            infoPan.style.animation = "back_pan 1s forwards"
            infoOuterCir.style.animation = "circle_big 0.25s 0.75s forwards"
            infoInnerImgr.style.animation = "img_up 0.3s 1s forwards"
        }
    }
    
    useEffect(()=>{
        window.addEventListener('scroll',ScrollEvent)
    },[])
    
  return(
    <section className="sec_2">
        <div className="w_1440">
            <header className="main_header">
                <p>
                    ABOUT ME
                </p>
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
                    <li className="info_row">
                        <p>이름</p>
                        <p>성주영</p>
                    </li>
                    <li className="info_row">
                        <p>생년월일</p>
                        <p>89.05.31</p>
                    </li>
                    <li className="info_row">
                        <p>이메일</p>
                        <p>jooyongs1@gmail.com</p>
                    </li>
                    <li className="info_row">
                        <p>Github</p>
                        <p>
                            <a href="https://github.com/Matthewsung">
                                https://github.com/Matthewsung
                            </a> 
                        </p>
                    </li>
                    <li className="info_row">
                        <p>자기소개</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium sapiente laborum necessitatibus, repellendus itaque veniam perspiciatis molestiae adipisci quia nobis consequuntur quidem vitae ex distinctio impedit ipsam hic qui perferendis?
                        </p>
                    </li>
                </ul>
            </main>
        </div>
    </section>
  )
}
export default Sec2
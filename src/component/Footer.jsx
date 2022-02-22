import React from 'react'
const Footer = ()=>{
  return(
    <div className="footer">
      <div className="w_1200">
        <header className="main_header">
          <p>
            CONTACT
          </p>
        </header>
        <div className="contact">
          <div className="f_item name">
            <h1>NAME</h1>
            <h3>
              성  주  영
            </h3>
          </div>
          <div className="f_item phone_number">
            <h1>PHONE</h1>
            <h3>
              010 - 9034 - 6170
            </h3>
          </div>
          <div className="f_item email">
            <h1>E-MAIL</h1>
            <h3>
              jooyongs1@gmail.com
            </h3>
          </div>
          <div className="f_item email">
            <a 
              href="https://github.com/Matthewsung" 
              target="_blank"
              rel="noreferrer"
            >
              <h1>GITHUB</h1>
              <h3>
                github.com/Matthewsung
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
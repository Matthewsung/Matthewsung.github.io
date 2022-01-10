import React from 'react'
const Footer = ()=>{
  return(
    <div className="footer">
      <div className="w_1440">
        <header className="main_header">
            <p>
                CONTACT
            </p>
        </header>
        <div className="contact">

          <div className="f_item name"><h1>NAME</h1>성  주  영 </div>
          <div className="f_item phone_number">
            <h1>PHONE</h1>
            010 - 9034 - 6170
          </div>
          <div className="f_item email">
            <h1>E-MAIL</h1>
            jooyongs1@gmail.com
          </div>
          <div className="f_item email">
            <a 
              href="https://github.com/Matthewsung" 
              target="_blank"
              rel="noreferrer"
            >
              <h1>GITHUB</h1>
              github.com/Matthewsung
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
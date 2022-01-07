import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Main from './component/Main'
import Footer from './component/Footer'
// import Background from './component/Main/sub/Background'
function App() {
  return (
    <BrowserRouter>
      <div className="wrap">
        {/* <Background/> */}
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

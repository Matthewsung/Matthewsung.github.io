import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Main from './component/Main'
import Footer from './component/Footer'
import Tmp from './component/Main/Tmp'
function App() {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Tmp/>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

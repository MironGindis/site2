import React, { useState } from 'react';
import './App.scss';
import "aos/dist/aos.css";
import menu from './assets/img/burgermenu.svg';
import Main from './Main';
import Works from './works';
import Aboutme from './Aboutme';
import { BrowserRouter, NavLink, Redirect, Route } from 'react-router-dom';
import Cases from './Cases';
import worksphoto from './assets/img/worksbg.jpg';
import instagramIcon from './assets/img/instIcon.svg';

function App() {

  const [menuToggler, setMenuToggler] = useState(false);

  let [menuStyles, setmenuStyles] =useState(1);

  let [zxc, setzxc] = useState(false);

  const windowWidth = window.innerWidth;

  return (
    <BrowserRouter>
    {!zxc && <Redirect to={'/main'}/>}
    <div className="App" id='App'>
        <div className="menu image">
          <img src={menu}  onClick={()=> {setMenuToggler(!menuToggler)}}/>
        </div>
        {menuToggler&&<div className={`menu-block menu-block-${menuStyles}`}>
          <div className="menu-wrapper">
              <NavLink to="/main" className={`link link-${menuStyles}`}>

                  ГЛАВНАЯ

                </NavLink>
              <NavLink to="/aboutme" className={`link link-${menuStyles}`}>

                  ОБО МНЕ

              </NavLink>
              <NavLink to="/works" className={`link link-${menuStyles}`}>

                  РАБОТЫ

              </NavLink>
            
              <NavLink to="/cases" className={`link link-${menuStyles}`}>
                КЕЙСЫ
              </NavLink>
              {(windowWidth<=940)? 
              <div className="Links">
              <a href='https://www.instagram.com/kirill.who/'><img src={instagramIcon}/></a>
              <a href='https://www.instagram.com/kirill.who/'><img src={instagramIcon}/></a>
              <a href='https://www.instagram.com/kirill.who/' ><img src={instagramIcon}/></a>
              </div>
               : null}
          </div>
        </div>}
        <Route path='/main' render={() => <Main setmenuStyles={setmenuStyles}/>}/>
        <Route path='/aboutme' render={() => <Aboutme setmenuStyles={setmenuStyles}/>}/>
        <Route path='/cases'  render={() => <Cases setmenuStyles={setmenuStyles}/>}/>
        <Route path='/works' render={() => <Works worksphoto={worksphoto} setmenuStyles={setmenuStyles}/>}/>
    </div>
    </BrowserRouter>
  );
}

export default App;

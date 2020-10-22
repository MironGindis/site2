import React, { useEffect } from 'react';
import './App.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import footer from './assets/img/footer.webp';
import name from './assets/img/name.svg';
import photo from './assets/img/photo.webp';

import Description from './Description';

function App() {
  useEffect( ()=> {
    Aos.init({duration: 2000});
  },[])

  return (
    <div className="App"> 
      <div className="footer image">
        <img src={footer}/>
      </div>
      <div className="MainPage">
        <div className="mainimgbg image">
          <div data-aos="slide-down" className="name image">
            <img src={name}/>
          </div>
          <div className="photo image">
            <img src={photo}/>
          </div>
          <Description/>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.scss';
import "aos/dist/aos.css";
import name from './assets/img/name.svg';
import photo from './assets/img/photo.webp';
import video from './assets/img/video.jpg';

function Main(props) {
  
  const windowWidth = window.innerWidth;

  const [scrollY, setScrollY] = useState(0);

  const [PaddingTop, setPaddingTop] = useState(12);

  const [PosLeft, setPosLeft] = useState(-100);
  
  function logit() {
      setScrollY(window.pageYOffset);
      if (windowWidth <=600) {
        if (scrollY <=140){
          setPaddingTop(12+scrollY*0.335);
          setPosLeft(-100+scrollY*0.75 );
      } else {
          setPaddingTop(12+140*0.335);
          setPosLeft(-100+140*0.75 );
      }
      } else if ((600 < windowWidth)&&(windowWidth<=1400)) {
          if (scrollY <=140){
            setPaddingTop(12+scrollY*0.135);
            setPosLeft(-100+scrollY*0.75);
        } else {
          setPaddingTop(12+140*0.135);
          setPosLeft(-100+140*0.75);
        }
      } else if ((1400 < windowWidth)&&(windowWidth<=1600)){
        if (scrollY <=100){
          setPaddingTop(12+scrollY*0.3);
          setPosLeft(-100+scrollY*1.05 );
      } else {
          setPaddingTop(12+100*0.3);
          setPosLeft(-100+100*1.05 );
      }
    } else if ((1600 < windowWidth)&&(windowWidth<=1860)){
      if (scrollY <=100){
        setPaddingTop(12+scrollY*0.2);
        setPosLeft(-100+scrollY*1.05 );
    } else {
      setPaddingTop(12+100*0.2);
        setPosLeft(-100+100*1.05 );
    }
  } else if ((1860 < windowWidth)&&(windowWidth<=2150)){
    if (scrollY <=100){
      setPaddingTop(12+scrollY*0.15);
      setPosLeft(-100+scrollY*1.05 );
  } else {
    setPaddingTop(12+100*0.15);
      setPosLeft(-100+100*1.05 );
  }
}   else if (2150 < windowWidth){
  if (scrollY <=100){
    setPaddingTop(12+scrollY*0.1);
    setPosLeft(-100+scrollY*1.05 );
} else {
  setPaddingTop(12+100*0.1);
    setPosLeft(-100+100*1.05 );
}
}
      
    }
  
    useEffect(() => {
      props.setmenuStyles(1);
      function watchScroll() {
        window.addEventListener("scroll", logit);
      }
      watchScroll();
      // Remove listener (like componentWillUnmount)
      return () => {
        window.removeEventListener("scroll", logit);
      };

    });

  return (
        <div className="MainPage">
        <div className="mainimgbg image">
          <div style={{paddingTop: `${PaddingTop}%`}} className="name image">
            <img src={name}/>
          </div>
          <div className="photo image">
            <img src={photo}/>
          </div>
          <div style={{left : `${PosLeft}%`}} className="description">
            PERSONAL <br/>
            SHOPPER
          </div>
        </div>
        <div className="video image">
          <img src={video}/>
        </div>
      </div>
  );
}

export default Main;
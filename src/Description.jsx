import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function Description() {
  useEffect( ()=> {
    Aos.init({duration: 2000});
  },[])
  return (
          <div data-aos="slide-left" className="description">
            PERSONAL <br/>
            SPOPPER
          </div>

  );
}

export default Description;

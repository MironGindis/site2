import React, { useEffect } from 'react';
import './Aboutme.scss';

function Works(props) {

  useEffect ( () => {
    props.setmenuStyles(1);
  });

  return (
    <div className="Works image">
        <img src={props.worksphoto }/>
    </div>
  );
}

export default Works;
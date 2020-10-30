import React, { useEffect, useState } from 'react';



function Case(props) {

 let [CaseIsActive, setCaseIsActive]  = useState(true);


  return (
    <div className={`Case Case-${props.id}`} onClick={()=> {setCaseIsActive(!CaseIsActive)}}>
        <div className="Case_main">
            {props.header}
        </div>
        {CaseIsActive && <>
        <div className="Case_bg">
          <div className="Case_description">
            {props.description}
        </div>
        </div>
        <div className="Case_description-true Case_description">
        {props.description}
    </div>
    </>
        }
    </div>
  );
}

export default Case;
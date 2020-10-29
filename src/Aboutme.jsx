import React, { useEffect, useState } from 'react';
import './Aboutme.scss';
import Swipe from 'react-easy-swipe/lib/react-swipe';

function Aboutme(props) {

  useEffect ( () => {
    props.setmenuStyles(2);
  });

  const windowWidth = window.innerWidth;

  let [BgPosX, setBgPosX] =useState(58);

  let [magrinLeft, setMarginLeft] = useState(-400);
  let isMobile = windowWidth<=600;

  
  let onSwipeMove = (position) =>{
    console.log(position.x);  
    if ((position.x>=-400)&&(position.x<=100)){
    setBgPosX(58+position.x/10);
    setMarginLeft(-400-position.x);
    }
  }
  return (
    <Swipe onSwipeMove={onSwipeMove}>
    <div className="Aboutme">
        <div className='Aboutme_content' style={(isMobile)? {backgroundPosition: `${BgPosX}% 0px`} : null} >
            <div className="Aboutme_text" style={(isMobile)? {marginLeft: `${magrinLeft}px`} : null} >
            «<span>У</span>мение хорошо одеваться не зависит от большого количества одежды. <span>Э</span>то вопрос гармонии и здравого смысла». 
            <br/> <br/> <span>Э</span>менно эти слова <span>O</span>scar de la <span>R</span>enta полностью характеризую мою работу. 
            <br/> <br/> <span>Н</span>асмотренность - одно из самых важных качеств которым должен обладать каждый стилист. <span>И</span>менно этот фактор является моим преимуществом перед другими моими коллегами. <span>П</span>оследние десять лет я жил в <span>И</span>талии и работал в сфере моды, сотрудничая с международными брендами, научился чувствовать и интегрировать все новые тенденции, когда они только зарождаются. 
            <br/> <br/><span>О</span>чень важно не путать «модно» и «стильно», это совсем разные понятия. <span>В</span> переводе с латыни мода - временное, непостоянное преобладание вкусов или постоянное изменение. <span>С</span>тиль в свою очередь более постоянное явление и определяется вещами, которые подбираются и характеризуют конкретного человека. <span>М</span>не нравится наблюдать за тем, как одеваются люди, особенно, в обычные дни. <span>И</span>менно тогда проявляется стиль, а одеться нарядно может каждый. 
            </div>
    </div>
    </div>
    </Swipe>
  );
}

export default Aboutme;

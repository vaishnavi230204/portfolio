import React, { useEffect } from 'react'
import { useState } from 'react'

const StarBackground = () => {

const [stars, setstars] = useState([]);
const [mete, setmete] = useState([])

useEffect(()=>{
   generateStars();
   generateMete();

   const handelResize=()=>{
     generateStars();

   }
   window.addEventListener("resize",handelResize)
   
},[]);

const generateStars=()=>{
    const noOfStars=Math.floor(
      (window.innerWidth*window.innerHeight)/10000);

    const newStar=[];

    for(let i=0;i<noOfStars;i++){
  newStar.push({
    id:i,
    size:Math.random()*3+1,
    x:Math.random()*100,
    y:Math.random()*100,
    opacity:Math.random()*0.5+0.5,
    animationDuration:Math.random()*4+2,
  }); 
}

  setstars(newStar);
};

const generateMete=()=>{
    const noOfmete=4;

    const newMete=[];

    for(let i=0;i<noOfmete;i++){
  newMete.push({
    id:i,
    size:Math.random()*2+1,
    x:Math.random()*100,
    y:Math.random()*20,
    delay:Math.random()*15,
    animationDuration:Math.random()*3+3,
  }); 
}

setmete(newMete)

};

  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      {stars.map((star)=>(
       <div key={star.id}
       className='star animate-pulse-subtle' 
       style={{
        width:star.size +"px",
        height:star.size +"px",
        left:star.x +"%",
        top:star.y +"%",
        opacity:star.opacity,
        animationDuration:star.animationDuration + "s"

       }}></div>
      ))}

      {mete.map((meteor)=>(
       <div key={meteor.id}
       className='meteor animate-meteor' 
       style={{
        width:meteor.size*30 +"px",
        height:meteor.size +"px",
        left:meteor.x +"%",
        top:meteor.y +"%",
        animationdelay:meteor.delay,
        animationDuration:meteor.animationDuration + "s"

       }}></div>
      ))}
      
    </div>
  )

}
export default StarBackground

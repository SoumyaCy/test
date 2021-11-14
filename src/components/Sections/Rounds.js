import React, {useState,useEffect,useRef} from "react";
import styles from "./Rounds.module.css";
import Roundno from "../Round/Roundno";
import scrollLock from 'scroll-lock';
import Rocket from "../Rocket/Rocket";
import $ from "jquery";


function Round (){
    let [scroll,changeScroll]=useState(1);
    let rockRef=useRef();


useEffect(()=>{
    if(scrollLock===2){
    scrollLock.toggle();}
    else if(scrollLock===4){
    scrollLock.toggle();}
},scroll)


   function noScroll(){
      
       if(scroll<4){
        changeScroll(scroll+1);
   
}
        else {
            
            changeScroll(1) ;
            
        }

    }

    function moveRocket(){
        console.log(scroll)
        switch(scroll){
            case 1: 
           // $("#test").addClass(styles.pos1);
            rockRef.current.style.transform="translateY(-7vh)";
            rockRef.current.style.transition="transform 500ms";
            console.log("hi")
            break;
            case 2: 
            rockRef.current.style.transform="translateY(-13vh)";
            rockRef.current.style.transition="transform 500ms";
            break;
            case 3: 
            rockRef.current.style.transform="translateY(-20vh)";
            rockRef.current.style.transition="transform 500ms";
            break;
            case 4:
               // $("#test").removeClass(styles.pos1);
                rockRef.current.style.transform="translateY(2vh)";
            rockRef.current.style.transition="transform 500ms";
            
            
        }
        
    }
    




 
  
   


    return <div id="Rounds"  onWheel={noScroll} className={styles.Round}>

       <div className={styles.Heading}>
           <h1>How it works</h1>
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Nam convallis ornare vestibulum. Integer sed aliquet it</p>
       </div>

     <div className={styles.main} onWheel={moveRocket}>
     <div  id={styles.test} ref={rockRef}><Rocket /> </div>
    <ul className={styles.list}>
        <li style={{textShadow:(scroll===4?"1px 1px 10px #fff, 1px 1px 10px #ccc":null)}}>Round 4</li>
        <li style={{textShadow:(scroll===3?"1px 1px 10px #fff, 1px 1px 10px #ccc":null)}}>Round 3</li>
        <li style={{textShadow:(scroll===2?"1px 1px 10px #fff, 1px 1px 10px #ccc":null)}}>Round 2</li>
        <li style={{textShadow:(scroll===1?"1px 1px 10px #fff, 1px 1px 10px #ccc":null)}}>Round 1</li>   
    </ul>
       <div>
           <Roundno no={scroll} detail="This is how it goes, blah blah blah" />
       </div>
       <div className={styles.letter}>

       <div className={styles.connectLine} ></div>
       </div>
       
       </div>  
    </div>
   }

export default Round;






//$("html,body").animate({
  //  scrollTop: $("#Rounds").offset().top
//}, 100);
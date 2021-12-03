import React, {useState,useEffect,useRef} from "react";
import styles from "./Rounds.module.css";
import Roundno from "../Round/Roundno";
import scrollLock from 'scroll-lock';
import Rocket from "../Rocket/Rocket";
import $ from "jquery";


function Round (){
    let [scroll,changeScroll]=useState(1);
    let rockRef=useRef();

    function sec2(){
        scrollLock.enablePageScroll();
        $('html, body').animate({
            scrollTop: $("#s2").offset().top
        }, 1000);
    }
    function sec4(){
        scrollLock.enablePageScroll();
        $('html, body').animate({
            scrollTop: $("#s4").offset().top
        }, 1000);
    }


function secLock(event){

    $('html, body').animate({
        scrollTop: $("#s3").offset().top
    }, 1000);
    if(scroll==1){
        console.log("lock")}
	scrollLock.disablePageScroll(document.getElementById("Rounds"));
}
 

    

   function noScroll(event){
      console.log(event)
       if(scroll<4){
        changeScroll(scroll+1);
   
}
        else {
            scrollLock.enablePageScroll();
             
            changeScroll(1) ;
            if(event.deltaY>0){
            sec4();}
            else{
            sec2()}
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
    function move(event) {   
moveRocket();
noScroll(event);

}


 
  
   


    return <div id="Rounds"  onWheel={(scroll==2)?secLock:null}  className={styles.Round}>

       <div className={styles.Heading}>
           <h1>How it works</h1>
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Nam convallis ornare vestibulum. Integer sed aliquet it</p>
       </div>

     <div className={styles.main} onWheel={move}>
     <div  id={styles.test} ref={rockRef}><Rocket /> </div>
    <ul className={styles.list}>
        <li style={{textShadow:(scroll===4?"1px 1px 10px #fff, 1px 1px 10px #ccc":null)}}>Round 4</li>
        <li style={{textShadow:(scroll===3?"1px 1px 10px #fff, 1px 1px 10px #ccc":null)}}>Round 3</li>
        <li style={{textShadow:(scroll===2?"1px 1px 10px #fff, 1px 1px 10px #ccc":null)}}>Round 2</li>
        <li style={{textShadow:(scroll===1?"1px 1px 10px #fff, 1px 1px 10px #ccc":null)}}>Round 1</li>   
    </ul>
       <div className={styles.roundinf}>
           <Roundno no={scroll} detail="This is how it goes, blah blah blah" />
       </div>
       <div className={styles.letter}>
 
       </div>
       
       </div>  
    </div>
   }

export default Round;






//$("html,body").animate({
  //  scrollTop: $("#Rounds").offset().top
//}, 100);
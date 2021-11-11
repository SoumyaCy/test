import "./App.css";
import Navbar from "./components/Header/Navbar";
import SscHead from "./components/Sections/SscHead";
import SscInfo from "./components/Sections/SscInfo";
import Judges from "./components/Sections/Judges";
import Round from "./components/Sections/Rounds";
import React, {useState,useEffect} from "react";
import scrollLock, { disablePageScroll, enablePageScroll } from 'scroll-lock';
import $ from "jquery";

function App() {
let [scroll,setScroll]=useState(1);

function noScroll(){

	if(scroll<4){
	 setScroll(scroll+1);
	
}
	 else {
			 
	 }
 }



function sec1(){
		$('html, body').animate({
			scrollTop: $("#s1").offset().top
		}, 1000);
	}

function sec2(){
    $('html, body').animate({
        scrollTop: $("#s2").offset().top
    }, 1000);
}
function sec3(){
    $('html, body').animate({
        scrollTop: $("#s3").offset().top
    }, 1000);
	scrollLock.disablePageScroll("#s3");

}
function sec4(){
	scrollLock.enablePageScroll();
	setScroll(1);
    $('html, body').animate({
        scrollTop: $("#s4").offset().top
    }, 1000);
}
 


	return (
		<div className="App">
		<section onWheel={sec2} id="s1">
		<Navbar />
			<SscHead />
		</section>
		<section onWheel={sec3} id="s2">
		<SscInfo />			
		</section>
		<section onWheel={(scroll===4)?sec4:noScroll} id="s3">
		<Round onWheel={noScroll}/>
		</section>
		<section onWheel={sec1} id="s4">
		<Judges />
		</section>
			

			
			

		</div>
	);
}

export default App;
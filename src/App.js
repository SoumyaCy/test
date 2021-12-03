import "./App.css";
import Navbar from "./components/Header/Navbar";
import SscHead from "./components/Sections/SscHead";
import SscInfo from "./components/Sections/SscInfo";
import Judges from "./components/Sections/Judges";
import Round from "./components/Sections/Rounds";
import Participate from "./components/Sections/Participate";
import Footer from "./components/Footer/Footer";
import React, {useState,useEffect} from "react";
import ParticleBack from "./components/Particleback";
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

 function move1(event){
	 console.log(event.deltaY);
	if(event.deltaY>0){
		sec2();
	}
	else {}
}

function move2(event){
	
	if(event.deltaY>0){
		sec3();
	}
	else {sec1();}
}
function move3(event){
	if(event.deltaY>0){
		sec4();
	}
	else {sec2();}
}
function move4(event){
	if(event.deltaY>0){
		sec5();
	}
	else {sec3();}
}

function move5(event){
	if(event.deltaY>0){
		sec1();
	}
	else {sec4();}
}

function sec1(){
		$('html, body').animate({
			scrollTop: $("#s1").offset().top
		}, 1000);
	}

function sec2(){
	scrollLock.enablePageScroll();
    $('html, body').animate({
        scrollTop: $("#s2").offset().top
    }, 1000);
}
function sec3(event){

    $('html, body').animate({
        scrollTop: $("#s3").offset().top
    }, 1000);
	scrollLock.disablePageScroll(document.getElementById("s3"));
}


function sec4(){
	scrollLock.enablePageScroll();
	setScroll(1);
    $('html, body').animate({
        scrollTop: $("#s4").offset().top
    }, 1000);
}
 
function sec5(){

    $('html, body').animate({
        scrollTop: $("#s5").offset().top
    }, 1000);
}


	return (
		<div className="App">
		<section  id="s1">
		<Navbar />
		<ParticleBack></ParticleBack>
			<SscHead />
			
		</section>
		<section  id="s2">
		<SscInfo />			
		</section>
		<section id="s3">
		<Round />
		</section>
		<section  id="s4">
		<Participate />
		</section>
		<section id="s5">
		<Judges />
		</section>
		<section id="s6">
		<Footer />
		</section>
			

			
			

		</div>
	);
}

export default App;

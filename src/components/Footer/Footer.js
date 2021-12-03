import React from "react";
import spacenovaLogo from "./../../assets/spaceonovaLogo.png";
import "./Footer.css"


function Footer(params) {
    return (
        <div>
            <div className="Section-1">
            <img className="logo" src={spacenovaLogo} alt="Spacenova Logo"></img>
            <ul className="contact">
            <span>Contact Us:</span>
                <li>Email <a href="network@spaceonova.com">network@spaceonova.com</a></li>
                <li><span className="phone">Phone <a href="tel: +918102104673">+91-8102104673</a></span></li>
            </ul>
            <ul className="links">
                <li><a href="https://twitter.com/spaceonova">Twitter</a></li>
                <li><a href="https://www.facebook.com/spaceonova">Facebook</a></li>
                <li><a href="https://www.linkedin.com/company/spaceonova/">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/spaceonova/">Instagram</a></li>
                <li><a href="http://t.me/spaceonova">Telegram</a></li>
                <li><a href="https://www.youtube.com/spaceonova">Youtube</a></li>
            </ul>
            </div>
            
            <div className="Section-2">
            <span>© Spacenova</span>
            <span className="next-c">Brought to you by Spacenova</span>
            </div>
        </div>
    )
    
}

export default Footer;
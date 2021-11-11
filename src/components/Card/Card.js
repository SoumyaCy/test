import React from "react";
import styles from "./Card.module.css";

function Card (props){
    return <div className={styles.cardContainer}>
           <div className={styles.card}>
   <div className={styles.front}></div>
   <div className={styles.back}>
    <h3>{props.name}</h3>
    <p>{props.info}</p>
   </div>
    </div>
    </div>
     
 
}

 export default Card;
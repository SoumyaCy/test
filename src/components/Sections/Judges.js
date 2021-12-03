import React from "react";
import Card from "../Card/Card.js";
import styles from "./Judges.module.css";

function Judges(){
   return <div className={styles.Judges}>
       <div className={styles.Heading}>
           <h1>Judges</h1>
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Nam convallis ornare vestibulum. Integer sed aliquet it</p>
       </div>
       <div className={styles.cards}>
        <div className={styles.firstRow}>
           <Card name="Name" info=" Lorem ipsum dolor sit amet,"></Card>
           <Card name="Name" info=" Lorem ipsum dolor sit amet,"></Card>
           <Card name="Name" info=" Lorem ipsum dolor sit amet,"></Card>
           <Card name="Name" info=" Lorem ipsum dolor sit amet,"></Card>
           
           </div>
           <div className={styles.secondRow}>
           <Card name="Name" info=" Lorem ipsum dolor sit amet,"></Card>
           <Card name="Name" info=" Lorem ipsum dolor sit amet,"></Card>
           <Card name="Name" info=" Lorem ipsum dolor sit amet,"></Card>
           <Card name="Name" info=" Lorem ipsum dolor sit amet,"></Card>
          
           </div>
       </div>
           
   </div> 
}

export default Judges;
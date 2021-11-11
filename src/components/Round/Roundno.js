import React from "react";
import styles from "./Roundno.module.css";

function Roundno(props){
    return <div className={styles.Roundno}>
        <h1>
            Round {props.no}
        </h1>
        <p>{props.detail}</p>
    </div>
}

export default Roundno;
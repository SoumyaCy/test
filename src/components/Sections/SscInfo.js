import React from "react";
import styles from "./Sscinfo.module.css";
import bigPlanet from "./../../assets/graphics-01.png";
const SscInfo = () => {
	return (
		<div className={styles["sec-two"]}>
			<img
				className={styles["big-planet"]}
				src={bigPlanet}
				alt="Big planet"></img>
			<h1 className={styles["about-ssc"]}>About SSC 2022</h1>
			<p className={styles["about-ssc"]}>
				The Space Science Challenge 2022 has been <br /> initiated by Spaceonova
				with an objective to induce <br /> problem-solving skills, design
				thinking and a <br></br> solution-oriented mindset among students in the{" "}
				<br /> fields of space technology and exploration.
			</p>
			<div className={styles.smallPlanets}>
				<div id={styles.p1} className={styles["small-planet"]}>
					Step 1
				</div>
				<div id={styles.p2} className={styles["small-planet"]}>
					step 2
				</div>
				<div id={styles.p3} className={styles["small-planet"]}>
					Step3
				</div>
			</div>
		</div>
	);
};

export default SscInfo;

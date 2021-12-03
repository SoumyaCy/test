import React, { useState } from "react";
import styles from "./Participate.module.css";

const Participate = (props) => {
	let [steps, setSteps] = useState(0);
	const stepsHandler = (num) => (event) => {
		if (num === 1) {
			setSteps(1);
		} else if (num === 2) {
			setSteps(2);
		} else if (num === 3) {
			setSteps(3);
		} else if (num === 4) {
			setSteps(4);
		} else if (num === 5) {
			setSteps(5);
		} else if (num === 6) {
			setSteps(6);
		} else if (num === 7) {
			setSteps(7);
		}
	};
	return (
		<div className={styles.participation}>
			<h1>How to Participate</h1>
			<div>
				<ul className={styles.list}>
					<li className={styles.listItem} onMouseOver={stepsHandler(1)}>
						<div
							className={`${styles.steps} ${
								steps === 1 ? styles.activeStep : ""
							}`}>
							{steps === 1 ? <p>Get ready with a team of 4-6 members.</p> : "1"}
						</div>
					</li>
					<li className={styles.listItem} onMouseOver={stepsHandler(2)}>
						<div
							className={`${styles.steps} ${
								steps === 2 ? styles.activeStep : ""
							}`}>
							{steps === 2 ? (
								<p>Register for the event, and book your slot FREE of cost.</p>
							) : (
								"2"
							)}
						</div>
					</li>
					<li className={styles.listItem} onMouseOver={stepsHandler(3)}>
						<div
							className={`${styles.steps} ${
								steps === 3 ? styles.activeStep : ""
							}`}>
							{steps === 3 ? (
								<p>
									Want to get the basics right? Attend the 2-day Masterclass on
									Rocketry/Satellites (in respective slots)
								</p>
							) : (
								"3"
							)}
						</div>
					</li>
					<li className={styles.listItem} onMouseOver={stepsHandler(4)}>
						<div
							className={`${styles.steps} ${
								steps === 4 ? styles.activeStep : ""
							}`}>
							{steps === 4 ? (
								<p>
									Participate in the PRELIMS, and get qualified for the next
									round..
								</p>
							) : (
								"4"
							)}
						</div>
					</li>
					<li className={styles.listItem} onMouseOver={stepsHandler(5)}>
						<div
							className={`${styles.steps} ${
								steps === 5 ? styles.activeStep : ""
							}`}>
							{steps === 5 ? (
								<p>
									Abstract submission! Let your groundbreaking ideas take the
									stand, thereby taking you to the next round.
								</p>
							) : (
								"5"
							)}
						</div>
					</li>
					<li className={styles.listItem} onMouseOver={stepsHandler(6)}>
						<div
							className={`${styles.steps} ${
								steps === 6 ? styles.activeStep : ""
							}`}>
							{steps === 6 ? (
								<p>
									Present the implementation of your analytical ideas and get
									onboard for the ‘GRAND FINALE’.
								</p>
							) : (
								"6"
							)}
						</div>
					</li>
					<li className={styles.listItem} onMouseOver={stepsHandler(7)}>
						<div
							className={`${styles.steps} ${
								steps === 7 ? styles.activeStep : ""
							}`}>
							{steps === 7 ? (
								<p>Take the last shot and give it your best!</p>
							) : (
								"7"
							)}
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Participate;
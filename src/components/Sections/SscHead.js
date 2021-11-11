import React from "react";
import styles from "./SscHead.module.css";
import sscimg from "./../../assets/ssclogo.png";

const SscHead = () => {
	return (
		<div className={styles.sectionOne}>
			<div className={styles.child}>
				<img
					className={styles.img}
					src={sscimg}
					alt="Space Science Channlenge"
				/>
			</div>
			<div className={`${styles.texts} ${styles.child}`}>
				<h1 className={styles.heading}>Space Science Challenge 2022</h1>
				<p className={styles.tagline}>
					Where Ideation and Awards Tends to Infinity
				</p>
				<div>
					<button type="button" className={`${styles.btn} ${styles.reg}`}>
						Register Now
					</button>
					<button type="button" className={`${styles.btn} ${styles.collab}`}>
						Collaborate
					</button>
				</div>
			</div>
		</div>
	);
};

export default SscHead;

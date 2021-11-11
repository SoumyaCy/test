import React, { Fragment } from "react";
import imglog from "./../../assets/spaceonovaLogo.png";
import styles from "./Navbar.module.css";
const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<img src={imglog} alt="Spaceonova Logo" />
			<div className="">
				<ul className={styles.links}>
					<li className={styles.navItem}>
						<a className={`${styles.navLink} ${styles.reg}`} href="#">
							REGISTER
						</a>
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href="#">
							COLLABORATE
						</a>
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href="#">
							BROCHURE
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

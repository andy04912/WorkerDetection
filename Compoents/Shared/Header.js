import React from "react";
import { Link } from "react-router-dom";
import Styles from "../../CSS/Shared/HeaderBar.module.scss";
import workerLogo from "../../logo_white.jpg";
import { Image } from "react-bootstrap";

function Header() {
	return (
		<div className={Styles.header}>
			<Link to="/" className={Styles.headerText}>
				<Image
					className={Styles.workerLogo}
					src={workerLogo}
					alt="worker"
				></Image>
			</Link>

			<div></div>
			<div></div>

			<Link className={Styles.headerText} to="/ProjectInformation">
				專案介紹
			</Link>

			<Link className={Styles.headerText} to="/About">
				關於我們
			</Link>
		</div>
	);
}

export default Header;

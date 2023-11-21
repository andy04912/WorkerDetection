import React from "react";
import { Link } from "react-router-dom";
import Styles from "../../CSS/Shared/FooterBar.module.scss";
import { Image } from "react-bootstrap";

function Footer() {
	return (
		<div className={Styles.footer}>
			<span className={Styles.footerText}>標語</span>
		</div>
	);
}

export default Footer;

import React from "react";
import Styles from "../../CSS/Pages/AboutPage.module.scss";
function About() {
	return (
		<div className={Styles.PageContainer}>
			<div className={Styles.PageBody}>
				<h1 className={Styles.title}>關於我們</h1>
				<pre className={Styles.text}>
					我們是一支充滿熱情且專業的團隊，
					<br />
					致力於利用最新科技改善工地安全。
					<br />
					團隊成員來自不同領域，
					<br />
					包括資深的前端開發者、
					<br />
					擁有豐富實戰經驗的全端工程師，
					<br />
					以及專精於人工智能和影像處理的專家。
					<br />
					我們相信，透過創新的技術和對細節的專注，
					<br />
					能夠為建築行業帶來革命性的改變。
					<br />
					這個專案不僅是我們技術實力的展現，
					<br />
					更是我們對於提升職業安全和促進工作效率不懈追求的見證。
				</pre>
			</div>
		</div>
	);
}

export default About;

import React from "react";
import Styles from "../../CSS/Pages/ProjectInfoPage.module.scss";
import workFilmImg from "../../Image/workFilmImg.jpg";
import { Image } from "react-bootstrap";
function ProjectInfo() {
	return (
		<div className={Styles.PageContainer}>
			<div className={Styles.PageBody}>
				<Image src={workFilmImg} className={Styles.workFilmImg} />
				<span className={Styles.title}>專案介紹</span>
				<span className={Styles.subTitle}>專案背景</span>
				<p className={Styles.text}>
					工地安全一直是建築行業面臨的重大挑戰。
					傳統上，安全監控依賴於人工監督， 這不僅耗時而且容易出錯。
					為了提高安全監控的效率和準確性，我們開發了這款工地防護器具偵測系統。
				</p>
				<span className={Styles.subTitle}>技術架構詳述</span>
				<ul>
					<li>
						<p className={Styles.text}>
							影像辨識技術: 使用YOLOv8， 來分析監控攝像頭捕獲的影像。
							這些演算法經過訓練，能準確識別各種安全裝備，如安全帽、防護背心等。
						</p>
					</li>
					<li>
						<p className={Styles.text}>
							React前端界面: 我們設計了一個現代化的前端界面，
							使監工能輕鬆查看即時數據和警報，確保良好的用戶體驗和高效的資料處理。
						</p>
					</li>
				</ul>
				<span className={Styles.subTitle}>功能特點進階介紹</span>
				<ul>
					<li>
						<p className={Styles.text}>
							即時監控與警報: 系統能夠實時分析工地的影像，
							一旦發現工人未正確穿戴安全裝備，立即通過短信、電子郵件或應用程序通知相關人員。
						</p>
					</li>
					<li>
						<p className={Styles.text}>
							自適應學習功能: 系統具備自我學習能力，
							能根據不同工地的特點和數據，不斷優化識別模型。
						</p>
					</li>
				</ul>
				<span className={Styles.subTitle}>預期影響與效益</span>
				<ul>
					<li>
						<p className={Styles.text}>
							提升安全意識:
							持續的監控和即時反饋有助於提高工人對穿戴安全裝備的意識。
						</p>
					</li>
					<li>
						<p className={Styles.text}>
							降低人為疏忽造成的事故:
							通過自動化監控，大大降低因人為疏忽導致的安全事故。
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ProjectInfo;

import React, { useRef, useEffect } from "react";
import detectVideo from "../../Image/detectVideo.mp4";
import Styles from "../../CSS/Pages/HomePage.module.scss";
import { Image } from "react-bootstrap";
import workerImg from "../../Image/workerIMG.jpg";
import cctvImg from "../../Image/CCTVIMG.jpg";
import firstImg from "../../Image/bgimage.jpg";
function HomePage() {
	const canvasRef = useRef(null);
	const markers = useRef([]);

	return (
		<div className={Styles.HomePageContainer}>
			<div className={Styles.HomePageBody}>
				<div className={Styles.firstImgContainer}>
					<Image
						className={Styles.firstImg}
						src={firstImg}
						alt="描述圖片內容"
					></Image>
					<div className={Styles.textOverlay}>防護器具偵測</div>
				</div>
				<div className={Styles.detectVideoInfo}>
					<span className={Styles.homeTitle}>YOLOv8</span>
					<p>保持高準確度的同時，具有出色的實時處理能力。</p>
					<p>輕鬆整合到各種平台和應用中。</p>
				</div>
				<video
					className={Styles.detectVideo}
					src={detectVideo}
					autoPlay
					loop
					muted
				></video>
				{/* <span className={Styles.homeTitle}>穿戴偵測系統</span> */}

				<Image className={Styles.workerImg} src={workerImg}></Image>
				<div className={Styles.workInfo}>
					<span className={Styles.homeTitle}>工人安全</span>
					<p>
						透過辨識工地人員是否穿戴安全裝備，確保每位施工人員確實遵守施工規範，降低工安風險，並協助業者落實工地安全管理。
					</p>
				</div>

				<div className={Styles.cctvInfo}>
					<span className={Styles.homeTitle}>實時監測</span>
					<p>
						即時響應與處理，在檢測到安全違規或危險情況時，系統能立即發出警告，並通知相關人員處理，確保問題能在最短時間內得到解決。
					</p>
				</div>
				<Image className={Styles.cctvImg} src={cctvImg}></Image>
				<div className={Styles.footer}>
					<p></p>
				</div>
			</div>
		</div>
	);
}

export default HomePage;

// 調整 canvas 尺寸以匹配其父元素
// const resizeCanvas = () => {
// 	const canvas = canvasRef.current;
// 	canvas.width = canvas.offsetWidth;
// 	canvas.height = window.innerHeight * 0.75;
// 	updateCanvas(); // 確保在調整尺寸後重新繪製
// };

// useEffect(() => {
// 	// 窗口大小改變時調整 canvas 尺寸
// 	window.addEventListener("resize", resizeCanvas);
// 	resizeCanvas(); // 初始調整大小
// 	const interval = setInterval(() => {
// 		updateCanvas();
// 	}, 1000);
// 	return () => {
// 		clearInterval(interval);
// 		window.removeEventListener("resize", resizeCanvas);
// 	};
// }, []);

// const updateCanvas = () => {
// 	const canvas = canvasRef.current;
// 	const ctx = canvas.getContext("2d");
// 	const imageWidth = canvas.width;
// 	const imageHeight = canvas.height;

// 	// 隨機添加或移除標記
// 	if (Math.random() < 0.5 && markers.current.length < 10) {
// 		markers.current.push({
// 			x: Math.random() * imageWidth,
// 			y: Math.random() * imageHeight,
// 		});
// 	} else if (markers.current.length > 0) {
// 		markers.current.splice(
// 			Math.floor(Math.random() * markers.current.length),
// 			1
// 		);
// 	}

// 	// 清除並重新繪製
// 	ctx.clearRect(0, 0, imageWidth, imageHeight);
// 	ctx.drawImage(
// 		document.getElementById("backgroundImage"),
// 		0,
// 		0,
// 		imageWidth,
// 		imageHeight
// 	);

// 	// 方框尺寸
// 	const boxSize = 20; // 方框的邊長

// 	markers.current.forEach((marker) => {
// 		ctx.strokeStyle = "red";
// 		ctx.lineWidth = 2;
// 		ctx.beginPath();
// 		ctx.strokeRect(marker.x, marker.y, boxSize, boxSize);
// 		ctx.fill();
// 	});
// };

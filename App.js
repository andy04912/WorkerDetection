import Styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import Header from "./Compoents/Shared/Header";
import Footer from "./Compoents/Shared/Footer";

function App() {
	return (
		<div className={Styles.fixed_background}>
			<div className={Styles.App}>
				<Header></Header>
				<div className={Styles.outletTop}>
					<Outlet></Outlet>
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;

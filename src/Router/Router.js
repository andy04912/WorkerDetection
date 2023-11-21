import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "../App";
import HomePage from "../Compoents/Pages/HomePage";
import ProjectInfo from "../Compoents/Pages/ProjectInfo";
import About from "../Compoents/Pages/About";
const Router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/ProjectInformation",
				element: <ProjectInfo />,
			},
			{
				path: "/About",
				element: <About />,
			},
		],
	},
]);

export default Router;

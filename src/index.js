import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Home from "./components/home";
import { store } from "./app/store";
import { Provider } from "react-redux";
import AboutUs from "./components/AboutUs";
import FaqSection from "./components/Faq";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<App />}>
						<Route path="home" element={<Home />} />
						<Route path="AboutUs" element={<AboutUs />} />
						<Route path="FAQ" element={<FaqSection />} />
					</Route>
				</Routes>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

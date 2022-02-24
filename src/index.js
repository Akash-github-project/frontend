import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<App />} />
				</Routes>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

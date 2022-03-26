import { Header } from "./components/Header";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import "./index.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Dropdown, NormalElement } from "./components/Dropdown";
import Wrapper from "./components/wrapper";
import { HeaderLogged } from "./components/HeaderLogged";
import MainWrapper from "./components/MainWrapper";
import NotificationBar from "./components/NotificationBar";
import LoginOverlay from "./components/loginOverlay";

function App() {
	const showLogin = useSelector(state => state.loginOverlay.loginOverlayStatus);
	const [store, setStore] = useState("");
	let item = {
		one: {
			text: "option 1",
			value: "op 1",
		},
		two: {
			text: "option 2",
			value: "op 2",
		},
	};
	return (
		<div className="m-0 p-0">
			{showLogin === true ? <LoginOverlay /> : <div></div>}
			<MainWrapper>
				<Header />
				{/* change */}
				<Outlet />
				{/* change here */}
				<Wrapper>
					<Footer />
				</Wrapper>
			</MainWrapper>
		</div>
	);
}

export default App;

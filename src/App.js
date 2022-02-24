import { Header } from "./components/Header";
import React from "react";
import { useState } from "react";
import "./App.css";
import "./index.css";
import { Outlet, Link } from "react-router-dom";
import { Crosel } from "./components/Crosel";
import { Footer } from "./components/Footer";
import { Dropdown, NormalElement } from "./components/Dropdown";
import Wrapper from "./components/wrapper";
import { HeaderLogged } from "./components/HeaderLogged";
import MainWrapper from "./components/MainWrapper";
import NotificationBar from "./components/NotificationBar";
import Services from "./components/Services";
function App() {
	const [store, setStore] = useState("");
	// function closeMenu(e){
	//   let currentState = menu;
	//     if(e.target.id === "menu"){
	//         currentState = (currentState)?false:true;
	//     }
	//     else{
	//       if(currentState)
	//       currentState = false;
	//     }
	//     setMenu(currentState);
	// }
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
			<MainWrapper>
				<HeaderLogged />
				<Wrapper extraClass="mt-0">
					<NotificationBar />
				</Wrapper>
				<Wrapper>
					<Crosel />
				</Wrapper>
				{/* <Login /> */}
				{/* <Link to="/extra">some Extra</Link> */}
				{/* <Wrapper>
					<Dropdown store={store} select={setStore} data={item} />
				</Wrapper> */}
				<Wrapper>
					<Services />
				</Wrapper>
				<Wrapper>
					<Footer />
				</Wrapper>
			</MainWrapper>
		</div>
	);
}

export default App;

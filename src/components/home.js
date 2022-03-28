import Wrapper from "./wrapper";
import NotificationBar from "./NotificationBar";
// import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import { Crosel } from "./Crosel";
// import Services from "./Services";
import React from "react";

const Home = () => {
	return (
		<>
			<Wrapper extraClass="mt-[0px]">
				<NotificationBar />
			</Wrapper>
			<Outlet />
		</>
	);
};

export default Home;

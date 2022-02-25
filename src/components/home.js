import Wrapper from "./wrapper";
import NotificationBar from "./NotificationBar";
import { Crosel } from "./Crosel";
import Services from "./Services";
import React from "react";

const Home = () => {
	return (
		<>
			<Wrapper extraClass="mt-[0px]">
				<NotificationBar />
			</Wrapper>

			<Wrapper>
				<Crosel />
			</Wrapper>

			<Wrapper>
				<Services />
			</Wrapper>
		</>
	);
};

export default Home;

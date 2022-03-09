import React from "react";
import Wrapper from "./wrapper";
import { Crosel } from "./Crosel";
import Services from "./Services";
import Postpaid from "./postpaid";
import PostpaidMobile from "./subServices/postpaidMobile";

const WrapperPostpaid = () => {
	return (
		<>
			<Wrapper>
				<Crosel />
			</Wrapper>

			<Wrapper>
				<Services />
			</Wrapper>
			<Wrapper>
				<Postpaid>
					<PostpaidMobile />
				</Postpaid>
			</Wrapper>
		</>
	);
};

export default WrapperPostpaid;

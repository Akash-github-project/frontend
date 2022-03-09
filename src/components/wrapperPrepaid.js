import React from "react";
import Wrapper from "./wrapper";
import { Crosel } from "./Crosel";
import Services from "./Services";
import Prepaid from "./prepaid";
import PrepaidMobile from "./subServices/prepaidMobile";

const WrapperPrepaid = () => {
	return (
		<>
			<Wrapper>
				<Crosel />
			</Wrapper>

			<Wrapper>
				<Services />
			</Wrapper>
			<Wrapper>
				<Prepaid>
					<PrepaidMobile />
				</Prepaid>
			</Wrapper>
		</>
	);
};

export default WrapperPrepaid;

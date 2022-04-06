import React from "react";
import Wrapper from "./wrapper";
import Postpaid from "./postpaid";
import PostpaidMobile from "./subServices/postpaidMobile";

const WrapperPostpaid = () => {
	return (
		<>
			<Wrapper>
				<Postpaid>
					<PostpaidMobile />
				</Postpaid>
			</Wrapper>
		</>
	);
};

export default WrapperPostpaid;

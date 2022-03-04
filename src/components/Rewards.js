import React from "react";
import Wrapper from "./wrapper";
import RewardsTab from "./RewardsTab";

const Rewards = () => {
	return (
		<Wrapper>
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
					<h1 className="text-white text-[18px] py-[10px] px-1">Rewards</h1>
				</div>
				<div>
					<RewardsTab />
				</div>
			</div>
		</Wrapper>
	);
};

export default Rewards;

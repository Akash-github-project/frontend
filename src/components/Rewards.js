import React from "react";
import Wrapper from "./wrapper";
import RewardsTab from "./RewardsTab";

const Rewards = () => {
	return (
		<Wrapper>
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border mb-3">
					<h1 className="text-white text-[18px] py-[10px] px-1">Rewards</h1>
				</div>
				<img
					src="/images/rewrd.jpeg"
					alt="Rewards page image"
					className="w-full"
				/>
				<div className="w-full">
					<RewardsTab />
				</div>
			</div>
		</Wrapper>
	);
};

export default Rewards;

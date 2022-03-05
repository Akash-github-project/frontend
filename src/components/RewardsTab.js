import React, { useEffect, useState } from "react";
import "../css/tablist.css";
import { Tabs, useTabState, Panel } from "@bumaga/tabs";
import PointsCounter from "./rewardPoints/pointsCounter";
import TransactionList from "./TransactionList";

const cn = (...args) => args.filter(Boolean).join(" ");
const Tab = ({ children }) => {
	const { isActive, onClick } = useTabState();

	return (
		<li className={cn("rewardsTab", isActive && "active")} onClick={onClick}>
			{children}
		</li>
	);
};

export default ({ data }) => {
	const [state, setState] = useState(0);
	useEffect(() => {
		setState(1);
	}, []);

	return (
		<Tabs state={[state, setState]}>
			<div className="">
				<ul className="tab-list flex lg:justify-center md:gap-2 overflow-x-auto p-[10px]">
					<Tab>Rewards Points</Tab>
					<Tab>Earn Rewards Points</Tab>
					<Tab>Redeem Rewards Points</Tab>
				</ul>
				{/* className="max-w-[33rem] 2xl:ml-4"  */}
				<div className="tab-progress h-2" />
				{/* <Panel> */}
				<Panel>
					<div className="">
						<div>hello tab 1</div>
					</div>
				</Panel>
				<Panel>
					<div className="">
						<PointsCounter points={88882} />
						<TransactionList />
					</div>
				</Panel>
				<Panel>
					<div className="">
						<div>hello tab 3</div>
					</div>
				</Panel>
			</div>
		</Tabs>
	);
};

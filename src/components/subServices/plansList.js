import React, { useState, useEffect } from "react";
import apires from "../../otherData/api_finder_response.json";
import { Tabs, useTabState, Panel } from "@bumaga/tabs";
import "../../css/planList.css";

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
	const { isActive, onClick } = useTabState();

	return (
		<button className={cn("tab", isActive && "active")} onClick={onClick}>
			{children}
		</button>
	);
};

const PlansList = () => {
	const [state, setState] = useState(0);
	useEffect(() => {
		setState(1);
	}, []);

	let res = apires.categories;
	let planTypes = res.map(category => category.name);
	let plansList = res.map(category => category.plans);
	console.log(plansList);

	return (
		<Tabs state={[state, setState]}>
			<div className="grid grid-cols-12 w-full gap-1">
				<div></div>
				<div className=" flex flex-col lg:col-span-2">
					{
						<div className="p-1 flex flex-col border">
							{planTypes.map(planType => (
								<Tab>{planType}</Tab>
							))}
						</div>
					}
				</div>
				<div className="lg:col-span-9">
					<h2 className="w-full">some company plans</h2>
					<div className="w-full flex justify-around items-center">
						<div>Description</div>
						<div>Data</div>
						<div>Validity</div>
						<div>Amount</div>
					</div>
					<div className="flex flex-col h-96 overflow-auto text-sm text-gray-primary">
						{plansList.map(plan => (
							<Panel>
								<div className="grid items-center text-gray-primary">
									{plan.map(eachPlan => (
										<div className="flex col-span-full w-full border-b items-center justify-around text-inherit">
											<div className="p-1 text-gray-primary w-[25rem] text-inherit">
												{eachPlan.benefit}
											</div>
											<div className="p-1 text-gray-primary w-[10rem] text-inherit">
												{eachPlan.validity}
											</div>
											<div className="p-1 text-gray-primary   w-[5rem] text-inherit">
												{eachPlan.data}
											</div>
											<div className="p-1 w-[5rem] text-pink-primary">
												<button className=" mx-auto border border-pink-primary w-[75px] hover:bg-pink-primary hover:text-white rounded text-inherit p-1">
													<span className="mx-auto text-inherit hover:text-white">
														Rs {eachPlan.amount}
													</span>
												</button>
											</div>
										</div>
									))}
								</div>
							</Panel>
						))}
					</div>
				</div>
			</div>
		</Tabs>
	);
};

export default PlansList;

// benefit
// validity
// data
// ammount

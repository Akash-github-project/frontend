import React, { useState, useEffect } from "react";
import apires from "../../otherData/api_finder_response.json";
import { Tabs, useTabState, Panel } from "@bumaga/tabs";

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
			<div className="flex">
				<div className=" flex flex-col">
					{
						<div className="p-1 flex flex-col border">
							{planTypes.map(planType => (
								<Tab>{planType}</Tab>
							))}
						</div>
					}
				</div>
				<div className="">
					<h2>some company plans</h2>
					<div className="flex flex-col border-2 border-gray-700 ">
						{plansList.map(plan => (
							<Panel>
								<div className="grid borderitems-center w-[50rem]">
									{plan.map(eachPlan => (
										<div className="flex col-span-full w-full border items-center justify-center">
											<div className="p-1 text-gray-primary w-[25rem] ">
												{eachPlan.benefit}
											</div>
											<div className="p-1 text-gray-primary w-[10rem]">
												{eachPlan.validity}
											</div>
											<div className="p-1 text-gray-primary   w-[5rem]">
												{eachPlan.data}
											</div>
											<div className="p-1 w-[5rem]">
												<button className=" mx-auto border border-pink-primary px-3 py-2 hover:bg-pink-primary hover:text-white ">
													<span className="mx-auto text-inherit hover:text-white">
														{eachPlan.amount}
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

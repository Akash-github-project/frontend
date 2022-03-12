import React, { useState, useEffect } from "react";
import { Tabs, useTabState, Panel } from "@bumaga/tabs";

const cn = (...args) => args.filter(Boolean).join(" ");
const Tab = ({ children }) => {
	const { isActive, onClick } = useTabState();

	return (
		<button
			className={cn("tab text-left ", isActive && "active")}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
const mobileView = () => {
	useEffect(() => {
		setState(1);
	}, []);

	const [state, setState] = useState(0);
	return (
		<Tabs state={[state, setState]}>
			<div className="grid grid-cols-12 w-full gap-2 mt-2">
				<div className=" flex flex-col col-span-full mr-auto pr-2 ">
					{
						<div className="flex flex-col border  lg:bg-gray-100 bg-white">
							{planTypes.map(planType => (
								<Tab>{planType}</Tab>
							))}
						</div>
					}
				</div>
				<div className="lg:col-span-10 pl-16 xl:pl-12">
					<h2 className="w-full font-medium leading-5 capitalize">
						some company plans
					</h2>
					<hr className="mt-4" />
					<div className="w-full flex justify-around items-center">
						<div className="des  text-left">Description</div>
						<div className="oth  text-center pr-4">Data</div>
						<div className="oth  text-center pr-4">Validity</div>
						<div className="oth  text-center pr-4">Amount</div>
					</div>
					<div className="flex flex-col h-96 overflow-auto text-sm text-gray-primary">
						{plansList.map(plan => (
							<Panel>
								<div className="grid items-center text-gray-primary">
									{plan.map(eachPlan => (
										<div className="flex col-span-full w-full border-b items-center justify-around text-inherit">
											<div className="p-1 text-gray-primary  text-inherit des">
												{eachPlan.benefit}
											</div>
											<div className="p-1 text-gray-primary  text-inherit text-center oth">
												{eachPlan.validity}
											</div>
											<div className="p-1 text-gray-primary  text-inherit text-center oth">
												{eachPlan.data}
											</div>
											<div className="p-1  text-pink-primary flex oth">
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

export default mobileView;

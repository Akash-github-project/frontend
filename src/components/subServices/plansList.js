import React, { useState, useEffect } from "react";
import apires from "../../otherData/api_finder_response.json";
import { Tabs, useTabState, Panel } from "@bumaga/tabs";
import "../../css/planList.css";

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
	const { isActive, onClick } = useTabState();

	return (
		<button
			className={cn(
				"tab text-left border-b-2 lg:border-0",
				isActive && "activePlan"
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

const PlansList = () => {
	const [state, setState] = useState(0);
	const [renderType, setRenderType] = useState("desk");

	useEffect(() => {
		setState(1);
		if (window.innerWidth < 820) {
			console.log("mobileSize");
			setRenderType("mob");
		}
	}, []);

	let res = apires.categories;
	let planTypes = res.map(category => category.name);
	let plansList = res.map(category => category.plans);
	console.log(plansList);

	return (
		<Tabs state={[state, setState]}>
			<div className="grid grid-cols-12 w-full gap-2 mt-2">
				<div className="lg:hidden text-center w-full col-span-full">
					Borwse Plans
				</div>
				<div className="lg:hidden w-full font-medium leading-5 capitalize col-span-full text-center">
					some company plans
				</div>
				<div className=" flex flex-col col-span-full w-full lg:col-span-2 lg:w-40 xl:w-48 mr-auto pr-2 ">
					{
						<div className="flex justify-center lg:justify-start lg:flex-col border-b lg:border w-full lg:mx-0 bg-white lg:bg-gray-100">
							{planTypes.map(planType => (
								<Tab>{planType}</Tab>
							))}
						</div>
					}
				</div>
				<div className=" col-span-full lg:col-span-10 pl-16 xl:pl-12">
					<div className="hidden lg:block text-center w-full">Borwse Plans</div>
					<h2 className="hidden lg:block w-full font-medium leading-5 capitalize">
						some company plans
					</h2>
					<hr className="mt-4" />
					<div className="hidden  w-full lg:flex justify-around items-center">
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
											<div className="lg:hidden flex flex-col text-gray-primary mr-auto">
												<div className="p-1 text-gray-primary  text-inherit text-center oth font-bold ">
													Data:{eachPlan.data}
												</div>
												<div className="p-1 text-gray-primary  text-inherit des">
													{eachPlan.benefit}
												</div>
												<div className="p-1 text-gray-primary  text-inherit text-center oth">
													{eachPlan.validity}
												</div>
											</div>

											<div className="hidden lg:block p-1 text-gray-primary  text-inherit des">
												{eachPlan.benefit}
											</div>
											<div className="hidden lg:block  p-1 text-gray-primary  text-inherit text-center oth">
												{eachPlan.validity}
											</div>
											<div className="hidden lg:block p-1 text-gray-primary  text-inherit text-center oth">
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

export default PlansList;

// benefit
// validity
// data
// ammount

import React, { useState, useEffect } from "react";
import apires from "../../otherData/api_finder_response.json";
import { Tabs, useTabState, Panel } from "@bumaga/tabs";
import "../../css/planList.css";
import { useDispatch } from "react-redux";
import { storetPlansInfo } from "../../app/features/prepaidPlansSlice";
import useWindowSize from "./pageChangeHook";

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
	const dispatch = useDispatch();
	const [state, setState] = useState(0);
	const [size, setSize] = useWindowSize();

	useEffect(() => {
		setState(1);
	}, []);

	const handlePlanChoose = e => {
		let flatList;
		let plan;
		let receivedId = e.target.getAttribute("data-val");
		console.log(receivedId);
		if (receivedId) {
			flatList = plansList.flat(2);
			console.log(flatList);
			plan = flatList.filter(plan => plan.id == receivedId);
			dispatch(storetPlansInfo({ ...plan[0] }));
		}
	};

	let res = apires.categories;
	let planTypes = res.map(category => category.name);
	let plansList = res.map(category => category.plans);
	console.log(plansList);

	return (
		<Tabs state={[state, setState]}>
			<div className="hidden lg:grid grid-cols-12 w-full gap-1 mt-2 ">
				<div className="lg:hidden w-full font-medium leading-5 capitalize col-span-full text-center">
					some company plans
				</div>
				{/* <div className="flex flex-col col-span-full w-full lg:col-span-2 lg:max-w-40 xl:w-48 mr-auto"> */}
				<div className="flex flex-col w-full col-span-2 mr-auto">
					{
						<div className="flex justify-center lg:justify-start lg:flex-col border-b lg:border w-full lg:mx-0 bg-white lg:bg-gray-100">
							{planTypes.map(planType => (
								<Tab>{planType}</Tab>
							))}
						</div>
					}
				</div>
				<div className=" col-span-full lg:col-span-10 pl-8 xl:pl-4">
					<h2 className="hidden lg:block w-full font-medium leading-5 capitalize">
						some company plans
					</h2>
					<hr className="mt-4" />

					<div className="flex flex-col h-96 overflow-auto relative text-sm text-gray-primary">
						<div className="hidden  w-full sticky top-0 lg:flex justify-around items-center bg-white">
							<div className="des  text-left">Description</div>
							<div className="oth  text-center ">Data</div>
							<div className="oth  text-center ">Validity</div>
							<div className="oth  text-center ">Amount</div>
						</div>
						{plansList.map(plan => (
							<Panel>
								<div
									className="grid items-center text-gray-primary"
									onClick={handlePlanChoose}
								>
									{plan.map(eachPlan => (
										<div className="flex col-span-full w-full border-b border-gray-separator items-center justify-around text-inherit">
											<div className="hidden lg:block p-1 text-gray-primary  text-inherit des">
												{eachPlan.benefit}
											</div>
											<div className="hidden lg:block  p-1 text-gray-primary  text-inherit text-center oth">
												{eachPlan.data}
											</div>
											<div className="hidden lg:block p-1 text-gray-primary  text-inherit text-center oth">
												{eachPlan.validity === "na" ? "N/A" : eachPlan.validity}
											</div>

											<div className="p-1  text-pink-primary flex flex-col oth justify-center">
												<button
													className=" mx-auto border border-pink-primary w-[75px] hover:bg-pink-primary hover:text-white rounded text-inherit p-1"
													data-val={eachPlan.id}
												>
													<span
														className="mx-auto text-inherit hover:text-white"
														data-val={eachPlan.id}
													>
														Rs {eachPlan.amount}
													</span>
												</button>
												<small className="text-center text-green-info text-[11px]">
													Rs {eachPlan.dailyCost}/day
												</small>
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

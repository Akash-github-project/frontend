import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "../css/offer.css";
import Offercard from "./offercard";
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

export default ({ data }) => {
	const [state, setState] = useState(0);
	useEffect(() => {
		setState(1);
	}, []);

	return (
		<Tabs state={[state, setState]}>
			<div className="tabs">
				<div className="tab-list flex gap-1 md:gap-2  p-[10px]">
					{Object.keys(data).map(ele => (
						<Tab>{ele}</Tab>
					))}
				</div>
				{/* className="max-w-[33rem] 2xl:ml-4"  */}
				<div className="tab-progress h-2" />
				{/* <Panel> */}
				{Object.keys(data).map(element => (
					<Panel>
						<div className="offerArea">
							{data[`${element}`].length !== 0 ? (
								data[`${element}`].map(dat => (
									<p
										className={classNames({
											"max-w-[33rem]": true,
											"2xl:ml-4": true,
											"self-center": data[`${element}`].length === 1,
										})}
									>
										<Offercard
											promocode={dat.promocode}
											title={dat.title}
											cashback={dat.cashback}
											frequency={dat.frequency}
											details={dat.details}
										/>
									</p>
								))
							) : (
								<div className="w-full p-2 text-pink-primary text-center h-36 flex items-center justify-center shadow-default">
									No offer available. Please check again tomorrow.
								</div>
							)}
						</div>
					</Panel>
				))}
			</div>
		</Tabs>
	);
};

import React from "react";
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

export default ({ data }) => (
	<Tabs>
		<div className="tabs">
			<div className="tab-list flex gap-4 flex-wrap">
				{Object.keys(data).map(ele => (
					<Tab>{ele}</Tab>
				))}
			</div>

			<div className="tab-progress" />
			{/* <Panel> */}
			{Object.keys(data).map(element => (
				<Panel>
					<div className="offerArea">
						{data[`${element}`].map(dat => (
							<p className="max-w-[33rem] 2xl:ml-4">
								<Offercard
									promocode={dat.promocode}
									title={dat.title}
									cashback={dat.cashback}
									frequency={dat.frequency}
									details={dat.details}
								/>
							</p>
						))}
					</div>
				</Panel>
			))}
		</div>
	</Tabs>
);

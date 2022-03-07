import React from "react";
import "../css/transaction.css";
const Table = ({ headings, items }) => {
	return (
		<div className="tableRewardsPoint overflow-x-auto">
			{headings.map(element => {
				return (
					<div className=" overflow-x-auto mt-1 flex">
						<div className="flex-1 text-gray-800 flex items-center text-left text-sm lg:text-base font-bold bg-gray-400/30">
							<span className="text-gray-primary mx-3">{element}</span>
						</div>
					</div>
				);
			})}
			{items.map(child => (
				<>
					<div className=" overflow-x-auto  flex border border-r-0">
						<div className="flex-1 text-gray-800 flex items-center text-left text-sm lg:text-base bg-white">
							<span className="text-gray-primary mx-3">{child.heading}</span>
						</div>
					</div>
					<div className=" overflow-x-auto  flex border border-l-0">
						<div className="flex-1 text-gray-800 flex items-center text-left text-sm lg:text-base bg-white">
							<span className="text-gray-primary mx-3">{child.content}</span>
						</div>
					</div>
				</>
			))}
		</div>
	);
};

export default Table;

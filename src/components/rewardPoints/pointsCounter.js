import React from "react";

const PointsCounter = ({ points = 0 }) => {
	return (
		<div className="grid items-center h-48 bg-white">
			<p className="text-gray-primary mx-auto mb-3 justify-self-start uppercase font-bold">
				Current Points
			</p>
			<div className="flex items-center mx-auto justify-center w-32 h-28 text-md rounded-lg bg-pink-primary text-white ">
				<div className="text-white text-[34px] font-bold">{points}</div>
			</div>
			<div className="pl-2 mr-auto text-lg ">
				History
				<span className=" pl-1 text-gray-primary text-sm">
					(Last 20 transactions)
				</span>
			</div>
		</div>
	);
};

export default PointsCounter;

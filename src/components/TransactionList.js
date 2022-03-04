import React, { useEffect, useRef } from "react";
import "../css/transaction.css";
const TransactionList = ({ userId = -1 }) => {
	let dataRef = useRef();
	useEffect(() => {
		if (userId !== -1) dataRef.current = "";
	}, []);

	return (
		<div className="tableGrid overflow-x-auto mt-1 ">
			<div className="text-gray-800 flex items-center justify-center text-sm lg:text-base bg-gray-400/30">
				<span className="text-gray-primary">Sr No</span>
			</div>
			<div className="text-gray-800 flex items-center justify-center text-sm lg:text-base bg-gray-400/30">
				<span className="text-gray-primary">Date</span>
			</div>
			<div className="text-gray-800 flex items-center justify-center text-sm lg:text-base bg-gray-400/30">
				<span className="text-gray-primary">Activity</span>
			</div>
			<div className="text-gray-800 flex items-center justify-center text-sm lg:text-base bg-gray-400/30">
				<span className="text-gray-primary">Debit</span>
			</div>
			<div className="text-gray-800 flex items-center justify-center text-sm lg:text-base bg-gray-400/30">
				<span className="text-gray-primary">Credit</span>
			</div>
			<div className="text-gray-800 flex items-center justify-center text-sm lg:text-base bg-gray-400/30">
				<span className="text-gray-primary">Balance Points</span>
			</div>
			{userId === -1 ? (
				<div className="col-span-full text-xl font-medium  text-center shadow-lg flex justify-center items-center">
					<div>No transaction found</div>
				</div>
			) : (
				<div>transactions</div>
			)}
		</div>
	);
};

export default TransactionList;

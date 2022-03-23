import React, { useState } from "react";
import Table from "./Table";
import { NumberInput } from "./numberInput";

import "../css/earnPoints.css";

const EarnPoints = () => {
	const [donation, setDonation] = useState("");
	const [balance, setBalance] = useState(110);

	const saveDonationValue = value => {
		if (isNaN(value) === true) setDonation("");
		else setDonation(value);
	};

	let items = [
		{ heading: "Deposite Every Rs 100 into wallet", content: "Earn 01 Point" },
		{
			heading: "Deposit Every Rs 100 Into Wallet (APP Only)",
			content: "Earn 1.5 Point (APP Only)",
		},
		{ heading: "Daily Login (APP Only)", content: "Earn 01 Point" },
		{ heading: "Refer A Friend ", content: "Earn 05 Points" },
		{ heading: "Like Us On Facebook", content: "Earn 05 Points" },
		{
			heading: "Donate Every Rs 100 to Our Social Care Fund",
			content: "Earn 03 Points",
		},
	];
	return (
		<div>
			<div className="w-full p-3 font-bold "></div>
			<Table headings={["Activity", "Earn Rewards Points"]} items={items} />

			<div className="flex items-center justify-right bg-pink-400 h-[40px] px-[15px] w-order box-border mb-3 mt-4">
				<h1 className="text-white text-[16px] md:text-[18px] py-[10px] px-1 capitalize">
					donate to social care fund
				</h1>
			</div>

			<div className="flex  gap-1 mt-6">
				<div className="flex-col w-full md:w-48 ">
					<span className="ml-1 leading-6 font-normal text-sm flex-1">
						(Wallet Balance Rs &nbsp;
						{balance})
					</span>
					<NumberInput
						iType="tel"
						val={donation}
						onleft="Rs. "
						change={saveDonationValue}
						extraClasses=" text-[15px]"
						fieldClasses="border-pink-600 focus:outline-none focus-within:border-blue-400 flex-1"
					/>

					<div
						className={`${
							donation < 25000 ? "hidden" : "inline-block"
						} text-red-600`}
					>
						You can't donate more than 25000
					</div>
				</div>
				<button className="bg-pink-primary px-2 w-full md:w-40 rounded mr-auto mt-6">
					<span className="text-white font-normal">Donate Rs {donation}</span>
				</button>
			</div>
		</div>
	);
};

export default EarnPoints;

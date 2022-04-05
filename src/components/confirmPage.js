import React from "react";
import Wrapper from "./wrapper";
import Countdown from "react-countdown";
import ConfirmSection from "./confirmSection";

const data = [
	{
		title: "Mobile No",
		value: "(+91)6205969707",
	},
	{
		title: "Subject",
		value: "Mobile Recharge",
	},
	{
		title: "Transaction ID",
		value: "PHDF173076359",
	},
	{
		title: "Date",
		value: "06-Feb-2019 12:23:40",
	},

	{
		title: "Mode of Payment",
		value: "Credit Card",
	},

	{
		title: "Transaction Status",
		value: "success",
		cls: "text-green-700",
	},
	{
		title: "Payment Ammount",
		value: "Rs 135",
		cls: "text-2xl",
	},
];

const ConfirmPage = () => {
	const renderer = ({ completed }) => {
		if (completed) {
			return (
				<div className="flex justify-center items-center bg-gray-100 p-4">
					<ConfirmSection
						data={data}
						heading="Recharge Successful"
						type="Recharge"
					/>
				</div>
			);
		} else {
			return (
				<div className="text-center text-medium text-gray-primary text-sx md:text-md">
					Payment is successful. we are processing <br />
					recharge/bill payment. Please wait ...
				</div>
			);
		}
	};
	return (
		<Wrapper>
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
					<h1 className="text-white text-[18px] py-[10px] px-1 capitalize">
						Confirmation Page
					</h1>
				</div>
				<div className="min-h-[60vh]">
					{<Countdown date={Date.now() + 5000} renderer={renderer}></Countdown>}
				</div>
			</div>
		</Wrapper>
	);
};

export default ConfirmPage;

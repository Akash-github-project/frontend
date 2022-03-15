import React from "react";
const data = {
	heading: "some heading",
	dataColumns: [
		{
			bold: false,
			title: "teitle",
			value: 123,
		},
		{
			bold: false,
			title: "teitle",
			value: 123,
		},
		{
			bold: false,
			title: "teitle",
			value: 123,
		},
		{
			bold: false,
			title: "teitle",
			value: 123,
		},
		{
			bold: false,
			title: "teitle",
			value: 123,
		},
	],
};

const ConfirmDetails = () => {
	return (
		<>
			{
				<>
					<div className="col-span-full w-full py-2 px-6 bg-gray-100 text-pink-primary font-semibold capitalize leading-[19px]">
						{data.heading}
					</div>
					{data.dataColumns.map(el => (
						<>
							<div
								className={
									el.bold === true
										? "bg-gray-100 "
										: " text-gray-primary " +
										  " text-gray-primary font-semibold text-sm leading-[14px] px-6 py-2 "
								}
							>
								{el.title}
							</div>
							<div
								className={
									el.bold === true
										? "bg-gray-100 "
										: " text-gray-primary " +
										  "  px-6 py-2 font-semibold text-gray-primary text-sm leading-[14px]"
								}
							>
								{el.value}
							</div>
						</>
					))}
				</>
			}
		</>
	);
};

export default ConfirmDetails;

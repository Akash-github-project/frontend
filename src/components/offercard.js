import React, { useRef, useEffect } from "react";

const Offercard = ({ promocode, cashback, title, frequency, details }) => {
	const detail = useRef("");

	useEffect(() => {
		detail.current = details;
	}, []);

	return (
		<div className="offerGrid gap-2 p-4 shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-200">
			{/* row 1 */}
			<strong className="col-span-full text-black text-center p-1 self-center ">
				{title}
			</strong>
			{/* row 2 */}
			<h4 className="col-span-full text-center text-pink-primary font-semibold capitalize">
				{frequency}
			</h4>
			{/* row 3 */}
			<div className="col-span-full  flex justify-left items-center border-2 border-blue-400 font-semibold rounded px-2">
				<div className="text-black font-semibold">Cashback:</div>
				<strong className="text-blue-800 p-1 font-semibold">{cashback}</strong>
			</div>
			{/* row 4*/}
			<div className="flex items-center gap-1 border-2 border-blue-400 rounded px-2">
				<span className="inline-block px-1 text-black font-semibold">
					Promocode:
				</span>
				<strong className="text-blue-800 inline-block font-semibold uppercase">
					{promocode}
				</strong>
			</div>
			<button className="bg-pink-primary text-white p-1 rounded capitalize hover:bg-pink-600">
				hello
			</button>
		</div>
	);
};

export default Offercard;

import React from "react";

const Button = ({
	text,
	exClasses = "",
	fClasses = "",
	click = () => {
		console.log("ran");
	},
	dis = false,
	disM = "",
}) => {
	if (dis === true) {
		return (
			<button
				className={`${exClasses} flex border-box h-9 rounded bg-primary font-normal items-center p-[5px] relative hover:bg-blue-600`}
				onClick={() => click()}
			>
				<span
					className={`text-tertiary leading-[13px] text-center text-[13px] w-full ${fClasses}`}
				>
					{disM}
				</span>
			</button>
		);
	} else {
		return (
			<button
				className={`${exClasses} flex border-box h-9 rounded bg-primary font-normal items-center p-[5px] relative hover:bg-blue-600`}
				onClick={() => click()}
			>
				<span
					className={`text-tertiary leading-[13px] text-center text-[13px] w-full ${fClasses}`}
				>
					{text}
				</span>
			</button>
		);
	}
};

export default Button;
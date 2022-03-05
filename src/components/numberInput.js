import React from "react";

export const NumberInput = ({
	Id = " ",
	extraClasses = " ",
	fieldClasses = " ",
	holder = " ",
	iType = "text",
	change,
	val,
	onleft = " ",
}) => {
	let defaultClasses =
		"border rounded-md text-black focus:text-red-400 border-0 w-full outline-none";
	let defaultField = "flex border rounded items-center p-1 ";

	if (extraClasses !== " ") {
		defaultClasses += extraClasses;
	}

	if (fieldClasses !== " ") {
		defaultField += fieldClasses;
	}

	function changeHandle(e) {
		change(e.target.value);
	}
	return (
		<div className={defaultField} tabIndex={0}>
			<span className="text-gray-primary mr-1">{onleft}</span>
			<input
				type={iType}
				id={Id}
				placeholder={holder}
				value={val}
				onChange={changeHandle}
				className={defaultClasses}
			/>
		</div>
	);
};

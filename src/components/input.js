import React from "react";

export const Input = ({
	Id = " ",
	extraClasses = " ",
	holder = " ",
	iType = "text",
	change,
	val,
	dis = "false",
}) => {
	let defaultClasses =
		"border rounded-md text-black focus:text-red-500 field  ";
	if (extraClasses !== " ") {
		defaultClasses += extraClasses;
	}

	function changeHandle(e) {
		change(e.target.value);
	}
	if (dis === true) {
		return (
			<input
				type={iType}
				id={Id}
				placeholder={holder}
				value={val}
				onChange={changeHandle}
				className={defaultClasses}
				disabled
			/>
		);
	} else {
		return (
			<input
				type={iType}
				id={Id}
				placeholder={holder}
				value={val}
				onChange={changeHandle}
				className={defaultClasses}
			/>
		);
	}
};

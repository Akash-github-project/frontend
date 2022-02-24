import classNames from "classnames";
import React, { useState } from "react";
import "../css/Dropdown.css";

export const Dropdown = ({ store, select, errorMessage = "", data }) => {
	let [status, setStatus] = useState(false);
	let selectOption = e => {
		console.log(e.target.getAttribute("data-val"));
		select(e.target.getAttribute("data-val"));
	};

	console.log(Object.keys(data));
	let opt = Object.keys(data).map((key, i) => {
		return (
			<NormalElement val={data[key].value}>{data[key].text}</NormalElement>
		);
	});

	let defaultClasses =
		"border-box overflow-y-scroll scrollbar absolute top-8 w-full";
	let finalClasses = "";

	if (status) finalClasses = defaultClasses + " hidden";

	return (
		<div
			className="relative flex"
			onFocus={() => setStatus(true)}
			onBlur={() => setStatus(false)}
		>
			<span className="dropdown broder-box " data-error={errorMessage}>
				<input
					type="text"
					className="border  border-bg-primary "
					name=""
					id=""
					value={store}
				/>
			</span>
			<div className={finalClasses} onClick={selectOption}>
				{opt}
			</div>
		</div>
	);
};

export const NormalElement = ({ val = "", otherClasses = "", children }) => {
	let defaultClasses = "p-2 w-full text-left bg-white";
	console.log(children);
	return (
		<div
			data-val={val}
			className={classNames({
				[`${defaultClasses}`]: true,
				[`${otherClasses}`]: true,
			})}
		>
			{children}
		</div>
	);
};

// event.target.getAttribute("data-sortorder");

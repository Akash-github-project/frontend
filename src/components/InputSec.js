import React from "react";
import classNames from "classnames";
const InputSec = ({
	iType = "text",
	mesg = "nothing",
	err = false,
	succs = false,
	extraClasses = "",
	wrapperClasses = "",
	place = "",
	req = false,
}) => {
	let defClasses = "border-0 w-full p-0 m-0 outline-none ";
	let wrapClasses =
		"border border-pink-600 focus-within:border-blue-400 inline-block m-0 w-full ";

	if (extraClasses !== "") defClasses += extraClasses;

	if (wrapClasses !== "") wrapClasses += wrapperClasses;
	let isReq = req ? true : false;

	return (
		<div
			className={classNames({
				"p-0": true,
				msg: true,
				error: err,
				success: succs,
			})}
			data-message={mesg}
		>
			<span className={wrapClasses} tabIndex={0}>
				<input
					type={iType}
					className={defClasses}
					required={isReq}
					placeholder={place}
				/>
			</span>
		</div>
	);
};

export default InputSec;

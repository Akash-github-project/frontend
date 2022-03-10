import React from "react";
import classNames from "classnames";
import "../css/radio.css";

const Radio = ({ match, rId, labelId, rName, value, handle, lableValue }) => {
	return (
		<div className="flex items-center gap-2">
			<div
				className={classNames({
					cricle: true,
					radio: true,
					radioChecked: value === match,
				})}
			>
				<input
					type="radio"
					name={rName}
					className="invisible "
					onChange={handle}
					checked={match === value ? true : false}
				/>
				<div className="cover" id={rId} onClick={handle}></div>
			</div>

			<label id={labelId} htmlFor={rId} onClick={handle}>
				{lableValue}
			</label>
		</div>
	);
};

export default Radio;

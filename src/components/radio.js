import React, { useState, useRef, useEffect } from "react";
import RadioButtonGroup from "react-custom-radio-buttons-group";
import classNames from "classnames";
import "../css/radio.css";

// export const Radio2 = ()=>{
// 	return(

// 	)
// }

const Radio = ({ rId, rName, value, handle, lableValue }) => {
	const [status, setStatus] = useState(false);

	const handleItself = () => {};
	const radio = useRef("");

	return (
		<div className="flex items-center gap-1">
			<div
				className={classNames({
					cricle: true,
					radio: true,
					radioChecked: radio.current.checked,
				})}
			>
				<input
					type="radio"
					name={rName}
					// className="invisible "
					className="inline-block"
					onChange={handleItself}
					id={rId}
					ref={radio}
				/>
				<div className="cover pointer-events-none"></div>
			</div>

			<label htmlFor={rId} className="text-xs">
				{lableValue}
			</label>
		</div>
	);
};

export default Radio;

import React, { useState, useRef } from "react";
import classNames from "classnames";

const DropMenu = ({ children, reference }) => {
	const [menuState, setMenuState] = useState(false);

	const handleMenuState = () => {
		if (menuState === true) {
			reference.current.focus();
			setMenuState(!menuState);
		} else setMenuState(!menuState);
	};
	return (
		<div className="menu relative" tabIndex={0}>
			{/* <button className="btn flex px-1"> */}

			<button
				className="relative btn px-1 w-3 h-3 bg-white"
				onClick={handleMenuState}
			>
				<span className="border-b-gray-900 block mb-1 border-0 border-b-2 w-6"></span>
				<span className="border-b-gray-900 block mb-1 border-0 border-b-2 w-6 "></span>
				<span className="border-b-gray-900 block mb-1 border-0 border-b-2 w-6"></span>
			</button>

			{/* menu items */}
			<div
				className={classNames({
					absolute: true,
					"items-box": true,
					flex: true,
					"z-base": true,
					"w-[50vw]": true,
					"left-0": true,
					"p-2": true,
				})}
			>
				{children}
			</div>
		</div>
	);
};

export default DropMenu;

import React from "react";
import { bool, func } from "prop-types";
import "../css/corsel.css";

const RightNav = React.memo(({ disabled, onClick }) => {
	return (
		<button
			type="button"
			className="image-gallery-icon image-gallery-right-nav hover:opacity-1 text-white w-[30px] max-h-[35px] rounded"
			// className="image-gallery-icon image-gallery-right-nav  hover:opacity-1 p-0  h-4"
			disabled={disabled}
			onClick={onClick}
			aria-label="Previous Slide"
		>
			{/* <SVG icon="right" viewBox="6 0 12 24" /> */}
			{/* <i className="fa-solid fa-greater-than text-white text-[17px]"></i> */}
			<i className="fa-solid fa-chevron-right text-white text-[17px]"></i>
		</button>
	);
});

RightNav.displayName = "RightNav";

RightNav.propTypes = {
	disabled: bool.isRequired,
	onClick: func.isRequired,
};

export default RightNav;

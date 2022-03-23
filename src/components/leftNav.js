import React from "react";
import { bool, func } from "prop-types";
import "../css/corsel.css";

const LeftNav = React.memo(({ disabled, onClick }) => {
	return (
		<button
			type="button"
			className="image-gallery-icon image-gallery-left-nav hover:opacity-1 text-white w-[30px] max-h-[35px] rounded"
			disabled={disabled}
			onClick={onClick}
			aria-label="Previous Slide"
		>
			{/* <SVG icon="left" viewBox="6 0 12 24" /> */}
			<i className="fa-solid fa-chevron-left  text-white text-[17px]"></i>
		</button>
	);
});

LeftNav.displayName = "LeftNav";

LeftNav.propTypes = {
	disabled: bool.isRequired,
	onClick: func.isRequired,
};

export default LeftNav;

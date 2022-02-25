import React from "react";
import { bool, func } from "prop-types";
import "../css/corsel.css";

const LeftNav = React.memo(({ disabled, onClick }) => {
	return (
		<button
			type="button"
			className="image-gallery-icon image-gallery-left-nav text-white p-0 h-4"
			disabled={disabled}
			onClick={onClick}
			aria-label="Previous Slide"
		>
			{/* <SVG icon="left" viewBox="6 0 12 24" /> */}
			<i className="fa-solid fa-less-than text-white"></i>
		</button>
	);
});

LeftNav.displayName = "LeftNav";

LeftNav.propTypes = {
	disabled: bool.isRequired,
	onClick: func.isRequired,
};

export default LeftNav;

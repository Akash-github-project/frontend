import React from "react";

import "../css/notificationBar.css";
const marquee = ({ text }) => {
	return (
		<div>
			<p className="text-current">{text}</p>
		</div>
	);
};

export default marquee;

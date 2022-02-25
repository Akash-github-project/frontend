import React from "react";
import "../css/notificationBar.css";
import Marquee from "react-fast-marquee";

const NotificationBar = () => {
	return (
		<Marquee gradient={false} className="marqueeStyles">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
			distinctio, quibusdam odio hic labore optio? Enim esse fugit optio neque?
		</Marquee>
	);
};

export default NotificationBar;

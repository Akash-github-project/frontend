import React from "react";

const Wrapper = ({ extraClass = "", children }) => {
	let defaultClasses =
		" width mx-auto flex items-center mt-[3px] pl-1 justify-center " +
		extraClass;
	return (
		<section>
			<div className={defaultClasses}>{children}</div>
		</section>
	);
};

export default Wrapper;

import React from "react";

const Wrapper = (props) => {
	return (
		<section>
			<div className=" width mx-auto flex items-center mt-[3px] pl-1 justify-center">
            {props.children}
            </div>
		</section>
	);
};

export default Wrapper;

import React from "react";

const Cardarea = ({ data }) => {
	return (
		<div>
			{data.map(each => {
				return each;
			})}
		</div>
	);
};

export default Cardarea;

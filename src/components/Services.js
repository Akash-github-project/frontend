import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
	let data = {
		mobile: {
			icon: "fas fa-mobile-alt",
			heading: "Mobile",
			link: "/mobile",
		},
		DTH: {
			icon: "fas fa-satellite-dish",
			heading: "DTH",
			link: "/mobile",
		},
		Electricity: {
			icon: "far fa-lightbulb",
			heading: "Electricity",
			link: "/mobile",
		},
		BroadbandLandline: {
			icon: "fa fa-wifi",
			heading: "Broadband",
			link: "/mobile",
		},
		GasLpg: {
			icon: "fa fa-mobile",
			heading: "Mobile",
			link: "/mobile",
		},
		Water: {
			icon: "fa fa-mobile",
			heading: "Mobile",
			link: "/mobile",
		},
		FASTag: {
			icon: "fa fa-mobile",
			heading: "Mobile",
			link: "/mobile",
		},
		Insurance: {
			icon: "fa fa-mobile",
			heading: "Mobile",
			link: "/mobile",
		},
		gifts: {
			icon: "fa fa-mobile fa-w-10",
			heading: "Mobile",
			link: "/mobile",
		},
	};
	let defalultBefore = "";
	return (
		<div className="h-20">
			<ul className="services">
				{Object.keys(data).map((value, i) => {
					return (
						<li key={i} className="">
							<Link to={data[`${value}`].link}>
								<div className="flex justify-center items-center border border-pink-600 rounded-md w-[40px] h-[40px]">
									<i className={data[`${value}`].icon}></i>
								</div>
							</Link>
							{data[`${value}`].heading}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Services;

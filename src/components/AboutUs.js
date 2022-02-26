import React from "react";
import Wrapper from "./wrapper";
import "../css/AboutUs.css";

import ThumbsUp from "./images/thumbsUp";
import Eye from "./images/eye";
import Plane from "./images/plane";

const AboutUs = () => {
	let iconList = [];
	iconList[0] = <ThumbsUp />;
	iconList[1] = <Plane />;
	iconList[2] = <Eye />;

	let cmsData = {
		AboutUs: `
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tempore,
				error tenetur maxime autem deleniti. Nihil animi deleniti alias porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro totam omnis officiis cum minus perferendis. Vitae officia voluptatum recusandae doloribus
			</p>`,
		WhyUs: `<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima
				illo enim nam, eum corporis soluta! Nulla deserunt cupiditate sit?
			</p>`,
		OurMission: `	<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima
				illo enim nam, eum corporis soluta! Nulla deserunt cupiditate sit?
			</p>`,
		OutVision: `
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima
				illo enim nam, eum corporis soluta! Nulla deserunt cupiditate sit?
			</p>`,
	};
	return (
		<Wrapper>
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
					<h1 className="text-white text-[18px] py-[10px] px-1">About Us</h1>
				</div>
				<div className="p-4">
					<div id="heading">
						<h2 className="text-[1.5rem] font-medium">What is RechargeAXN?</h2>
					</div>
					<div
						data-content
						dangerouslySetInnerHTML={{ __html: cmsData.AboutUs }}
					></div>

					<div
						className="grid mt-6 grid-cols-1 lg:grid-cols-3 mb-2 "
						id="AboutUs"
					>
						<div className="relative px-[15px] pt-2">
							<div className="absolute top-0 left-0 w-[45px] h-[45px] flex justify-center items-center  ">
								<ThumbsUp />
							</div>
							<h3 className="text-[1.25rem] pl-[45px] ">Why Choose Us</h3>
							<div
								data-content
								dangerouslySetInnerHTML={{ __html: cmsData.WhyUs }}
							></div>
						</div>

						<div className="relative px-[15px]  pt-2">
							<div className="absolute top-0 left-0 w-[45px] h-[45px]  flex justify-center items-center  ">
								<Plane />
							</div>
							<h3 className="text-[1.25rem] pl-[45px] ">Our Mission</h3>
							<div
								data-content
								dangerouslySetInnerHTML={{ __html: cmsData.OurMission }}
							></div>
						</div>
						<div className="relative  px-[15px]  pt-2">
							<div className="absolute top-0 left-0 w-[45px] h-[45px]  flex justify-center items-center  ">
								<Eye />
							</div>
							<h3 className="text-[1.25rem] pl-[45px] ">Our Vision</h3>
							<div
								data-content
								dangerouslySetInnerHTML={{ __html: cmsData.OutVision }}
							></div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
export default AboutUs;

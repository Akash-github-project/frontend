import React from "react";
import Wrapper from "./wrapper";
const AboutUs = () => {
	return (
		<Wrapper>
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary   h-[40px] px-[15px] w-order box-border">
					<h1 className="text-white text-[18px] p-[10px]">About Us</h1>
				</div>
				<div className="p-4">
					<div>
						<h2 className="text-[1.5rem] font-semibold">
							What is RechargeAXN?
						</h2>
					</div>
					<p></p>
					<div>
						<div>
							<div className="fa fa-thumbs-up"></div>
							<h3>Why Choose Us</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Quaerat, culpa.
							</p>
						</div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
export default AboutUs;

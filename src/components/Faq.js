import React from "react";
import Wrapper from "./wrapper";
import Arrowdown from "./Arrowdown";
import Faq from "react-faq-component";
import "../css/Faq.css";
import { Link } from "react-router-dom";

const data = [
	{
		title: "FAQ (How it works)",
		rows: [
			{
				title: (
					<div className="hover:text-blue-500 text-gray-primary">
						Lorem ipsum dolor sit amet
					</div>
				),
				content: (
					<p>
						Lorem ipjsum dolor sit amet, consectetur adipiscing elit. In sed
						tempor sem. Aenean vel turpis feugiat, ultricies metus at, consequat
						velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar
						metus. In maximus cursus lorem, nec laoreet velit eleifend vel. Ut
						aliquet mauris tortor, sed egestas libero interdum vitae. Fusce sed
						commodo purus, at tempus turpis.
					</p>
				),
			},
			{
				title: (
					<div className="hover:text-blue-500 text-gray-primary">
						Nunc maximus, magna at ultricies elementum,
					</div>
				),
				content: (
					<p>
						Nunc maximus, magna at ultricies elementum, risus turpis vulputate
						quam, vitae convallis ex tortor sed dolor.
					</p>
				),
			},
			{
				title: (
					<div className="hover:text-blue-500 text-gray-primary">
						Nunc maximus, magna at ultricies elementum,
					</div>
				),
				content: (
					<p>
						Nunc maximus, magna at ultricies elementum, risus turpis vulputate
						quam, vitae convallis ex tortor sed dolor.
					</p>
				),
			},
			{
				title: (
					<div className="hover:text-blue-500 text-gray-primary">
						Nunc maximus, magna at ultricies elementum,
					</div>
				),
				content: (
					<p>
						Nunc maximus, magna at ultricies elementum, risus turpis vulputate
						quam, vitae convallis ex tortor sed dolor.
					</p>
				),
			},
		],
	},
	{
		title: "FAQ (How it works)",
		rows: [
			{
				title: (
					<div className="hover:text-blue-500 text-gray-primary">
						Lorem ipsum dolor sit amet
					</div>
				),
				content: (
					<p>
						`Lorem ipjsum dolor sit amet, consectetur adipiscing elit. In sed
						tempor sem. Aenean vel turpis feugiat, ultricies metus at, consequat
						velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar
						metus. In maximus cursus lorem, nec laoreet velit eleifend vel. Ut
						aliquet mauris tortor, sed egestas libero interdum vitae. Fusce sed
						commodo purus, at tempus turpis.`
					</p>
				),
			},
			{
				title: (
					<div className="hover:text-blue-500 text-gray-primary">
						Nunc maximus, magna at ultricies elementum,
					</div>
				),
				content: (
					<p>
						Nunc maximus, magna at ultricies elementum, risus turpis vulputate
						quam, vitae convallis ex tortor sed dolor.
					</p>
				),
			},
			{
				title: (
					<div className="hover:text-blue-500 text-gray-primary">
						Nunc maximus, magna at ultricies elementum,
					</div>
				),
				content: (
					<p>
						Nunc maximus, magna at ultricies elementum, risus turpis vulputate
						quam, vitae convallis ex tortor sed dolor.
					</p>
				),
			},
			{
				title: (
					<div className="hover:text-blue-500 text-gray-primary">
						Nunc maximus, magna at ultricies elementum,
					</div>
				),
				content: (
					<p>
						Nunc maximus, magna at ultricies elementum, risus turpis vulputate
						quam, vitae convallis ex tortor sed dolor.
					</p>
				),
			},
		],
	},
];

const styles = {
	bgColor: "white",
	titleTextColor: "#f5317c",
	rowTitleColor: "black",
	rowTitleTextSize: "16px",
	titleTextSize: "21px",
	rowContentColor: "#535b61",
	rowContentTextSize: "14px",
	// rowContentColor: 'grey',
	// arrowColor: "red",
};

const config = {
	animate: true,
	arrowIcon: <Arrowdown clickHandler={() => console.log("clicked arrow")} />,
	// tabFocus: true,
};

function FaqSection() {
	return (
		<Wrapper>
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
					<h1 className="text-white text-[18px] py-[10px] px-1">FAQ</h1>
				</div>
				<div className="p-4 divide-x-[1px]">
					<div id="heading  ">
						<h2 className="text-[1.5rem] font-medium px-1">
							Get answers to your queries
						</h2>
					</div>
				</div>
				{/* content inside it */}
				<div className="p-5 ">
					{data.map(element => (
						<Faq data={element} styles={styles} config={config} />
					))}
				</div>

				<div className="flex flex-col justify-center my-12 mt-11">
					<p className="flex-1 text-center mb-4 text-gray-primary">
						Can't find what you're looking for? Our customer care team are here
						to help
					</p>
					<Link to="/contactus" className="mx-auto ">
						<button className="bg-pink-primary text-white p-[11px] text-[13px] leading-[13px] rounded btn-primary box-border">
							Contact Customer Care
						</button>
					</Link>
				</div>
			</div>
		</Wrapper>
	);
}

export default FaqSection;

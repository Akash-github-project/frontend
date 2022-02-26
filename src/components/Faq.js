import React from "react";
import Wrapper from "./wrapper";
import "../css/Faq.css";
let initeialState = {
	openedNode: "",
};

const Faq = () => {
	const [open, setOpen] = useState(initeialState);
	let faqData = {
		faq1: {
			title: "Account",
			faq: {
				question:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, quia.",
				answer:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi recusandae quidem illum hic aliquam ea maiores a quos eius sunt.",
			},
		},
		faq2: {
			title: "Account",
			faq: {
				question:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, quia.",
				answer:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi recusandae quidem illum hic aliquam ea maiores a quos eius sunt.",
			},
		},
		faq3: {
			title: "Account",
			faq: {
				question:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, quia.",
				answer:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi recusandae quidem illum hic aliquam ea maiores a quos eius sunt.",
			},
		},
		faq4: {
			title: "Account",
			faq: {
				question:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, quia.",
				answer:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi recusandae quidem illum hic aliquam ea maiores a quos eius sunt.",
			},
		},
		faq5: {
			title: "Account",
			faq: {
				question:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, quia.",
				answer:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi recusandae quidem illum hic aliquam ea maiores a quos eius sunt.",
			},
		},
	};

	// let generatedContent = Object.keys(Faq)

	return (
		<Wrapper>
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
					<h1 className="text-white text-[18px] py-[10px] px-1">FAQ</h1>
				</div>
				<div className="p-4 divide-x-[1px]">
					<div id="heading  ">
						<h2 className="text-[1.5rem] font-medium">
							Get answers to your queries
						</h2>
					</div>
				</div>
				{/* content inside it */}
				<div className="flex justify-center">
					<div className="flex-1">
						<h3>something</h3>
					</div>
					<div className="flex-3 px-3 flex flex-col">
						<div className="w-full ">
							<h4 className="w-full text-[20px]">
								<i class="fa-solid fa-chevron-up mx-2"></i>
								some heading isn this
							</h4>
						</div>
						<div>this is some content</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Faq;

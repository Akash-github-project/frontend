import React from "react";
import { useNavigate } from "react-router-dom";

function ConfirmSection({ heading, data = [], type, submitLink = "/#" }) {
	const navigate = useNavigate();
	return (
		<div className="w-[26rem] grid gap-1 p-px bg-white mt-1">
			<div className="p-3 flex w-full items-center justify-center">
				<img
					src="images/animatedTick.png"
					alt="SuccessMark"
					className="w-9 h-9 inline-block "
				/>
			</div>
			<div className="w-full text-center">
				<h2 className="text-2xl text-indigo-900">{heading}</h2>
			</div>
			<section className="w-full">
				{data.map((each, index) => (
					<div
						key={index}
						className={`${
							each.skip === true ? "" : "border-b border-b-gray-separator"
						} p-1 bg-white flex gap-1`}
					>
						<span className="  text-left flex-1 text-gray-primary text-sm">
							{each.title}
						</span>
						{
							<span
								className={` text-right flex-1 text-gray-primary text-xs ${
									each.cls !== undefined ? each.cls : " "
								} `}
							>
								{each.value}
							</span>
						}
					</div>
				))}
			</section>
			<div className="flex gap-px md:gap-[2px] my-2 w-full items-center">
				<button className="flex-1  md:px-2 py-1 text-gray-400 ">
					<img
						src="images/PdfSvg.svg"
						alt=""
						className="w-4 inline-block text-gray-primary "
					/>
					<span className="text-[10px] md:text-xs text-gray-primary ml-1">
						Save As PDF
					</span>
				</button>

				<button
					className="flex-1  md:px-2 py-1  text-gray-400 items-center"
					onClick={() => window.print()}
				>

					<i class="fa-solid fa-print text-gray-primary"></i>
					<span className="text-gray-primary text-[10px] md:text-xs  ml-1">
						Print Receipt
					</span>
				</button>

				<button className="flex-1  md:px-2 py-1 text-gray-400 items-center">
					<i className="fa-solid fa-envelope text-gray-primary"></i>
					<span className="text-[10px] md:text-xs text-gray-primary ml-1">
						Email Receipt
					</span>
				</button>
			</div>

			<button
				className="  leading-xs  text-sm ml-auto mr-auto h-[34px] font-medium inline-block capitalize text-white bg-pink-primary px-4  rounded-sm max-w-fit hover:pink-700"
				onClick={() => navigate(submitLink)}
			>
				Make Another {type}
			</button>
		</div>
	);
}

export default ConfirmSection;

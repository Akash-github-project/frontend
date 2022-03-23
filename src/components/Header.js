import "../App.css";
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropMenu from "./dropMenu";
import classNames from "classnames";

export const Header = () => {
	const logo = useRef();
	const navigate = useNavigate();

	return (
		<header className="">
			<div className=" width mx-auto flex items-center mt-[3px] pl-1 ">
				{/* menu box */}

				<DropMenu reference={logo}>
					<Link to="/rewards" data-route="/rewards">
						<div className="item bg-white px-4 py-2  border-0 border-b border-gray-200 text-sm ">
							Rewards
						</div>
					</Link>

					<Link to="/offers" data-route="/offers">
						<div
							className="item bg-white px-4 py-2  border-0 border-b border-gray-200 text-sm"
							data-route="/offers"
						>
							Offers
						</div>
					</Link>
					<Link to="/suggestions" data-route="/suggestions">
						<div
							className="item bg-white px-4 py-2  border-0 border-b border-gray-200 text-sm"
							data-route="/suggestions"
						>
							Suggestions
						</div>
					</Link>
				</DropMenu>

				{/* logo declaration */}

				<div
					className="pl-[2px] pr-4 logo mr-auto relative  mt-[1px] ml-2  small-logo shrink-[0.2] cursor-pointer"
					tabIndex={0}
					ref={logo}
					onClick={() => navigate("/home")}
					title="RechargeAXN"
				></div>

				<div className="  nav flex  gap-[0.9rem] items-center flat-menu ">
					<Link to="/rewards">
						<div className="rewards  text-sm">Rewards</div>
					</Link>
					<Link to="/offers">
						<div className="offers  text-sm">Offers</div>
					</Link>

					<Link to="/suggestions">
						<div className="suggestion  text-sm">Suggestions</div>
					</Link>
					<button
						className="flex border-box h-9 rounded bg-primary font-normal  p-[5px] items-center  relative  -top-[2px]"
						title="Login / Sign Up"
					>
						<span className="text-tertiary leading-[13px] text-[13px]">
							Login / Sign In
						</span>
					</button>
				</div>
				<button
					className="flex border-box h-9 rounded bg-primary font-normal  items-center p-[5px] relative top-[2px] show-small"
					title="Login / Sign Up"
				>
					<span className="text-tertiary leading-[13px] text-[13px]">
						Login / Sign In
					</span>
				</button>
			</div>
		</header>
	);
};

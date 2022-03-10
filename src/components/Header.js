import "../App.css";
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";

export const Header = () => {
	const [menuState, setMenuState] = useState(false);
	const navigate = useNavigate();

	const menu = useRef();

	const handleMenuState = e => {
		setMenuState(!menuState);
		console.log(e);
	};

	return (
		<header className="">
			<div className=" width mx-auto flex items-center mt-[3px] pl-1 ">
				{/* menu box */}
				<div className="menu relative">
					{/* <button className="btn flex px-1"> */}

					<button
						className="btn px-1 w-3 h-3 bg-white"
						onClick={handleMenuState}
					>
						{/* <i className="fa fa-bars items-center " aria-hidden="true"></i> */}
						<span className="border-b-gray-900 block mb-1 border-0 border-b-2 "></span>
						<span className="border-b-gray-900 block mb-1 border-0 border-b-2 "></span>
						<span className="border-b-gray-900 block mb-1 border-0 border-b-2 "></span>
					</button>

					{/* menu items */}
					<div
						className={classNames({
							absolute: true,
							"items-box": true,
							flex: true,
							"flex-col": true,
							"z-base": true,
							"w-[50vw]": true,
							block: true,
							hidden: menuState,
							"left-0": true,
							"p-2": true,
						})}
						onBlur={handleMenuState}
					>
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
					</div>
				</div>
				{/*logo declaration   */}
				<Link to="/home" className="mr-auto">
					<div className="pl-[2px] pr-4 logo mr-auto relative  mt-[1px] ml-2 small-logo"></div>
				</Link>

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
					<button className="flex border-box h-9 rounded bg-primary font-normal  p-[5px] items-center  relative  -top-[2px]">
						<span className="text-tertiary leading-[13px] text-[13px]">
							Login / Sign In
						</span>
					</button>
				</div>
				<button className="flex border-box h-9 rounded bg-primary font-normal  items-center p-[5px] relative top-[2px] show-small">
					<span className="text-tertiary leading-[13px] text-[13px]">
						Login / Sign In
					</span>
				</button>
			</div>
		</header>
	);
};

import "../App.css";
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropMenu from "./dropMenu";
import SecondOverlay from "./secondOverlay";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, storeShowPlan } from "../app/features/prepaidPlansSlice";
import { toggleOverlay, addElement } from "../app/features/overlaySlice";
import { storeRenderType } from "../app/features/prepaidPlansSlice";
import { Login } from "./Login";
import { SignUp } from "./signup";
import LoginWrapper from "./LoginWrapper";

export const Header = () => {
	const logo = useRef();
	const loginState = useSelector(state => state.login.loginScreenShow);
	const overlayState = useSelector(state => state.overlay.overlayStatus);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const showLoginScreen = () => {
		dispatch(
			addElement(
				<LoginWrapper loginElement={<Login />} signUpElement={<SignUp />} />
			)
		);
		dispatch(storeShowPlan(true));
		dispatch(storeRenderType("mobile"));
		dispatch(toggleOverlay());
	};

	return (
		<>
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
						onClick={() => {
							dispatch(clearAll());
							navigate("/home");
						}}
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
						{/* button for login/sign Up  shown when normal screen*/}
						<button
							className="flex border-box h-9 rounded bg-primary font-normal  px-[5px] py-[4px] items-center  relative  -top-[2px] active:bg-pink-800"
							title="Login / Sign Up"
							onClick={showLoginScreen}
						>
							<span className="text-tertiary leading-[13px] text-[13px]">
								Login / Sign In
							</span>
						</button>
						{/* button for login/sign Up  shown when normal screen end*/}
					</div>

					{/* button for login/sign Up  shown when normal screen*/}
					<button
						className="flex border-box h-9 rounded bg-primary font-normal  items-center p-[5px] relative top-[2px] show-small active:bg-pink-800"
						title="Login / Sign Up"
						onClick={showLoginScreen}
					>
						<span className="text-tertiary leading-[13px] text-[13px]">
							Login / Sign In
						</span>
					</button>
					{/* button for login/sign Up  shown when small screen end*/}
				</div>
			</header>
		</>
	);
};

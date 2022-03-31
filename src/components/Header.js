import "../App.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DropMenu from "./dropMenu";
// import SecondOverlay from "./secondOverlay";
// import classNames from "classnames";
import { useContext } from "react";
import { ModalContext } from "../App";
import { useDispatch } from "react-redux";
import { clearAll } from "../app/features/prepaidPlansSlice";
// import { storeShowPlan } from "../app/features/prepaidPlansSlice";
import ForgotPass from "./forgotPass";
import {
	toggleLoginOverlay,
	addLoginElement,
	setToUse,
	setSide,
} from "../app/features/loginOverlaySlice";
// import { storeRenderType } from "../app/features/prepaidPlansSlice";
import LoginWrapper from "./LoginWrapper";
// import { DisplaySettingsRounded } from "@mui/icons-material";

export const Header = () => {
	const mContext = useContext(ModalContext);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const showLoginScreen = () => {
		dispatch(setSide("right"));
		dispatch(setToUse("element"));
		dispatch(addLoginElement(<LoginWrapper />));
		dispatch(toggleLoginOverlay());
		mContext.modalToggle();
	};

	return (
		<>
			<header className="">
				<div className=" width mx-auto flex items-center mt-[3px] pl-1 ">
					{/* menu box */}

					<DropMenu />

					<div
						className="pl-[2px] pr-4 logo mr-auto relative  mt-[1px] ml-2  small-logo shrink-[0.2] cursor-pointer"
						tabIndex={0}
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

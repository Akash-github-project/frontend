import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	clearLoginDetails,
	toggleLoginOverlay,
} from "../app/features/loginOverlaySlice";
import "../css/overlay.css";

const LoginOverlay = ({}) => {
	const dispatch = useDispatch();
	const overlayState = useSelector(
		state => state.loginOverlay.loginOverlayStatus
	);
	const overlayContent = useSelector(
		state => state.loginOverlay.loginOverlayContent
	);
	const overlayElement = useSelector(
		state => state.loginOverlay.loginOverlayElement
	);
	console.log(overlayElement);
	const toUse = useSelector(state => state.loginOverlay.toUse);
	let icon = useSelector(state => state.loginOverlay.icon);
	let side = useSelector(state => state.loginOverlay.side);

	const handleClick = e => {
		if (e.target.id === "loginOverlay") {
			dispatch(toggleLoginOverlay());
			dispatch(clearLoginDetails());
		}
	};

	const closeOverlay = e => {
		dispatch(toggleLoginOverlay());
		dispatch(clearLoginDetails());
	};

	if (overlayState && toUse === "content") {
		return (
			<div
				className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center overlay bg-black/80"
				id="loginOverlay"
				onClick={handleClick}
			>
				<div className="fixed max-w-[34rem] p-5 border border-white h-[28rem] bg-white">
					<div className="flex top-0 min-h-[2rem] mb-1">
						<button
							className={
								"flex  absolute justify-center items-center " +
								side +
								"-1 top-1 w-6 h-6 text-gray-primary hover:text-pink-primary p-1 bg-white"
							}
							onClick={closeOverlay}
							id="closeBtn"
						>
							<i
								className={icon + " text-gray-primary hover:text-pink-primary"}
							></i>
						</button>
					</div>
					<div
						data-cms
						dangerouslySetInnerHTML={{ __html: overlayContent }}
						className="flex flex-col justify-left py-1 h-96 overflow-y-auto text-gray-primary"
					></div>
				</div>
			</div>
		);
	} else if (overlayState && toUse === "element") {
		return (
			<div
				className="fixed inset-0 h-full flex justify-center items-center overlay bg-black/80 overflow-hidden"
				id="loginOverlay"
				onClick={handleClick}
			>
				<div className=" w-full  md:h-auto justify-center items-center md:max-w-[31rem] px-4 pt-1 border border-white  bg-white relative">
					<div className="w-full flex top-0 mb-2 ">
						<button
							id="closeBtn"
							className={
								"flex  absolute justify-center items-center " +
								side +
								"-1 top-1 w-4 h-4 m-1 text-gray-primary hover:text-pink-primary p-1 bg-white"
							}
							onClick={closeOverlay}
						>
							<i
								className={icon + " text-gray-primary hover:text-pink-primary"}
							></i>
						</button>
					</div>
					<div className=" w-full block py-1 h-full text-gray-primary">
						{overlayElement}
					</div>
				</div>
			</div>
		);
	} else {
		return <div className="hidden" id="hello"></div>;
	}
};

export default LoginOverlay;

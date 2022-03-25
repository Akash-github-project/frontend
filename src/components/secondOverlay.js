import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearDetails, toggleOverlay } from "../app/features/overlaySlice";
import "../css/overlay.css";

const SecondOverlay = ({
	icon = "fa-solid fa-xmark",
	side = "right",
	title = "",
	toUse = "content",
}) => {
	const dispatch = useDispatch();
	const overlayState = useSelector(state => state.overlay.overlayStatus);
	const overlayContent = useSelector(state => state.overlay.overlayContent);
	const overlayElement = useSelector(state => state.overlay.overlayElement);

	const handleClick = () => {
		dispatch(toggleOverlay());
		dispatch(clearDetails());
	};
	const closeOverlay = e => {
		if (e.target.id === "overlay") {
			console.log("overlay clicked");
			dispatch(toggleOverlay());
			dispatch(clearDetails());
		}
	};

	if (overlayState && toUse === "content") {
		return (
			<div
				className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center overlay bg-black/80"
				id="overlay"
				onClick={closeOverlay}
			>
				<div className="fixed max-w-[34rem] p-5 border border-white h-[28rem] bg-white">
					<div className="flex top-0 min-h-[2rem] mb-1">
						<h2 className="flex-1 text-center text-2xl capitalize font-medium leading-7">
							{title}
						</h2>
						<button
							className={
								"flex  absolute justify-center items-center " +
								side +
								"-1 top-1 w-6 h-6 text-gray-primary hover:text-pink-primary p-1 bg-white"
							}
							onClick={handleClick}
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
				className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center overlay bg-black/80"
				id="overlay"
				onClick={closeOverlay}
			>
				<div className="fixed  top-0 bottom-0 right-0 left-0 lg:right-1/2 lg:top-1/2 lg:bottom-1/2 lg:translate-x-1/2 lg:-translate-y-1/2 lg:max-w-[45rem] p-5 pt-1 border border-white h-auto lg:h-[40rem] bg-white">
					<div className="flex top-0 mb-1">
						<button
							className={
								"flex  absolute justify-center items-center " +
								side +
								"-1 top-4 w-6 h-6 text-gray-primary hover:text-pink-primary p-1 bg-white"
							}
							onClick={handleClick}
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

export default SecondOverlay;

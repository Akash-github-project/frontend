//header for logged user
import "../App.css";
import "../css/loggedHeader.css";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropMenu from "./dropMenu";
import { useDispatch } from "react-redux";
import { clearAll } from "../app/features/prepaidPlansSlice";

export const HeaderLogged = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const logo = useRef();

	return (
		<header className="">
			<div className=" width mx-auto flex items-center mt-[3px] pl-1 ">
				{/* <div className="menu">
					<button className="btn flex px-1">
						<i
							className="fa fa-bars items-center flex justify-center"
							aria-hidden="true"
						></i>
					</button> */}

				<DropMenu reference={logo}>
					<Link to="/rewards">
						<div className="item bg-white px-4 py-2 border text-sm">
							Rewards
						</div>
					</Link>
					<Link to="/offers">
						<div className="item bg-white px-4 py-2 border text-sm">Offers</div>
					</Link>
					<Link to="/suggestions">
						<div className="item bg-white px-4 py-2 border text-sm">
							Suggestions
						</div>
					</Link>
				</DropMenu>

				{/*logo declaration   */}
				{/* <Link to="/home" className="mr-auto relative flex"> */}
				<div
					className="pl-[2px] pr-4 logo mr-auto relative  mt-[1px] ml-2  small-logo shrink-[0.2] cursor-pointer"
					onClick={() => {
						dispatch(clearAll());
						navigate("/home");
					}}
					tabIndex={0}
					ref={logo}
					title="RechargeAXN"
				></div>
				{/* </Link> */}

				<div className="nav flex  gap-[0.9rem] items-center flat-menu ">
					<Link to="/rewards">
						<div className="rewards text-sm">Rewards</div>
					</Link>
					<Link to="/offers">
						<div className="offers text-sm">Offers</div>
					</Link>
					<Link to="/suggestions">
						<div className="suggestion text-sm">Suggestions</div>
					</Link>

					<div className="notification">
						<button
							className="flex px-1 items-center justify-center"
							id="notifiy"
						>
							<i className=" fa-regular fa-bell text-xl" area-hidden="true"></i>
						</button>

						<div className="notificaton-box  absolute flex flex-col items-center justify-center w-64 right-32">
							<div className="item bg-white px-4 py-2 border">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Veritatis, iste.
							</div>
							<div className="item bg-white px-4 py-2 border">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
								ea.
							</div>
							<div className="item bg-white px-4 py-2 border">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
								architecto
							</div>
						</div>
					</div>

					<Link to="/addmoney" title="Add Money">
						<span className="flex items-center justify-center ">
							<button className="flex w-8 h-8 items-center justify-center add-money scale-95"></button>
							<span className="text-sm">Add Money</span>
						</span>
					</Link>
					<Link to="/user" title="User Menu">
						<button className="flex w-8 h-8 user bg-pink-primary items-center justify-center ">
							<i className="fas fa-user text-white" area-hidden="true"></i>
						</button>
					</Link>
				</div>

				<div className="notification show-in-small ml-[0.9rem]  mt-[6px] scale-small small-btn">
					<button
						className="flex px-1 items-center justify-center"
						id="notifiy"
					>
						<i className=" fa-regular fa-bell text-xl" area-hidden="true"></i>
					</button>

					<div className="notificaton-box  absolute flex flex-col items-center justify-center w-64 right-32  ">
						<div className="item bg-white px-4 py-2 border">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Veritatis, iste.
						</div>
						<div className="item bg-white px-4 py-2 border">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
							ea.
						</div>
						<div className="item bg-white px-4 py-2 border">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
							architecto
						</div>
					</div>
				</div>

				<Link to="/addmoney">
					<span className="flex items-center justify-center show-in scale-small">
						<button className="flex w-8 h-8  items-center justify-center add-money show-in-small ml-[0.9rem] small-margin  mt-[6px] scale-small sm-font-sm small-btn"></button>
						<span className="hide-in-small hide-at-large text-sm">
							Add Money
						</span>
					</span>
				</Link>

				<Link to="/user">
					<button className="w-8 h-8 user bg-pink-primary   show-in-small ml-[0.9rem]  mt-[6px] small-margin  scale-small small-btn">
						<i className="fas fa-user text-white" area-hidden="true"></i>
					</button>
				</Link>
			</div>
		</header>
	);
};

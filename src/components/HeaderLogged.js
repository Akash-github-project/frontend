//header for logged user

import "../App.css";
import "../css/loggedHeader.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const HeaderLogged = () => {
	const navigate = useNavigate();
	return (
		<header className="">
			<div className=" width mx-auto flex items-center mt-[3px] pl-1 ">
				<div className="menu">
					<button className="btn flex px-1">
						<i
							className="fa fa-bars items-center flex justify-center"
							aria-hidden="true"
						></i>
					</button>

					<div className="items-box flex flex-col items-center justify-center w-[50vw]">
						<Link to="/rewards">
							<div className="item bg-white px-4 py-2 border">Rewards</div>
						</Link>
						<Link to="/offers">
							<div className="item bg-white px-4 py-2 border">Offers</div>
						</Link>
						<Link to="/suggestions">
							<div className="item bg-white px-4 py-2 border">Suggestions</div>
						</Link>
					</div>
				</div>
				{/*logo declaration   */}
				{/* <Link to="/home" className="mr-auto relative flex"> */}
				<div
					className="pl-[2px] pr-4 logo mr-auto relative  mt-[1px] ml-2  small-logo shrink-[0.2] cursor-pointer"
					onClick={() => navigate("/home")}
				></div>
				{/* </Link> */}

				<div className="nav flex  gap-[0.9rem] items-center flat-menu ">
					<Link to="/rewards">
						<div className="rewards ">Rewards</div>
					</Link>
					<Link to="/offers">
						<div className="offers ">Offers</div>
					</Link>
					<Link to="/suggestions">
						<div className="suggestion ">Suggestions</div>
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

					<Link to="/addmoney">
						<span className="flex items-center justify-center ">
							<button className="flex w-8 h-8 items-center justify-center add-money"></button>
							<span>Add Money</span>
						</span>
					</Link>
					<Link to="/user">
						<button className="flex w-8 h-8 user bg-pink-primary items-center justify-center">
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
						<span className="hide-in-small hide-at-large">Add Money</span>
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

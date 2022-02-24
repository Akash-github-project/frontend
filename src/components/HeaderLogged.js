//header for logged user

import "../App.css";
import "../css/loggedHeader.css";
import React from "react";
import { Link } from "react-router-dom";

export const HeaderLogged = () => {
	return (
		<header className="">
			<div className=" width mx-auto flex items-center mt-[3px] pl-1 ">
				<div className="menu">
					<button className="btn flex px-1">
						<i className="fa fa-bars items-center " aria-hidden="true"></i>
					</button>

					<div className="items-box flex flex-col items-center justify-center w-[50vw]">
						<Link to="/Rewards">
							<div className="item bg-white px-4 py-2 border">Rewards</div>
						</Link>
						<Link to="/Offers">
							<div className="item bg-white px-4 py-2 border">Offers</div>
						</Link>
						<Link to="/Suggestions">
							<div className="item bg-white px-4 py-2 border">Suggestions</div>
						</Link>
					</div>
				</div>
				{/*logo declaration   */}
				<div className="pl-[2px] pr-4 logo mr-auto relative  mt-[1px] ml-2  small-logo shrink-[0.5]"></div>

				<div className="nav flex  gap-[0.9rem] items-center flat-menu ">
					<Link to="/Rewards">
						<div className="rewards ">Rewards</div>
					</Link>
					<Link to="/Offers">
						<div className="offers ">Offers</div>
					</Link>
					<Link to="/Suggestions">
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

					<Link to="/AddMoney">
						<span className="flex items-center justify-center ">
							<button className="flex w-8 h-8 items-center justify-center add-money"></button>
							<span>Add Money</span>
						</span>
					</Link>
					<Link to="/User">
						<button className="flex w-8 h-8 user bg-pink-primary items-center justify-center">
							<i class="fas fa-user text-white" area-hidden="true"></i>
						</button>
					</Link>
				</div>

				<div className="notification show-in-small ml-[0.9rem]  mt-[6px] scale-small">
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

				<Link to="/AddMoney">
					<span className="flex items-center justify-center show-in scale-small">
						<button className="flex w-8 h-8  items-center justify-center add-money show-in-small ml-[0.9rem]  mt-[6px] scale-small sm-font-sm"></button>
						<span className="hide-in-small hide-at-large">Add Money</span>
					</span>
				</Link>

				<Link to="/User">
					<button className="w-8 h-8 user bg-pink-primary   show-in-small ml-[0.9rem]  mt-[6px] scale-small">
						<i class="fas fa-user text-white" area-hidden="true"></i>
					</button>
				</Link>
			</div>
		</header>
	);
};

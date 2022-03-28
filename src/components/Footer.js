import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../App";
// import {useNavigate} from "react-router-dom"
import "../css/footer.css";
import { useDispatch } from "react-redux";
import { clearAll } from "../app/features/prepaidPlansSlice";

export const Footer = () => {
	// const navigate = useNavigate();
	const menuSet = useContext(ModalContext);
	const dispatch = useDispatch();

	return (
		<footer className="w-full">
			<div className="flex items-center justify-center  text-white   my-2 w-full">
				<ul className="flex flex-wrap justify-center">
					<li className="mr-[10px] mb-1 w-[50px] flex items-center">
						<img src="/images/master-card.svg" alt="" className="w-full" />
					</li>
					<li className="mr-[10px] mb-1 w-[50px] flex items-center">
						<img src="/images/pci-dss.svg" alt="" className="w-full" />
					</li>
					<li className="mr-[10px] mb-1 w-[50px] flex items-center">
						<img src="/images/verified-by-visa.svg" alt="" className="w-full" />
					</li>
					<li className="mr-[10px] mb-1 w-[50px] flex items-center">
						<img src="/images/RuPay_Logo.svg" alt="" className="w-full" />
					</li>
				</ul>
			</div>

			<div className="flex items-center justify-center bg-primary text-white  p-[9px]  w-full">
				<ul className="flex flex-wrap justify-center  list-none ">
					<Link to="/aboutus">
						<li className="inline-block py-1 px-2 text-[10px] text-tertiary ">
							About Us
						</li>
					</Link>

					<Link to="/faq">
						<li className="inline-block py-1 px-2 text-[10px] text-tertiary ">
							FAQ
						</li>
					</Link>
					<Link to="/contactus">
						<li className="inline-block py-1 px-2 text-[10px] text-tertiary ">
							Contact Us
						</li>
					</Link>

					<Link to="/terms">
						<li className="inline-block py-1 px-2 text-[10px] text-tertiary ">
							Terms & Conditions
						</li>
					</Link>
					<Link to="/privacypolicy">
						<li className="inline-block py-1 px-2 text-[10px] text-tertiary ">
							Privacy Policy
						</li>
					</Link>
					<Link to="/refundpolicy">
						<li className="inline-block py-1 px-2 text-[10px] text-tertiary ">
							Refund Policy
						</li>
					</Link>
				</ul>
			</div>

			<div className="flex items-center justify-center border-0 bg-white  px-[9px] text-[12px] w-full">
				<p className="text-center small-copyright">
					Copyright © 2022 &nbsp;
					<Link
						to="/home"
						onClick={() => {
							dispatch(clearAll());
						}}
						className="hover:text-black"
					>
						RechargeAXN
					</Link>
					. All Rights Reserved.
				</p>
			</div>
			<div>
				<button onClick={() => menuSet.toggleMenu()} className="bg-green-400">
					toggleMenu
				</button>
			</div>
		</footer>
	);
};

import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="border w-full">
			<div className="flex items-center justify-center bg-primary text-white  p-[9px]  w-full">
				<ul className="flex flex-wrap justify-center  list-none w-full">
					<Link to="/AboutUs">
						<li className="inline-block py-1 px-2 text-[10px] text-tertiary ">
							About Us
						</li>
					</Link>
					<Link to="/Contact Us">
						<li className="inline-block py-1 px-2 text-[10px] text-tertiary ">
							Contact Us
						</li>
					</Link>
					<Link to="/Terms">
						<li className="inline-block py-1 px-2 text-[10px] text-tertiary ">
							Terms & Conditions
						</li>
					</Link>
					<Link to="/PrivacyPolicy">
						<li className="inline-block py-1 px-2 text-[10px] text-tertiary ">
							Privacy Policy
						</li>
					</Link>
					<Link to="/RefundPolicy">
						<li className="inline-block py-1 px-2 text-[10px] text-tertiary ">
							Refund Policy
						</li>
					</Link>
				</ul>
			</div>
		</footer>
	);
};

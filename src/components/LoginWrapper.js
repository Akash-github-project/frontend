import React, { useState } from "react";
import { Login } from "./Login";

const LoginWrapper = ({
	loginElement = "",
	signUpElement = "",
	forgotPass = "",
	verifyOtp = "",
}) => {
	const [part, setPart] = useState("login");
	return (
		<div className="w-full">
			<div className="w-full ">
				<button
					className={`w-1/2 px-4 py-2 text-[21px] font-medium border-b-2 border-b-gray-separator ${
						part == "login" ? "border-b-pink-primary" : ""
					}`}
					onClick={() => setPart("login")}
				>
					Login
				</button>
				<button
					className={`w-1/2 px-4 py-2 border-b-2 text-[21px] font-medium border-b-gray-separator ${
						part == "signUp" ? "border-b-pink-primary" : ""
					}`}
					onClick={() => setPart("signUp")}
				>
					Sign Up
				</button>
			</div>
			<div className="w-full">
				{part == "login"
					? loginElement
					: part == "signUp"
					? signUpElement
					: part == "forgotPass"
					? forgotPass
					: verifyOtp}
			</div>
		</div>
	);
};

export default LoginWrapper;

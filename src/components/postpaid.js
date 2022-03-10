import React, { Children, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import classNames from "classnames";
import "../css/radio.css";

const Postpaid = ({ children }) => {
	const navigate = useNavigate();
	const [rechargeType, setRechargeType] = useState("postpaid");

	const handleRadioChange = e => {
		if (e.target.id === "prepaid") {
			setRechargeType("prepaid");
			navigate("/home/prepaid", { replace: true });
		} else if (e.target.id === "postpaid") {
			setRechargeType("postpaid");
			navigate("/home/postpaid", { replace: true });
		} else if (e.target.id === "postpaidLabel") {
			setRechargeType("postpaid");
			navigate("/home/postpaid", { replace: true });
		} else if (e.target.id === "prepaidLabel") {
			setRechargeType("prepaid");
			navigate("/home/prepaid", { replace: true });
		}

		console.log(e.target);
		console.log(rechargeType);
	};

	const handleEnter = e => {
		if (e.key === "Enter") {
			handleRadioChange(e);
		}
	};
	return (
		<div className="w-full">
			<h2 className="font-medium leading-[19px]">Postpaid Bill Payment</h2>
			<div className="flex gap-4 mb-2">
				<div className="flex items-center gap-2">
					<div
						className={classNames({
							cricle: true,
							radio: true,
							radioChecked: rechargeType === "prepaid",
						})}
					>
						<input
							type="radio"
							name="rechargeType"
							// id="prepaid"
							className="invisible "
							onChange={handleRadioChange}
							checked={"prepaid" === rechargeType ? true : false}
						/>
						<div
							className="cover"
							id="prepaid"
							onClick={handleRadioChange}
							tabIndex={0}
							onKeyUp={handleEnter}
						></div>
					</div>

					<label
						id="prepaidLabel"
						htmlFor="prepaid"
						className="text-gray-primary"
						onClick={handleRadioChange}
					>
						Prepaid
					</label>
				</div>
				<div className="flex items-center gap-2">
					<div
						className={classNames({
							cricle: true,
							radio: true,
							radioChecked: rechargeType === "postpaid",
						})}
					>
						<input
							type="radio"
							name="rechargeType"
							// id="prepaid"
							className="invisible "
							onChange={handleRadioChange}
							checked={"postpaid" === rechargeType ? true : false}
						/>
						<div
							className="cover"
							id="postpaid"
							onClick={handleRadioChange}
							tabIndex={0}
							onKeyUp={handleEnter}
						></div>
					</div>

					<label
						id="postpaidLabel"
						htmlFor="postpaid"
						className="text-gray-600"
						onClick={handleRadioChange}
					>
						Postpaid
					</label>
				</div>
			</div>
			{children}
		</div>
	);
};

export default Postpaid;

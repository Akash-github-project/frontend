import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import classNames from "classnames";
import "../../css/radio.css";

const Mobile = () => {
	const navigate = useNavigate();
	const [rechargeType, setRechargeType] = useState("prepaid");
	const handleRadioChange = e => {
		if (e.target.id === "prepaid") setRechargeType("prepaid");
		else if (e.target.id === "postpaid") {
			setRechargeType("postpaid");
		} else if (e.target.id === "postpaidLabel") {
			setRechargeType("postpaid");
		} else if (e.target.id === "prepaidLabel") {
			setRechargeType("prepaid");
		}
		console.log(e.target);

		if (rechargeType === "prepaid")
			navigate("/home/mobile/prepaid", { replace: true });
		else if (rechargeType === "postpaid")
			navigate("/home/mobile/postpaid", { replace: true });
	};

	return (
		<div className="w-full">
			<div className="flex gap-4">
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
						></div>
					</div>

					<label
						id="prepaidLabel"
						htmlFor="prepaid"
						className=""
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
						></div>
					</div>

					<label
						id="postpaidLabel"
						htmlFor="postpaid"
						className=""
						onClick={handleRadioChange}
					>
						Postpaid
					</label>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Mobile;

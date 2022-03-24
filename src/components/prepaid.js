import React, { Children, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Radio, RadioGroup, InputLabel } from "@mui/material";
import "../css/radio.css";

const Prepaid = ({ children }) => {
	const navigate = useNavigate();
	const [rechargeType, setRechargeType] = useState("prepaid");

	const handleRadioChange = e => {
		if (e.target.value === "prepaid") {
			setRechargeType("prepaid");
			navigate("/home/prepaid", { replace: true });
		} else if (e.target.value === "postpaid") {
			setRechargeType("postpaid");
			navigate("/home/postpaid", { replace: true });
		}

		console.log(e.target.value);
	};

	const handleEnter = e => {
		if (e.key === "Enter") {
			handleRadioChange(e);
		}
	};

	return (
		<div className="w-full">
			<h2 className="font-medium leading-[19px]">
				Mobile Recharge or Bill Payment
			</h2>
			<div className="flex gap-4 mb-2">
				<div className="flex items-center gap-2">
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="prepaid"
						name="radio-buttons-group"
						row={true}
						style={{ display: "flex", alignItems: "center" }}
					>
						<Radio value="prepaid" id="prepaid" onClick={handleRadioChange} />
						<InputLabel htmlFor="prepaid" style={{ fontSize: "14px" }}>
							Prepaid
						</InputLabel>

						<Radio value="postpaid" id="postpaid" onClick={handleRadioChange} />
						<InputLabel htmlFor="postpaid" style={{ fontSize: "14px" }}>
							Postpaid
						</InputLabel>
					</RadioGroup>
				</div>
			</div>
			{children}
		</div>
	);
};

export default Prepaid;

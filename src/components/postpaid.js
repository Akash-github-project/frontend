import React, { Children, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
	FormControl,
	Radio,
	RadioGroup,
	FormControlLabel,
} from "@mui/material";

import classNames from "classnames";
import "../css/radio.css";

const Postpaid = ({ children }) => {
	const navigate = useNavigate();
	const [rechargeType, setRechargeType] = useState("postpaid");

	const handleRadioChange = e => {
		if (e.target.value === "prepaid") {
			setRechargeType("prepaid");
			navigate("/home/prepaid", { replace: true });
		} else if (e.target.value === "postpaid") {
			setRechargeType("postpaid");
			navigate("/home/postpaid", { replace: true });
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
		<FormControl>
			<div className="w-full">
				<h2 className="font-medium leading-[19px]">
					Mobile Recharge or Bill Payment
				</h2>
				<div className="flex gap-4 mb-2">
					<div className="flex items-center gap-2">
						<RadioGroup
							aria-labelledby="demo-radio-buttons-group-label"
							defaultValue="postpaid"
							name="radio-buttons-group"
							row={true}
						>
							<FormControlLabel
								value="prepaid"
								control={<Radio onClick={handleRadioChange} />}
								id="prepaid"
								label="Prepaid"
							/>
							<FormControlLabel
								value="postpaid"
								control={<Radio onClick={handleRadioChange} />}
								id="postpaid"
								label="Postpaid"
							/>
						</RadioGroup>
					</div>
				</div>
				{children}
			</div>
		</FormControl>
	);
};

export default Postpaid;

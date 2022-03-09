import React, { useState } from "react";
import classnames from "classnames";
import SelectSearch, { fuzzySearch } from "react-select-search";
import { Link } from "react-router-dom";
import InputSec from "../InputSec";
import operator from "../../otherData/operator.json";
import circle from "../../otherData/circle.json";
import { renderProvider, providers } from "../../otherData/inputWithImage";
import "../../css/searchWithImages.css";
import "../../css/selectSearch.css";

let circleList = circle.list.map(item => ({
	name: item.name,
	value: item.code,
}));

let operatorList = operator.list.map(item => ({
	name: item.op_name,
	value: item.op_key,
	photo: item.image,
}));

const PrepaidMobile = () => {
	const [outputCircle, setCircle] = useState(circleList);
	const [outputOperator, setOperator] = useState(operatorList);
	const [rechargeType, setRechargeType] = useState("prepaid");

	const handleOperator = value => {
		let filterCircle = circleList.filter(element => {
			if ("MM" === value) {
				return element.value === "MU";
			} else if ("MD" === value) {
				return element.value === "DL";
			} else if ("BS" === value) {
				return !(element.value === "DL" || element.value === "MU");
			} else return true;
		});

		setCircle([...filterCircle]);
	};

	const handleCircle = value => {
		console.log(value);
	};
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
	};

	return (
		<div className="w-full">
			<h2>{}</h2>
			<div className="flex gap-4">
				<div className="flex items-center gap-2">
					<div
						className={classnames({
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
						className={classnames({
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
			<div className="grid grid-cols-5 gap-3 w-full">
				<InputSec
					wrapperClasses="rounded flex-1"
					extraClasses="rounded p-1"
					req="true"
					place="Mobile Number"
				/>
				<SelectSearch
					className="select-search"
					options={outputOperator}
					renderOption={renderProvider}
					search
					filterOptions={fuzzySearch}
					placeholder="Search Operator"
					onChange={value => handleOperator(value)}
				/>
				<SelectSearch
					options={outputCircle}
					value="sv"
					name="circle"
					placeholder="Circle"
					onChange={value => handleCircle(value)}
				/>

				<div className="rounded">
					<span
						className="flex border border-pink-600 focus-within:border-blue-400  m-0 w-full relative rounded"
						tabIndex={0}
					>
						<input
							type="tel"
							className="border-0 w-full  m-0 outline-none p-1 rounded"
							required
							placeholder="select "
						/>
						<span
							className="absolute  underline capitalize right-0 mt-2 text-xs cursor-pointer hover:text-black"
							onClick={() => console.log("helelo")}
						>
							view plans
						</span>
					</span>
				</div>
				<button className="p-1 bg-pink-primary hover:bg-blue-600 text-white rounded text-sm">
					Continue to Recharge
				</button>
			</div>
		</div>
	);
};

export default PrepaidMobile;

// if bsnl--> not avilable in mumbai and delhi
// if mtnl delhi --> only delhi
// if mtnl mumbai --> only mumbai

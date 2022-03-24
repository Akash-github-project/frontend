import React, { useState, useEffect } from "react";
import Checkbox from "react-custom-checkbox";
import SelectSearch, { fuzzySearch } from "react-select-search";
import operator from "../../otherData/operator.json";
import ConfirmDetails from "./confirmDetails";
import circle from "../../otherData/circle.json";
import { Radio, RadioGroup, InputLabel } from "@mui/material";
import { renderProvider, providers } from "../../otherData/inputWithImage";
import "../../css/searchWithImages.css";
import "../../css/selectSearch.css";

import classNames from "classnames";
import { NumberInput } from "../numberInput";
import MobileView from "./mobileView";
import { Input } from "../input";
import Button from "../button";

// imports for using redux
import { useSelector, useDispatch } from "react-redux";
import {
	storePhoneNo,
	storeCircle,
	storeOperator,
	storeShowPlan,
	storeRenderType,
	showConfirmBill,
} from "../../app/features/prepaidPlansSlice";
import { addElement, toggleOverlay } from "../../app/features/overlaySlice";

let circleList = circle.list.map(item => ({
	name: item.name,
	value: item.code,
}));

let operatorList = operator.list.map(item => ({
	name: item.op_name,
	value: item.op_key,
	photo: item.image,
	code: item.op_code,
}));

const PrepaidMobile = () => {
	const [outputCircle, setCircle] = useState(circleList);
	const [fakeRadio, setFakeRadio] = useState(true);

	const [openCoupon, setCouponState] = useState(false);
	const [outputOperator, setOperator] = useState(operatorList);
	const dispatch = useDispatch();
	const phoneNo = useSelector(state => state.prepaidPlan.phoneNo);
	const Operator = useSelector(state => state.prepaidPlan.operator);
	const circle = useSelector(state => state.prepaidPlan.circle);
	const planInfo = useSelector(state => state.prepaidPlan.plansInfo);
	const billState = useSelector(state => state.prepaidPlan.confirmBillState);

	useEffect(() => {
		if (Object.keys(Operator).length > 0 && circle.length > 1) {
		}
	}, [Operator, circle]);

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

		let currentOperator = operatorList.filter(
			operator => operator.value === value
		);

		console.log(currentOperator);
		setCircle([...filterCircle]);
		dispatch(storeOperator(currentOperator[0]));
	};

	const handlePlansRequest = () => {
		dispatch(storeShowPlan(true));

		if (window.innerWidth > 820) dispatch(storeRenderType("desktop"));
		else {
			dispatch(addElement(<MobileView />));
			dispatch(storeRenderType("mobile"));
			dispatch(toggleOverlay());
		}
	};

	const handleCircle = value => {
		console.log(value);
	};
	const handleFakeRadio = e => {};

	const handleRechargeRequest = () => {
		if (billState === false) dispatch(showConfirmBill(true));
	};

	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-5 gap-1 lg:gap-2 xl:gap-3 w-full mx-auto">
				<NumberInput
					iType="tel"
					val={phoneNo}
					onleft="+91-"
					id="phoneNo"
					holder="Mobile Number"
					change={value => dispatch(storePhoneNo(value))}
					extraClasses="focus:text-gray-primary "
					fieldClasses="border-pink-600 focus:outline-none focus-within:border-blue-400 flex-1"
				/>

				<SelectSearch
					className="select-search "
					options={outputOperator}
					renderOption={renderProvider}
					search
					filterOptions={fuzzySearch}
					placeholder="Search Operator"
					onChange={value => handleOperator(value)}
				/>
				{/* circle dropdown */}

				<SelectSearch
					options={outputCircle}
					value="sv"
					name="circle"
					placeholder="Circle"
					onChange={value => dispatch(storeCircle(value))}
				/>

				{/* spacially made custom input box just for this page to show view plans */}
				<div className="rounded">
					<span
						className="flex border border-pink-600 focus-within:border-blue-400  m-0 w-full relative rounded"
						tabIndex={0}
					>
						<input
							type="tel"
							className="border-0 w-full  m-0 outline-none p-[11px] rounded text-[13px] leading-[21px] h-[34px] text-gray-primary"
							required
							placeholder="View Plans"
						/>

						{/* this <span> will be visible inside the input box so be careful before editing it */}
						<span
							className="absolute  underline capitalize right-1 mt-2 text-xs cursor-pointer hover:text-black hover:no-underline"
							onClick={handlePlansRequest}
						>
							view plans
						</span>
					</span>
				</div>

				{/* this div should only be visible in mobile mode */}
				<div
					className={
						Object.keys(planInfo).length === 0
							? "hidden  "
							: " " +
							  "text-[11px] leading-[11px] text-green-info text-justify lg:hidden"
					}
				>
					{planInfo.benefit} | Validity:{planInfo.validity}
				</div>
				{/* only visible in mobile mode  {useless radio button for bsnl}*/}
				<div
					className={`${
						Operator.name !== "BSNL" ? "hidden" : "inline-block"
					} lg:hidden`}
				>
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-bsnl"
						defaultValue="special"
						name="radio-buttons-bsnl"
						row={true}
						style={{ display: "flex", alignItems: "center" }}
					>
						<Radio
							value="special"
							id="spc"
							onClick={handleFakeRadio}
							style={{ padding: "1px" }}
							size="small"
						/>
						<InputLabel
							htmlFor="spc"
							style={{ fontSize: "14px", marginRight: "1rem" }}
						>
							Special
						</InputLabel>
						<Radio
							value="topup"
							id="top"
							onClick={handleFakeRadio}
							style={{ padding: "1px" }}
							size="small"
						/>
						<InputLabel htmlFor="top" style={{ fontSize: "14px" }}>
							Topup
						</InputLabel>
					</RadioGroup>
				</div>

				{/* button of recharge */}
				<button
					className="p-3 lg:p-1 bg-pink-primary hover:bg-blue-600 text-white rounded text-[13px] leading-[13px] font-medium lg:ml-4"
					onClick={handleRechargeRequest}
				>
					Continue to Recharge
				</button>
			</div>

			{/* row 2 for information display */}
			<div className="hidden lg:grid grid-col-1 md:grid-cols-5 gap-3 w-full">
				<div className="lg:block md:col-span-3"></div>
				<small
					className={
						Object.keys(planInfo).length === 0
							? "hidden  "
							: " " +
							  "col-span-2 text-[11px] leading-[11px] text-green-info text-justify pr-4"
					}
				>
					{planInfo.benefit} | Validity:{planInfo.validity}
				</small>
			</div>

			{/* row 3 for special case of bsnl to show topup and spacial offer options */}

			{/* <FormControl> */}
			<div
				className={`hidden ${
					Operator.name !== "BSNL" ? "hidden" : " lg:grid"
				} grid-col-1 md:grid-cols-5 gap-3 w-full self-end `}
			>
				<div className="md:block md:col-span-3"></div>
				<div className="md:col-span-2">
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-big-bsnl"
						defaultValue="special"
						name="radio-buttons-group"
						row={true}
						style={{ display: "flex", alignItems: "center" }}
					>
						<Radio
							value="special"
							id="rspc"
							name="bsnlRType"
							onClick={handleFakeRadio}
							style={{ padding: "1px" }}
							size="small"
						/>
						<InputLabel
							htmlFor="rspc"
							style={{ fontSize: "14px", marginRight: "1rem" }}
						>
							Special
						</InputLabel>
						<Radio
							value="topup"
							id="rtop"
							name="bsnlRType"
							onClick={handleFakeRadio}
							style={{ padding: "1px" }}
							size="small"
						/>
						<InputLabel htmlFor="rtop" style={{ fontSize: "14px" }}>
							Topup
						</InputLabel>
					</RadioGroup>
				</div>
			</div>
			{/* </FormControl> */}

			{/* confirm details section */}
			<div
				className={
					billState
						? " grid grid-cols-2 w-full lg:w-[348px] border mx-auto mt-4"
						: "hidden "
				}
			>
				<ConfirmDetails />
				<div className="p-1 bg-gray-200 font-semibold text-black text-left px-6 py-2">
					final details
				</div>
				<div className="p-1 bg-gray-200 font-semibold text-black text-left px-6 py-2">
					1000
				</div>
				<div className="capitalize col-span-full text-xs">
					<span
						className="inline-block w-full text-center   cursor-pointer hover:text-black"
						onClick={() => setCouponState(!openCoupon)}
					>
						Apply A Coupon code
						<i
							className={`fas fa-chevron-${
								openCoupon ? "up" : "down"
							} text-xs mx-1 hover:text-black`}
						></i>
					</span>
					<span
						className={` ${
							openCoupon ? "" : "hidden"
						} flex w-full gap-2 justify-center`}
					>
						<Input extraClasses="w-1/2 " />
						<Button text="Apply" exClasses="w-1/3 " />
					</span>
				</div>
				<div className="col-span-full flex">
					<div className="flex ml-6">
						<Checkbox
							borderColor="#f5317c"
							icon={<i class="fa-solid fa-square-check text-pink-600"></i>}
						/>
						<span className="ml-1 text-gray-primary text-sm">
							Wallet Balance
						</span>
					</div>
					<span className="mx-auto text-gray-800 font-semibold">{3343}</span>
				</div>
				<div className=" col-span-full px-2 py-4">
					<Button text="Pay Rs 1000 " exClasses="w-full" />
				</div>
			</div>
		</>
	);
};

export default PrepaidMobile;

// if bsnl--> not avilable in mumbai and delhi
// if mtnl delhi --> only delhi
// if mtnl mumbai --> only mumbai

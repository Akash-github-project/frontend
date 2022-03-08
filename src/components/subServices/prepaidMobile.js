import React from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import { Link } from "react-router-dom";
import InputSec from "../InputSec";
import operator from "../../otherData/operator.json";
import circle from "../../otherData/circle.json";
import { renderProvider, providers } from "../../otherData/inputWithImage";
import "../../css/searchWithImages.css";
import "../../css/selectSearch.css";

const PrepaidMobile = () => {
	let outputCircle = circle.list.map(item => ({
		name: item.name,
		value: item.code,
	}));

	let outputOperator = operator.list.map(item => ({
		name: item.op_name,
		value: item.op_code,
		photo: item.image,
	}));
	//filter work requiered
	const handleOperator = value => {
		outputCircle = circle.list.filter(() => {
			return;
		});
		console.log(value);
	};

	const handleCircle = value => {
		console.log(value);
	};

	console.log(outputCircle);
	console.log(operator.list);

	return (
		<div className="grid grid-cols-5 gap-3">
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
	);
};

export default PrepaidMobile;

// if bsnl--> not avilable in mumbai and delhi
// if mtnl delhi --> only delhi
// if mtnl mumbai --> only mumbai

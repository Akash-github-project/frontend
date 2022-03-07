import React, { useState, useRef } from "react";
import InputSec from "./InputSec";
import Wrapper from "./wrapper";
import "../css/selectSearch.css";
import SelectSearch from "react-select-search";

const Suggestions = () => {
	const [fileName, changeName] = useState("Select a File...");
	const fileRef = useRef(false);

	const options = [
		{ name: "Select a value", value: "sv" },
		{ name: "Website Improvement", value: "Website Improvement" },
		{ name: "Feedback", value: "Feedback" },
		{ name: "Suggestions", value: "Suggestions" },
		{ name: "Issue/Complain", value: "Issue/Complain" },
		{ name: "General Query", value: "General Query" },
		{ name: "Wallet Payment Issue", value: "Wallet Payment Issue" },
		{ name: "Giftcards", value: "Giftcards" },
	];

	let size = "";

	if (fileRef.current.files) {
		if (fileRef.current.files[0]) {
			if (fileRef.current.files[0].size / 1024 >= 1024) {
				size = Math.floor(fileRef.current.files[0].size / (1024 * 1024)) + "MB";
			} else size = Math.floor(fileRef.current.files[0].size / 1024) + "KB ";
		}
	}
	const handleFileUpload = () => {
		changeName(fileRef.current.files[0].name);
	};
	return (
		<Wrapper>
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
					<h1 className="text-white text-[18px] py-[10px] px-1 ">
						Suggestions
					</h1>
				</div>
				<div className="py-4 px-1 md:p-4 border border-white border-b-gray-200 mb-2 ">
					<h2 className="text-2xl font-medium">Send A Request</h2>
				</div>
				<div className="text-gray-primary text-sm py-5">
					Please fill out the form below. we will get back to you within a
					couple of hours.
				</div>
				<div>
					<div className="grid grid-col-1 md:grid-cols-2 gap-2 ">
						<div>
							<span className="text-gray-primary req">Name</span>
							<InputSec
								wrapperClasses="rounded"
								extraClasses="rounded p-1"
								req="true"
								place="Name"
							/>
						</div>

						<div>
							<span className="text-gray-primary req">Email</span>
							<InputSec
								wrapperClasses="rounded"
								extraClasses="rounded p-1"
								req="true"
								place="Email"
							/>
						</div>
						<div>
							<span className="text-gray-primary req" req="true">
								Mobile
							</span>
							<InputSec
								wrapperClasses="rounded"
								extraClasses="rounded p-1"
								req="true"
								place="Mobile Number"
							/>
						</div>
						<div>
							<span className="text-gray-primary req">Message Type</span>
							<SelectSearch
								options={options}
								value="sv"
								name="language"
								placeholder="Choose your language"
							/>
							{/* <InputSec wrapperClasses="rounded" extraClasses="rounded p-1" /> */}
						</div>
						<div className="col-span-full row-span-5 ">
							<span className="text-gray-primary req">Query</span>
							<textarea
								required
								name=""
								id=""
								className="w-full border  border-pink-primary focus-within:border-1 focus-within:border-blue-400 outline-none rounded min-h-[7rem]"
								placeholder="Specify your query"
							></textarea>
						</div>
						<div
							className="text-gray-primary flex flex-col msg"
							data-message=" "
						>
							Attachment file (Max 2MB) Only Pdf/Image
							<div className="border border-pink-primary rounded flex items-center px-1">
								<input
									ref={fileRef}
									type="file"
									name=""
									id="file"
									className="hidden"
									title="select a file"
									onChange={handleFileUpload}
								/>
								<span className="">Size:{size}</span>
								<span className="ml-auto mr-10">{fileName}</span>
								<label
									htmlFor="file"
									className="p-1 bg-pink-primary text-white mr-1 text-[11px] hover:bg-gray-500"
								>
									Attach
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Suggestions;

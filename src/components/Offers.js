import React from "react";
import "../css/offer.css";
import Wrapper from "./wrapper";
import Tabbed from "./testTab";

const Offers = () => {
	let offerDetails = {
		Wallet: [
			{
				promocode: "holi2202",
				cashback: "Rs 599 (Website) of Rs 699 (App)",
				title: "Add Rs 4999 into wallet, Get Rs 599 cashback",
				frequency: "once per account",
				details:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed vitae rem quisquam officiis doloribus sint accusantium quas doloremque sunt aut nesciunt ex blanditiis quaerat ad, assumenda eos expedita voluptas.",
			},
		],

		Recharge: [
			{
				promocode: "free50",
				cashback: "Cashback of Rs 50",
				title: "Recharge prepaid mobile of Rs 500 or more",
				frequency: "once per account",
				details:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed vitae rem quisquam officiis doloribus sint accusantium quas doloremque sunt aut nesciunt ex blanditiis quaerat ad, assumenda eos expedita voluptas.",
			},
		],

		"Utility Bills": [
			{
				promocode: "bill200",
				cashback: "Cashback up to 200 ",
				title: "Pay bill of Rs 500 or more to get 5% discount",
				frequency: "twice per account",
				details:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed vitae rem quisquam officiis doloribus sint accusantium quas doloremque sunt aut nesciunt ex blanditiis quaerat ad, assumenda eos expedita voluptas.",
			},
			{
				promocode: "bill100",
				cashback: "Cashback up to 100",
				title: "Pay bill of Rs 300 or more to get 2% discount",
				frequency: "twice per account",
				details:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed vitae rem quisquam officiis doloribus sint accusantium quas doloremque sunt aut nesciunt ex blanditiis quaerat ad, assumenda eos expedita voluptas.",
			},
		],
		"Gift Cards": [
			{
				promocode: "gift600",
				cashback: "Cashback of Rs 100 ",
				title: "Bye gift card of 600 or more",
				frequency: "once per account",
				details:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed vitae rem quisquam officiis doloribus sint accusantium quas doloremque sunt aut nesciunt ex blanditiis quaerat ad, assumenda eos expedita voluptas.",
			},
		],
	};
	return (
		<Wrapper>
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
					<h1 className="text-white text-[18px] py-[10px] px-1">Offers</h1>
				</div>
				<div className="">
					<Tabbed data={offerDetails} />
				</div>
			</div>
		</Wrapper>
	);
};

export default Offers;

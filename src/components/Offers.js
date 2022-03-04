import React from "react";
import "../css/offer.css";
import Wrapper from "./wrapper";
import Tabbed from "./Offertab";
import Overlay from "./overlay";

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

		"Recharge/DTH": [
			{
				promocode: "free50",
				cashback: "Cashback of Rs 50",
				title: "Recharge prepaid mobile of Rs 500 or more",
				frequency: "once per account",
				details:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed vitae rem quisquam officiis doloribus sint accusantium quas doloremque sunt aut nesciunt ex blanditiis quaerat ad, assumenda eos expedita voluptas.",
			},
		],

		UtilityBills: [
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
					"<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed vitae rem quisquam officiis doloribus sint accusantium quas doloremque sunt aut nesciunt ex blanditiis quaerat ad, assumenda eos expedita voluptas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut enim dolorum reiciendis, adipisci illum voluptates iusto modi impedit id? Voluptatum necessitatibus incidunt officiis vero minima rem praesentium repellat reiciendis quasi. Deserunt dolores blanditiis sit hic modi laborum quos vel alias architecto, explicabo cum odio quisquam. Odit vel ullam placeat omnis, suscipit dolore maiores, eum cum nihil vero aut vitae? Nam, modi accusamus quibusdam praesentium ratione minus! Nihil, esse. Non quisquam amet nemo, quam at perferendis est, fuga quod voluptatem accusantium commodi aliquam harum asperiores nesciunt, quaerat laudantium illo voluptates officia unde doloribus explicabo id. Corrupti quis perspiciatis aliquid alias esse! lore  fijfkjfj f of;ds l ffkj fjsdjfsljf orel rejljf jlfs frj er cine a jdflefj lierh o;erjao c eierarerare iueira r rueor ljkljljljljfidc  fifjo jfosjf  fodsjfo jfofj f osdfjo f ifjsoifjsojfsoj f ofjosjf s fjof jsofjof fjosfj fosdjfoj wlfjj  </div>",
			},
		],
		GiftCards: [
			{
				promocode: "gift600",
				cashback: "Cashback of Rs 100 ",
				title: "Bye gift card of 600 or more",
				frequency: "once per account",
				details: `
				<ul type="circle">
	<li>Offer is applicable ONCE per account.</li>
	<li>Use of Promocode VAL14&nbsp;is required to avail this offer.</li>
	<li>This coupon is applicable on Web &amp; APP.</li>
	<li>Cashback of Rs. 79 will be credited after successful addition of Rs 4999 into user’s Wallet.</li>
	<li>Remaining cashback will be distributed over 12&nbsp;months time.</li>
	<li>Minimum account balance should be Rs 4000 to get remaining cashback.</li>
	<li>Cashback Distribution-</li>
	<li>&nbsp;&nbsp; &nbsp;After 1 Month: Additional cashback of Rs 110</li>
	<li>&nbsp;&nbsp; &nbsp;After 2 Month: Additional cashback of Rs 110</li>
	<li>&nbsp;&nbsp; &nbsp;After 3 Month: Additional cashback of Rs 145</li>
	<li>&nbsp;&nbsp; &nbsp;After 4 Month: Additional cashback of Rs 145</li>
	<li>&nbsp;&nbsp; &nbsp;After 5 Month: Additional cashback of Rs 175</li>
	<li>&nbsp;&nbsp; &nbsp;After 6 Month: Additional cashback of Rs 175</li>
	<li>&nbsp;&nbsp; &nbsp;After 7 Month: Additional cashback of Rs 215</li>
	<li>&nbsp;&nbsp; &nbsp;After 8 Month: Additional cashback of Rs 215</li>
	<li>&nbsp;&nbsp; &nbsp;After 9 Month: Additional cashback of Rs 255</li>
	<li>&nbsp;&nbsp; &nbsp;After 10 Month: Additional cashback of Rs 255</li>
	<li>&nbsp;&nbsp; &nbsp;After 11 Month: Additional cashback of Rs 455</li>
	<li>&nbsp;&nbsp; &nbsp;After 12 Month: Additional cashback of Rs 765</li>
	<li>Valid for all users</li>
	<li>We reserve the right to end any or all offers at our discretion without any prior notice.</li>
</ul>
				`,
			},
		],
	};
	return (
		<Wrapper>
			<Overlay />
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
					<h1 className="text-white text-[18px] py-[10px] px-1">Offers</h1>
				</div>
				<div className="relative -top-2">
					<Tabbed data={offerDetails} />
				</div>
			</div>
		</Wrapper>
	);
};

export default Offers;

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
		GiftCards: [],
	};
	return (
		<Wrapper>
			<Overlay title={"Terms & Conditions"} />
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

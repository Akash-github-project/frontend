import React from "react";
import Wrapper from "./wrapper";
import "../css/terms.css";

let cmsData = `<p>Our focus is complete customer satisfaction. In the event of recharge or bill payment failure where payment was successful, RechargeAXN will process refund into user&#39;s wallet within 24-48 hours.</p>

<p>RechargeAXN does not at any point of time during any transaction between the user&nbsp;and merchant/ vendor and or service provider take the ownership of any of the products/services provided by the merchant. Nor does RechargeAXN at any point asserts any rights or claims over the products/services offered by the merchant to the user. The cancellation/refund, if any, will be governed as per the terms and conditions of the aggregator or of the merchant/vendor. RechargeAXN has no role in governing refund/cancellation charges. RechargeAXN, will not be responsible for refund/cancellation including any charges arising therefrom.</p>

<p>All sales of prepaid recharge on the RechargeAXN platform are final with no refund or exchange permitted. You&nbsp;are responsible for the mobile number or DTH&nbsp;account number for which you&nbsp;purchased the prepaid recharge and all charges that result from those purchases. RechargeAXN is not responsible for any purchase of prepaid recharge for an incorrect mobile number or DTH&nbsp;account number or similar services.</p>

<p><strong>Process Of Refund</strong><br />
Refund(if any) will get initiated automatically. If refund takes longer time, user&nbsp;can write to <a href="mailto:help@rechargeaxn.com">help@rechargeaxn.com</a>&nbsp;or use <a href="https://rechargeaxn.com/welcome/contactus">contact us</a> page.</p>

`;

const Refund = () => {
	return (
		<Wrapper>
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
					<h1 className="text-white text-[18px] py-[10px] px-1">
						Refund Policy
					</h1>
				</div>
				<div
					data-content
					dangerouslySetInnerHTML={{ __html: cmsData }}
					className="mt-4 lg:mt-12 terms privacy"
				></div>
			</div>
		</Wrapper>
	);
};

export default Refund;

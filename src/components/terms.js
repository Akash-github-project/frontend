import React from "react";
import Wrapper from "./wrapper";
import "../css/terms.css";

let cmsData = `<p><strong>Terms of Use</strong><br />
By using this Website (&quot;Site&quot;) https://www.rechargeaxn.com you indicate your agreement to these terms of use (&quot;Terms&quot;). You have the power and authority to enter into this agreement. If you do not agree to these Terms, please do not use the Site and exit now.</p>

<p><strong>Registration</strong><br />
Membership is open to every Indian citizen. For your membership of this site, requires you to provide information about yourself (such as identification, contact or payment details) as part of the registration process for the Service, or as part of your continued use of the Services. You agree that any registration information you give to us will always be true, accurate, correct, complete and up to date. Any phone number used to register with the Website needs to be registered in your name and you might be asked to provide supporting documents to prove the same.</p>

<p><strong>Changes</strong><br />
We(Site) may revise these Terms at any time without prior notice by updating this page and such revisions will be effective upon posting to this page. Please check this page periodically for any changes. Your continued use of the Site following the posting of any revisions to these Terms will mean you accept those changes. We reserve the right to alter, suspend or discontinue any aspect of the Site, including your access to it. Unless explicitly stated, any new features, services will be subject to these Terms.</p>

<p><strong>Verification</strong><br />
Every user should verify his/her account to keep account secure. Every user have to verify mobile and email before accessing this Site. For verified users also, on regular basis we keep asking user to verify mobile and email. If verification fails then access to this site will be on hold.</p>

<p><strong>Termination</strong><br />
We reserve the right, in our sole discretion, to revoke any and all privileges associated with accessing and/or competing on the Site, and to take any other action we deem appropriate including but not limited to terminating or suspending your use of the Site, for no reason or any reason whatsoever, including improper use of the Site, involving in any illegal activities or failure to comply with these Terms.</p>

<p><strong>Payment Information</strong><br />
The use of debit/credit card, netbanking, UPI, any wallet for payment is processed and governed through Payment Gateway. We are not responsible for its misue and any fraud. We do not store any card information on Site.</p>

<p><strong>Account Security</strong><br />
Account can be locked out for rest of day if attempting wrong password for more than 10 times continuously. In such event, user&nbsp;can write to <a href="mailto:help@rechargeaxn.com">help@rechargeaxn.com</a> or use <a href="https://rechargeaxn.com/welcome/contactus">contact us</a> page for unlocking account.&nbsp;On next day user&nbsp;account will be unlocked automatically.</p>

<p><strong>Account Inactive/Dormant</strong><br />
Account can become inactive/dormant if a user not active on Site for more than a year. In such event, user can write to <a href="mailto:help@rechargeaxn.com">help@rechargeaxn.com</a> or use <a href="https://rechargeaxn.com/welcome/contactus">contact us</a> page for activating account. Site may charge fee of Rs 100 for account activation.</p>

<p><strong>Fees</strong>&nbsp;<br />
We do not charge any fee for membership/recharge/pay bills. We reserves the right to subsequently charge a fee for the prepaid/ postpaid/ pay bills &nbsp;services provided on the website and intimate user of the same by giving a reasonable notice on our website and/or via email or intimating through his/her mobile number.</p>

<p><strong>Cashback</strong><br />
Earned cashback has no expiry and valid for life. Cashback earning against coupon will be processed under terms &amp; condition of applied coupon. These terms &amp; conditions can be seen during applying coupon.</p>

`;

const Terms = () => {
	return (
		<Wrapper>
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
					<h1 className="text-white text-[18px] py-[10px] px-1">
						Terms & Conditions
					</h1>
				</div>
				<div
					data-content
					dangerouslySetInnerHTML={{ __html: cmsData }}
					className="mt-4 lg:mt-12 terms"
				></div>
			</div>
		</Wrapper>
	);
};

export default Terms;

import React from "react";
import Wrapper from "./wrapper";
import "../css/terms.css";
import "../css/privacy.css";

let cmsData = `<p>We are committed to ensure your privacy is protected. Information and data is collected from you to make it easier and more rewarding for you to use our services. We use this information to design initiatives to deliver a broad range of personalized services to our members.</p>

<p>We recognize that the value of our services rests in our relationship with you and we strongly support the rights of our members to maintain privacy of personal data.</p>

<p><strong>We Collect Your Details:</strong><br />
We may collect contact information when you give your consent by filling any of the forms on our website which include Support Tickets form, Signup Form, Login Form, Suggestion/Complaint form. Details like,</p>

<p>A. Your name<br />
B. Contact information including email address and mobile number<br />
C. Demographic information such as Address, City, State, PinCode, Country<br />
D. Other information relevant to enquiries made through our site<br />
E. IP Address</p>

<p><strong>Payment Information:</strong><br />
The information is stored for processing the payment and once the payment is successfully received, the shared information will automatically be deleted. We do not share any of the information received through payment form with any third parties.</p>

<h3>Privacy Principles</h3>

<p><strong>Retention:</strong><br />
We will retain your information only so long as it is needed for business purposes, or as required by law.</p>

<p><strong>Choice:</strong><br />
When we contact you for marketing purposes, we will let you know how to remove your name from future marketing efforts.</p>

<p><strong>Access:</strong><br />
We will provide easy ways for you to access the information we have collected about you. To update the information retained about you, please visit your profile page after logging into your RechargeAXN Account.</p>

<p><strong>Accuracy:</strong><br />
We will promptly correct inaccuracies in your personal information that we discover or that you bring to our attention. To correct inaccuracies in your personal information, please visit your profile page after logging into your RechargeAXN Account, and edit/ update your information.</p>

<p><strong>Security:</strong><br />
We will follow generally accepted industry standards to protect your personal information during transmission and storage. We operate secure data networks protected by firewalls and passwords. Our security and privacy policies are periodically reviewed and enhanced as necessary and only authorized individuals have access to the information provided by our customers.</p>

<p><strong>Sharing:</strong><br />
When we share your information with other companies to help us provide our services to you, we will require them to comply with all applicable legal requirements regarding the privacy of your information. If you are providing personal information within a registration page, it will only be used within our domain unless you choose to allow third party data sharing. Although unlikely, we may be required by law enforcement or judicial authorities to provide personally identifiable information to the appropriate governmental authorities. If requested as part of a legal proceeding, we will provide this information upon receipt of the appropriate documentation. Other companies which partner on our site may collect information about you when you view or click on their advertising or content through the use of cookies. Due to the way the Internet technically operates, we cannot control this collection of information. You should contact these advertisers or content providers if you have any questions about their use of the information they collect.</p>

<p><strong>Enforcement:</strong><br />
We will regularly review how we are meeting these privacy principles and provide you a means to settle complaints about our privacy practices.</p>

<p>To request access to your information, ask questions about our privacy practices, change your marketing preferences, or issue a complaint, email us at&nbsp;<a href="mailto:help@rechargeaxn.com">help@rechargeaxn.com</a>&nbsp;or use <a href="https://rechargeaxn.com/welcome/contactus">contact us</a> page.</p>
`;

const Privacy = () => {
	return (
		<Wrapper>
			<div className="w-full">
				<div className="flex items-center justify-right bg-primary  h-[40px] px-[15px] w-order box-border">
					<h1 className="text-white text-[18px] py-[10px] px-1">
						Privacy Policy
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

export default Privacy;

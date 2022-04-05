import React, { useState, useRef } from "react";
import { Formik,Form,Field,ErrorMessage } from "formik";
import { useTimer } from "use-timer";

const ForgotPass = ({ goto = () => console.log("hello world") }) => {
	const [values, setValues] = React.useState({
		text: "",
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false,
		showPassword2: false,
	});
	const [otp, setOtp] = useState("unsent");
	const formRef = useRef("");
	const [otpVal, setOtpVal] = useState(0);

	const { time, start, reset } = useTimer({
		initialTime: 60,
		endTime: 0,
		timerType: "DECREMENTAL",
	});

	const resendOtp = () => {
		reset();
		askOtp();
		start();
	};

	const askOtp = () => {
		let otpGenerated =
			Math.random() * 6 + Math.random() * 6 * 10 + Math.random() * 6 * 100;
		otpGenerated = Math.floor(otpGenerated);

		setOtpVal(() => otpGenerated);
		console.log(otpVal);
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleClickShowPassword2 = () => {
		setValues({
			...values,
			showPassword2: !values.showPassword2,
		});
	};

	let initialFormValues = {
		emailOrMobile: "",
		newPass: "",
		reNewPass: "",
		otpForgot: "",
	};
	const sendOtp = () => {
		const formikRef = formRef.current;

			formikRef.setFieldTouched("emailOrMobile");
			formikRef.validateField("emailOrMobile");

		if ((formikRef.errors.emailOrMobile === "" || 
		formikRef.errors.emailOrMobile === undefined)&& 
		formikRef.values.emailOrMobile !== ""){
				askOtp();
				setOtp("sent");
				start();
		}
		console.log(formikRef);
};

	const validateForm = values => {
		let errors = {};
		let numberAsString;
		const formikRef = formRef.current;
		const EMAIL_REGEX =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!values.emailOrMobile) {
			errors.emailOrMobile = "email or mobile can't be empty";
		} else {
			if (isNaN(parseInt(values.emailOrMobile)) === false) {
				numberAsString = Number(values.emailOrMobile).toString();

				if (
					numberAsString[0] !== "6" &&
					numberAsString[0] !== "7" &&
					numberAsString[0] !== "8" &&
					numberAsString[0] !== "9"
				) {
					errors.emailOrMobile = "invalid mobile no";
				} else if (numberAsString.length < 10 || numberAsString.length > 10)
					errors.emailOrMobile = "invalid mobile no length";
			} else if (values.emailOrMobile.match(EMAIL_REGEX) === null) {
				errors.emailOrMobile = "enter a valid email";
			}
		}

		if (!values.newPass) {
			errors.newPass = "new password can't be empty";
		} else if (values.newPass !== values.reNewPass) {
			errors.newPass = "passwords don't match";
		}
		if (!values.reNewPass) {
			errors.reNewPass = "re password can't be empty";
		}
		if (typeof values.otpForgot !== "undefined") {
			if (values.otpForgot == otpVal && values.otpForgot !== "") {
				setOtp("verified");
				formikRef.setFieldValue("otpForgot","");
				reset();
			} 
			if (values.otpForgot != otpVal && values.otpForgot !== ""){
				errors.otpVal = "otp does not match";
			}
		}else{
			if(formikRef.errors.otpForgot !== "")
			formikRef.setFieldError("otpForgot","");
		}
		return errors;
	};

	return (
		<>
			<div className="w-full text-center">
				<h2 className="text-2xl ">Forgot Your Passowrd?</h2>
				<p className="text-gray-500">
					Enter your Email or Mobile and we’ll help you reset your password.
				</p>
			</div>
			<Formik
				initialValues={{ ...initialFormValues }}
				validate={validateForm}
				onSubmit={(values) => {
					console.log(values);
				}}
				innerRef={formRef}
			>
				<Form className="grid grid-cols-4 gap-1">
					<span className="col-span-full text-xs text-center">
						<ErrorMessage name="emailOrMobile" />
					</span>
					<label htmlFor="emailOrMobile" className="text-xs">Mobie No</label>
					<div className="flex col-span-3 rounded">
						<Field name="emailOrMobile" disabled={otp === "verified"||otp === "sent"?true:false} className="flex-1 border border-pink-primary rounded" type="text"/>

						<button className="h-[34px] px-3 bg-pink-primary text-white disabled:bg-gray-600" 
						 disabled={otp === "sent"?true:false}
						 onClick={otp === "verified"?()=>setOtp("unsent"):()=>sendOtp()} 
						 type="button">
							 {
								 otp === "verified"?<i className="fa-regular fa-pen-to-square text-white w-5 "></i>:"OTP"
							 }
						 </button>
					</div>

				{
					otp === "verified"||otp === "unsent"?null:(
						<>
						<span className="col-span-full text-center text-xs">
							<ErrorMessage name="otpForgot"/>
						</span>
					<div className="col-span-full flex h-[34px]">
					<label htmlFor="otpForgot" className="text-xs w-1/4">Otp</label>
					<Field name="otpForgot" className="border border-pink-primary rounded h-full w-1/4" type="tel"/>
						<>
							{otp === "sent" ? (
								time !== 0 ? (
									<span className="mx-auto leading-[34px] ">
										{`${Math.floor(time / 60)}:${time % 60}`}
									</span>
								) : (
									<button
										className="hover:bg-pink-primary hover:text-white border border-pink-primary rounded text-xs px-1 mx-1"
										onClick={resendOtp}
									>
										Resend Otp
									</button>
								)
							) : null}
						</>
					</div>
					</>
					)
				}
					<span className="col-span-full text-xs text-center">
						<ErrorMessage name="newPass"/>
					</span>
					<label htmlFor="newPass " className="text-xs">New Password</label>
					<div className="flex relative col-span-3 h-[34px]">
						<Field name="newPass" className="flex-1 border border-pink-primary h-full rounded" type={values.showPassword === true?"text":"password"}/>

						<button className="w-8 absolute right-0 top-0 bottom-0  flex items-center justify-center rounded" type="button">
						<i className={`fa-solid ${values.showPassword?"fa-eye":"fa-eye-slash "} `} onClick={handleClickShowPassword}></i>
						</button>
					</div>

					<span className="col-span-full text-xs text-center">
						<ErrorMessage name="reNewPass"/>
					</span>
					<label htmlFor="reNewPass" className="text-xs">Re password</label>
					<div className="flex relative col-span-3 h-[34px] rounded">
						<Field name="reNewPass" className="flex-1 border border-pink-primary h-full rounded" type={values.showPassword2 === true?"text":"password"}/>
						<button className="w-8 absolute right-0 top-0 bottom-0  flex items-center justify-center rounded" type="button">
						<i className={`fa-solid ${values.showPassword2?"fa-eye":"fa-eye-slash "} `} onClick={handleClickShowPassword2}></i>
						</button>
					</div>

						<button className="h-[34px] px-1 bg-pink-primary text-white col-span-full rounded" type="submit">Submit</button>

				</Form>
			</Formik>
			<div className="w-full p-2 flex justify-center items-center">
				<a className="cursor-pointer" onClick={()=>goto("login")}>
					back to login
				</a>
			</div>
		</>
	);
};

export default ForgotPass;

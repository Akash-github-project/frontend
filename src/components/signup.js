import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { remember } from "../app/features/LoginSlice";
import { Label } from "./label";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { Formik } from "formik";
import { useTimer } from "use-timer";

export const SignUp = ({ goto = () => console.log("login") }) => {
	const [values, setValues] = useState({
		showPassword: false,
		showPassword2: false,
	});

	const formRef = useRef("");

	const [emailOtp, setEmailOtp] = useState({ status: "unsent", value: 0 });
	const [phoneOtp, setPhoneOtp] = useState({ status: "unsent", value: 0 });

	const {
		time: emailTime,
		start: emailTimeStart,
		reset: emailTimeReset,
	} = useTimer({
		initialTime: 60,
		endTime: 0,
		timerType: "DECREMENTAL",
	});

	const {
		time: phoneTime,
		start: phoneTimeStart,
		reset: phoneTimeReset,
	} = useTimer({
		initialTime: 60,
		endTime: 0,
		timerType: "DECREMENTAL",
	});

	const askOtp = type => {
		let generatedOtpEmail =
			Math.random() * 6 + Math.random() * 6 * 10 + Math.random() * 6 * 100;
		generatedOtpEmail = Math.floor(generatedOtpEmail);

		let generatedOtpPhone =
			Math.random() * 6 + Math.random() * 6 * 10 + Math.random() * 6 * 100;
		generatedOtpPhone = Math.floor(generatedOtpPhone);

		if (type === "email") {
			setEmailOtp({ status: emailOtp.status, value: generatedOtpEmail });
		} else if (type === "phone") {
			setPhoneOtp({ status: phoneOtp.status, value: generatedOtpPhone });
		}
	};

	const resendMailOtp = () => {
		emailTimeReset();
		askOtp("email");
		emailTimeStart();
	};

	const sendOtpEmail = () => {
		let formikRef = formRef.current;
		console.log(formikRef);
		if (
			formikRef.values.emailUser === "" ||
			formikRef.errors.emailUser === ""
		) {
			formikRef.setFieldTouched("emailUser");
			formikRef.validateField("emailUser");
		} else {
			setEmailOtp({ status: "sent", value: emailOtp.value });
			askOtp("email");
			emailTimeStart();
		}
	};

	const sendOtpPhone = () => {
		let formikRef = formRef.current;
		console.log(formikRef);
		if (
			formikRef.values.phoneUser === "" ||
			formikRef.errors.phoneUser === ""
		) {
			formikRef.setFieldTouched("phoneUser");
			formikRef.validateField("phoneUser");
			console.log(formikRef);
		} else {
			setPhoneOtp({ status: "sent", value: phoneOtp.value });
			askOtp("phone");
			phoneTimeStart();
		}
	};
	const resendPhoneOtp = () => {
		askOtp("email");
		phoneTimeReset();
		phoneTimeStart();
	};
	const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value });
	};

	let initialFormValues = {
		NameUser: "",
		emailUser: "",
		mobileUser: "",
		signUpPass1: "",
		signUpPass2: "",
		terms: false,
		otpEmail: "",
		otpPhone: "",
	};
	const validateFormSignUp = values => {
		const errors = {};
		let numberAsString;
		const EMAIL_REGEX =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!values.NameUser) {
			errors.NameUser = "Name can't be empty";
		}
		if (!values.emailUser) {
			errors.emailUser = "email can't be empty";
		}
		if (!values.mobileUser) {
			errors.mobileUser = "mobile no can't be empty";
		}
		if (!values.signUpPass1) {
			errors.signUpPass1 = "passwords cannot be empty";
		}
		if (!values.signUpPass2) {
			errors.signUpPass2 = "passwords cannot be empty";
		}
		if (values.signUpPass1 !== values.signUpPass2) {
			errors.signUpPass2 = "passwords don't match";
		}
		if (!values.terms) {
			errors.terms = "Please accept the terms and conditions";
		}
		if (isNaN(parseInt(values.mobileUser)) === false) {
			numberAsString = new Number(values.mobileUser).toString();

			if (
				numberAsString[0] !== "6" &&
				numberAsString[0] !== "7" &&
				numberAsString[0] !== "8" &&
				numberAsString[0] !== "9"
			) {
				errors.mobileUser = "invalid mobile no";
			} else if (numberAsString.length < 10 || numberAsString.length > 10)
				errors.mobileUser = "invalid mobile no length";
		} else if (values.emailUser.match(EMAIL_REGEX) === null) {
			errors.emailUser = "enter a valid email";
		}

		if (typeof values.otpPhone !== "undefined") {
			if (values.otpPhone == phoneOtp.value && values.otpPhone !== "") {
				setEmailOtp({ status: "verified", value: emailOtp.value });
				reset();
			} else {
				errors.otpPhone = "otp does not match";
			}
		}

		if (typeof values.otpEmail !== "undefined") {
			if (values.otpEmail == emailOtp.value && values.otpEmail !== "") {
				setPhoneOtp({ status: "verified", value: emailOtp.value });
				reset();
			} else {
				errors.otpEmail = "otp does not match";
			}
		}
		return errors;
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

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};

	const handleMouseDownPassword2 = event => {
		event.preventDefault();
	};

	return (
		<Formik
			initialValues={{ ...initialFormValues }}
			validate={validateFormSignUp}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(false);
				console.log(values);
			}}
			innerRef={formRef}
		>
			{formik => (
				<form onSubmit={formik.handleSubmit}>
					<div className="px-1 py-1 mt-2 text-left">
						<div className="mb-4 w-full ">
							{/* name of registerer*/}
							{formik.errors.NameUser && formik.touched.NameUser ? (
								<div className="w-full text-center text-xs">
									{formik.errors.NameUser}
								</div>
							) : (
								<div className="w-full text-center text-xs"></div>
							)}
							{console.log(formik)}
							<div className="mb-2 flex gap-4 items-center ">
								<Label
									forItem="NameUser"
									message="Name"
									extraClasses="w-[30%]"
								/>
								<OutlinedInput
									style={{ width: "70%" }}
									size="small"
									id="NameUser"
									name="NameUser"
									type="text"
									{...formik.getFieldProps("NameUser")}
								/>
							</div>
							{/* name of registerer end*/}

							{/* email of registerer */}

							{formik.errors.emailUser && formik.touched.emailUser ? (
								<div className="w-full text-center text-xs">
									{formik.errors.emailUser}
								</div>
							) : (
								<div className="w-full text-center text-xs"></div>
							)}
							<div className="flex gap-4 items-center mb-2">
								<Label
									forItem="emailUser"
									message="E-mail"
									extraClasses="w-[30%]"
								/>
								<div style={{ width: "70%" }} className="flex">
									<OutlinedInput
										style={{ flex: "1" }}
										size="small"
										name="emailUser"
										id="emailUser"
										type="email"
										{...formik.getFieldProps("emailUser")}
									/>
									<Button
										variant="contained"
										disabled={emailOtp.status === "sent" ? true : false}
										style={{ backgroundColor: "#f5317c" }}
										// workin
										onClick={sendOtpEmail}
									>
										OTP
									</Button>
								</div>
							</div>
							{/* email of registerer end*/}

							{/* email otp section stats here */}

							{emailOtp.status === "verified" ||
							emailOtp.status === "unsent" ? null : (
								<div className="flex gap-4 items-center mb-2">
									<Label
										forItem="otpEmail"
										message="OTP"
										extraClasses="w-[30%]"
									/>
									<div style={{ width: "70%" }} className="flex items-center">
										<OutlinedInput
											style={{ width: "50%" }}
											sx={
												emailOtp.status === "verified"
													? {
															"div.MuiInput-root": {
																outline: "2px solid green",
															},
													  }
													: null
											}
											size="small"
											id="otpEmail"
											name="otpEmail"
											type="tel"
											{...formik.getFieldProps("otpEmail")}
										/>
										{emailOtp.status === "sent" ? (
											emailTime !== 0 ? (
												<span className="w-1/2 mx-auto ">
													{`${Math.floor(emailTime / 60)}:${emailTime % 60}`}
												</span>
											) : (
												<Button
													variant="contained"
													style={{ backgroundColor: "#f5317c" }}
													onClick={resendMailOtp}
												>
													Resend Otp
												</Button>
											)
										) : null}
									</div>
								</div>
							)}
							{/* email otp section ends here */}

							{/* mobile no of registerer */}
							{formik.errors.mobileUser && formik.touched.mobileUser ? (
								<div className="w-full text-center text-xs">
									{formik.errors.mobileUser}
								</div>
							) : (
								<div className="w-full text-center text-xs"></div>
							)}

							<div className="flex gap-4 items-center mb-2">
								<Label
									forItem="mobileUser"
									message="Mobile"
									extraClasses="w-[30%]"
								/>
								<div style={{ width: "70%" }} className="flex">
									<OutlinedInput
										style={{ flex: "1" }}
										size="small"
										id="mobileUser"
										name="mobileUser"
										type="tel"
										{...formik.getFieldProps("mobileUser")}
									/>

									<Button
										variant="contained"
										disabled={phoneOtp.status === "sent" ? true : false}
										style={{ backgroundColor: "#f5317c" }}
										onClick={sendOtpPhone}
									>
										OTP
									</Button>
								</div>
							</div>
							{/* mobile no of registerer end*/}
							{/* phone otp section stats here */}

							{phoneOtp.status === "verified" ||
							phoneOtp.status === "unsent" ? null : (
								<div className="flex gap-4 items-center mb-2">
									<Label
										forItem="otpPhone"
										message="OTP"
										extraClasses="w-[30%]"
									/>
									<div style={{ width: "70%" }} className="flex items-center">
										<OutlinedInput
											style={{ width: "50%" }}
											sx={
												phoneOtp.status === "verified"
													? {
															"div.MuiInput-root": {
																outline: "2px solid green",
															},
													  }
													: null
											}
											size="small"
											id="otpPhone"
											name="otpPhone"
											type="tel"
											{...formik.getFieldProps("otpPhone")}
										/>
										{phoneOtp.status === "sent" ? (
											phoneTime !== 0 ? (
												<span className="w-1/2 mx-auto ">
													{`${Math.floor(phoneTime / 60)}:${phoneTime % 60}`}
												</span>
											) : (
												<Button
													variant="contained"
													style={{ backgroundColor: "#f5317c" }}
													onClick={resendPhoneOtp}
												>
													Resend Otp
												</Button>
											)
										) : null}
									</div>
								</div>
							)}
							{/* otp section ends here */}
							{/* password of registerer */}

							{formik.errors.signUpPass1 && formik.touched.signUpPass1 ? (
								<div className="w-full text-center text-xs">
									{formik.errors.signUpPass1}
								</div>
							) : (
								<div className="w-full text-center text-xs"></div>
							)}
							<div className="mb-2 flex gap-4 items-center ">
								<Label
									forItem="signUpPass1"
									message="Password"
									extraClasses="w-[30%]"
								/>

								<OutlinedInput
									style={{ width: "70%" }}
									size="small"
									id="signUpPass1"
									name="signUpPass1"
									{...formik.getFieldProps("signUpPass1")}
									type={values.showPassword ? "text" : "password"}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{values.showPassword ? (
													<Visibility />
												) : (
													<VisibilityOff />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>
							</div>
							{/* password of registerer end*/}

							{/* password of re-registerer */}

							{formik.errors.signUpPass2 && formik.touched.signUpPass2 ? (
								<div className="w-full text-center text-xs">
									{formik.errors.signUpPass2}
								</div>
							) : (
								<div className="w-full text-center text-xs"></div>
							)}
							<div className=" flex gap-4 items-center ">
								<Label
									forItem="signUpPass2"
									message="Re-Password"
									extraClasses="w-[30%]"
								/>

								<OutlinedInput
									style={{ width: "70%" }}
									size="small"
									name="signUpPass2"
									id="signUpPass2"
									{...formik.getFieldProps("singUpPass2")}
									type={values.showPassword2 ? "text" : "password"}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword2}
												onMouseDown={handleMouseDownPassword2}
												edge="end"
											>
												{values.showPassword2 ? (
													<Visibility />
												) : (
													<VisibilityOff />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>
							</div>
							{/* password of re-registerer end*/}

							{/* accept terms ,conditions  and privacy policy*/}
							<div className="flex items-center">
								{/* terms and conditions checkbox*/}
								<Checkbox
									sx={{
										color: "#f5317c",
										"&.Mui-checked": {
											color: "#f5317c",
										},
									}}
									onChange={formik.handleChange}
									checked={formik.values.terms}
									name="terms"
									id="terms"
								/>

								{/* label for terms and conditions */}
								<label
									htmlFor="terms"
									className="mr-auto ml-2 text-gray-primary"
								>
									I agree to the
									<a className="text-primary mx-2" href="#">
										Terms
									</a>
									and
									<a className="text-primary ml-2" href="#">
										Privacy Policy
									</a>
								</label>
							</div>
							{/* accept terms ,conditions  and privacy policy end*/}

							{/* login button  */}
							{formik.errors.emailOrMobile && formik.touched.emailOrMobile ? (
								<div className="w-full text-center text-xs">
									{formik.errors.emailOrMobile}
								</div>
							) : (
								<div className="w-full text-center text-xs"></div>
							)}
							<div className="flex">
								<button
									className="w-full  p-2 mt-4 bg-primary text-white  rounded-lg  hover:shadow-pink-900 active:bg-pink-800"
									type="submit"
								>
									Login
								</button>
							</div>
							{/* login button  end */}

							<div className="mt-2  text-black text-center">
								Already have an account
								<a
									className=" ml-2 cursor-pointer"
									href="#"
									onClick={() => goto("login")}
								>
									Log In
								</a>
							</div>
						</div>
					</div>
				</form>
			)}
		</Formik>
	);
};

import React, { useState, useRef } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Label } from "./label";
import { Formik } from "formik";
import Countdown from "react-countdown";

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
	const [retry, setRetry] = useState(0);

	// const handleChange = prop => event => {
	// 	setValues({ ...values, [prop]: event.target.value });
	// };

	const retryOtpSend = () => {
		setRetry(retry + 1);
	};
	const renderer = ({ minutes, seconds, completed }) => {
		if (completed)
			return (
				<Button
					variant="contained"
					style={{ backgroundColor: "#f5317c" }}
					onClick={retryOtpSend}
				>
					Resend Otp
				</Button>
			);
		else {
			return (
				<span>
					{minutes}:{seconds}
				</span>
			);
		}
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

	let initialFormValues = {
		emailOrMobile: "",
		newPass: "",
		reNewPass: "",
		otpForgot: "",
	};
	const sendOtp = () => {
		setOtp("sent");
	};

	const validateForm = values => {
		const errors = {};
		let numberAsString;
		const EMAIL_REGEX =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!values.emailOrMobile) {
			errors.emailOrMobile = "email or mobile can't be empty";
		} else {
			if (isNaN(parseInt(values.emailOrMobile)) === false) {
				numberAsString = new Number(values.emailOrMobile).toString();

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
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(false);
					console.log(values);
				}}
			>
				{formik => (
					<form
						className="px-1 py-1 mt-2 text-left"
						onSubmit={formik.handleSubmit}
					>
						<div className="mb-4 w-full ">
							{/* mobile no or email  of registerer */}
							{formik.errors.emailOrMobile && formik.touched.emailOrMobile ? (
								<div className="w-full text-center text-xs">
									{formik.errors.emailOrMobile}
								</div>
							) : (
								<div className="w-full text-center text-xs"></div>
							)}
							<div className="flex gap-4 items-center mb-2">
								<Label
									forItem="emailOfMobile"
									message="Mobile or Email"
									extraClasses="w-[30%]"
								/>
								<div style={{ width: "70%" }} className="flex">
									<OutlinedInput
										style={{ flex: "1" }}
										sx={
											otp === "verified"
												? {
														"div.MuiInput-root": { outline: "2px solid green" },
												  }
												: null
										}
										disabled={otp === "sent" ? true : false}
										size="small"
										id="emailOrMobile"
										name="emailOrMobile"
										type="tel"
										{...formik.getFieldProps("emailOrMobile")}
									/>

									<Button
										variant="contained"
										disabled={otp === "sent" ? true : false}
										type="submit"
										style={{ backgroundColor: "#f5317c" }}
										onClick={sendOtp}
									>
										OTP
									</Button>
								</div>
							</div>
							{/* mobile no of registerer end*/}

							{/* otp section stats here */}

							{otp === "verified" || otp === "unsent" ? null : (
								<div className="flex gap-4 items-center mb-2">
									<Label
										forItem="otpForgot"
										message="OTP"
										extraClasses="w-[30%]"
									/>
									<div style={{ width: "70%" }} className="flex">
										<OutlinedInput
											style={{ flex: "1" }}
											sx={
												otp === "verified"
													? {
															"div.MuiInput-root": {
																outline: "2px solid green",
															},
													  }
													: null
											}
											size="small"
											id="otpForgot"
											name="otpForgot"
											type="tel"
											{...formik.getFieldProps("otpForgot")}
										/>
										{otp === "sent" ? (
											<Countdown
												key={retry}
												date={Date.now() + 5000}
												renderer={renderer}
												// controlled={true}
											></Countdown>
										) : null}
									</div>
								</div>
							)}
							{/* otp section ends here */}
							{/* password of registerer */}

							{formik.errors.newPass && formik.touched.newPass ? (
								<div className="w-full text-center text-xs">
									{formik.errors.newPass}
								</div>
							) : (
								<div className="w-full text-center text-xs"></div>
							)}
							<div className="mb-2 flex gap-4 items-center ">
								<Label
									forItem="newPass"
									message="Password"
									extraClasses="w-[30%]"
								/>

								<OutlinedInput
									style={{ width: "70%" }}
									size="small"
									name="newPass"
									id="newPass"
									type={values.showPassword ? "text" : "password"}
									{...formik.getFieldProps("newPass")}
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

							{formik.errors.reNewPass && formik.touched.reNewPass ? (
								<div className="w-full text-center text-xs">
									{formik.errors.reNewPass}
								</div>
							) : (
								<div className="w-full text-center text-xs"></div>
							)}
							<div className=" flex gap-4 items-center ">
								<Label
									forItem="reNewPass"
									message="Re-Password"
									extraClasses="w-[30%]"
								/>

								<OutlinedInput
									style={{ width: "70%" }}
									size="small"
									id="reNewPass"
									name="reNewPass"
									type={values.showPassword2 ? "text" : "password"}
									{...formik.getFieldProps("reNewPass")}
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

							{/* login button  */}
							<div className="flex">
								<button
									className="w-full  p-2 mt-4 bg-primary text-white  rounded-lg  hover:shadow-pink-900 active:bg-pink-800"
									type="submit"
								>
									Continue
								</button>
							</div>
							{/* login button  end */}

							<div className="mt-2  text-black text-center">
								<span
									className=" ml-2 cursor-pointer"
									onClick={() => goto("login")}
								>
									Return to Login
								</span>
							</div>
						</div>
					</form>
				)}
			</Formik>
		</>
	);
};

export default ForgotPass;

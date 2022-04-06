import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginId, password, remember } from "../app/features/LoginSlice";
import { Input } from "./input";
import { Password } from "./password";
import Checkbox from "react-custom-checkbox";
import { Label } from "./label";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useMediaQuery } from "@mui/material";
import { Formik } from "formik";

export const Login = ({ goto = () => console.log("forgotPass") }) => {
	const screen = useMediaQuery("(min-width:)");
	const [value, setValues] = React.useState({
		showPassword: false,
	});

	let initialFormValues = {
		username: "",
		passwd: "",
		rememberMe: false,
	};

	const validateForm = values => {
		const errors = {};
		let numberAsString;
		const EMAIL_REGEX =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!values.username) {
			errors.username = "email or mobile can't be empty";
		} else {
			if (isNaN(parseInt(values.username)) === false) {
				numberAsString = new Number(values.username).toString();

				if (
					numberAsString[0] !== "6" &&
					numberAsString[0] !== "7" &&
					numberAsString[0] !== "8" &&
					numberAsString[0] !== "9"
				) {
					errors.username = "invalid mobile no";
				} else if (numberAsString.length < 10 || numberAsString.length > 10)
					errors.username = "invalid mobile no length";
			} else if (values.username.match(EMAIL_REGEX) === null) {
				errors.username = "enter a valid email";
			}
		}

		if (!values.passwd) {
			errors.passwd = "password can't be empty";
		}

		return errors;
	};

	const handleClickShowPassword = () => {
		setValues({
			...value,
			showPassword: !value.showPassword,
		});
	};

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};

	const dispatch = useDispatch();

	return (
		<>
			<Formik
				initialValues={{ ...initialFormValues }}
				validate={validateForm}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(false);
					console.log(values);
				}}
			>
				{formik => (
					<form onSubmit={formik.handleSubmit}>
						<div className="px-1 py-1 mx-1 mt-4 text-left">
							<div className="mt-4 w-full ">
								{/* username */}
								{formik.errors.username && formik.touched.username ? (
									<div className="w-full text-center text-xs">
										{formik.errors.username}
									</div>
								) : (
									<div className="w-full text-center text-xs"></div>
								)}

								<div className=" mb-2 flex gap-4 items-center ">
									<Label
										forItem="username"
										message="Mobile of Email"
										extraClasses="w-[30%]"
									/>
									<OutlinedInput
										style={{ width: "70%" }}
										size="small"
										id="username"
										name="username"
										type="text"
										{...formik.getFieldProps("username")}
									/>
								</div>
								{/* username end*/}
								{/* password */}

								{formik.errors.passwd && formik.touched.passwd ? (
									<div className="w-full text-center text-xs">
										{formik.errors.passwd}
									</div>
								) : (
									<div className="w-full text-center text-xs"></div>
								)}
								<div className=" mb-2 flex gap-4 items-center ">
									<Label
										forItem="passwd"
										message="Password"
										extraClasses="w-[30%]"
									/>

									<OutlinedInput
										style={{ width: "70%" }}
										size="small"
										id="passwd"
										name="passwd"
										type={value.showPassword ? "text" : "password"}
										{...formik.getFieldProps("passwd")}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													edge="end"
												>
													{value.showPassword ? (
														<Visibility />
													) : (
														<VisibilityOff />
													)}
												</IconButton>
											</InputAdornment>
										}
									/>
								</div>
								{/* password end */}

								{/*forgot password and rememer me  */}
								<div className="flex items-center">
									{/* remember me chackbox */}
									<Checkbox
										borderColor="#f5317c"
										icon={
											<i className="fa-solid fa-square-check text-pink-600"></i>
										}
										onClick={() => dispatch(remember())}
										// {...formik.getFieldProps("rememberMe")}
										id="rememberMe"
										name="rememberMe"
									/>
									{/* remember me label */}
									<label
										htmlFor="rememberMe"
										className="mr-auto ml-2 text-gray-primary"
									>
										Remember Me
									</label>
									{/* forgot passwork link */}
									<span
										tabIndex={0}
										className="inline-block text-primary cursor-pointer"
										onClick={() => goto("forgotPass")}
									>
										Forgot Password?
									</span>
								</div>
								{/*forgot password and rememer me end */}

								{/* login button */}
								<div className="flex">
									<button
										className="w-full  p-2 mt-4 bg-primary text-white  rounded-lg active:bg-pink-800 hover:shadow-pink-900 "
										type="submit"
									>
										Login
									</button>
								</div>
								{/* login button end */}

								{/* additional sign up prompt  */}
								<div className="mt-1 text-black text-center">
									Not having account, Please &nbsp;
									<a
										className="text-primary"
										href="#"
										onClick={() => goto("signUp")}
									>
										Sign Up
									</a>
								</div>
								{/* additional sign up prompt  end*/}
							</div>
						</div>
					</form>
				)}
			</Formik>
		</>
	);
};

import React from "react";
import Checkbox from "react-custom-checkbox";
import { useSelector, useDispatch } from "react-redux";
import { remember } from "../app/features/LoginSlice";
import { Label } from "./label";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

export const SignUp = () => {
	const [values, setValues] = React.useState({
		text: "",
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false,
	});

	const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleChangeUsername = e => {
		setValues({
			...values,
			text: e.target.value,
		});
	};

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};

	const dispatch = useDispatch();

	return (
		<div className="px-1 py-1 mt-2 text-left">
			<div className="mb-4 w-full ">
				{/* name of registerer*/}
				<div className="w-full text-center text-xs">error message</div>
				<div className="mb-2 flex gap-4 items-center ">
					<Label forItem="NameUser" message="Name" extraClasses="w-[30%]" />
					<OutlinedInput
						style={{ width: "70%" }}
						size="small"
						id="NameUser"
						type="text"
						value={values.text}
						onChange={handleChangeUsername}
					/>
				</div>
				{/* name of registerer end*/}

				{/* email of registerer */}
				<div className="w-full text-center text-xs">error message</div>
				<div className="flex gap-4 items-center mb-2">
					<Label forItem="emailUser" message="E-mail" extraClasses="w-[30%]" />
					<div style={{ width: "70%" }} className="flex">
						<OutlinedInput
							style={{ flex: "1" }}
							size="small"
							id="emailUser"
							type="email"
							value={values.text}
							onChange={handleChangeUsername}
						/>
						<Button variant="contained" style={{ backgroundColor: "#f5317c" }}>
							OTP
						</Button>
					</div>
				</div>
				{/* email of registerer end*/}

				{/* mobile no of registerer */}
				<div className="w-full text-center text-xs">error message</div>
				<div className="flex gap-4 items-center mb-2">
					<Label forItem="mobileUser" message="Mobile" extraClasses="w-[30%]" />
					<div style={{ width: "70%" }} className="flex">
						<OutlinedInput
							style={{ flex: "1" }}
							size="small"
							id="mobileUser"
							type="tel"
							value={values.text}
							onChange={handleChangeUsername}
						/>

						<Button variant="contained" style={{ backgroundColor: "#f5317c" }}>
							OTP
						</Button>
					</div>
				</div>
				{/* mobile no of registerer end*/}

				{/* password of registerer */}
				<div className="w-full text-center text-xs">error message</div>
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
						type={values.showPassword ? "text" : "password"}
						value={values.password}
						onChange={handleChange("password")}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									{values.showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
				</div>
				{/* password of registerer end*/}

				{/* password of re-registerer */}
				<div className="w-full text-center text-xs">error message</div>
				<div className=" flex gap-4 items-center ">
					<Label
						forItem="signUpPass2"
						message="Re-Password"
						extraClasses="w-[30%]"
					/>

					<OutlinedInput
						style={{ width: "70%" }}
						size="small"
						id="signUpPass2"
						type={values.showPassword ? "text" : "password"}
						value={values.password}
						onChange={handleChange("password")}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									{values.showPassword ? <VisibilityOff /> : <Visibility />}
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
						borderColor="#f5317c"
						icon={<i class="fa-solid fa-square-check text-pink-600"></i>}
						onClick={() => dispatch(remember())}
						id="username"
					/>
					{/* label for terms and conditions */}
					<label htmlFor="username" className="mr-auto ml-2 text-gray-primary">
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
				<div className="w-full text-center text-xs">error message</div>
				<div className="flex">
					<button className="w-full  p-2 mt-4 bg-primary text-white  rounded-lg  hover:shadow-pink-900 active:bg-pink-800">
						Login
					</button>
				</div>
				{/* login button  end */}

				<div className="mt-2  text-black text-center">
					Already have an account
					<a className="text-primary ml-2" href="#">
						Log In
					</a>
				</div>
			</div>
		</div>
	);
};

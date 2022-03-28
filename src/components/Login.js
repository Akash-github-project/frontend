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

export const Login = () => {
	const screen = useMediaQuery("(min-width:)");
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
		<div className="px-1 py-1 mx-1 mt-4 text-left">
			<div className="mt-4 w-full ">
				{/* username */}
				<div className="w-full text-center text-xs">error message</div>
				<div className=" mb-2 flex gap-4 items-center ">
					<Label
						forItem="username"
						message="Mobile of Email"
						extraClasses="w-[30%]"
					/>
					<OutlinedInput
						style={{ width: "70%" }}
						size="small"
						id="outlined-adornment-password"
						type="text"
						value={values.text}
						onChange={handleChangeUsername}
					/>
				</div>
				{/* username end*/}
				{/* password */}
				<div className="w-full text-center text-xs">error message</div>
				<div className=" mb-2 flex gap-4 items-center ">
					<Label forItem="passwd" message="Password" extraClasses="w-[30%]" />

					<OutlinedInput
						style={{ width: "70%" }}
						size="small"
						id="outlined-adornment-password"
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
									{values.showPassword ? <Visibility /> : <VisibilityOff />}
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
						icon={<i class="fa-solid fa-square-check text-pink-600"></i>}
						onClick={() => dispatch(remember())}
						id="username"
					/>
					{/* remember me label */}
					<label htmlFor="username" className="mr-auto ml-2 text-gray-primary">
						Remember Me
					</label>
					{/* forgot passwork link */}
					<a href="#" className="text-primary">
						Forgot Password
					</a>
				</div>
				{/*forgot password and rememer me end */}

				{/* login button */}
				<div className="flex">
					<button className="w-full  p-2 mt-4 bg-primary text-white  rounded-lg active:bg-pink-800 hover:shadow-pink-900 ">
						Login
					</button>
				</div>
				{/* login button end */}

				{/* additional sign up prompt  */}
				<div className="mt-6 text-black text-center">
					Not having account, Please
					<a className="text-primary" href="#">
						Sign Up
					</a>
				</div>
				{/* additional sign up prompt  end*/}
			</div>
		</div>
	);
};

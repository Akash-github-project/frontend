import React from "react";
import { useState } from "react";
import "../css/all.css";
export const Password = ({
	Id = " ",
	extraClasses = " ",
	holder = " ",
	change,
	val,
}) => {
	let testEye = (
		<i
			class="absolute right-0 bottom-0 top-0 fa-solid fa-eye toogle-password eye"
			onClick={changePass}
		></i>
	);
	let testSlashEye = (
		<i
			class=" absolute right-0 bottom-0 top-0 fa-solid fa-eye-slash toogle-password eye"
			onClick={changePass}
		></i>
	);
	let [showPass, tooglePass] = useState(false);
	let defaultClasses =
		"flex-1 border rounded-md  field w-full text-black focus:text-red-500";

	if (extraClasses !== " ") {
		defaultClasses += `${defaultClasses}`;
	}

	//   let icon = (showPass)?<FontAwesomeIcon icon={faEye} />:<FontAwesomeIcon icon={faEyeSlash} />;

	function changePass(e) {
		if (showPass) {
			tooglePass(false);
		} else tooglePass(true);
	}
	function changeHandle(e) {
		change(e.target.value);
	}

	//  function toogleChange(e){
	//      if(showPass){
	//         tooglePass(false);
	//      }
	//      else{
	//         tooglePass(true);
	//      }
	//   }
	// let toShow = (showPass)?openEye:crossEye;
	let toShow = showPass ? testEye : testSlashEye;
	let passType = showPass ? "text" : "password";

	return (
		//work required
		<div className="flex relative p-0 m-0 flex-1">
			<input
				type={passType}
				id={Id}
				placeholder={holder}
				value={val}
				onChange={changeHandle}
				className={defaultClasses}
			/>
			{toShow}
		</div>
	);
};

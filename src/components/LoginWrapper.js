import React, { useState } from "react"
import ForgotPass from "./forgotPass"
import { Login } from "./Login"
import { SignUp } from "./signup"
import { SuccessFulRegistered } from "./userpages/sucessRegistered"
import TwoFactorOtp from "./userpages/twoFactorOtp"

const LoginWrapper = ({}) => {
  const [part, setPart] = useState("login")
  return (
    <div className="w-full md:min-w-min">
      {part === "forgotPass" ? (
        <ForgotPass goto={setPart} />
      ) : part === "successfulReg" ? (
        <SuccessFulRegistered
          goto={setPart}
          message="You have succesfully Registered"
        />
      ) : part === "successfulReset" ? (
        <SuccessFulRegistered
          goto={setPart}
          message="Your password reset completed"
        />
      ) : null}

      {part === "forgotPass" ||
      part === "successfulReg" ||
      part === "successfulReset" ? null : (
        <>
          <div className="w-full ">
            <button
              className={`w-1/2 px-4 py-2 text-[21px] font-medium border-b-2 border-b-gray-separator ${
                part == "login" || part == "twoFactorAuth"
                  ? "border-b-pink-primary"
                  : ""
              }`}
              onClick={() => setPart("login")}>
              Login
            </button>
            <button
              className={`w-1/2 px-4 py-2 border-b-2 text-[21px] font-medium border-b-gray-separator ${
                part == "signUp" ? "border-b-pink-primary" : ""
              }`}
              onClick={() => setPart("signUp")}>
              Sign Up
            </button>
          </div>
          <div className="w-full">
            {part == "login" ? (
              <Login goto={setPart} />
            ) : part == "signUp" ? (
              <SignUp goto={setPart} />
            ) : part === "twoFactorAuth" ? (
              <TwoFactorOtp goto={setPart} />
            ) : null}
          </div>
        </>
      )}
    </div>
  )
}

export default LoginWrapper

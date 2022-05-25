import React, { useState } from "react"
import ForgotPass from "./forgotPass"
import { Login } from "./Login"
import { SignUp } from "./signup"
import { SuccessFulRegistered } from "./userpages/sucessRegistered"
import TwoFactorOtp from "./userpages/twoFactorOtp"

const LoginWrapper = ({}) => {
  const [part, setPart] = useState("login")
  const [passwordUser, setPassword] = useState("")
  const [usernameUser, setUsernameUser] = useState("")

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
          <div className="w-full cursor-pointer ">
            <button
              className={`w-1/2 px-4 py-2 text-[21px] font-medium border-b-2 border-b-gray-separator ${
                part == "login" || part == "twoFactorAuth"
                  ? "border-b-pink-primary"
                  : ""
              } `}
              style={
                part === "login" ? { cursor: "auto" } : { cursor: "pointer" }
              }
              onClick={() => setPart("login")}>
              Login
            </button>
            <button
              className={`w-1/2 px-4 py-2 border-b-2 text-[21px] font-medium border-b-gray-separator ${
                part == "signUp" ? "border-b-pink-primary" : ""
              }`}
              onClick={() => setPart("signUp")}
              style={
                part === "signUp" ? { cursor: "auto" } : { cursor: "pointer" }
              }>
              Sign Up
            </button>
          </div>
          <div className="w-full">
            {part == "login" ? (
              <Login
                goto={setPart}
                userAuth={{
                  setUsernameUser,
                  setPassword,
                }}
              />
            ) : part == "signUp" ? (
              <SignUp goto={setPart} />
            ) : part === "twoFactorAuth" ? (
              <TwoFactorOtp
                goto={setPart}
                userAuth={{
                  usernameUser,
                  passwordUser,
                }}
              />
            ) : null}
          </div>
        </>
      )}
    </div>
  )
}

export default LoginWrapper

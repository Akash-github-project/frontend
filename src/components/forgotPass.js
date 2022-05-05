import React, { useState, useRef } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useTimer } from "use-timer"
import { NumberInput } from "./numberInput"

const ForgotPass = ({ goto = () => console.log("hello world") }) => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    showPassword2: false,
  })

  const [otp, setOtp] = useState("unsent")
  const formRef = useRef("")
  const [otpVal, setOtpVal] = useState(0)

  const { time, start, reset } = useTimer({
    initialTime: 60,
    endTime: 0,
    timerType: "DECREMENTAL",
  })

  const resendOtp = () => {
    reset()
    askOtp()
    start()
  }

  const askOtp = () => {
    let otpGenerated =
      Math.random() * 6 + Math.random() * 6 * 10 + Math.random() * 6 * 100
    otpGenerated = Math.floor(otpGenerated)
    console.log("otprepass", otpGenerated)

    setOtpVal(() => otpGenerated)
    console.log(otpVal)
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleClickShowPassword2 = () => {
    setValues({
      ...values,
      showPassword2: !values.showPassword2,
    })
  }

  let initialFormValues = {
    mobileUser: "",
    newPass: "",
    reNewPass: "",
    otpForgot: "",
  }

  const checkPassword = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters"
    } else if (password.search(/[a-z]/i) < 0) {
      return "Password must contain at least one letter"
    } else if (password.search(/(?=.*[A-Z])/) < 0) {
      return "Password must contain at least one uppercase"
    } else if (password.search(/[0-9]/) < 0) {
      return "Password must contain at least one digit"
    } else if (password.search(/(?=.*[!@#$%^&*])/) < 0) {
      return "Password must contain at least one special character"
    } else {
      return "none"
    }
  }

  const sendOtp = () => {
    const formikRef = formRef.current

    formikRef.setFieldTouched("mobileUser")
    formikRef.validateField("mobileUser")

    if (
      (formikRef.errors.mobileUser === "" ||
        formikRef.errors.mobileUser === undefined) &&
      formikRef.values.mobileUser !== ""
    ) {
      askOtp()
      setOtp("sent")
      start()
    }
    console.log(formikRef)
  }

  const validateForm = (values) => {
    let errors = {}
    let numberAsString
    const formikRef = formRef.current

    if (!values.mobileUser) {
      errors.mobileUser = " mobile can't be empty"
    } else {
      // if (isNaN(parseInt(values.mobileUser)) === false) {
      numberAsString = Number(values.mobileUser).toString()

      if (
        numberAsString[0] !== "6" &&
        numberAsString[0] !== "7" &&
        numberAsString[0] !== "8" &&
        numberAsString[0] !== "9"
      ) {
        errors.mobileUser = "invalid mobile no"
      } else if (numberAsString.length < 10 || numberAsString.length > 10)
        errors.mobileUser = "invalid mobile no"
      // }
    }

    if (!values.newPass) {
      errors.newPass = "new password can't be empty"
    } else if (values.newPass !== values.reNewPass) {
      errors.newPass = "passwords don't match"
    }
    if (!values.reNewPass) {
      errors.reNewPass = "re password can't be empty"
    }

    if (checkPassword(values.newPass) !== "none") {
      errors.newPass = checkPassword(values.newPass)
    }

    if (checkPassword(values.reNewPass) !== "none") {
      errors.reNewPass = checkPassword(values.reNewPass)
    }

    if (typeof values.otpForgot !== "undefined") {
      if (values.otpForgot == otpVal && values.otpForgot !== "") {
        setOtp("verified")
        formikRef.setFieldValue("otpForgot", "")
        reset()
      }
      if (values.otpForgot != otpVal && values.otpForgot !== "") {
        errors.otpVal = "otp does not match"
      }
    } else {
      if (formikRef.errors.otpForgot !== "")
        formikRef.setFieldError("otpForgot", "")
    }

    return errors
  }

  return (
    <>
      <div className="w-full text-center  p-0 md:p-3 md:pb-0 lg:p-4">
        <h2 className="text-2xl ">Forgot Your Password?</h2>
        <p className="text-gray-500 p-0 md:px-2 my-2">
          Enter your Email or Mobile and we’ll help you reset your password
        </p>
      </div>
      <Formik
        initialValues={{ ...initialFormValues }}
        validate={validateForm}
        onSubmit={(values) => {
          otp !== "verified"
            ? formRef.current.setFieldError(
                "mobileUser",
                "Please confirm mobile or email"
              )
            : formRef.current.setFieldError("mobileUser", "")
          console.log(values)
        }}
        innerRef={formRef}>
        {(formik) => (
          <Form className="grid grid-cols-6 gap-1 p-0 md:p-3 lg:p-4 items-center">
            <span className="col-span-full text-xs text-center h-3 ">
              <ErrorMessage name="mobileUser" />
            </span>
            <label
              htmlFor="mobileUser"
              className="text-sm col-span-2 text-gray-primary">
              Mobile No
            </label>
            <div className="flex col-span-4 rounded">
              <NumberInput
                name="mobileUser"
                val={formik.values.mobileUser}
                dis={otp === "verified" || otp === "sent" ? true : false}
                Id="mobileUser"
                numbersOnly={true}
                maxlen={10}
                blur={() => formik.setFieldTouched("mobileUser")}
                fieldClasses="border border-pink-primary w-full"
                change={(value) =>
                  formik.setFieldValue("mobileUser", value, true)
                }
              />

              <button
                className="h-[34px] px-1 bg-pink-primary text-white disabled:bg-gray-600 rounded"
                disabled={
                  (formik.errors.mobileUser === "" ||
                    formik.errors.mobileUser === undefined) &&
                  formik.values.mobileUser != ""
                    ? false
                    : true
                }
                onClick={
                  otp !== "unsent"
                    ? () => {
                        reset()
                        setOtp("unsent")
                      }
                    : () => sendOtp()

                  // otp === "verified" ? () => setOtp("unsent") : () => sendOtp()
                }
                type="button">
                {otp !== "unsent" ? (
                  <i className="fa-regular fa-pen-to-square text-white w-5 "></i>
                ) : (
                  "OTP"
                )}
              </button>
            </div>

            {otp === "verified" || otp === "unsent" ? null : (
              <>
                <span className="col-span-full text-center text-xs h-3">
                  <ErrorMessage name="otpForgot" />
                </span>
                <div className="col-span-full flex h-[34px] items-center">
                  <label
                    htmlFor="otpForgot"
                    className="text-sm w-1/3 text-gray-primary">
                    OTP
                  </label>
                  <Field
                    name="otpForgot"
                    className="border border-pink-primary rounded h-full w-1/4"
                    type="tel"
                  />
                  <>
                    {otp === "sent" ? (
                      time !== 0 ? (
                        <span className="mx-auto leading-[34px] ">
                          {`${Math.floor(time / 60)}:${time % 60}`}
                        </span>
                      ) : (
                        <button
                          className="hover:bg-pink-primary hover:text-white border border-pink-primary rounded text-xs px-1 mx-1 h-[34px]"
                          onClick={resendOtp}>
                          Resend OTP
                        </button>
                      )
                    ) : null}
                  </>
                </div>
              </>
            )}
            <span className="col-span-full text-xs text-center h-3">
              <ErrorMessage name="newPass" />
            </span>
            <label
              htmlFor="newPass "
              className="text-sm col-span-2 text-gray-primary">
              New Password
            </label>
            <div className="flex relative col-span-4 h-[34px]">
              <Field
                name="newPass"
                className="w-full border border-pink-primary h-full rounded px-2"
                type={values.showPassword === true ? "text" : "password"}
              />

              <button
                className="w-8 absolute right-0 top-0 bottom-0  flex items-center justify-center rounded"
                type="button">
                <i
                  className={`fa-solid text-sm ${
                    values.showPassword ? "fa-eye" : "fa-eye-slash "
                  } `}
                  onClick={handleClickShowPassword}></i>
              </button>
            </div>

            <span className="col-span-full text-xs text-center h-3">
              <ErrorMessage name="reNewPass" />
            </span>
            <label
              htmlFor="reNewPass"
              className="text-sm col-span-2 text-gray-primary">
              Re Password
            </label>
            <div className="flex relative col-span-4 h-[34px] rounded">
              <Field
                name="reNewPass"
                className="w-full border border-pink-primary h-full rounded px-2"
                type={values.showPassword2 === true ? "text" : "password"}
              />
              <button
                className="w-8 absolute right-0 top-0 bottom-0  flex items-center justify-center rounded"
                type="button">
                <i
                  className={`fa-solid text-sm ${
                    values.showPassword2 ? "fa-eye" : "fa-eye-slash "
                  } `}
                  onClick={handleClickShowPassword2}></i>
              </button>
            </div>

            <button
              className="h-[34px] px-1 bg-pink-primary text-white col-span-full rounded"
              type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <div className="w-full p-2 flex justify-center items-center">
        <a className="cursor-pointer text-sm" onClick={() => goto("login")}>
          back to login
        </a>
      </div>
    </>
  )
}

export default ForgotPass

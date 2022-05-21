import React, { useState, useRef, useContext } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useTimer } from "use-timer"
import { NumberInput } from "./numberInput"
import { BASE_ROUTE } from "./routes"
import {
  OTP_SENT,
  OTP_SUCCESS,
  SUCCESS,
  FAIL_STAUS,
  EMAIL_MOBILE_NOT_REGISTERED,
  OTP_NOT_VERIFIED,
  RESET_PASSWORD_COMPLETE,
} from "./constants"
import { isValidPass, isValidEmailOrMobile } from "./usefullFunctions"
import axios from "axios"
import { LoginModalContext } from "./userpages/loginModal"

const ForgotPass = ({ goto = () => console.log("hello world") }) => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    showPassword2: false,
  })

  const [otp, setOtp] = useState("unsent")
  const formRef = useRef("")

  const loginChanger = useContext(LoginModalContext)
  const { time, start, reset } = useTimer({
    initialTime: 60,
    endTime: 0,
    timerType: "DECREMENTAL",
  })

  const resendOtp = (value) => {
    reset()
    askOtp(value)
    start()
  }

  const verifyOtp = async (value, emailOrMobile) => {
    console.log(emailOrMobile)
    let response = ""
    response = axios
      .put(`${BASE_ROUTE}/verifyotp`, {
        servicename: "resetpwd",
        identifier: emailOrMobile,
        mode: "web",
        otp: value,
      })
      .then((res) => {
        if (res.data.Status == SUCCESS && res.data.Message == OTP_SUCCESS) {
          reset()
          return true
        }
      })
      .catch((error) => {
        return false
      })

    return response
  }

  const askOtp = async (value) => {
    let returnValue = ""
    if (value.length < 6) {
      return false
    } else {
      returnValue = axios
        .post(
          `${BASE_ROUTE}/getotp`,
          {
            servicename: "resetpwd",
            identifier: value,
            mode: "web",
          },
          {
            "Content-type": "text/json",
          }
        )
        .then((resp) => {
          if (resp.data.Message == OTP_SENT) {
            console.log("otp sent")
            return OTP_SENT
          }
        })
        .catch((error) => {
          if (
            error.response.Status == FAIL_STAUS &&
            error.response.Message === EMAIL_MOBILE_NOT_REGISTERED
          )
            return EMAIL_MOBILE_NOT_REGISTERED
        })

      //setting otp email
      return returnValue
    }
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
    mobileOrEmailUser: "",
    newPass: "",
    reNewPass: "",
    otpForgot: "",
  }

  const sendOtp = (value, formik) => {
    askOtp(value).then((res) => {
      if (res === OTP_SENT) {
        setOtp("sent")
        start()
      } else {
        formik.setFieldError("mobileOrEmailUser", EMAIL_MOBILE_NOT_REGISTERED)
        formik.setFieldTouched("mobileOrEmailUser", true, false)
      }
    })
  }

  //function for validating form
  const validateForm = (values) => {
    let errors = {}
    const formikRef = formRef.current

    if (isValidEmailOrMobile(values.mobileOrEmailUser) != "none") {
      errors.mobileOrEmailUser = isValidEmailOrMobile(values.mobileOrEmailUser)
    }
    if (!values.mobileOrEmailUser) {
      errors.mobileOrEmailUser = "mobile or email can't be empty"
    }
    if (!values.newPass) {
      errors.newPass = "new password can't be empty"
    } else if (values.newPass !== values.reNewPass) {
      errors.newPass = "passwords don't match"
    }
    if (!values.reNewPass) {
      errors.reNewPass = "re password can't be empty"
    }

    if (isValidPass(values.newPass) !== "none") {
      errors.newPass = isValidPass(values.newPass)
    }

    if (isValidPass(values.reNewPass) !== "none") {
      errors.reNewPass = isValidPass(values.reNewPass)
    }

    if (typeof values.otpForgot !== "undefined" && otp !== "verified") {
      if (values.otpForgot.length === 6) {
        verifyOtp(values.otpForgot, values.mobileOrEmailUser).then((res) => {
          if (res) {
            setOtp("verified")
            formikRef.setFieldError("otpForgot", "")
            formikRef.setFieldValue("otpForgot", "", false)
            formikRef.setFieldTouched("otpForgot", false, false)
          } else {
            formikRef.setFieldTouched("otpForgot", true, false)
            formikRef.setFieldError("otpForgot", "OTP does not match")
          }
        })
      } else {
        formikRef.setFieldTouched("otpForgot", true, false)
        formikRef.setFieldError("otpForgot", "OTP does not match")
      }
    }
    return errors
  }

  //handle submit function for form submittion
  const handleSubmit = (values, formikbag) => {
    if (otp !== "verified") {
      formikbag.setFieldError(
        "mobileOrEmailUser",
        "Please confirm mobile or email"
      )
    } else {
      formikbag.setFieldError("mobielOrEmailUser", "")
      formikbag.setSubmitting("true")
      axios
        .put(`${BASE_ROUTE}/resetpwd`, {
          mode: "web",
          identifier: values.mobileOrEmailUser,
          servicename: "resetpwd",
          password: `${values.signUpPass1}`,
        })
        .then((res) => {
          if (res.data.Message === RESET_PASSWORD_COMPLETE) {
            loginChanger.changeSize("20")
            formikbag.setSubmitting("false")
            goto("successfulReset")
          }
        })
        .catch((error) => {
          formikbag.setFieldError("mobileOrEmailUser", OTP_NOT_VERIFIED)
        })
    }
  }

  return (
    <>
      <div className="w-full text-center  p-0 md:p-2 md:pb-0">
        <h2 className="text-2xl ">Forgot Your Password?</h2>
        <p className="text-gray-500 p-0 md:px-2">
          Enter your Email or Mobile and we’ll help you reset your password
        </p>
      </div>
      <Formik
        initialValues={{ ...initialFormValues }}
        validate={validateForm}
        onSubmit={handleSubmit}
        innerRef={formRef}>
        {(formik) => (
          <Form className="grid grid-cols-6 gap-1 p-0 md:p-2 items-center">
            <span className="col-span-full text-xs text-center h-3 ">
              <ErrorMessage name="mobileOrEmailUser" />
            </span>
            <label
              htmlFor="mobileOrEmailUser"
              className="text-sm col-span-2 text-gray-primary">
              Mobile No
            </label>
            <div className="flex col-span-4 rounded">
              <NumberInput
                name="mobileOrEmailUser"
                val={formik.values.mobileOrEmailUser}
                numbersOnly={false}
                dis={otp === "verified" || otp === "sent" ? true : false}
                Id="mobileOrEmailUser"
                blur={() => formik.setFieldTouched("mobileOrEmailUser")}
                fieldClasses="border border-pink-primary w-full"
                change={(value) =>
                  formik.setFieldValue("mobileOrEmailUser", value, true)
                }
              />

              <button
                className="h-[34px] px-1 bg-pink-primary text-white disabled:bg-gray-600 rounded"
                disabled={
                  isValidEmailOrMobile(formik.values.mobileOrEmailUser) ===
                    "none" && formik.values.mobileOrEmailUser != ""
                    ? false
                    : true
                }
                onClick={
                  otp !== "unsent"
                    ? () => {
                        reset()
                        setOtp("unsent")
                      }
                    : () => sendOtp(formik.values.mobileOrEmailUser, formik)

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
                  <NumberInput
                    Id="otpForgot"
                    name="otpForgot"
                    iType="tel"
                    maxlen={6}
                    numbersOnly={true}
                    val={formik.values.otpForgot}
                    fieldClasses="border border-pink-primary focus-within:border-blue-500 focus-within:border-2 w-24"
                    change={(value) =>
                      formik.setFieldValue("otpForgot", value, true)
                    }
                    blur={formik.handleBlur}
                  />
                  {/* <Field
                    name="otpForgot"
                    className="border border-pink-primary rounded h-full w-1/4"
                    type="tel"
                  /> */}
                  <>
                    {otp === "sent" ? (
                      time !== 0 ? (
                        <span className="mx-auto leading-[34px] ">
                          {`${Math.floor(time / 60)}:${time % 60}`}
                        </span>
                      ) : (
                        <button
                          className="hover:bg-pink-primary hover:text-white border border-pink-primary rounded text-xs px-1 mx-1 h-[34px]"
                          onClick={() =>
                            resendOtp(formik.values.mobileOrEmailUser, formik)
                          }>
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
            <div className="flex relative col-span-4 h-[34px] rounded mb-1">
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
              disabled={formik.isSubmitting}
              type="submit">
              {formik.isSubmitting ? "Please wait..." : "Submit"}
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

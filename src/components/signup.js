import React, { useState, useRef, useEffect } from "react"
import Checkbox from "react-custom-checkbox"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Link } from "react-router-dom"
import { useTimer } from "use-timer"
import { NumberInput } from "./numberInput"

export const SignUp = ({ goto = () => console.log("login") }) => {
  const [values, setValues] = useState({
    showPassword: false,
    showPassword2: false,
  })

  const [checkboxError, setCheckboxError] = useState("none")
  const [checkbox, setCheckbox] = useState(false)
  const checkboxRef = useRef(false)
  // call it at each render

  useEffect(() => {
    console.log(checkboxRef.current === checkbox)
    console.log(checkboxRef.current)
    if (checkboxRef.current !== checkbox) {
      if (checkbox === false) {
        setCheckboxError("Please Agree to terms and conditions")
      }
    } else {
      setCheckboxError("none")
    }
  }, [checkbox])

  const formRef = useRef("")
  const [emailOtp, setEmailOtp] = useState(0)
  const [phoneOtp, setPhoneOtp] = useState(0)
  const [emailOtpStatus, setEmailOtpStatus] = useState("unsent")
  const [phoneOtpStatus, setPhoneOtpStatus] = useState("unsent")

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
  const help = (value) => {
    console.error(value)
  }
  const setCheckboxFunction = () => {
    checkboxRef.current = true
    setCheckbox(!checkbox)
  }

  const {
    time: emailTime,
    start: emailTimeStart,
    reset: emailTimeReset,
  } = useTimer({
    initialTime: 60,
    endTime: 0,
    timerType: "DECREMENTAL",
  })

  const {
    time: phoneTime,
    start: phoneTimeStart,
    reset: phoneTimeReset,
  } = useTimer({
    initialTime: 60,
    endTime: 0,
    timerType: "DECREMENTAL",
  })

  const askOtp = (type) => {
    console.log("called askOtp")
    let generatedOtpEmail = 0

    let generatedOtpPhone = 0

    if (type === "email") {
      generatedOtpEmail =
        Math.random() * 6 + Math.random() * 6 * 10 + Math.random() * 6 * 100
      generatedOtpEmail = Math.floor(generatedOtpEmail)
      console.dir("otpEmail", generatedOtpEmail)
      //setting otp email
      setEmailOtp(generatedOtpEmail)
    } else if (type === "mobile") {
      generatedOtpPhone =
        Math.random() * 6 + Math.random() * 6 * 10 + Math.random() * 6 * 100
      generatedOtpPhone = Math.floor(generatedOtpPhone)

      //setting otp mobile
      console.log("otpMobile", generatedOtpPhone)
      setPhoneOtp(generatedOtpPhone)
    }
  }

  const sendOtpEmail = () => {
    let formikRef = formRef.current
    formikRef.setFieldTouched("emailUser")
    formikRef.validateField("emailUser")

    console.log(formikRef)
    if (
      (formikRef.errors.emailUser === "" ||
        formikRef.errors.emailUser === undefined) &&
      formikRef.values.emailUser !== ""
    ) {
      askOtp("email")
      setEmailOtpStatus("sent")
      emailTimeStart()
    }
  }

  const sendOtpPhone = () => {
    let formikRef = formRef.current
    formikRef.setFieldTouched("mobileUser")
    formikRef.validateField("mobileUser")

    console.log(formikRef)
    if (
      (formikRef.errors.mobileUser === "" ||
        formikRef.errors.mobileUser === undefined) &&
      formikRef.values.mobileUser !== ""
    ) {
      askOtp("mobile")
      setPhoneOtpStatus("sent")
      phoneTimeStart()
    }
  }

  const resendPhoneOtp = () => {
    phoneTimeReset()
    askOtp("mobile")
    phoneTimeStart()
  }

  const resendEmailOtp = () => {
    emailTimeReset()
    askOtp("email")
    emailTimeStart()
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  let initialFormValues = {
    NameUser: "",
    emailUser: "",
    mobileUser: "",
    signUpPass1: "",
    signUpPass2: "",
    otpEmail: "",
    otpPhone: "",
  }
  const validateFormSignUp = (values) => {
    const errors = {}
    let numberAsString
    let formikRef = formRef.current
    const EMAIL_REGEX =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!values.NameUser) {
      errors.NameUser = "Name can't be empty"
    }
    if (!values.emailUser) {
      errors.emailUser = "email can't be empty"
    }
    if (!values.mobileUser) {
      errors.mobileUser = "mobile no can't be empty"
    }
    if (!values.signUpPass1) {
      errors.signUpPass1 = "passwords cannot be empty"
    }
    if (!values.signUpPass2) {
      errors.signUpPass2 = "passwords cannot be empty"
    }
    if (checkPassword(values.signUpPass1) !== "none") {
      errors.signUpPass1 = checkPassword(values.signUpPass1)
    }

    if (checkPassword(values.signUpPass2) !== "none") {
      errors.signUpPass2 = checkPassword(values.signUpPass2)
    }

    if (values.signUpPass1 !== values.signUpPass2) {
      errors.signUpPass2 = "passwords don't match"
    }
    if (isNaN(parseInt(values.mobileUser)) === false) {
      numberAsString = Number(values.mobileUser).toString()
      if (
        numberAsString[0] !== "6" &&
        numberAsString[0] !== "7" &&
        numberAsString[0] !== "8" &&
        numberAsString[0] !== "9"
      ) {
        errors.mobileUser = "invalid mobile no"
      } else if (numberAsString.length < 10 || numberAsString.length > 10) {
        errors.mobileUser = "invalid mobile no length"
      }
    } else {
      errors.mobileUser = "invalid Mobile no"
    }

    //otp moobile section
    if (
      typeof values.otpPhone !== "undefined" &&
      phoneOtpStatus !== "verified"
    ) {
      if (values.otpPhone == phoneOtp && values.otpPhone !== "") {
        console.log("ran ")
        setPhoneOtpStatus("verified")
        formikRef.setFieldValue("otpPhone", "")
        phoneTimeReset()
      } else {
        if (
          formikRef.touched.otpPhone === true &&
          phoneOtpStatus != "verified"
        ) {
          errors.otpPhone = "otp does not match"
        }
      }
    } else {
      if (formikRef.errors.otpPhone !== "") {
        errors.otpPhone = ""
      }
    }

    //errors related to email
    if (values.emailUser.match(EMAIL_REGEX) === null) {
      errors.emailUser = "enter a valid email"
    }

    //otp email section
    if (
      typeof values.otpEmail !== "undefined" &&
      emailOtpStatus !== "verified"
    ) {
      if (values.otpEmail == emailOtp && values.otpEmail !== "") {
        setEmailOtpStatus("verified")
        formikRef.setFieldValue("otpEmail", "")
        emailTimeReset()
      } else {
        if (formikRef.touched.otpEmail === true) {
          errors.otpEmail = "otp does not match"
        }
      }
    } else {
      if (formikRef.errors.otpEmail !== "") {
        errors.otpEmail = ""
      }
    }
    return errors
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

  return (
    <Formik
      initialValues={{ ...initialFormValues }}
      validate={validateFormSignUp}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        console.log(checkbox === false)
        if (checkbox === false) {
          checkboxRef.current = true
          setCheckboxError("Please Agree to terms and conditions")
        } else if (phoneOtpStatus !== "verified") {
          formRef.current.setFieldError("mobileUser", "Please Verify Mobile")
        } else if (emailOtpStatus !== "verified") {
          formRef.current.setFieldError("emailUser", "Please Verify Mobile")
        } else {
          help(values)
        }
      }}
      innerRef={formRef}>
      {(formik) => (
        <Form className="grid grid-cols-6 gap-1 items-center p-0 md:p-3 lg:p-4">
          <span className="col-span-full text-base text-center text-gray-600">
            Looks like you're new here!
          </span>

          <span className="col-span-full text-xs text-center h-3">
            <ErrorMessage name="NameUser" />
          </span>
          <label
            htmlFor="NameUser"
            className="text-sm min-w-max col-span-2 text-gray-primary">
            Name
          </label>
          <div className="flex relative col-span-4 h-[34px] rounded">
            <Field
              name="NameUser"
              className="flex-1 border border-pink-primary h-full rounded px-2 w-full"
              type="text"
            />
          </div>

          <span className="col-span-full text-xs text-center h-3">
            <ErrorMessage name="emailUser" />
          </span>

          <label
            htmlFor="emailUser"
            className="text-sm col-span-2 text-gray-primary ">
            Email
          </label>
          <div className="flex col-span-4 rounded">
            {/* {console.log(formik)} */}

            <Field
              name="emailUser"
              disabled={
                emailOtpStatus === "verified" || emailOtpStatus === "sent"
                  ? true
                  : false
              }
              className="w-full border border-pink-primary rounded px-2  disabled:bg-gray-100 disabled:text-black"
              type="text"
            />

            <button
              className="h-[34px] px-1 bg-pink-primary text-white disabled:bg-gray-600 rounded text-[13px]"
              disabled={emailOtpStatus === "sent" ? true : false}
              onClick={
                emailOtpStatus === "verified"
                  ? () => setEmailOtpStatus("unsent")
                  : () => sendOtpEmail()
              }
              type="button">
              {emailOtpStatus === "verified" ? (
                <i className="fa-regular fa-pen-to-square text-white w-5 "></i>
              ) : (
                "OTP"
              )}
            </button>
          </div>

          {emailOtpStatus === "verified" ||
          emailOtpStatus === "unsent" ? null : (
            <>
              <span className="col-span-full text-center text-xs h-3">
                <ErrorMessage name="otpEmail" />
              </span>
              <div className="col-span-full flex h-[34px]">
                <label
                  htmlFor="otpEmail"
                  className="text-sm w-1/3 text-gray-primary">
                  OTP
                </label>
                <Field
                  name="otpEmail"
                  className="border border-pink-primary rounded h-full w-1/4 px-2 "
                  type="tel"
                />
                <>
                  {emailOtpStatus === "sent" ? (
                    emailTime !== 0 ? (
                      <span className="mx-auto leading-[34px] ">
                        {`${Math.floor(emailTime / 60)}:${emailTime % 60}`}
                      </span>
                    ) : (
                      <button
                        className="hover:bg-pink-primary hover:text-white border border-pink-primary rounded text-xs px-1 mx-1"
                        onClick={resendEmailOtp}>
                        Resend OTP
                      </button>
                    )
                  ) : null}
                </>
              </div>
            </>
          )}

          {/* phone user section starts */}
          <span className="col-span-full text-xs text-center h-3">
            <ErrorMessage name="mobileUser" />
          </span>

          <label
            htmlFor="mobileUser"
            className="text-xs  col-span-2 text-gray-primary">
            Mobile
          </label>
          <div className="flex col-span-4 rounded">
            <NumberInput
              name="mobileUser"
              val={formik.values.mobileUser}
              dis={
                phoneOtpStatus === "verified" || phoneOtpStatus === "sent"
                  ? true
                  : false
              }
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
              className="h-[34px] px-1 bg-pink-primary text-white  rounded text-[13px]"
              disabled={phoneOtpStatus === "sent" ? true : false}
              onClick={
                phoneOtpStatus === "verified"
                  ? () => setPhoneOtpStatus("unsent")
                  : () => sendOtpPhone()
              }
              type="button">
              {phoneOtpStatus === "verified" ? (
                <i className="fa-regular fa-pen-to-square text-white w-5 "></i>
              ) : (
                "OTP"
              )}
            </button>
          </div>
          {phoneOtpStatus === "verified" ||
          phoneOtpStatus === "unsent" ? null : (
            <>
              <span className="col-span-full text-center text-xs h-3">
                <ErrorMessage name="otpPhone" />
              </span>
              <div className="col-span-full flex h-[34px]">
                <label
                  htmlFor="otpPhone"
                  className="text-sm w-1/3 text-gray-primary">
                  OTP
                </label>
                <Field
                  name="otpPhone"
                  className="border border-pink-primary rounded h-full w-1/4 px-2"
                  type="tel"
                />
                <>
                  {phoneOtpStatus === "sent" ? (
                    phoneTime !== 0 ? (
                      <span className="mx-auto leading-[34px] ">
                        {`${Math.floor(phoneTime / 60)}:${phoneTime % 60}`}
                      </span>
                    ) : (
                      <button
                        className="hover:bg-pink-primary hover:text-white border border-pink-primary rounded text-xs px-1 mx-1"
                        onClick={resendPhoneOtp}>
                        Resend Otp
                      </button>
                    )
                  ) : null}
                </>
              </div>
            </>
          )}
          {/* phone user section ends */}

          <span className="col-span-full text-xs text-center h-3">
            <ErrorMessage name="signUpPass1" />
          </span>
          <label
            htmlFor="signUpPass1"
            className="text-sm  col-span-2 text-gray-primary">
            Password
          </label>
          <div className="flex relative col-span-4 h-[34px]">
            <Field
              name="signUpPass1"
              className="flex-1 border border-pink-primary h-full rounded px-2 w-full"
              type={values.showPassword === true ? "text" : "password"}
            />

            <button
              className="w-8 absolute right-0 top-0 bottom-0  flex items-center justify-center rounded"
              type="button">
              <i
                className={`fa-solid  text-sm ${
                  values.showPassword ? "fa-eye" : "fa-eye-slash "
                } `}
                onClick={handleClickShowPassword}></i>
            </button>
          </div>

          <span className="col-span-full text-xs text-center h-3">
            <ErrorMessage name="signUpPass2" />
          </span>
          <label
            htmlFor="signUpPass2"
            className="text-sm min-w-max col-span-2 text-gray-primary">
            Re password
          </label>
          <div className="flex relative col-span-4 h-[34px] rounded">
            <Field
              name="signUpPass2"
              className="flex-1 border border-pink-primary h-full rounded px-2 w-full"
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

          <div className="flex flex-col col-span-full text-center py-2 ">
            <span className="col-span-full text-xs text-center h-3">
              {checkboxError === "none" ? null : checkboxError}
            </span>
            <div className="mx-auto flex">
              <Checkbox
                borderColor="#f5317c"
                icon={
                  <i className="fa-solid fa-square-check text-pink-600"></i>
                }
                id="agree"
                name="agree"
                // value={formRef.current.agree}
                checked={checkbox}
                onChange={() => setCheckboxFunction()}
              />
              <p className="text-gray-primary text-sm">
                &nbsp; I agree to the &nbsp;
                <Link to="/terms" className="text-pink-primary">
                  Terms
                </Link>
                &nbsp; and
                <Link to="/privacypolicy" className="text-pink-primary">
                  &nbsp; Privacy Policy
                </Link>
              </p>
            </div>
          </div>
          <button
            className="h-[34px] px-1 bg-pink-primary text-white col-span-full rounded"
            type="submit">
            Submit
          </button>

          <div className="flex col-span-full text-center py-2 ">
            <p className="mx-auto text-gray-primary text-center text-sm">
              Already have an account&nbsp;
              <span
                className="text-pink-primary text-center text-sm cursor-pointer"
                onClick={() => goto("login")}>
                Log in
              </span>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  )
}

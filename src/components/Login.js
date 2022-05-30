import React, { useRef, useContext, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { remember } from "../app/features/LoginSlice"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Checkbox from "react-custom-checkbox"
import axios from "axios"
import { LoginModalContext } from "./userpages/loginModal"
import { BASE_ROUTE } from "./routes"
import { motion } from "framer-motion"

export const Login = ({ goto = () => console.log("forgotPass"), userAuth }) => {
  const [value, setValues] = React.useState({
    showPassword: false,
  })
  const changeSize = useContext(LoginModalContext)
  useEffect(() => {
    changeSize.changeSize("30")
  }, [])
  const ref = useRef("")
  let initialFormValues = {
    username: "",
    passwd: "",
    rememberMe: false,
  }
  const [bolder, setBolder] = useState(false)

  const validateForm = (values) => {
    const errors = {}
    let numberAsString
    const EMAIL_REGEX =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!values.username) {
      errors.username = "email or mobile can't be empty"
    } else {
      if (isNaN(parseInt(values.username)) === false) {
        numberAsString = new Number(values.username).toString()

        if (
          numberAsString[0] !== "6" &&
          numberAsString[0] !== "7" &&
          numberAsString[0] !== "8" &&
          numberAsString[0] !== "9"
        ) {
          errors.username = "invalid mobile no"
        } else if (numberAsString.length < 10 || numberAsString.length > 10)
          errors.username = "invalid mobile no length"
      } else if (values.username.match(EMAIL_REGEX) === null) {
        errors.username = "enter a valid email"
      }
    }

    if (!values.passwd) {
      errors.passwd = "password can't be empty"
    }
    if (bolder) {
      setBolder(false)
    }
    return errors
  }

  const handleClickShowPassword = () => {
    setValues({
      ...value,
      showPassword: !value.showPassword,
    })
  }

  //fuction for asking for
  const doLoginAndAskOTP = (username, pass) => {
    let response = ""
    response = axios
      .post(`${BASE_ROUTE}/login`, {
        identifier: username,
        password: pass,
        servicename: "loginusr",
        mode: "web",
      })
      .then((res) => res)
      .catch((error) => error.response)
    return response
  }

  const handleSunmit = (values, { setSubmitting, setFieldError }) => {
    setSubmitting(false)

    doLoginAndAskOTP(values.username, values.passwd).then((resp) => {
      console.log(resp)
      if (resp.status == 200) {
        userAuth.setUsernameUser(values.username)
        userAuth.setPassword(values.passwd)
        goto("twoFactorAuth")
      } else {
        setBolder(true)
        setFieldError("username", "wrong credentials")
      }
    })
  }

  const dispatch = useDispatch()

  return (
    <motion.div
      className="h-[17rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <Formik
        initialValues={{ ...initialFormValues }}
        validate={validateForm}
        innerRef={ref}
        onSubmit={handleSunmit}>
        <Form className="grid grid-cols-6 gap-2 items-center p-0 md:p-2">
          <span className="col-span-full text-base text-center text-gray-600">
            We are glad to see you again!
          </span>
          <span
            className={`col-span-full relative -top-1 ${
              bolder ? "text-xl" : "text-sm"
            } text-center h-4 text-red-error`}>
            <ErrorMessage name="username" />
          </span>
          <label
            htmlFor="username"
            className="text-sm min-w-max col-span-2 text-gray-primary">
            Mobile/Email
          </label>
          <div className="flex relative col-span-4 h-[34px] rounded">
            <Field
              name="username"
              className="flex-1 border border-pink-primary h-full rounded px-2 w-full"
              type="text"
            />
          </div>

          <span className="col-span-full text-sm text-center h-3 text-red-error">
            <ErrorMessage name="passwd" />
          </span>
          <label
            htmlFor="passwd"
            className="text-sm  col-span-2 text-gray-primary">
            Password
          </label>
          <div className="flex relative col-span-4 h-[34px]">
            <Field
              name="passwd"
              className="flex-1 border border-pink-primary h-full rounded px-2 w-full"
              type={value.showPassword === true ? "text" : "password"}
            />

            <button
              className="w-8 absolute right-0 top-0 bottom-0  flex items-center justify-center rounded"
              type="button">
              <i
                className={`fa-solid  text-sm ${
                  value.showPassword ? "fa-eye" : "fa-eye-slash "
                } `}
                onClick={handleClickShowPassword}></i>
            </button>
          </div>

          <div className="flex items-center col-span-full pl-1">
            {/* remember me chackbox */}
            <Checkbox
              borderColor="#f5316c"
              icon={<i className="fa-solid fa-square-check text-pink-601"></i>}
              onClick={() => dispatch(remember())}
              // {...formik.getFieldProps("rememberMe")}
              id="rememberMe"
              name="rememberMe"
            />
            {/* remember me label */}
            <label
              htmlFor="rememberMe"
              className="mr-auto ml-3 text-gray-primary text-sm">
              Remember Me
            </label>
            {/* forgot passwork link */}
            <span
              tabIndex={-1}
              className="inline-block text-primary cursor-pointer text-sm"
              onClick={() => goto("forgotPass")}>
              Forgot Password?
            </span>
          </div>
          {/*forgot password and rememer me end */}

          {/* login button */}
          <button
            className="h-[34px] px-1 bg-pink-primary text-white col-span-full rounded active:bg-pink-900"
            type="submit">
            Login
          </button>
          {/* login button end */}

          {/* additional sign up prompt  */}
          <div className="mt-1 text-black text-center col-span-full text-sm py-1">
            Not having account, Please &nbsp;
            <a className="text-primary" href="#" onClick={() => goto("signUp")}>
              Sign Up
            </a>
          </div>
        </Form>

        {/* password end */}

        {/*forgot password and rememer me  */}
        {/* additional sign up prompt  end*/}
      </Formik>
    </motion.div>
  )
}

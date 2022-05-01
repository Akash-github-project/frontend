import React, { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loginId, password, remember } from "../app/features/LoginSlice"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Checkbox from "react-custom-checkbox"
import { useMediaQuery } from "@mui/material"
import { NumberInput } from "./numberInput"

export const Login = ({ goto = () => console.log("forgotPass") }) => {
  const screen = useMediaQuery("(min-width:)")
  const [value, setValues] = React.useState({
    showPassword: false,
  })

  const ref = useRef("")
  let initialFormValues = {
    username: "",
    passwd: "",
    rememberMe: false,
  }

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

    return errors
  }

  const handleClickShowPassword = () => {
    setValues({
      ...value,
      showPassword: !value.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const dispatch = useDispatch()

  return (
    <>
      <Formik
        initialValues={{ ...initialFormValues }}
        validate={validateForm}
        innerRef={ref}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false)
          console.log(values)
          return
        }}>
        <Form className="grid grid-cols-6 gap-2 items-center p-0 md:p-3 lg:p-4">
          <span className="col-span-full text-base text-center text-gray-600">
            We are glad to see you again!
          </span>
          <span className="col-span-full text-xs text-center h-3">
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

          <span className="col-span-full text-xs text-center h-3">
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

          <div className="flex items-center col-span-full">
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
            className="h-[34px] px-1 bg-pink-primary text-white col-span-full rounded"
            type="submit">
            Login
          </button>
          {/* login button end */}

          {/* additional sign up prompt  */}
          <div className="mt-2 text-black text-center col-span-full text-sm py-2">
            Not having account, Please &nbsp;
            <a className="text-primary" href="#" onClick={() => goto("signUp")}>
              Sign Up
            </a>
          </div>
        </Form>
        {/* {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="px-1 py-1 mx-1 mt-4 text-left">
              <div className="mt-4 w-full "> */}
        {/* username */}
        {/* {formik.errors.username && formik.touched.username ? (
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
                </div> */}
        {/* username end*/}
        {/* password */}

        {/* {formik.errors.passwd && formik.touched.passwd ? (
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
                          edge="end">
                          {value.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div> */}
        {/* password end */}

        {/*forgot password and rememer me  */}
        {/* additional sign up prompt  end*/}
      </Formik>
    </>
  )
}

import React, { useRef, useContext, useEffect } from "react"
import Button from "../button"
import { useTimer } from "use-timer"
import { Input } from "../input"
import { ModalContext } from "../../App"
import { Formik, Form, ErrorMessage } from "formik"
import axios from "axios"
import { BASE_ROUTE } from "../routes"
import { useDispatch } from "react-redux"
import {
  setJwtAndAuth,
  changeUserLoginState,
  userId,
} from "../../app/features/loginManager"
import { useLoginModal } from "./useLoginModal"
import { motion } from "framer-motion"
import { getClientIpAddress } from "../../Auth/AuthFunctions"
import { getUserAgent } from "../../Auth/UserAgentParser"

const TwoFactorOtp = ({ goto = () => console.log("presed"), userAuth }) => {
  const toogle = useContext(ModalContext)
  const dispatch = useDispatch()
  const formRef = useRef("")
  const { close } = useLoginModal()
  const initialValues = {
    otpValue: "",
  }

  const timer = useTimer({
    initialTime: 60,
    endTime: 0,
    timerType: "DECREMENTAL",
  })

  useEffect(() => {
    timer.start()
  }, [])

  const askOtp = async () => {
    let response = ""
    response = axios
      .post(`${BASE_ROUTE}/login`, {
        identifier: userAuth.usernameUser,
        password: userAuth.passwordUser,
        servicename: "loginusr",
        mode: "web",
      })
      .then((res) => res)
      .catch((error) => error.response)
    return response
  }

  const submitOtp = async (values) => {
    let userAgent = getUserAgent()
    let response = ""
    response = getClientIpAddress().then(async (ipClient) => {
      return axios
        .post(`${BASE_ROUTE}/nextlogin`, {
          identifier: userAuth.usernameUser,
          otp: values.otpValue,
          servicename: "loginusr",
          ipaddress: ipClient,
          Browserinfo: userAgent.Browserinfo,
          Deviceinfo: userAgent.Deviceinfo,
          mode: "web",
        })
        .then((res) => res)
        .catch((error) => error.response)
    })

    return response
  }

  const handleSubmit = (values, formikbag) => {
    console.log(values)
    submitOtp(values).then((res) => {
      console.log(res.status)
      if (res.status === 200) {
        dispatch(setJwtAndAuth(res.data))
        dispatch(changeUserLoginState(true))
        dispatch(userId(res.data.Username))
        toogle.toggleMenu()
        close()
      } else {
        formikbag.setFieldError("otpValue", "invalid otp")
      }
    })
  }

  const resendOtp = () => {
    askOtp().then((resp) => {
      console.log(resp)
      if (resp.status === 200) {
        formRef.current.setFieldError("otpValue", "")
        timer.reset()
        timer.start()
      } else {
        formRef.current.setFieldError("otpValue", "some error happened")
      }
    })
  }

  const validate = (values) => {
    const errors = {}
    if (values.otpValue.length < 6) {
      errors.otpValue = "Invalid Otp"
    }
    return errors
  }
  return (
    <motion.div
      className="h-[17rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <Formik
        initialValues={initialValues}
        validate={validate}
        innerRef={formRef}
        onSubmit={handleSubmit}>
        {(formik) => (
          <Form className="h-[17rem]">
            <div className="w-full flex h-[15rem] flex-col">
              <div className="flex flex-1 flex-col gap-2 ">
                <div className="w-full text-center text-sm mt-auto text-red-error">
                  <ErrorMessage name="otpValue" />
                </div>
                <Input
                  numbersOnly={true}
                  name="otpValue"
                  Id="otpValue"
                  holder="Enter OTP"
                  maxlen={6}
                  val={formik.values.otpValue}
                  extraClasses="max-w-[10rem] mx-auto "
                  change={(value) =>
                    formik.setFieldValue("otpValue", value, true)
                  }
                  blurFunction={formik.handleBlur}
                />
                <div className="w-full ">
                  {timer.time !== 0 ? (
                    <>
                      If not receive OTP in
                      {Math.floor(timer.time / 60)}:{timer.time % 60} sec
                    </>
                  ) : (
                    <>
                      <a
                        href="#"
                        className="text-pink-primary text-sm"
                        onClick={() => resendOtp()}>
                        Resend OTP
                      </a>
                      {/* <Button text="resend otp" click={() => resendOtp()} /> */}
                    </>
                  )}
                </div>
                <div className="w-full ">
                  <Button
                    text="submit"
                    type="submit"
                    exClasses="w-full active:bg-pink-900"
                  />
                </div>
              </div>
              <div className="text-center">
                <span onClick={() => goto("login")} className="cursor-pointer">
                  Back to Login
                </span>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </motion.div>
  )
}

export default TwoFactorOtp

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
  userId,
  changeUserLoginState,
} from "../../app/features/loginManager"
import { useLoginModal } from "./useLoginModal"

const TwoFactorOtp = ({ goto = () => console.log("presed") }) => {
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

  const handleSubmit = (values, formikbag) => {
    console.log(values)
    axios
      .post(`${BASE_ROUTE}/nextlogin`, {
        identifier: sessionStorage.getItem("id"),
        otp: values.otpValue,
        servicename: "loginusr",
        mode: "web",
      })
      .then((res) => {
        if (res.data !== null && res.data !== undefined) {
          dispatch(setJwtAndAuth(res.data))
          dispatch(changeUserLoginState(true))
          sessionStorage.removeItem("id")
          toogle.toggleMenu()
          close()
        }
      })
      .catch((error) => {
        formikbag.setFieldError("otpValue", "invalid otp")
      })
  }

  const resendOtp = () => {
    timer.reset()
    timer.start()
  }

  const validate = (values) => {
    const errors = {}
    if (values.otpValue.length < 6) {
      errors.otpValue = "Invalid Otp"
    }
    return errors
  }
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      innerRef={formRef}
      onSubmit={handleSubmit}>
      {(formik) => (
        <Form>
          <div className="w-full flex flex-col">
            <div className="flex flex-col gap-2">
              <div className="w-full text-gray-primary">
                Enter OTP send to your mobile number
              </div>
              <Input
                numbersOnly={true}
                name="otpValue"
                Id="otpValue"
                holder="Enter OTP"
                maxlen={6}
                val={formik.values.otpValue}
                change={(value) =>
                  formik.setFieldValue("otpValue", value, true)
                }
                blurFunction={formik.handleBlur}
              />
              <span className="col-span-full text-xs text-center h-3">
                <ErrorMessage name="otpValue" />
              </span>
              <div className="w-full ">
                {timer.time !== 0 ? (
                  <>
                    If not receive OTP in
                    {Math.floor(timer.time / 60)}:{timer.time % 60} sec
                  </>
                ) : (
                  <>
                    <Button text="resend otp" click={() => resendOtp()} />
                  </>
                )}
              </div>
              <div className="w-full ">
                <Button text="submit" type="submit" exClasses="w-full" />
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
  )
}

export default TwoFactorOtp

import React, { useState, useRef } from "react"
import { Formik, Form, ErrorMessage } from "formik"
import PasswordModal from "../../modals/passwordModal"
import { useTimer } from "use-timer"
import Button from "../../button"
import { Input } from "../../input"
import axios from "axios"
import { BASE_ROUTE } from "../../routes"
import { isValidMobileNo } from "../../usefullFunctions"
import { OTP_SUCCESS, SUCCESS } from "../../constants"
import { useSelector } from "react-redux"
import { useRequestWithAuth } from "../../customHooks/useRequestWithAuth"

const ChangeMobile = ({
  closeModal = () => {},
  open = false,
  callback = () => {},
}) => {
  const [otpStatus, setOtpStatus] = useState("unsent")
  const { postRequsetWithAuth } = useRequestWithAuth()
  const formRef = useRef("")
  const timer = useTimer({
    initialTime: 60,
    endTime: 0,
    timerType: "DECREMENTAL",
  })
  const userCurrentMobile = useSelector(
    (state) => state.userInfo.userInfo.mobile
  )
  const userNameUser = useSelector((state) => state.userInfo.userInfo.username)

  //stuff related to validation
  const initialValues = {
    currentMobile: "",
    newMobile: "",
    otpChangeMobile: "",
  }

  const validate = (values) => {
    const errors = {}
    if (isValidMobileNo(values.currentMobile) !== "none") {
      errors.currentMobile = isValidMobileNo(values.currentMobile)
    }

    if (isValidMobileNo(values.newMobile) !== "none") {
      errors.newMobile = isValidMobileNo(values.newMobile)
    }
    if (
      values.currentMobile === values.newMobile &&
      values.currentMobile !== ""
    ) {
      errors.newMobile = "Both new and old mobile can't be same"
    }

    if (otpStatus === "sent" && values.otpChangeMobile.length === 6) {
      matchPhoneOtp(values.otpChangeMobile, values.newMobile).then((res) => {
        console.log(res)
        if (res === true) {
          formRef.current.setFieldError("otpChangeMobile", "")
          formRef.current.setFieldValue("otpChangeMobile", "", false)
          formRef.current.setFieldTouched("otpChangeMobiel", false, false)
          setOtpStatus("verified")
          postRequsetWithAuth("user/changemobile", null, null, {
            newmobile: values.newMobile,
            mode: "web",
            username: userNameUser,
            servicename: "changemobile",
          })
          callback()
          closeModal()
        } else {
          formRef.current.setFieldError("otpChangeMobiel", "OTP does not match")
          formRef.current.setFieldTouched("otpChangeMobiel", true, false)
        }
      })
    } else {
      errors.otpChangeMobile = "OTP does not match"
    }
    return errors
  }

  const handleSubmit = (values) => {
    console.log(values)
  }

  //otp related section stsrts here

  const askOtp = async (value) => {
    let returnValue = ""

    returnValue = axios
      .post(
        `${BASE_ROUTE}/getotp`,
        {
          servicename: "changemobile",
          identifier: value,
          mode: "web",
        },
        {
          "Content-type": "text/json",
        }
      )
      .then((resp) => resp)
      .catch((error) => error.response)
    return returnValue
  }

  const sendOtp = (formik) => {
    askOtp(formik.values.newMobile).then((res) => {
      console.log(res)
      if (res.status === 400) {
        formik.setFieldError("newMobile", res.data.Message)
      } else if (res.status === 200) {
        formik.setFieldError("newMobile", "")
        setOtpStatus("sent")
        timer.reset()
        timer.start()
      }
    })
  }

  const otpBtnListener = (formik) => {
    if (otpStatus === "unsent") {
      sendOtp(formik)
    } else if (otpStatus === "sent") {
      formik.setFieldValue("otpChangeMobile", "", false)
      formik.setFieldTouched("otpChangeMobile", false, false)
      formik.setFieldError("otpChangeMobile", "")
      setOtpStatus("unsent")
    } else if (otpStatus === "verified") {
      setOtpStatus("unsent")
      formik.setFieldValue("otpChangeMobile", "", false)
      formik.setFieldTouched("otpChangeMobile", false, false)
      formik.setFieldError("otpChangeMobile", "")
    }
  }

  const matchPhoneOtp = async (value, mobile) => {
    if (value.length < 6) {
      return false
    } else {
      let ax = axios
        .put(`${BASE_ROUTE}/verifyotp`, {
          servicename: "changemobile",
          identifier: mobile,
          mode: "web",
          otp: value,
        })
        .then(
          (res) => res.data.Status == SUCCESS && res.data.Message == OTP_SUCCESS
        )
        .catch((error) => error.response.status === 200)
      return ax
    }
  }

  const isAllowedToEnableOtp = (oldMobile, newMobile) => {
    // return false
    if (
      isValidMobileNo(oldMobile) === "none" &&
      isValidMobileNo(newMobile) === "none"
    ) {
      if (oldMobile !== newMobile && userCurrentMobile === oldMobile) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  //otp related secton ends here
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
      innerRef={formRef}>
      {(formik) => (
        <Form>
          <div>
            <PasswordModal closeModal={() => closeModal(false)} open={open}>
              <div className="w-full h-full flex flex-col">
                <span className="text-gray-primary">Existing Mobile No</span>
                {/* current mobile number */}
                <Input
                  numbersOnly={true}
                  iType="tel"
                  Id="currentMobile"
                  dis={
                    otpStatus === "sent" || otpStatus === "verified"
                      ? true
                      : false
                  }
                  name="currentMobile"
                  val={formik.values.currentMobile}
                  change={(value) =>
                    formik.setFieldValue("currentMobile", value, true)
                  }
                  maxlen={10}
                  override={{ maxWidth: "100%" }}
                  extraClasses="text-gray-primary"
                />
                <span className="inline-block h-3  "></span>
                <span className="mt-2 text-gray-primary">New Mobile No</span>
                <div className="flex flex-col w-full">
                  {/* new mobile number */}
                  <div className="flex">
                    <Input
                      extraClasses="flex-1"
                      Id="newMobile"
                      maxlen={10}
                      dis={
                        otpStatus === "sent" || otpStatus === "verified"
                          ? true
                          : false
                      }
                      iType="tel"
                      numbersOnly={true}
                      name="newMobile"
                      val={formik.values.newMobile}
                      change={(values) =>
                        formik.setFieldValue("newMobile", values, true)
                      }
                      blurFunction={formik.handleBlur}
                    />
                    <Button
                      text={
                        otpStatus !== "unsent" ? (
                          <i className="fa-regular fa-pen-to-square text-white w-5 "></i>
                        ) : (
                          "OTP"
                        )
                      }
                      dis={
                        isAllowedToEnableOtp(
                          formik.values.currentMobile,
                          formik.values.newMobile
                        ) === true
                          ? false
                          : true
                      }
                      click={() => otpBtnListener(formik)}
                    />
                  </div>
                  <div className="h-3 text-sm text-red-error">
                    <ErrorMessage name="newMobile" />
                  </div>
                  {/* otp section */}
                  {otpStatus === "unsent" || otpStatus === "verified" ? null : (
                    <>
                      <div className="flex w-full gap-2 items-center">
                        <span className="mr-auto text-gray-primary">OTP</span>
                        <Input
                          extraClasses="w-24"
                          Id="otpChangeMobile"
                          numbersOnly={true}
                          maxlen={10}
                          iType="tel"
                          name="otpChangeMobile"
                          val={formik.values.otpChangeMobile}
                          change={(values) =>
                            formik.setFieldValue(
                              "otpChangeMobile",
                              values,
                              true
                            )
                          }
                          blurFunction={formik.handleBlur}
                        />
                        <span>
                          {timer.time === 0 ? (
                            <Button
                              click={() => sendOtp(formik)}
                              text="Resend OTP"
                            />
                          ) : (
                            `${Math.floor(timer.time / 60)}:${timer.time % 60}`
                          )}
                        </span>
                      </div>
                      <div className="h-3 text-sm text-red-error">
                        <ErrorMessage name="otpChangeMobile" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </PasswordModal>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ChangeMobile

import React, { useReducer } from "react"
import { useTimer } from "use-timer"
const useOtp = (match) => {
  const OTP_ERROR = {
    INVALID_NUMBER: 1,
    INVALID_LENGTH: 2,
    NO_OTP: 3,
    WRONG_OTP: -1,
    NONE: 0,
  }

  const timer = useTimer({
    initialTime: 60,
    endTime: 0,
    timerType: "DECREMENTAL",
  })

  const validateOtp = (value) => {
    if (value.toString().length === 0) {
      return {
        isError: true,
        message: "otp can't be empty",
        type: OTP_ERROR.NO_OTP,
      }
    } else if (isNaN(value)) {
      return {
        isError: true,
        message: "Enter a valid Number",
        type: OTP_ERROR.INVALID_NUMBER,
      }
    } else if (value.toString().length != 6) {
      return {
        isError: true,
        message: "invalid otp length",
        type: OTP_ERROR.INVALID_LENGTH,
      }
    } else {
      return { isError: false, message: "", type: OTP_ERROR.NONE }
    }
  }

  const resetError = () => {
    return {
      isError: false,
      message: "",
      type: OTP_ERROR.NONE,
    }
  }
  const reducer = (state, action) => {
    const temp = { ...state }
    let tempErr = {}
    switch (action.type) {
      case "edit":
        tempErr = validateOtp(action.payload)
        temp.value = action.payload
        if (tempErr.type === OTP_ERROR.NONE) {
          temp.error = resetError()
          temp.status =
            match(action.payload) === true ? "verified" : "incorrect"
          if (temp.status === "verified") {
            temp.value = ""
            temp.error = resetError()
          } else {
            temp.error.message = "otp incorrct"
            temp.error.type = OTP_ERROR.WRONG_OTP
            temp.error.isError = true
          }
        }
        break

      case "validate":
        tempErr = validateOtp(temp.value)
        if (tempErr.type === OTP_ERROR.NONE) {
          temp.status =
            match(action.payload) === true ? "verified" : "incorrect"

          if (temp.status === "incorrect") {
            tempErr.type = OTP_ERROR.WRONG_OTP
            tempErr.isError = true
            tempErr.message = "otp incorrct"
          }
          temp.error = { ...tempErr }
        }
        console.log(tempErr)
        temp.show = true
        temp.error = { ...tempErr }
        break
      case "sent":
        temp.status = "sent"
        timer.start()
        temp.error = resetError()
        break
      case "resent":
        temp.status = "resent"
        temp.error = resetError()
        timer.reset()
        timer.start()
        break
      case "unsent":
        temp.error = resetError()
        temp.status = "unsent"
        timer.reset()
        break

      case "verified":
        temp.error = resetError()
        timer.reset()
        temp.value = ""
        temp.status = "verified"
        break
      case "incorrct":
        temp.error.isError = true
        temp.error.message = "Otp does not match"
        temp.error.type = OTP_ERROR.WRONG_OTP
      default:
        console.log("wrong action type")
    }
    return { ...temp }
  }

  const initialState = {
    value: "",
    error: { isError: false, message: "", type: OTP_ERROR.NONE },
    show: false,
    status: "unsent",
  }

  const [state, dispatcher] = useReducer(reducer, initialState)

  return [state, dispatcher, timer]
}

export default useOtp

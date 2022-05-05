import React, { useEffect } from "react"
import Button from "./button"
import { NumberInput } from "./numberInput"
import useOtp from "./customHooks/useOtp"

const OtpInput = ({
  fun = (value) => "123456" === value,
  type = "text",
  val = "",
  change = (e) => console.log(e.target.value),
  error = "",
  runBlur = () => console.log("hello"),
  defLabel = "",
  statusOtp = (value) => console.log(value),
  valid = false,
  outer = "",
  firstRow = "",
  labelFirst = "",
  contactInput = "",
  otpBtn = "",
  errorStyle = "",
  otpInputStyle = "",
  timerSpan = "",
  resendBtn = "",
  otpErrorStyle = "",
  disOrNot = false,
}) => {
  const [state, dispatcher, timer] = useOtp((value) => fun(value))

  useEffect(() => {
    statusOtp(state.status)
  }, [state.status])

  //   onblur function for validation
  const setBlur = (value) => {
    var x = value
    dispatcher({ type: "validate", payload: (x) => fun(x) })
  }

  return (
    <div className={`flex flex-col ${outer}`}>
      <div className={`flex gap-1 flex-1 ${firstRow}`}>
        <span className={`p-1 ${labelFirst}`}>{defLabel}</span>
        <NumberInput
          numbersOnly={true}
          blur={(value) => runBlur(value)}
          maxlen={10}
          iType={type}
          fieldClasses={`border border-pink-primary focus-within:border-blue-500 focus-within:border-2 ${contactInput}`}
          dis={state.status !== "unsent"}
          val={val}
          change={(value) => change(value)}
        />
        <Button
          click={
            state.status === "unsent"
              ? () => dispatcher({ type: "sent" })
              : () => dispatcher({ type: "unsent" })
          }
          text={
            state.status === "unsent" ? (
              "OTP"
            ) : (
              <i class="fa-solid fa-pen-to-square text-white text-xl w-5"></i>
            )
          }
          dis={disOrNot}
          exClasses={`px-2 ${otpBtn}`}
        />
      </div>
      <div className={`w-full ${errorStyle}`}>{error}</div>
      {state.status === "unsent" || state.status === "verified" ? null : (
        <div className=" flex gap-3 m-1">
          <span className="">Otp</span>
          <NumberInput
            iType="text"
            maxlen={4}
            numbersOnly={true}
            change={(value) => dispatcher({ type: "edit", payload: value })}
            extraClasses="w-28"
            fieldClasses={`border-pink-600 focus:outline-none focus-within:border-blue-400 flex-1 min-h-[36px] w-full ${otpInputStyle}`}
            blurFunction={setBlur}
            blur={(value) => setBlur(value)}
            val={state.value}
          />

          {timer.time !== 0 ? (
            <span
              className={`mx-auto leading-[34px] inline-block p-1 ${timerSpan}`}>
              {`${Math.floor(timer.time / 60)}:${timer.time % 60}`}
            </span>
          ) : (
            <Button
              click={() => dispatcher({ type: "resent" })}
              exClasses={resendBtn}
              fClasses="text-pink-primary hover:text-white"
              override={{
                textColor: "white",
              }}
              text="Resend Otp"
            />
          )}
        </div>
      )}

      {state.show && state.error.isError ? (
        <div className={`block p-1 m-1 text-xs text-red-600 ${otpErrorStyle}`}>
          {state.error.message}
        </div>
      ) : null}
    </div>
  )
}

export default OtpInput

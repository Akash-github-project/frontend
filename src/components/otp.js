import React, { useEffect } from "react"
import Button from "./button"
import { Input } from "./input"
import { NumberInput } from "./numberInput"
import useOtp from "./customHooks/useOtp"

const OtpInput = ({
  fun = (value) => "123456" === value,
  type = "text",
  val = "",
  change = (e) => console.log(e.target.value),
  error = "",
  defLabel = "",
  statusOtp = (value) => console.log(value),
  valid = false,
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
    <div className="flex flex-col">
      <div className="flex gap-1 flex-1">
        <span className="p-1">{defLabel}</span>
        <NumberInput
          numbersOnly={true}
          maxlen={10}
          iType={type}
          fieldClasses="border border-pink-primary focus-within:border-blue-500 focus-within:border-2"
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
          // dis={
          //   valid === false ||
          //   state.status === "sent" ||
          //   state.status === "resent" ||
          //   state.status === "incorrect"
          //     ? true
          //     : false
          // }
          text={
            state.status !== "verified" ? (
              "OTP"
            ) : (
              <i class="fa-solid fa-pen-to-square text-white text-xl w-5"></i>
            )
          }
          exClasses="px-2"
        />
      </div>
      <div className="w-full">{error}</div>
      {state.status === "unsent" || state.status === "verified" ? null : (
        <div className=" flex gap-3 m-1">
          <span className="">Otp</span>
          <NumberInput
            iType="text"
            maxlen={4}
            numbersOnly={true}
            change={(value) => dispatcher({ type: "edit", payload: value })}
            extraClasses="w-28"
            blurFunction={setBlur}
            blur={(value) => setBlur(value)}
            val={state.value}
          />

          {timer.time !== 0 ? (
            <span className="mx-auto leading-[34px] inline-block p-1">
              {`${Math.floor(timer.time / 60)}:${timer.time % 60}`}
            </span>
          ) : (
            <Button
              click={() => dispatcher({ type: "resent" })}
              text="Resend Otp"
            />
          )}
        </div>
      )}

      {state.show && state.error.isError ? (
        <div className="block p-1 m-1">{state.error.message}</div>
      ) : null}
    </div>
  )
}

export default OtpInput

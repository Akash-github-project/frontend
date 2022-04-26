import React, { useState, useEffect } from "react"

const WithTextInput = ({
  text = "some text",
  textClick = () => console.log("text clicked"),
  placeholder = "placeholder",
  change = (e) => console.log(e.target.value),
  disable = false,
  blur = (e) => console.log(e.target.value),
  val,
  numbersOnly = false,
  maxlen = -1,
  exClasses = " ",
}) => {
  const handleChange = (e) => {
    let len = e.target.value.length
    if (numbersOnly) {
      if (maxlen != -1) {
        if (maxlen > 0 && len <= maxlen) {
          change(
            e.target.value.replace(/[^0-9]/g, "").replace(/(\..*?)\..*/g, "$1")
          )
        }
      } else {
        change(
          e.target.value.replace(/[^0-9]/g, "").replace(/(\..*?)\..*/g, "$1")
        )
      }
    } else {
      change(e.target.value)
    }
  }
  return (
    <div className="rounded w-full">
      <span
        className={`flex border border-pink-600 focus-within:border-blue-400  m-0 w-full relative rounded ${exClasses}`}
        tabIndex={0}>
        <input
          type="tel"
          className="border-0 w-full  m-0 outline-none p-[11px] rounded text-[13px] leading-[21px] h-[34px] text-gray-primary disabled:bg-gray-200"
          disabled={disable}
          required
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={blur}
          value={val}
        />

        {/* this <span> will be visible inside the input box so be careful before editing it */}
        <span
          className="absolute  underline capitalize right-1 mt-2 text-xs cursor-pointer hover:text-black hover:no-underline"
          onClick={() => textClick()}>
          {text}
        </span>
      </span>
    </div>
  )
}

export default WithTextInput

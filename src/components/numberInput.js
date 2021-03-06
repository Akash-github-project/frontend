import React from "react"

export const NumberInput = ({
  Id = " ",
  name = "",
  extraClasses = " ",
  fieldClasses = " ",
  holder = " ",
  iType = "text",
  req = false,
  change = () => console.log("hello"),
  blur = () => console.log("blur"),
  val,
  maxlen = -1,
  numbersOnly = true,
  onleft = " ",
  color = "gray",
  dis = false,
}) => {
  let defaultClasses =
    "border rounded-md text-black focus:text-red-400 border-0 w-full outline-none text-[16px] leading-[21px] disabled:bg-gray-200 focus:text-pink-primary "
  let defaultField = `flex border rounded items-center p-1 max-h-[36px] ${
    dis ? "bg-gray-200 " : ""
  }`

  if (extraClasses !== " ") {
    defaultClasses += extraClasses
  }

  if (fieldClasses !== " ") {
    defaultField += fieldClasses
  }

  function changeHandle(e) {
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

  function blurHandle(e) {
    blur(e.target.value)
  }
  return (
    <div className={defaultField} tabIndex={0}>
      <span
        className={`text-${color}-primary mr-1 inline-block w-[max-content] text-md text-bold leading-[21px] roboto `}>
        {onleft}
      </span>
      <input
        disabled={dis}
        type={iType}
        name={name}
        id={Id}
        placeholder={holder}
        required={req}
        value={val}
        onBlur={blurHandle}
        onChange={changeHandle}
        className={defaultClasses}
      />
    </div>
  )
}

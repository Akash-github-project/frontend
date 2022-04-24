import React from "react"

export const NumberInput = ({
  Id = " ",
  extraClasses = " ",
  fieldClasses = " ",
  holder = " ",
  iType = "text",
  change = () => console.log("hello"),
  blur = () => console.log("blur"),
  val,
  onleft = " ",
  color = "gray",
}) => {
  let defaultClasses =
    "border rounded-md text-black focus:text-red-400 border-0 w-full outline-none text-[16px] leading-[21px] "
  let defaultField = "flex border rounded items-center p-1 "

  if (extraClasses !== " ") {
    defaultClasses += extraClasses
  }

  if (fieldClasses !== " ") {
    defaultField += fieldClasses
  }

  function changeHandle(e) {
    change(e.target.value)
  }

  function blurHandle(e) {
    blur(e.target.value)
  }
  return (
    <div className={defaultField} tabIndex={0}>
      <span
        className={`text-${color}-primary mr-1 inline-block w-[max-content] text-md text-bold leading-[21px] roboto`}>
        {onleft}
      </span>
      <input
        type={iType}
        id={Id}
        placeholder={holder}
        value={val}
        onBlur={blurHandle}
        onChange={changeHandle}
        className={defaultClasses}
      />
    </div>
  )
}

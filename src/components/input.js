import React from "react"

export const Input = ({
  focusFunction = () => console.log("focused"),
  blurFunction = () => console.log("blured"),
  handleKeyPress = () => console.log("kayPressed"),
  Id = " ",
  extraClasses = " ",
  holder = " ",
  iType = "text",
  change = () => console.log("changed"),
  name = "",
  val,
  numbersOnly = false,
  dis = false,
  maxlen = -1,
  override = {},
}) => {
  let defaultClasses =
    "border rounded-md text-black focus:text-red-500 field  h-[36px] disabled:bg-gray-100 text-base leading-[21px] "
  if (extraClasses !== " ") {
    defaultClasses += extraClasses
  }

  function changer(e) {
    console.log(e.target.value)
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

  function pressHandle(e) {
    handleKeyPress(e.target.value)
  }
  if (dis === true) {
    return (
      <input
        type={iType}
        id={Id}
        placeholder={holder}
        value={val}
        onChange={changer}
        onKeyPress={pressHandle}
        name={name}
        className={defaultClasses}
        disabled={dis}
        style={{ ...override }}
        onFocus={focusFunction}
        onBlur={blurFunction}
      />
    )
  } else {
    return (
      <input
        type={iType}
        id={Id}
        onKeyPress={pressHandle}
        placeholder={holder}
        value={val}
        onChange={changer}
        name={name}
        className={defaultClasses}
        style={{ ...override }}
        onFocus={focusFunction}
        onBlur={blurFunction}
      />
    )
  }
}

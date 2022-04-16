import React from "react"

export const Input = ({
  focusFunction = () => console.log("focused"),
  blurFunction = () => console.log("blured"),
  Id = " ",
  extraClasses = " ",
  holder = " ",
  iType = "text",
  change,
  val,
  dis = "false",
  override = {},
}) => {
  let defaultClasses =
    "border rounded-md text-black focus:text-red-500 field  h-[36px]"
  if (extraClasses !== " ") {
    defaultClasses += extraClasses
  }

  function changeHandle(e) {
    change(e.target.value)
  }
  if (dis === true) {
    return (
      <input
        type={iType}
        id={Id}
        placeholder={holder}
        value={val}
        onChange={changeHandle}
        className={defaultClasses}
        disabled
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
        placeholder={holder}
        value={val}
        onChange={changeHandle}
        className={defaultClasses}
        style={{ ...override }}
        onFocus={focusFunction}
        onBlur={blurFunction}
      />
    )
  }
}

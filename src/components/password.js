import React, { useState } from "react"

const Password = ({
  focusFunction = () => console.log("focused"),
  blurFunction = () => console.log("blured"),
  Id = " ",
  extraClasses = " ",
  holder = " ",
  change,
  val,
  name,
  dis = "false",
  override = {},
  fClasses = "",
}) => {
  const [show, setShow] = useState(false)

  let defaultClasses =
    "border rounded-md text-black focus:text-red-500 border-pink-primary focus-within:border-blue-400 h-[36px] w-full p-2"
  if (extraClasses !== " ") {
    defaultClasses += extraClasses
  }

  function changeHandle(e) {
    change(e.target.value)
  }

  return (
    <span className={`relative w-full ${fClasses}`}>
      <input
        type={show === true ? "text" : "password"}
        id={Id}
        placeholder={holder}
        value={val}
        onChange={changeHandle}
        name={name}
        className={defaultClasses}
        disabled={dis}
        style={{ ...override }}
        onFocus={focusFunction}
        onBlur={blurFunction}
      />
      <button
        className="flex items-center justify-center absolute right-3 bottom-0 top-0 w-4"
        type="button">
        <i
          onClick={() => setShow(!show)}
          className={`fa-solid text-sm fa-${
            show === true ? "eye" : "eye-slash"
          }`}></i>
      </button>
    </span>
  )
}

export default Password

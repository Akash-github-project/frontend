import React from "react"

const Button = ({
  text,
  exClasses = "",
  fClasses = "",
  click = () => {
    console.log("ran")
  },
  dis = false,
  disM = "",
}) => {
  if (dis === true) {
    return (
      <button
        className={` flex border-box h-9 rounded bg-pink-primary font-normal items-center p-[5px] relative active:bg-pink-800 disabled:bg-gray-separator ${exClasses} `}
        disabled={dis}
        onClick={() => click()}>
        <span
          className={`text-tertiary leading-[13px] text-center text-[13px] w-full ${fClasses}`}>
          {text}
        </span>
      </button>
    )
  } else {
    return (
      <button
        className={` flex border-box h-9 rounded bg-pink-primary font-normal items-center p-[5px] relative active:bg-pink-800 ${exClasses}`}
        onClick={() => click()}>
        <span
          className={`text-tertiary leading-[13px] text-center text-[13px] w-full ${fClasses}`}>
          {text}
        </span>
      </button>
    )
  }
}

export default Button

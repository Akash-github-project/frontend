import React from "react"
import ReactDatePicker from "react-datepicker"

const DateField = ({
  blurFunction = () => console.log("blured"),
  change = () => console.log("changed"),
  Id = " ",
  extraClasses = " ",
  currentDate = new Date(),
  name = "",
  holder = "Select Date",
}) => {
  let defaultClasses =
    "border rounded-md text-black focus:text-red-500 field  h-[36px] disabled:bg-gray-100 text-base leading-[21px] focus:text-pink-primary w-full"
  if (extraClasses !== " ") {
    defaultClasses += extraClasses
  }

  function changer(date) {
    console.log(date)
    change(date)
  }

  return (
    <ReactDatePicker
      previousYearButtonLabel="A"
      name={name}
      selected={currentDate}
      placeholderText={holder}
      value={currentDate}
      onChange={(date) => changer(date)}
      onBlur={blurFunction}
      dateFormat="dd/MM/yyyy"
      className={defaultClasses}
      id={Id}
      showYearDropdown
    />
  )
}

export default DateField

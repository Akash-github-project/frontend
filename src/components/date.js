import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Date = ({ change, name, id, blur, value }) => {
  return (
    <div className="border rounded-md text-black focus:text-red-500 field  h-[36px] disabled:bg-gray-100 text-base leading-[21px] ">
      <DatePicker
        id={id}
        dateFormat="dd/mm/yyyy"
        className="form-control h-[36px]"
        selected={value}
        name={name}
        onChange={(val) => change(val)}
        onBlur={blur}
      />
    </div>
  )
}

export default Date

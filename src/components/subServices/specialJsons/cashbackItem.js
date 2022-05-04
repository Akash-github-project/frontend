import React from "react"

const CashbackItem = ({ sNo, icon, name, date, value }) => {
  return (
    <div className="bg-white border border-pink-primary p-1 shadow-default rounded">
      <div className="text-center text-xs h-3 text-gray-primary">{sNo}</div>
      <div className="flex p-1">
        <span className="flex justify-center items-center p-1">
          <i className={`${icon} text-2xl`}></i>
        </span>
        <div className="flex flex-col flex-1 items-start px-1">
          <span>{name}</span>
        </div>
        <div className="px-1 roboto">₹ {value}</div>
      </div>
      <div className="flex justify-between">
        <span className="text-xs px-2 text-gray-primary ">{`${date}`}</span>
      </div>
    </div>
  )
}

export default CashbackItem
